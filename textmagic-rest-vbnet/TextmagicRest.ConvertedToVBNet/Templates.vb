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
	''' Get a single template.
	''' </summary>
	''' <param name="id">Template ID</param>
	''' <returns></returns>
	Public Function GetTemplate(id As Integer) As Template
		Require.Argument("id", id)

		Dim request = New RestRequest()
		request.Resource = "templates/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of Template)(request)
	End Function

	''' <summary>
	''' Get all user templates.
	''' </summary>
	''' <returns></returns>
	Public Function GetTemplates() As TemplatesResult
		Return GetTemplates(Nothing)
	End Function

	''' <summary>
	''' Get all user templates.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <returns></returns>
	Public Function GetTemplates(page As System.Nullable(Of Integer)) As TemplatesResult
		Return GetTemplates(page, Nothing)
	End Function

	''' <summary>
	''' Get all user templates.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <returns></returns>
	Public Function GetTemplates(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer)) As TemplatesResult
		Dim request = New RestRequest()
		request.Resource = "templates"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If

		Return Execute(Of TemplatesResult)(request)
	End Function

	''' <summary>
	''' Find user templates by given parameters.
	''' </summary>
	''' <param name="page">Fetch specified results page</param>
	''' <param name="limit">How many results to return</param>
	''' <param name="ids">Find template by ID</param>
	''' <param name="name">Find template by name</param>
	''' <param name="content">Find template by content</param>
	''' <returns></returns>
	Public Function SearchTemplates(page As System.Nullable(Of Integer), limit As System.Nullable(Of Integer), ids As Integer(), name As String, content As String) As TemplatesResult
		Dim request = New RestRequest()
		request.Resource = "templates/search"
		If page.HasValue Then
			request.AddQueryParameter("page", page.ToString())
		End If
		If limit.HasValue Then
			request.AddQueryParameter("limit", limit.ToString())
		End If
		If ids IsNot Nothing AndAlso ids.Length > 0 Then
			request.AddQueryParameter("ids", String.Join(",", ids))
		End If

		Return Execute(Of TemplatesResult)(request)
	End Function

	''' <summary>
	''' Delete a single template.
	''' </summary>
	''' <param name="id">Template ID</param>
	''' <returns></returns>
	Public Function DeleteTemplate(id As Integer) As DeleteResult
		Dim request = New RestRequest(Method.DELETE)
		request.Resource = "templates/{id}"
		request.AddUrlSegment("id", id.ToString())

		Return Execute(Of DeleteResult)(request)
	End Function

	''' <summary>
	''' Delete a single template.
	''' </summary>
	''' <param name="template">Template object</param>
	''' <returns></returns>
	Public Function DeleteTemplate(template As Template) As DeleteResult
		Return DeleteTemplate(template.Id)
	End Function

	''' <summary>
	''' Create a new template from the submitted data.
	''' </summary>
	''' <param name="name">Template name</param>
	''' <param name="content">Template text. May contain tags inside braces</param>
	''' <returns></returns>
	Public Function CreateTemplate(name As String, content As String) As LinkResult
		Dim request = New RestRequest(Method.POST)
		request.Resource = "templates"
		request.AddParameter("name", name)
		request.AddParameter("body", content)

		Return Execute(Of LinkResult)(request)
	End Function

	''' <summary>
	''' Update existing template.
	''' </summary>
	''' <param name="template">Template object</param>
	''' <returns></returns>
	Public Function UpdateTemplate(template As Template) As LinkResult
		Dim request = New RestRequest(Method.PUT)
		request.Resource = "templates/{id}"
		request.AddUrlSegment("id", template.Id.ToString())
		request.AddParameter("name", template.Name)
		request.AddParameter("body", template.Content)

		Return Execute(Of LinkResult)(request)
	End Function
End Class
