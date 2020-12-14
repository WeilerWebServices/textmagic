Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp
Imports RestSharp.Authenticators
Imports RestSharp.Deserializers
Imports TextmagicRest.Model
Imports RestSharp.Validation
Imports RestSharp.Extensions

Public Partial Class Client
	''' <summary>
	''' TextMagic account username
	''' </summary>
	Public Property Username() As String
		Get
			Return m_Username
		End Get
		Set
			m_Username = Value
		End Set
	End Property
	Private m_Username As String

	''' <summary>
	''' TextMagic REST API token (https://my.textmagic.com/online/api/rest-api/keys)
	''' </summary>
	Public Property Token() As String
		Get
			Return m_Token
		End Get
		Set
			m_Token = Value
		End Set
	End Property
	Private m_Token As String

	''' <summary>
	''' Connection User-Agent
	''' </summary>
	Public Property UserAgent() As String
		Get
			Return m_UserAgent
		End Get
		Private Set
			m_UserAgent = Value
		End Set
	End Property
	Private m_UserAgent As String

	''' <summary>
	''' TextMagic REST API base URL
	''' </summary>
	Public Property BaseUrl() As String
		Get
			Return m_BaseUrl
		End Get
		Private Set
			m_BaseUrl = Value
		End Set
	End Property
	Private m_BaseUrl As String

	''' <summary>
	''' HTTP client instance
	''' </summary>
	Protected _client As IRestClient

	''' <summary>
	''' Last request time (to not to exceed maximum 2 requests per second)
	''' </summary>
	Protected _lastExecuted As DateTime

	Private Const _defaultUserAgent As String = "textmagic-rest-csharp/{0} (.NET {1}; {2})"

	Protected Sub _init(username__1 As String, token__2 As String, baseUrl__3 As String, timeout As Integer)
		Username = username__1
		Token = token__2
		BaseUrl = baseUrl__3

		_client.BaseUrl = New Uri(baseUrl__3)
		_client.Timeout = timeout
		_client.AddDefaultHeader("Accept-Charset", "utf-8")
		_client.Authenticator = New TextmagicAuthenticator(Username, Token)
		Dim assemblyName As New System.Reflection.AssemblyName(System.Reflection.Assembly.GetExecutingAssembly().FullName)
		_client.UserAgent = [String].Format(_defaultUserAgent, assemblyName.Version, Environment.Version.ToString(), Environment.OSVersion.ToString())
	End Sub

	''' <summary>
	''' Initialize TextMagic REST client instance
	''' </summary>
	''' <param name="username">Account username</param>
	''' <param name="token">REST API access token (key)</param>
	''' <param name="baseUrl">API base URL</param>
	''' <param name="timeout">Request timeout</param>
	Public Sub New(username As String, token As String, baseUrl As String, timeout As Integer)
		_client = New RestClient()
		_init(username, token, baseUrl, timeout)
	End Sub

	''' <summary>
	''' Initialize TextMagic REST client instance with special instance of RestClient
	''' </summary>
	''' <param name="client">RestClient instance</param>
	Public Sub New(client__1 As IRestClient)
		_client = client__1
	End Sub

	''' <summary>
	''' Initialize TextMagic REST client instance with default baseUrl and timeout
	''' </summary>
	''' <param name="username">Account username</param>
	''' <param name="token">REST API access token (key)</param>
	Public Sub New(username As String, token As String)

		Me.New(username, token, "https://rest.textmagic.com/api/v2")
	End Sub

	''' <summary>
	''' Initialize TextMagic REST client instance with default timeout
	''' </summary>
	''' <param name="username"></param>
	''' <param name="token"></param>
	''' <param name="baseUrl"></param>
	Public Sub New(username As String, token As String, baseUrl As String)

		Me.New(username, token, baseUrl, 20000)
	End Sub

	''' <summary>
	''' Check last request execution time and make delay, if needed
	''' </summary>
	Protected Sub checkExecutionTime()
		Dim diff = DateTime.Now - _lastExecuted

		If diff.TotalMilliseconds < 500 Then
			System.Threading.Thread.Sleep(Convert.ToInt32(500 - diff.TotalMilliseconds))
		End If

		_lastExecuted = DateTime.Now
	End Sub

	''' <summary>
	''' Execute a manual REST request
	''' </summary>
	''' <typeparam name="T">The type of object to create and populate with the returned data.</typeparam>
	''' <param name="request">The RestRequest to execute (will use client credentials)</param>
	Public Overridable Function Execute(Of T As New)(request As IRestRequest) As T
		checkExecutionTime()
		request.OnBeforeDeserialization = Function(resp) 
		' if HTTP status code >= 400 - create and save ClientException
		If CInt(resp.StatusCode) >= 400 Then
			Dim clientException As String = "{{ ""ClientException"" : {0} }}"
			Dim content = resp.RawBytes.AsString()
			Dim newJson = String.Format(clientException, content)

			resp.Content = Nothing
			resp.RawBytes = Encoding.UTF8.GetBytes(newJson.ToString())
		End If

		' if HTTP status code is 201 No content, add null ClientException to be success
		If resp.StatusCode = System.Net.HttpStatusCode.NoContent Then
			resp.ContentType = "application/json"
			Dim clientException As String = "{{ ""ClientException"" : null }}"
			Dim content = resp.RawBytes.AsString()
			Dim newJson = String.Format(clientException, content)

			resp.Content = Nothing
			resp.RawBytes = Encoding.UTF8.GetBytes(newJson.ToString())
		End If

