Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of UnsubscribedContact objects
	''' </summary>
	Public Class UnsubscribedContactsResult
		<DeserializeAs(Name := "resources")> _
		Public Property UnsubscribedContacts() As List(Of UnsubscribedContact)
			Get
				Return m_UnsubscribedContacts
			End Get
			Set
				m_UnsubscribedContacts = Value
			End Set
		End Property
		Private m_UnsubscribedContacts As List(Of UnsubscribedContact)
	End Class
End Namespace
