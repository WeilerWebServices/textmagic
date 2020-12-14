Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' TextMagic contact class
	''' </summary>
	Public Class Contact
		Inherits BaseModel
		''' <summary>
		''' Contact ID
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
		''' Contact first name
		''' </summary>
		Public Property FirstName() As String
			Get
				Return m_FirstName
			End Get
			Set
				m_FirstName = Value
			End Set
		End Property
		Private m_FirstName As String

		''' <summary>
		''' Contact last name
		''' </summary>
		Public Property LastName() As String
			Get
				Return m_LastName
			End Get
			Set
				m_LastName = Value
			End Set
		End Property
		Private m_LastName As String

		''' <summary>
		''' Contact company name
		''' </summary>
		Public Property CompanyName() As String
			Get
				Return m_CompanyName
			End Get
			Set
				m_CompanyName = Value
			End Set
		End Property
		Private m_CompanyName As String

		''' <summary>
		''' Contact phone number
		''' </summary>
		Public Property Phone() As String
			Get
				Return m_Phone
			End Get
			Set
				m_Phone = Value
			End Set
		End Property
		Private m_Phone As String

		''' <summary>
		''' Contact country
		''' </summary>
		Public Property Country() As Country
			Get
				Return m_Country
			End Get
			Set
				m_Country = Value
			End Set
		End Property
		Private m_Country As Country

		''' <summary>
		''' Contact email
		''' </summary>
		Public Property Email() As String
			Get
				Return m_Email
			End Get
			Set
				m_Email = Value
			End Set
		End Property
		Private m_Email As String

		''' <summary>
		''' Contact custom fields
		''' </summary>
		Public Property CustomFields() As List(Of CustomField)
			Get
				Return m_CustomFields
			End Get
			Set
				m_CustomFields = Value
			End Set
		End Property
		Private m_CustomFields As List(Of CustomField)
	End Class
End Namespace
