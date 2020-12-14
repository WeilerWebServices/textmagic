Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of DedicatedNumber objects
	''' </summary>
	Public Class DedicatedNumbersResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property DedicatedNumbers() As List(Of DedicatedNumber)
			Get
				Return m_DedicatedNumbers
			End Get
			Set
				m_DedicatedNumbers = Value
			End Set
		End Property
		Private m_DedicatedNumbers As List(Of DedicatedNumber)
	End Class
End Namespace
