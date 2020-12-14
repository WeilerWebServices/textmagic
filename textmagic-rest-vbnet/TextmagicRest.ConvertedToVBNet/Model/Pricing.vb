Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' Pricing information
	''' </summary>
	Public Class Pricing
		Inherits BaseModel
		''' <summary>
		''' Total session cost
		''' </summary>
		Public Property Total() As Single
			Get
				Return m_Total
			End Get
			Set
				m_Total = Value
			End Set
		End Property
		Private m_Total As Single

		''' <summary>
		''' SMS parts count
		''' </summary>
		Public Property Parts() As Integer
			Get
				Return m_Parts
			End Get
			Set
				m_Parts = Value
			End Set
		End Property
		Private m_Parts As Integer

		''' <summary>
		''' Price by country
		''' </summary>
		Public Property Countries() As Dictionary(Of String, CountryPricing)
			Get
				Return m_Countries
			End Get
			Set
				m_Countries = Value
			End Set
		End Property
		Private m_Countries As Dictionary(Of String, CountryPricing)
	End Class
End Namespace
