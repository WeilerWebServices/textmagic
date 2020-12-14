Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	Public Enum ChatMessageDirection
        Outgoing
        Incoming
	End Enum

	''' <summary>
	''' Chat message class
	''' </summary>
	Public Class ChatMessage
		Inherits BaseModel
		''' <summary>
		''' Message ID
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

		<DeserializeAs(Name := "direction")> _
		Public Property DirectionChar() As Char
			Get
				Return m_DirectionChar
			End Get
			Set
				m_DirectionChar = Value
			End Set
		End Property
		Private m_DirectionChar As Char
		''' <summary>
		''' Message direction
		''' </summary>
		<DeserializeAs(Name := "fake-unused-name")> _
		Public Property Direction() As ChatMessageDirection
			Get
                Select Case DirectionChar
                    Case "i"c
                        Return ChatMessageDirection.Incoming
                    Case "o"c
                        Return ChatMessageDirection.Outgoing
                End Select
                Return Nothing
			End Get
			Set
				DirectionChar = value.ToString()(0)
			End Set
		End Property

		''' <summary>
		''' Message text
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

		''' <summary>
		''' Message sender phone number or sender ID
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
		''' Message receiver phone number
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

		<DeserializeAs(Name := "status")> _
		Public Property StatusChar() As Char
			Get
				Return m_StatusChar
			End Get
			Set
				m_StatusChar = Value
			End Set
		End Property
		Private m_StatusChar As Char
		''' <summary>
		''' Message delivery status
		''' </summary>
		<DeserializeAs(Name := "fake-unused-name")> _
		Public Property Status() As DeliveryStatus
			Get
                Select Case StatusChar
                    Case "q"c
                        Return DeliveryStatus.Queued
                    Case "r"c
                        Return DeliveryStatus.Enrouted
                    Case "a"c
                        Return DeliveryStatus.Acked
                    Case "f"c
                        Return DeliveryStatus.Failed
                    Case "d"c
                        Return DeliveryStatus.Delivered
                    Case "j"c
                        Return DeliveryStatus.Rejected
                    Case "s"c
                        Return DeliveryStatus.Scheduled
                    Case Else
                        Return DeliveryStatus.Unknown
                End Select
			End Get
			Set
				StatusChar = value.ToString()(0)
			End Set
		End Property

		''' <summary>
		''' Message sending time
		''' </summary>
		Public Property MessageTime() As DateTime
			Get
				Return m_MessageTime
			End Get
			Set
				m_MessageTime = Value
			End Set
		End Property
		Private m_MessageTime As DateTime

		''' <summary>
		''' Recipient first name (if given by contact or Email2SMS)
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
		''' Recipient last name (if given by contact or Email2SMS)
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
	End Class
End Namespace
