Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp
Imports RestSharp.Authenticators
Imports RestSharp.Deserializers
Imports TextmagicRest.Model
Imports RestSharp.Validation
Imports System.Text.RegularExpressions

Public Partial Class Client
	''' <summary>
	''' 
	''' </summary>
	''' <param name="id"></param>
	''' <returns></returns>
	Public Function GetMessage(id As Integer) As Message
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "messages/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of Message)(request)
	End Function

	''' <summary>
	''' Get all user oubound messages.
	''' </summary>
	''' <returns></returns>
	Public Function GetMessages() As MessagesResult
		Return GetMessages(Nothing)
	End Function

	''' <summary>
	''' Get all user oubound messages.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetMessages(page As System.Nullable(Of Integer)) As MessagesResult
		Return GetMessages(page, Nothing)
	End Function

	''' <summary>
	''' Get all user oubound messages.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetMessages(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As MessagesResult
		Dim request = New RestRequest()
		request.Resource = "messages"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of MessagesResult)(request)
	End Function

	''' <summary>
	''' Find oubound messages by given parameters.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <param name="ids">Find message by ID(s)</param>
	''' <param name="sessionId">Find messages by session ID</param>
	''' <param name="query">Find messages by specified search query</param>
	''' <returns></returns>
	Public Function SearchMessages(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer), ids As Integer(), sessionId As System.Nullable(Of Integer), query As String) As MessagesResult
		Dim request = New RestRequest()
		request.Resource = "messages/search"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If
		If sessionId.HasValue Then
			request.AddQueryParameter("sessionId", limit.ToString())
		End If
		If ids IsNot Nothing AndAlso ids.Length > 0 Then
			request.AddQueryParameter("ids", String.Join(",", ids))
		End If
		If query <> String.Empty Then
			request.AddQueryParameter("query", query)
		End If

		Return Execute(Of MessagesResult)(request)
	End Function

	''' <summary>
	''' Delete a single message.
	''' </summary>
	''' <param name="id"></param>
	''' <returns></returns>
	Public Function DeleteMessage(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "messages/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete a single message.
	''' </summary>
	''' <param name="message"></param>
	''' <returns></returns>
	Public Function DeleteMessage(message As Message) As DeleteResult
		Return DeleteMessage(message.Id)
	End Function

	''' <summary>
	''' Send a new outbound message.
	''' </summary>
	''' <param name="options">Message sending options</param>
	''' <returns></returns>
	Public Function SendMessage(options As SendingOptions) As SendingResult
		Dim request = New RestRequest(Method.POST)
		request = _makeSendingRequest(request, options)

		Return Execute(Of SendingResult)(request)
	End Function

	''' <summary>
	''' Convert SendingOptions to RestRequest parameters
	''' </summary>
	''' <param name="request"></param>
	''' <param name="options"></param>
	''' <returns></returns>
	Protected Function _makeSendingRequest(request As RestRequest, options As SendingOptions) As RestRequest
		request.Resource = "messages"
		If Not String.IsNullOrEmpty(options.Text) Then
			request.AddParameter("text", options.Text)
		End If
		If options.Phones IsNot Nothing AndAlso options.Phones.Length > 0 Then
			request.AddParameter("phones", String.Join(",", options.Phones))
		End If
		If options.ContactIds IsNot Nothing AndAlso options.ContactIds.Length > 0 Then
			request.AddParameter("contacts", String.Join(",", options.ContactIds))
		End If
		If options.ListIds IsNot Nothing AndAlso options.ListIds.Length > 0 Then
			request.AddParameter("lists", String.Join(",", options.ListIds))
		End If
		If options.CutExtra.HasValue Then
			request.AddParameter("cutExtra", If(CBool(options.CutExtra), "1", "0"))
		End If
		If options.PartsCount.HasValue Then
			request.AddParameter("partsCount", options.PartsCount.ToString())
		End If
		If Not String.IsNullOrEmpty(options.ReferenceId) Then
			request.AddParameter("referenceId", options.ReferenceId)
		End If
		If Not String.IsNullOrEmpty(options.From) Then
			request.AddParameter("from", options.From)
		End If
		If Not String.IsNullOrEmpty(options.Rrule) Then
			request.AddParameter("rrule", options.Rrule)
		End If
		If options.SendingTime.HasValue Then
			request.AddParameter("sendingTime", DateTimeToTimestamp(CType(options.SendingTime, DateTime)).ToString())
		End If
		If options.TemplateId.HasValue Then
			request.AddParameter("templateId", options.TemplateId.ToString())
		End If

		Return request
	End Function

	''' <summary>
	''' Send a new outbound message.
	''' </summary>
	''' <param name="text">Message text</param>
	''' <param name="phones">Array of phone number in international E.164 format message will be sent to</param>
	''' <returns></returns>
	Public Function SendMessage(text As String, phones As String()) As SendingResult
        Dim options = New SendingOptions() With { _
            .Text = text, _
            .Phones = phones _
        }

		Return SendMessage(options)
	End Function

	''' <summary>
	''' Send a new outbound message.
	''' </summary>
	''' <param name="text">Message text</param>
	''' <param name="phone">Destination phone number in international E.164 format</param>
	''' <returns></returns>
	Public Function SendMessage(text As String, phone As String) As SendingResult
		Dim phones As String() = {phone}
        Dim options = New SendingOptions() With { _
            .Text = text, _
            .Phones = phones _
        }

		Return SendMessage(options)
	End Function

	''' <summary>
	''' Get bulk message sending session status.
	''' </summary>
	''' <param name="id">Bulk session ID</param>
	''' <returns></returns>
	Public Function GetBulkSessionStatus(id As Integer) As BulkSession
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "bulks/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of BulkSession)(request)
	End Function

	''' <summary>
	''' Get a message session.
	''' </summary>
	''' <param name="id">Session ID</param>
	''' <returns></returns>
	Public Function GetSession(id As Integer) As Session
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "sessions/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of Session)(request)
	End Function

	''' <summary>
	''' Fetch messages by given session id.
	''' </summary>
	''' <param name="id">Session ID</param>
	''' <returns></returns>
	Public Function GetSessionMessages(id As Integer, page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As MessagesResult
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "sessions/{id}/messages"
		request.AddUrlSegment("id", id.ToString())
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of MessagesResult)(request)
	End Function

	''' <summary>
	''' Delete a message session, together with all nested messages.
	''' </summary>
	''' <param name="id">Session ID</param>
	''' <returns></returns>
	Public Function DeleteSession(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "sessions/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete a message session, together with all nested messages.
	''' </summary>
	''' <param name="session">Session object</param>
	''' <returns></returns>
	Public Function DeleteSession(session As Session) As DeleteResult
		Return DeleteSession(session.Id)
	End Function

	''' <summary>
	''' Get message schedule.
	''' </summary>
	''' <param name="id">Schedule ID</param>
	''' <returns></returns>
	Public Function GetSchedule(id As Integer) As Schedule
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "schedules/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of Schedule)(request)
	End Function

	''' <summary>
	''' Get all scheduled messages.
	''' </summary>
	''' <returns></returns>
	Public Function GetSchedules() As SchedulesResult
		Return GetSchedules(Nothing)
	End Function

	''' <summary>
	''' Get all scheduled messages.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetSchedules(page As System.Nullable(Of Integer)) As SchedulesResult
		Return GetSchedules(page, Nothing)
	End Function

	''' <summary>
	''' Get all scheduled messages.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetSchedules(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As SchedulesResult
		Dim request = New RestRequest()
		request.Resource = "schedules"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of SchedulesResult)(request)
	End Function

	''' <summary>
	''' Delete a message session, together with all nested messages.
	''' </summary>
	''' <param name="id">Schedule ID</param>
	''' <returns></returns>
	Public Function DeleteSchedule(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "schedules/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete a message session, together with all nested messages.
	''' </summary>
	''' <param name="schedule"></param>
	''' <returns></returns>
	Public Function DeleteSchedule(schedule As Schedule) As DeleteResult
		Return DeleteSchedule(schedule.Id)
	End Function

	''' <summary>
	''' Get a single inbound message.
	''' </summary>
	''' <param name="id">Inbound message ID</param>
	''' <returns></returns>
	Public Function GetReply(id As Integer) As Reply
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "replies/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of Reply)(request)
	End Function

	''' <summary>
	''' Get all inbound messages.
	''' </summary>
	''' <returns></returns>
	Public Function GetReplies() As RepliesResult
		Return GetReplies()
	End Function

	''' <summary>
	''' Get all inbound messages.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetReplies(page As System.Nullable(Of Integer)) As RepliesResult
		Return GetReplies(page, Nothing)
	End Function

	''' <summary>
	''' Get all inbound messages.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetReplies(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As RepliesResult
		Dim request = New RestRequest()
		request.Resource = "replies"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of RepliesResult)(request)
	End Function

	''' <summary>
	''' Delete the incoming message.
	''' </summary>
	''' <param name="id">Inbound message ID</param>
	''' <returns></returns>
	Public Function DeleteReply(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "replies/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete the incoming message.
	''' </summary>
	''' <param name="reply">Reply object</param>
	''' <returns></returns>
	Public Function DeleteReply(reply As Reply) As DeleteResult
		Return DeleteReply(reply.Id)
	End Function

	''' <summary>
	''' Find inbound messages by given parameters.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <param name="ids">Find message by ID(s)</param>
	''' <param name="query">Find messages by specified search query</param>
	''' <returns></returns>
	Public Function SearchReplies(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer), ids As Integer(), query As String) As RepliesResult
		Dim request = New RestRequest()
		request.Resource = "replies/search"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If
		If ids IsNot Nothing AndAlso ids.Length > 0 Then
			request.AddQueryParameter("ids", String.Join(",", ids))
		End If
		If query <> String.Empty Then
			request.AddQueryParameter("query", query)
		End If

		Return Execute(Of RepliesResult)(request)
	End Function

	''' <summary>
	''' Check pricing for outbound message(s).
	''' </summary>
	''' <param name="options"></param>
	''' <returns></returns>
	Public Function GetPrice(options As SendingOptions) As Pricing
		Dim request = New RestRequest(Method.POST)
		request = _makeSendingRequest(request, options)
		request.Method = Method.[GET]
		request.Resource = "messages/price"
		request.AddParameter("dummy", "1")

		Return Execute(Of Pricing)(request)
	End Function

	''' <summary>
	''' Get all user chats.
	''' </summary>
	''' <returns></returns>
	Public Function GetChats() As ChatsResult
		Return GetChats(Nothing)
	End Function

	''' <summary>
	''' Get all user chats.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetChats(page As System.Nullable(Of Integer)) As ChatsResult
		Return GetChats(page, Nothing)
	End Function

	''' <summary>
	''' Get all user chats.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetChats(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As ChatsResult
		Dim request = New RestRequest()
		request.Resource = "chats"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of ChatsResult)(request)
	End Function

	''' <summary>
	''' Fetch messages from chat with specified phone number.
	''' </summary>
	''' <param name="phone">Phone number</param>
	''' <returns></returns>
	Public Function GetChat(phone As String) As ChatMessagesResult
		Return GetChat(phone, Nothing)
	End Function

	''' <summary>
	''' Fetch messages from chat with specified phone number.
	''' </summary>
	''' <param name="phone">Phone number</param>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetChat(phone As String, page As System.Nullable(Of Integer)) As ChatMessagesResult
		Return GetChat(phone, page, Nothing)
	End Function

	''' <summary>
	''' Fetch messages from chat with specified phone number.
	''' </summary>
	''' <param name="phone">Phone number</param>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetChat(phone As String, page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As ChatMessagesResult
		Dim request = New RestRequest()
		request.Resource = "chats/{phone}"
		request.AddUrlSegment("phone", phone)
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of ChatMessagesResult)(request)
	End Function

	''' <summary>
	''' Get all bulk sending sessions.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetBulkSessions() As BulkSessionsResult
		Return GetBulkSessions(Nothing)
	End Function

	''' <summary>
	''' Get all bulk sending sessions.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetBulkSessions(page As System.Nullable(Of Integer)) As BulkSessionsResult
		Return GetBulkSessions(page, Nothing)
	End Function

	''' <summary>
	''' Get all bulk sending sessions.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetBulkSessions(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As BulkSessionsResult
		Dim request = New RestRequest()
		request.Resource = "bulks"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of BulkSessionsResult)(request)
	End Function

	''' <summary>
	''' Get all sending sessions.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetSessions() As SessionsResult
		Return GetSessions(Nothing)
	End Function

	''' <summary>
	''' Get all sending sessions.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetSessions(page As System.Nullable(Of Integer)) As SessionsResult
		Return GetSessions(page, Nothing)
	End Function

	''' <summary>
	''' Get all sending sessions.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetSessions(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As SessionsResult
		Dim request = New RestRequest()
		request.Resource = "sessions"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of SessionsResult)(request)
	End Function


End Class
