Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' Unsubscribed contact class. Note that it isn't ordinary Contact; i.e. ID of Contact and UsubscribedContact
	''' (if you unsubscribe it) WOULD NOT equal
	''' </summary>
	Public Class UnsubscribedContact
		Inherits BaseModel
		''' <summary>
		''' Unsubscribed contact ID
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
		''' Unsubscribed contact phone number
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
		''' Unsubscribed contact first name
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
		''' Unsubscribed contact last name
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
		''' Time when contact unsubscribed from your lists
		''' </summary>
		<DeserializeAs(Name := "unsubscribe_time")> _
		Public Property UnsubscribedAt() As System.Nullable(Of DateTime)
			Get
				Return m_UnsubscribedAt
			End Get
			Set
				m_UnsubscribedAt = Value
			End Set
		End Property
		Private m_UnsubscribedAt As System.Nullable(Of DateTime)
	End Class
End Namespace
