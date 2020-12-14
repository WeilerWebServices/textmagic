Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of Invoice resources
	''' </summary>
	Public Class InvoicesResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Invoices() As List(Of Invoice)
			Get
				Return m_Invoices
			End Get
			Set
				m_Invoices = Value
			End Set
		End Property
		Private m_Invoices As List(Of Invoice)
	End Class
End Namespace
