Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' TextMagic Invoice class
	''' </summary>
	Public Class Invoice
		Inherits BaseModel
		''' <summary>
		''' Invoice ID
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
		''' Invoice bundle
		''' </summary>
		Public Property Bundle() As Integer
			Get
				Return m_Bundle
			End Get
			Set
				m_Bundle = Value
			End Set
		End Property
		Private m_Bundle As Integer

		''' <summary>
		''' Invoice currency
		''' </summary>
		Public Property Currency() As String
			Get
				Return m_Currency
			End Get
			Set
				m_Currency = Value
			End Set
		End Property
		Private m_Currency As String

		''' <summary>
		''' Invoice VAT amount
		''' </summary>
		Public Property Vat() As Double
			Get
				Return m_Vat
			End Get
			Set
				m_Vat = Value
			End Set
		End Property
		Private m_Vat As Double

		''' <summary>
		''' Payment method description
		''' </summary>
		Public Property PaymentMethod() As String
			Get
				Return m_PaymentMethod
			End Get
			Set
				m_PaymentMethod = Value
			End Set
		End Property
		Private m_PaymentMethod As String
	End Class
End Namespace