End Function

		Dim response = _client.Execute(Of T)(request)

		If response.ResponseStatus <> ResponseStatus.Completed Then
			Throw New ClientException("Network error: " & response.StatusDescription)
		End If

		'switch (response.StatusCode)
'            {
'                case System.Net.HttpStatusCode.Unauthorized:
'                    throw new ClientException("Invalid username and password supplied");
'                case System.Net.HttpStatusCode.BadGateway:
'                    throw new ClientException("Service is temporary unavailable");
'                // 429 Too many requests
'                case (System.Net.HttpStatusCode)429:                 
'                    throw new ClientException("Too many requests");
'
'            }


		If response.ErrorException IsNot Nothing Then
			Throw New ClientException("Invalid input: " & response.ErrorMessage, response.ErrorException)
		End If

		Return response.Data
	End Function

	''' <summary>
	''' Execute a manual REST request
	''' </summary>
	''' <param name="request">The RestRequest to execute (will use client credentials)</param>
	Public Overridable Function Execute(request As IRestRequest) As IRestResponse
		checkExecutionTime()
		Return _client.Execute(request)
	End Function

	''' <summary>
	''' Get current user info.
	''' </summary>
	''' <returns></returns>
	Public Function GetUser() As User
		Dim request = New RestRequest()
		request.Resource = "user"

		Return Execute(Of User)(request)
	End Function

	''' <summary>
	''' Update current user info.
	''' </summary>
	''' <param name="firstName">Account first name</param>
	''' <param name="lastName">Account last name</param>
	''' <param name="company">Account company</param>
	''' <returns></returns>
	Public Function UpdateUser(firstName As String, lastName As String, company As String) As LinkResult
		Require.Argument("firstName", firstName)
		Require.Argument("lastName", lastName)
		Require.Argument("company", company)

		Dim request = New RestRequest(Method.PUT)
		request.Resource = "user"
		request.AddParameter("firstName", firstName)
		request.AddParameter("lastName", lastName)
		request.AddParameter("company", company)

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Convert DateTime object to timestamp
	''' </summary>
	''' <param name="dateTime">DateTime object</param>
	''' <returns></returns>
	Public Shared Function DateTimeToTimestamp(dateTime As DateTime) As Integer
		Return Convert.ToInt32((dateTime - New DateTime(1970, 1, 1).ToLocalTime()).TotalSeconds)
	End Function

	''' <summary>
	''' Get all account invoices.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetInvoices() As InvoicesResult
		Return GetInvoices(Nothing)
	End Function

	''' <summary>
	''' Get all account invoices.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetInvoices(page As System.Nullable(Of Integer)) As InvoicesResult
		Return GetInvoices(page, Nothing)
	End Function

	''' <summary>
	''' Get all account invoices.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetInvoices(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As InvoicesResult
		Dim request = New RestRequest()
		request.Resource = "invoices"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of InvoicesResult)(request)
	End Function

	''' <summary>
	''' Return messaging statistics.
	''' </summary>
	''' <param name="groupBy">Group results by specified period: day, month, year or none. Default is none</param>
	''' <param name="start">(Optional) Start date in unix timestamp format. Default is 7 days ago</param>
	''' <param name="end">(Optional) End date in unix timestamp format. Default is now</param>
	''' <returns></returns>
	Public Function GetMessagingStats(groupBy As MessagingStatsGroupBy, start As DateTime, [end] As DateTime) As List(Of MessagingStats)
		Dim request = New RestRequest()
		request.Resource = "stats/messaging"

		Dim groupByString As String = "off"
		Select Case groupBy
			Case MessagingStatsGroupBy.Day
				groupByString = "day"
				Exit Select
			Case MessagingStatsGroupBy.Month
				groupByString = "month"
				Exit Select
			Case MessagingStatsGroupBy.Year
				groupByString = "year"
				Exit Select
		End Select
		request.AddQueryParameter("by", groupByString)
		request.AddQueryParameter("start", DateTimeToTimestamp(start).ToString())
		request.AddQueryParameter("end", DateTimeToTimestamp(start).ToString())

		Return Execute(Of List(Of MessagingStats))(request)
	End Function

	''' <summary>
	''' Return account spending statistics.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <param name="start">(Optional) Start date in unix timestamp format. Default is 7 days ago</param>
	''' <param name="end">(Optional) End date in unix timestamp format. Default is now</param>
	''' <returns></returns>
	Public Function GetSpendingStats(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer), start As DateTime, [end] As DateTime) As SpendingStatsResult
		Dim request = New RestRequest()
		request.Resource = "stats/spending"

		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If
		request.AddQueryParameter("start", DateTimeToTimestamp(start).ToString())
		request.AddQueryParameter("end", DateTimeToTimestamp(start).ToString())

		Return Execute(Of SpendingStatsResult)(request)
	End Function
End Class
