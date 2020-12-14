Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	Public Enum MessagingStatsGroupBy
		None
		Day
		Month
		Year
	End Enum

	''' <summary>
	''' Messaging Statistics entry
	''' </summary>
	Public Class MessagingStats
		Inherits BaseModel
		''' <summary>
		''' Reply rate
		''' </summary>
		Public Property ReplyRate() As Double
			Get
				Return m_ReplyRate
			End Get
			Set
				m_ReplyRate = Value
			End Set
		End Property
		Private m_ReplyRate As Double

		''' <summary>
		''' Delivery rate
		''' </summary>
		Public Property DeliveryRate() As Double
			Get
				Return m_DeliveryRate
			End Get
			Set
				m_DeliveryRate = Value
			End Set
		End Property
		Private m_DeliveryRate As Double

		''' <summary>
		''' Date (when grouped)
		''' </summary>
		Public Property [Date]() As System.Nullable(Of DateTime)
			Get
				Return m_Date
			End Get
			Set
				m_Date = Value
			End Set
		End Property
		Private m_Date As System.Nullable(Of DateTime)

		''' <summary>
		''' Total costs
		''' </summary>
		Public Property Costs() As Double
			Get
				Return m_Costs
			End Get
			Set
				m_Costs = Value
			End Set
		End Property
		Private m_Costs As Double

		''' <summary>
		''' Received messages count
		''' </summary>
		Public Property MessagesReceived() As Integer
			Get
				Return m_MessagesReceived
			End Get
			Set
				m_MessagesReceived = Value
			End Set
		End Property
		Private m_MessagesReceived As Integer

		''' <summary>
		''' Delivered messages count
		''' </summary>
		Public Property MessagesSentDelivered() As Integer
			Get
				Return m_MessagesSentDelivered
			End Get
			Set
				m_MessagesSentDelivered = Value
			End Set
		End Property
		Private m_MessagesSentDelivered As Integer

		''' <summary>
		''' Amount of messages in Accepted status
		''' </summary>
		Public Property MessagesSentAccepted() As Integer
			Get
				Return m_MessagesSentAccepted
			End Get
			Set
				m_MessagesSentAccepted = Value
			End Set
		End Property
		Private m_MessagesSentAccepted As Integer

		''' <summary>
		''' Amount of messages in Buffered status
		''' </summary>
		Public Property MessagesSentBuffered() As Integer
			Get
				Return m_MessagesSentBuffered
			End Get
			Set
				m_MessagesSentBuffered = Value
			End Set
		End Property
		Private m_MessagesSentBuffered As Integer

		''' <summary>
		''' Amount of messages in Failed status
		''' </summary>
		Public Property MessagesSentFailed() As Integer
			Get
				Return m_MessagesSentFailed
			End Get
			Set
				m_MessagesSentFailed = Value
			End Set
		End Property
		Private m_MessagesSentFailed As Integer

		''' <summary>
		''' Amount of messages in Rejected status
		''' </summary>
		Public Property MessagesSentRejected() As Integer
			Get
				Return m_MessagesSentRejected
			End Get
			Set
				m_MessagesSentRejected = Value
			End Set
		End Property
		Private m_MessagesSentRejected As Integer

		''' <summary>
		''' Amount of sent messages parts
		''' </summary>
		Public Property MessagesSentParts() As Integer
			Get
				Return m_MessagesSentParts
			End Get
			Set
				m_MessagesSentParts = Value
			End Set
		End Property
		Private m_MessagesSentParts As Integer
	End Class
End Namespace
