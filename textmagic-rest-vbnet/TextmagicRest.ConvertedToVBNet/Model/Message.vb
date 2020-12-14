Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	Public Enum DeliveryStatus
        Delivered
        Queued
        Enrouted
        Acked
        Scheduled
        Failed
        Rejected
        Unknown
	End Enum

	''' <summary>
	''' TextMagic outbound message class
	''' </summary>
	Public Class Message
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
                Return Nothing
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
		''' Message text charset
		''' </summary>
		Public Property Charset() As String
			Get
				Return m_Charset
			End Get
			Set
				m_Charset = Value
			End Set
		End Property
		Private m_Charset As String

		''' <summary>
		''' SMS parts count
		''' </summary>
		Public Property PartsCount() As Integer
			Get
				Return m_PartsCount
			End Get
			Set
				m_PartsCount = Value
			End Set
		End Property
		Private m_PartsCount As Integer

		''' <summary>
		''' Message sending price (in account currency)
		''' </summary>
		Public Property Price() As Double
			Get
				Return m_Price
			End Get
			Set
				m_Price = Value
			End Set
		End Property
		Private m_Price As Double

		''' <summary>
		''' Destination country 2-letter ISO code
		''' </summary>
		<DeserializeAs(Name := "country")> _
		Public Property CountryId() As String
			Get
				Return m_CountryId
			End Get
			Set
				m_CountryId = Value
			End Set
		End Property
		Private m_CountryId As String

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
