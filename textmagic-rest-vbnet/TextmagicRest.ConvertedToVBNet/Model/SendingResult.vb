Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' Message sending result
	''' </summary>
	Public Class SendingResult
		Inherits LinkResult
		''' <summary>
		''' Resulting entity type
		''' </summary>
		Public Property Type() As String
			Get
				Return m_Type
			End Get
			Set
				m_Type = Value
			End Set
		End Property
		Private m_Type As String

		''' <summary>
		''' Session ID (if any)
		''' </summary>
		Public Property SessionId() As Integer
			Get
				Return m_SessionId
			End Get
			Set
				m_SessionId = Value
			End Set
		End Property
		Private m_SessionId As Integer

		''' <summary>
		''' Bulk Session ID (if any)
		''' </summary>
		Public Property BulkId() As Integer
			Get
				Return m_BulkId
			End Get
			Set
				m_BulkId = Value
			End Set
		End Property
		Private m_BulkId As Integer

		''' <summary>
		''' Message ID (if any)
		''' </summary>
		Public Property MessageId() As Integer
			Get
				Return m_MessageId
			End Get
			Set
				m_MessageId = Value
			End Set
		End Property
		Private m_MessageId As Integer

		''' <summary>
		''' Schedule ID (if any)
		''' </summary>
		Public Property ScheduleId() As Integer
			Get
				Return m_ScheduleId
			End Get
			Set
				m_ScheduleId = Value
			End Set
		End Property
		Private m_ScheduleId As Integer
	End Class
End Namespace
