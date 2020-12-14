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
	''' Get a single contact.
	''' </summary>
	''' <param name="id">Contact ID</param>
	''' <returns></returns>
	Public Function GetContact(id As Integer) As Contact
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "contacts/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of Contact)(request)
	End Function

	''' <summary>
	''' Get all user contacts
	''' </summary>
	''' <returns></returns>
	Public Function GetContacts() As ContactsResult
		Return GetContacts(Nothing, Nothing)
	End Function

	''' <summary>
	''' Get all user contacts.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetContacts(page As System.Nullable(Of Integer)) As ContactsResult
		Return GetContacts(page, Nothing)
	End Function

	''' <summary>
	''' Get all user contacts.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetContacts(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As ContactsResult
		Return GetContacts(page, limit, Nothing)
	End Function

	''' <summary>
	''' Get all user contacts.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <param name="includeShared">Should shared contacts to be included</param>
	''' <returns></returns>
	Public Function GetContacts(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer), includeShared As System.Nullable(Of Boolean)) As ContactsResult
		Dim request = New RestRequest()
		request.Resource = "contacts"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If
		If includeShared.HasValue Then
			request.AddQueryParameter("shared", If(CBool(includeShared), "1", "0"))
		End If

		Return Execute(Of ContactsResult)(request)
	End Function

	''' <summary>
	''' Find user contacts by given parameters.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <param name="includeShared">Should shared contacts to be included</param>
	''' <param name="ids">Find contact by ID(s)</param>
	''' <param name="listId">Find contact by List ID</param>
	''' <param name="query">Find contact by specified search query</param>
	''' <returns></returns>
	Public Function SearchContacts(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer), includeShared As System.Nullable(Of Boolean), ids As Integer(), listId As System.Nullable(Of Integer), query As String) As ContactsResult
		Dim request = New RestRequest()
		request.Resource = "contacts/search"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If
		If ids IsNot Nothing AndAlso ids.Length > 0 Then
			request.AddQueryParameter("ids", String.Join(",", ids))
		End If
		If listId IsNot Nothing Then
			request.AddQueryParameter("listId", listId.ToString())
		End If
		If query <> String.Empty Then
			request.AddQueryParameter("query", query)
		End If

		Return Execute(Of ContactsResult)(request)
	End Function

	''' <summary>
	''' Create a new contact from the submitted data.
	''' </summary>
	''' <param name="phone">Contact phone number in E.164 format</param>
	''' <param name="listIds">Array of List IDs this contact will be assigned to</param>
	''' <param name="firstName">First name</param>
	''' <param name="lastName">Last name</param>
	''' <returns></returns>
	Public Function CreateContact(phone As String, listIds As Integer(), firstName As String, lastName As String) As LinkResult
		Return CreateContact(phone, listIds, firstName, lastName, String.Empty, String.Empty)
	End Function

	''' <summary>
	''' Create a new contact from the submitted data.
	''' </summary>
	''' <param name="phone">Contact phone number in E.164 format</param>
	''' <param name="listIds">Array of List IDs this contact will be assigned to</param>
	''' <param name="firstName">(Optional) First name</param>
	''' <param name="lastName">(Optional) Last name</param>
	''' <param name="companyName">(Optional) Company name</param>
	''' <param name="email">(Optional) Email</param>
	''' <returns></returns>
	Public Function CreateContact(phone As String, listIds As Integer(), firstName As String, lastName As String, companyName As String, email As String) As LinkResult
		Dim request = New RestRequest(Method.POST)
		request.Resource = "contacts"
		request.AddParameter("phone", phone)
		request.AddParameter("lists", String.Join(",", listIds))
		request.AddParameter("firstName", firstName)
		request.AddParameter("lastName", lastName)
		request.AddParameter("companyName", companyName)
		request.AddParameter("email", email)

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Update existing contact.
	''' </summary>
	''' TODO: Remove that unneeded param listIds
	''' <param name="contact">Contact object</param>
	''' <param name="listIds">List IDs</param>
	''' <returns></returns>
	Public Function UpdateContact(contact As Contact, listIds As Integer()) As LinkResult
		Dim request = New RestRequest(Method.PUT)
		request.Resource = "contacts/{id}"
		request.AddUrlSegment("id", contact.Id.ToString())
		request.AddParameter("phone", contact.Phone)
		request.AddParameter("lists", String.Join(",", listIds))
		request.AddParameter("firstName", contact.FirstName)
		request.AddParameter("lastName", contact.LastName)
		request.AddParameter("companyName", contact.CompanyName)
		request.AddParameter("email", contact.Email)

		Dim result = Execute(Of LinkResult)(request)

		If contact.CustomFields IsNot Nothing Then
            For Each customField As CustomField In contact.CustomFields
                SetCustomFieldValue(customField.Id, contact.Id, customField.Value)
            Next
		End If

		Return result
	End Function

	''' <summary>
	''' Delete a single contact.
	''' </summary>
	''' <param name="id">Contact ID</param>
	''' <returns></returns>
	Public Function DeleteContact(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "contacts/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete a single contact.
	''' </summary>
	''' <param name="contact">Contact object</param>
	''' <returns></returns>
	Public Function DeleteContact(contact As Contact) As DeleteResult
		Return DeleteContact(contact.Id)
	End Function

	''' <summary>
	''' Get all contact unsubscribed from your communication.
	''' </summary>
	''' <returns></returns>
	Public Function GetUnsubscribedContacts() As UnsubscribedContactsResult
		Return GetUnsubscribedContacts(Nothing)
	End Function

	''' <summary>
	''' Get all contact unsubscribed from your communication.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetUnsubscribedContacts(page As System.Nullable(Of Integer)) As UnsubscribedContactsResult
		Return GetUnsubscribedContacts(page, Nothing)
	End Function

	''' <summary>
	''' Get all contact unsubscribed from your communication.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetUnsubscribedContacts(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As UnsubscribedContactsResult
		Dim request = New RestRequest()
		request.Resource = "unsubscribers"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of UnsubscribedContactsResult)(request)
	End Function

	''' <summary>
	''' Get a single unsubscribed contact.
	''' </summary>
	''' <param name="id">Unsubscribed contact ID</param>
	''' <returns></returns>
	Public Function GetUnsubscribedContact(id As Integer) As UnsubscribedContact
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "unsubscribers/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of UnsubscribedContact)(request)
	End Function

	''' <summary>
	''' Unsubscribe contact from your communication.
	''' </summary>
	''' <param name="phone">Contact phone number (may not be in your contact list)</param>
	''' <returns></returns>
	Public Function UnsubscribeContact(phone As String) As LinkResult
		Dim request = New RestRequest(Method.POST)
		request.Resource = "unsubscribers"
		request.AddParameter("phone", phone)

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Unsubscribe contact from your communication.
	''' </summary>
	''' <param name="phone">Contact object</param>
	''' <returns></returns>
	Public Function UnsubscribeContact(contact As Contact) As LinkResult
		Dim request = New RestRequest(Method.POST)
		request.Resource = "unsubscribers"
		request.AddParameter("phone", contact.Phone)

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Get all available contact custom fields.
	''' </summary>
	''' <returns></returns>
	Public Function GetCustomFields() As CustomFieldsResult
		Return GetCustomFields(Nothing)
	End Function

	''' <summary>
	''' Get all available contact custom fields.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetCustomFields(page As System.Nullable(Of Integer)) As CustomFieldsResult
		Return GetCustomFields(page, Nothing)
	End Function

	''' <summary>
	''' Get all available contact custom fields.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetCustomFields(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As CustomFieldsResult
		Dim request = New RestRequest()
		request.Resource = "customfields"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of CustomFieldsResult)(request)
	End Function

	''' <summary>
	''' Get a single custom field.
	''' </summary>
	''' <param name="id"></param>
	''' <returns></returns>
	Public Function GetCustomField(id As Integer) As CustomField
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "customfields/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of CustomField)(request)
	End Function

	''' <summary>
	''' Create a new custom field.
	''' </summary>
	''' <param name="name">Custom field name</param>
	''' <returns></returns>
	Public Function CreateCustomField(name As String) As LinkResult
		Dim request = New RestRequest(Method.POST)
		request.Resource = "customfields"
		request.AddParameter("fieldName", name)

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Update existing custom field.
	''' </summary>
	''' <param name="customField"></param>
	''' <returns></returns>
	Public Function UpdateCustomField(customField As CustomField) As LinkResult
		Dim request = New RestRequest(Method.PUT)
		request.Resource = "customfields/{id}"
		request.AddUrlSegment("id", customField.Id.ToString())
		request.AddParameter("fieldName", customField.Name)

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Delete a single custom field.
	''' </summary>
	''' <param name="id">Custom field ID</param>
	''' <returns></returns>
	Public Function DeleteCustomField(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "customfields/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete a single custom field.
	''' </summary>
	''' <param name="id">Custom field ID</param>
	''' <returns></returns>
	Public Function DeleteCustomField(customField As CustomField) As DeleteResult
		Return DeleteCustomField(customField.Id)
	End Function

	''' <summary>
	''' Set contact's custom field value.
	''' </summary>
	''' <param name="id"></param>
	''' <param name="contactId"></param>
	''' <param name="value"></param>
	''' <returns></returns>
	Public Function SetCustomFieldValue(id As Integer, contactId As Integer, value As String) As Contact
		Dim request = New RestRequest(Method.PUT)
		request.Resource = "customfields/{id}/update"
		request.AddUrlSegment("id", id.ToString())
		request.AddParameter("contactId", contactId.ToString())
		request.AddParameter("value", value)

		Return Execute(Of Contact)(request)
	End Function
End Class
