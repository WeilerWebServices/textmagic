Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' Message sending schedule
	''' </summary>
	Public Class Schedule
		Inherits BaseModel
		''' <summary>
		''' Schedule ID
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
		''' Next scheduled sending time (if any)
		''' </summary>
		Public Property NextSend() As System.Nullable(Of DateTime)
			Get
				Return m_NextSend
			End Get
			Set
				m_NextSend = Value
			End Set
		End Property
		Private m_NextSend As System.Nullable(Of DateTime)

		''' <summary>
		''' Message session
		''' </summary>
		Public Property Session() As Session
			Get
				Return m_Session
			End Get
			Set
				m_Session = Value
			End Set
		End Property
		Private m_Session As Session

		''' <summary>
		''' iCal RRULE string for this session
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
