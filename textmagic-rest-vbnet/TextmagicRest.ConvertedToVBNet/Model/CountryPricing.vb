Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' Price by country
	''' </summary>
	Public Class CountryPricing
		''' <summary>
		''' 2-letter ISO country code
		''' </summary>
		Public Property Country() As String
			Get
				Return m_Country
			End Get
			Set
				m_Country = Value
			End Set
		End Property
		Private m_Country As String

		''' <summary>
		''' Amount of messages to this country
		''' </summary>
		Public Property Count() As Integer
			Get
				Return m_Count
			End Get
			Set
				m_Count = Value
			End Set
		End Property
		Private m_Count As Integer

		''' <summary>
		''' Single message price to this country
		''' </summary>
		<DeserializeAs(Name := "max")> _
		Public Property Price() As Single
			Get
				Return m_Price
			End Get
			Set
				m_Price = Value
			End Set
		End Property
		Private m_Price As Single
	End Class
End Namespace
