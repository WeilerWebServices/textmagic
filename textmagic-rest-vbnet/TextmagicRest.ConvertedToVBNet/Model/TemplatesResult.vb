Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of Template objects
	''' </summary>
	Public Class TemplatesResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Templates() As List(Of Template)
			Get
				Return m_Templates
			End Get
			Set
				m_Templates = Value
			End Set
		End Property
		Private m_Templates As List(Of Template)
	End Class
End Namespace
