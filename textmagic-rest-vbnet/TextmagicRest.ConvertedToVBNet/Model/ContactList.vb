Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' TextMagic contact list class
	''' </summary>
	Public Class ContactList
		Inherits BaseModel
		''' <summary>
		''' List ID
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
		''' List name
		''' </summary>
		Public Property Name() As String
			Get
				Return m_Name
			End Get
			Set
				m_Name = Value
			End Set
		End Property
		Private m_Name As String

		''' <summary>
		''' List description
		''' </summary>
		Public Property Description() As String
			Get
				Return m_Description
			End Get
			Set
				m_Description = Value
			End Set
		End Property
		Private m_Description As String

		''' <summary>
		''' List members count
		''' </summary>
		Public Property MembersCount() As Integer
			Get
				Return m_MembersCount
			End Get
			Set
				m_MembersCount = Value
			End Set
		End Property
		Private m_MembersCount As Integer

		''' <summary>
		''' Is contact list shared
		''' </summary>
		Public Property [Shared]() As Boolean
			Get
				Return m_Shared
			End Get
			Set
				m_Shared = Value
			End Set
		End Property
		Private m_Shared As Boolean
	End Class
End Namespace
