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
	''' Get a single list.
	''' </summary>
	''' <param name="id">List ID</param>
	''' <returns></returns>
	Public Function GetList(id As Integer) As ContactList
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "lists/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of ContactList)(request)
	End Function

	''' <summary>
	''' Get all user lists.
	''' </summary>
	''' <returns></returns>
	Public Function GetLists() As ContactListsResult
		Return GetLists(Nothing)
	End Function

	''' <summary>
	''' Get all user lists.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetLists(page As System.Nullable(Of Integer)) As ContactListsResult
		Return GetLists(page, Nothing)
	End Function

	''' <summary>
	''' Get all user lists.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetLists(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As ContactListsResult
		Dim request = New RestRequest()
		request.Resource = "lists"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of ContactListsResult)(request)
	End Function

	''' <summary>
	''' Find contact lists by given parameters.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <param name="ids">Find lists by ID(s)</param>
	''' <param name="query">Find lists by specified search query</param>
	''' <returns></returns>
	Public Function SearchLists(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer), ids As Integer(), query As String) As ContactListsResult
		Dim request = New RestRequest()
		request.Resource = "lists/search"
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

		Return Execute(Of ContactListsResult)(request)
	End Function

	''' <summary>
	''' Create a new list from the submitted data.
	''' </summary>
	''' <param name="name">List name</param>
	''' <returns></returns>
	Public Function CreateList(name As String) As LinkResult
		Return CreateList(name, String.Empty, Nothing)
	End Function

	''' <summary>
	''' Create a new list from the submitted data.
	''' </summary>
	''' <param name="name">List name</param>
	''' <param name="description">(Optional) List description</param>
	''' <param name="shared">(Optional) Should this list be shared with sub-accounts</param>
	''' <returns></returns>
	Public Function CreateList(name As String, description As String, [shared] As System.Nullable(Of Boolean)) As LinkResult
		Dim request = New RestRequest(Method.POST)
		request.Resource = "lists"
		request.AddParameter("name", name)
		request.AddParameter("description", description)
		If [shared].HasValue Then
			request.AddParameter("shared", If(CBool([shared]), "1", "0"))
		End If

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Update existing list.
	''' </summary>
	''' <param name="list">ContactList object</param>
	''' <returns></returns>
	Public Function UpdateList(list As ContactList) As LinkResult
		Dim request = New RestRequest(Method.PUT)
		request.Resource = "lists/{id}"
		request.AddUrlSegment("id", list.Id.ToString())
		request.AddParameter("name", list.Name)
		request.AddParameter("description", list.Description)
		request.AddParameter("shared", If(list.[Shared], "1", "0"))

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Delete a single list.
	''' </summary>
	''' <param name="id">List ID</param>
	''' <returns></returns>
	Public Function DeleteList(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "lists/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete a single list.
	''' </summary>
	''' <param name="id">List ID</param>
	''' <returns></returns>
	Public Function DeleteList(list As ContactList) As DeleteResult
		Return DeleteList(list.Id)
	End Function

	''' <summary>
	''' Fetch user contacts by given list id.
	''' </summary>
	''' <param name="list">ContactList object</param>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetListContacts(list As ContactList, page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As ContactsResult
		Return GetListContacts(list.Id, page, limit)
	End Function

	''' <summary>
	''' Fetch user contacts by given list id.
	''' </summary>
	''' <param name="id">List ID</param>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetListContacts(id As Integer, page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As ContactsResult
		Dim request = New RestRequest()
		request.Resource = "lists/{id}/contacts"
		request.AddUrlSegment("id", id.ToString())
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of ContactsResult)(request)
	End Function

	''' <summary>
	''' Assign contacts to the specified list.
	''' </summary>
	''' <param name="id">List ID</param>
	''' <param name="contactIds">Contact IDs</param>
	''' <returns></returns>
	Public Function AddContactsToList(id As Integer, contactIds As Integer()) As LinkResult
		Dim request = New RestRequest(Method.PUT)
		request.Resource = "lists/{id}/contacts"
		request.AddUrlSegment("id", id.ToString())
		If contactIds IsNot Nothing AndAlso contactIds.Length > 0 Then
			request.AddQueryParameter("contacts", String.Join(",", contactIds))
		End If

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Assign contacts to the specified list.
	''' </summary>
	''' <param name="list">ContactList object</param>
	''' <param name="contacts">Contacts</param>
	''' <returns></returns>
	Public Function AddContactsToList(list As ContactList, contacts As List(Of Contact)) As LinkResult
		Dim contactIds As New List(Of Integer)()
        For Each contact As Contact In contacts
            contactIds.Add(contact.Id)
        Next

		Return AddContactsToList(list.Id, contactIds.ToArray())
	End Function

	''' <summary>
	''' Unassign contacts from the specified list.
	''' </summary>
	''' <param name="id">List ID</param>
	''' <param name="contactIds">Contact IDs</param>
	''' <returns></returns>
	Public Function DeleteContactsFromList(id As Integer, contactIds As Integer()) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "lists/{id}/contacts"
		request.AddUrlSegment("id", id.ToString())
		If contactIds IsNot Nothing AndAlso contactIds.Length > 0 Then
			request.AddQueryParameter("contacts", String.Join(",", contactIds))
		End If

		Return Execute(Of DeleteResult)(request)

	End Function

	''' <summary>
	''' Unassign contacts from the specified list.
	''' </summary>
	''' <param name="list">ContactList object</param>
	''' <param name="contacts">Contacts</param>
	''' <returns></returns>
	Public Function DeleteContactsFromList(list As ContactList, contacts As List(Of Contact)) As DeleteResult
		Dim contactIds As New List(Of Integer)()
        For Each contact As Contact In contacts
            contactIds.Add(contact.Id)
        Next

		Return DeleteContactsFromList(list.Id, contactIds.ToArray())
	End Function
End Class
