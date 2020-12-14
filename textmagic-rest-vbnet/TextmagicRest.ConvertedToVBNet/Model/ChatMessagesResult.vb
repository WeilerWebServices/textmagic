Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of ChatMessage objects
	''' </summary>
	Public Class ChatMessagesResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Messages() As List(Of ChatMessage)
			Get
				Return m_Messages
			End Get
			Set
				m_Messages = Value
			End Set
		End Property
		Private m_Messages As List(Of ChatMessage)
	End Class
End Namespace
