Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' SendMessage() options
	''' </summary>
	Public Class SendingOptions
		Private m_text As String
		''' <summary>
		''' Message text. Required if Template is not set
		''' </summary>
		Public Property Text() As String
			Get
				Return m_text
			End Get
			Set
				m_text = value
				m_templateId = Nothing
			End Set
		End Property

		Private m_templateId As System.Nullable(Of Integer)
		''' <summary>
		''' Template used instead of message text. Required if Text is not set
		''' </summary>
		Public Property TemplateId() As System.Nullable(Of Integer)
			Get
				Return m_templateId
			End Get
			Set
				m_templateId = value
				m_text = Nothing
			End Set
		End Property

		''' <summary>
		''' Message sending time in unix timestamp format. Optional (required with Rrule set)
		''' </summary>
		Public Property SendingTime() As System.Nullable(Of DateTime)
			Get
				Return m_SendingTime
			End Get
			Set
				m_SendingTime = Value
			End Set
		End Property
		Private m_SendingTime As System.Nullable(Of DateTime)

		''' <summary>
		''' Array of Contact object IDs message will be sent to
		''' </summary>
		Public Property ContactIds() As Integer()
			Get
				Return m_ContactIds
			End Get
			Set
				m_ContactIds = Value
			End Set
		End Property
		Private m_ContactIds As Integer()

		''' <summary>
		''' Array of List object IDs message will be sent to
		''' </summary>
		Public Property ListIds() As Integer()
			Get
				Return m_ListIds
			End Get
			Set
				m_ListIds = Value
			End Set
		End Property
		Private m_ListIds As Integer()

		''' <summary>
		''' Array of phone number in international E.164 format message will be sent to
		''' </summary>
		Public Property Phones() As String()
			Get
				Return m_Phones
			End Get
			Set
				m_Phones = Value
			End Set
		End Property
		Private m_Phones As String()

		''' <summary>
		''' Optional. Should sending method cut extra characters which not fit supplied parts_count or return 400 Bad request response instead. Default is false
		''' </summary>
		Public Property CutExtra() As System.Nullable(Of Boolean)
			Get
				Return m_CutExtra
			End Get
			Set
				m_CutExtra = Value
			End Set
		End Property
		Private m_CutExtra As System.Nullable(Of Boolean)

		''' <summary>
		''' Optional. Maximum message parts count (TextMagic allows sending 1 to 6 message parts). Default is 6
		''' </summary>
		Public Property PartsCount() As System.Nullable(Of Integer)
			Get
				Return m_PartsCount
			End Get
			Set
				m_PartsCount = Value
			End Set
		End Property
		Private m_PartsCount As System.Nullable(Of Integer)

		''' <summary>
		''' Optional. Custom message reference id which can be used in your application infrastructure
		''' </summary>
		Public Property ReferenceId() As String
			Get
				Return m_ReferenceId
			End Get
			Set
				m_ReferenceId = Value
			End Set
		End Property
		Private m_ReferenceId As String

		''' <summary>
		''' Optional. One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery
		''' </summary>
		Public Property From() As String
			Get
				Return m_From
			End Get
			Set
				m_From = Value
			End Set
		End Property
		Private m_From As String

		''' <summary>
		''' Optional. iCal RRULE parameter to create recurrent scheduled messages. When used, SendingTime is mandatory as start point of sending
		''' </summary>
		Public Property Rrule() As String
			Get
				Return m_Rrule
			End Get
			Set
				m_Rrule = Value
			End Set
		End Property
		Private m_Rrule As String
	End Class
End Namespace
