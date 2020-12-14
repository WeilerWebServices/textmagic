Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' User statements
	''' </summary>
	Public Class SpendingStats
		Inherits BaseModel
		''' <summary>
		''' Statement date
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
		''' Balance
		''' </summary>
		Public Property Balance() As Double
			Get
				Return m_Balance
			End Get
			Set
				m_Balance = Value
			End Set
		End Property
		Private m_Balance As Double

		''' <summary>
		''' Balance change value
		''' </summary>
		Public Property Delta() As Double
			Get
				Return m_Delta
			End Get
			Set
				m_Delta = Value
			End Set
		End Property
		Private m_Delta As Double

		''' <summary>
		''' Statement type
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
		''' Statement value (i.e. dedicated phone number, sent SMS count etc)
		''' </summary>
		Public Property Value() As String
			Get
				Return m_Value
			End Get
			Set
				m_Value = Value
			End Set
		End Property
		Private m_Value As String

		''' <summary>
		''' Statement comment
		''' </summary>
		Public Property Comment() As String
			Get
				Return m_Comment
			End Get
			Set
				m_Comment = Value
			End Set
		End Property
		Private m_Comment As String
	End Class
End Namespace
