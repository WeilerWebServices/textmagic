Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of contact List object
	''' </summary>
	Public Class ContactListsResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property ContactLists() As List(Of ContactList)
			Get
				Return m_ContactLists
			End Get
			Set
				m_ContactLists = Value
			End Set
		End Property
		Private m_ContactLists As List(Of ContactList)
	End Class
End Namespace
