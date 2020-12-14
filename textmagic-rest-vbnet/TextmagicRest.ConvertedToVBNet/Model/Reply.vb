Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' Inbound message class
	''' </summary>
	Public Class Reply
		Inherits BaseModel
		''' <summary>
		''' Inbound message ID
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
		''' Message sender
		''' </summary>
		Public Property Sender() As String
			Get
				Return m_Sender
			End Get
			Set
				m_Sender = Value
			End Set
		End Property
		Private m_Sender As String

		''' <summary>
		''' Message receiver
		''' </summary>
		Public Property Receiver() As String
			Get
				Return m_Receiver
			End Get
			Set
				m_Receiver = Value
			End Set
		End Property
		Private m_Receiver As String

		''' <summary>
		''' Message receiving time
		''' </summary>
		Public Property MessageTime() As System.Nullable(Of DateTime)
			Get
				Return m_MessageTime
			End Get
			Set
				m_MessageTime = Value
			End Set
		End Property
		Private m_MessageTime As System.Nullable(Of DateTime)

		''' <summary>
		''' Inbound message text
		''' </summary>
		Public Property Text() As String
			Get
				Return m_Text
			End Get
			Set
				m_Text = Value
			End Set
		End Property
		Private m_Text As String
	End Class
End Namespace
