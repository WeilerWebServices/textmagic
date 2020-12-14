Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of Message objects
	''' </summary>
	Public Class MessagesResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Messages() As List(Of Message)
			Get
				Return m_Messages
			End Get
			Set
				m_Messages = Value
			End Set
		End Property
		Private m_Messages As List(Of Message)
	End Class
End Namespace
