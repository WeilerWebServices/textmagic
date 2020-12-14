Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of Contact objects
	''' </summary>
	Public Class ContactsResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Contacts() As List(Of Contact)
			Get
				Return m_Contacts
			End Get
			Set
				m_Contacts = Value
			End Set
		End Property
		Private m_Contacts As List(Of Contact)
	End Class
End Namespace
