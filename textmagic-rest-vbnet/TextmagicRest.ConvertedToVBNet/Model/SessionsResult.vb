Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of Session resources
	''' </summary>
	Public Class SessionsResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Sessions() As List(Of Session)
			Get
				Return m_Sessions
			End Get
			Set
				m_Sessions = Value
			End Set
		End Property
		Private m_Sessions As List(Of Session)
	End Class
End Namespace
