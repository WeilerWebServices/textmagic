Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of Reply objects
	''' </summary>
	Public Class RepliesResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Replies() As List(Of Reply)
			Get
				Return m_Replies
			End Get
			Set
				m_Replies = Value
			End Set
		End Property
		Private m_Replies As List(Of Reply)
	End Class
End Namespace
