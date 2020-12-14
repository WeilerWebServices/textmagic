Imports System.Text.RegularExpressions
Imports System.Collections.Generic

Namespace Model
	''' <summary>
	''' Resource class
	''' </summary>
	Public Enum ResourceClass
		Unknown
		Message
		BulkSession
		Session
		Schedule
		Template
		Contact
		ContactList
		CustomField
	End Enum

	Public Class LinkResult
		Inherits BaseModel
		Private m_href As String
		''' <summary>
		''' Link to a newly created/updated resource
		''' </summary>
		Public Property Href() As String
			Get
				Return m_href
			End Get
			Set
				m_href = value

				' Get linked resource class by returned href
				Dim relations As New Dictionary(Of String, ResourceClass)() From { _
					{"messages", ResourceClass.Message}, _
					{"bulks", ResourceClass.BulkSession}, _
					{"sessions", ResourceClass.Session}, _
					{"schedules", ResourceClass.Schedule}, _
					{"templates", ResourceClass.Template}, _
					{"contacts", ResourceClass.Contact}, _
					{"lists", ResourceClass.ContactList}, _
					{"customfields", ResourceClass.CustomField} _
				}

				Dim r As New Regex("(\w+)/(\d+)", RegexOptions.IgnoreCase)
				Dim m As Match = r.Match(value)
				If Not m.Success Then
					ResourceClass = ResourceClass.Unknown
				Else
					Dim key As String = m.Groups(1).Value
					Dim resourceClass__1 As ResourceClass = ResourceClass.Unknown

					If relations.ContainsKey(key) Then
						relations.TryGetValue(key, resourceClass__1)
					End If

					ResourceClass = resourceClass__1
				End If
			End Set
		End Property

		''' <summary>
		''' Created or updated resource ID
		''' </summary>
		Public Property Id() As Integer
			Get
				Return m_Id
			End Get
			Set
				m_Id = Value
			End Set
		End Property
		Private m_Id As Integer

		''' <summary>
		''' Resource class
		''' </summary>
		Public Property ResourceClass() As ResourceClass
			Get
				Return m_ResourceClass
			End Get
			Set
				m_ResourceClass = Value
			End Set
		End Property
		Private m_ResourceClass As ResourceClass
	End Class
End Namespace
