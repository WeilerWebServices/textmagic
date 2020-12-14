Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	Public Class BaseModelList
		Inherits BaseModel
		''' <summary>
		''' Current page number
		''' </summary>
		Public Property Page() As Integer
			Get
				Return m_Page
			End Get
			Set
				m_Page = Value
			End Set
		End Property
		Private m_Page As Integer

		''' <summary>
		''' How many results per page
		''' </summary>
		Public Property Limit() As Integer
			Get
				Return m_Limit
			End Get
			Set
				m_Limit = Value
			End Set
		End Property
		Private m_Limit As Integer

		''' <summary>
		''' Total page count
		''' </summary>
		Public Property PageCount() As Integer
			Get
				Return m_PageCount
			End Get
			Set
				m_PageCount = Value
			End Set
		End Property
		Private m_PageCount As Integer
	End Class
End Namespace
