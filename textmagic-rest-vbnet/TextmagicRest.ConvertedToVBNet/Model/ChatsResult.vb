Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' Chats list
	''' </summary>
	Public Class ChatsResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Chats() As List(Of Chat)
			Get
				Return m_Chats
			End Get
			Set
				m_Chats = Value
			End Set
		End Property
		Private m_Chats As List(Of Chat)
	End Class
End Namespace
