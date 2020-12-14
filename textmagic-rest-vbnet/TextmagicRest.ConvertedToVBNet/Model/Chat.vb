Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' Chat class
	''' </summary>
	Public Class Chat
		Inherits BaseModel
		''' <summary>
		''' Chat ID
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
		''' Recipient phone number
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
		''' Recipient Contact object
		''' </summary>
		Public Property Contact() As Contact
			Get
				Return m_Contact
			End Get
			Set
				m_Contact = Value
			End Set
		End Property
		Private m_Contact As Contact

		''' <summary>
		''' Unread messages count
		''' </summary>
		Public Property Unread() As Integer
			Get
				Return m_Unread
			End Get
			Set
				m_Unread = Value
			End Set
		End Property
		Private m_Unread As Integer

		''' <summary>
		''' Time when last incoming message has been arrived
		''' </summary>
		Public Property UpdatedAt() As System.Nullable(Of DateTime)
			Get
				Return m_UpdatedAt
			End Get
			Set
				m_UpdatedAt = Value
			End Set
		End Property
		Private m_UpdatedAt As System.Nullable(Of DateTime)
	End Class
End Namespace
