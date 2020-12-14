Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	Public Class AvailableNumbersResult
		Inherits BaseModel
		''' <summary>
		''' Available numbers list
		''' </summary>
		Public Property Numbers() As List(Of String)
			Get
				Return m_Numbers
			End Get
			Set
				m_Numbers = Value
			End Set
		End Property
		Private m_Numbers As List(Of String)

		''' <summary>
		''' Number monthly fee
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
	End Class
End Namespace
