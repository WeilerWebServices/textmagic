Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp
Imports RestSharp.Authenticators
Imports RestSharp.Deserializers
Imports TextmagicRest.Model
Imports RestSharp.Validation

Public Partial Class Client
	''' <summary>
	''' Get all available sender settings which could be used in "from" parameter of POST messages method.
	''' </summary>
	''' <returns></returns>
	Public Function GetAvailableSendingSources() As SourcesResult
		Return GetAvailableSendingSources(Nothing)
	End Function

	''' <summary>
	''' Get all available sender settings which could be used in "from" parameter of POST messages method.
	''' </summary>
	''' <param name="country">2-letter ISO Country ID</param>
	''' <returns></returns>
	Public Function GetAvailableSendingSources(country As String) As SourcesResult
		Dim request = New RestRequest()
		request.Resource = "sources"
		If Not [String].IsNullOrEmpty(country) Then
			request.AddQueryParameter("country", country)
		End If

		Return Execute(Of SourcesResult)(request)
	End Function

	''' <summary>
	''' Get all user Sender IDs.
	''' </summary>
	''' <returns></returns>
	Public Function GetSenderIds() As SenderIdsResult
		Return GetSenderIds(Nothing)
	End Function

	''' <summary>
	''' Get all user Sender IDs.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetSenderIds(page As System.Nullable(Of Integer)) As SenderIdsResult
		Return GetSenderIds(page, Nothing)
	End Function

	''' <summary>
	''' Get all user Sender IDs.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetSenderIds(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As SenderIdsResult
		Dim request = New RestRequest()
		request.Resource = "senderids"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of SenderIdsResult)(request)
	End Function

	''' <summary>
	''' Get a single Sender ID.
	''' </summary>
	''' <param name="id">Sender ID numeric ID</param>
	''' <returns></returns>
	Public Function GetSenderId(id As Integer) As SenderId
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "senderids/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of SenderId)(request)
	End Function

	''' <summary>
	''' Delete a single Sender ID.
	''' </summary>
	''' <param name="id">Sender ID numeric ID</param>
	''' <returns></returns>
	Public Function DeleteSenderId(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "senderids/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete a single Sender ID.
	''' </summary>
	''' <param name="senderId">SenderID object</param>
	''' <returns></returns>
	Public Function DeleteSenderId(senderId As SenderId) As DeleteResult
		Return DeleteSenderId(senderId.Id)
	End Function

	''' <summary>
	''' Apply for a new Sender ID.
	''' </summary>
	''' <param name="senderId">Alphanumeric Sender ID (maximum 11 characters)</param>
	''' <param name="explanation">Explain why do you need this Sender ID</param>
	''' <returns></returns>
	Public Function CreateSenderId(senderId As String, explanation As String) As LinkResult
		Dim request = New RestRequest(Method.POST)
		request.Resource = "senderids"
		request.AddParameter("senderId", senderId)
		request.AddParameter("explanation", explanation)

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Find available dedicated numbers to buy.
	''' </summary>
	''' <param name="country">Dedicated number country</param>
	''' <param name="prefix">Desired number prefix. Should include country code (i.e. 447 for GB)</param>
	''' <returns></returns>
	Public Function FindAvailableDedicatedNumbers(country As String, prefix As String) As AvailableNumbersResult
		Dim request = New RestRequest()
		request.Resource = "numbers/available"

		request.AddQueryParameter("country", country)
		If Not String.IsNullOrEmpty(prefix) Then
			request.AddQueryParameter("prefix", prefix)
		End If

		Return Execute(Of AvailableNumbersResult)(request)
	End Function

	''' <summary>
	''' Get a single dedicated number.
	''' </summary>
	''' <param name="id">Dedicated number ID</param>
	''' <returns></returns>
	Public Function GetDedicatedNumber(id As Integer) As DedicatedNumber
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "numbers/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DedicatedNumber)(request)
	End Function

	''' <summary>
	''' Get all dedicated numbers.
	''' </summary>
	''' <returns></returns>
	Public Function GetDedicatedNumbers() As DedicatedNumbersResult
		Return GetDedicatedNumbers(Nothing)
	End Function

	''' <summary>
	''' Get all dedicated numbers.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetDedicatedNumbers(page As System.Nullable(Of Integer)) As DedicatedNumbersResult
		Return GetDedicatedNumbers(page, Nothing)
	End Function

	''' <summary>
	''' Get all dedicated numbers.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetDedicatedNumbers(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As DedicatedNumbersResult
		Dim request = New RestRequest()
		request.Resource = "numbers"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of DedicatedNumbersResult)(request)
	End Function

	''' <summary>
	''' Cancel dedicated number subscription.
	''' </summary>
	''' <param name="id">Dedicated number ID</param>
	''' <returns></returns>
	Public Function CancelDedicatedNumber(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "numbers/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Cancel dedicated number subscription.
	''' </summary>
	''' <param name="senderId">DedicatedNumber object</param>
	''' <returns></returns>
	Public Function CancelDedicatedNumber(number As DedicatedNumber) As DeleteResult
		Return CancelDedicatedNumber(number.Id)
	End Function

	''' <summary>
	''' Buy a dedicated number and assign it to the specified account.
	''' </summary>
	''' <param name="phone">Desired dedicated phone number in international E.164 format</param>
	''' <param name="country">Dedicated number country</param>
	''' <param name="userId">Number assignee</param>
	''' <returns></returns>
	Public Function BuyDedicatedNumber(phone As String, country As String, userId As String) As LinkResult
		Dim request = New RestRequest(Method.POST)
		request.Resource = "numbers"
		request.AddParameter("phone", phone)
		request.AddParameter("country", country)
		request.AddParameter("userId", userId)

		Return Execute(Of LinkResult)(request)
	End Function
End Class
