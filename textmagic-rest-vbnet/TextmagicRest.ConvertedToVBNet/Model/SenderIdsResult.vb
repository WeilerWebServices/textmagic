Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of SenderId objects
	''' </summary>
	Public Class SenderIdsResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property SenderIds() As List(Of SenderId)
			Get
				Return m_SenderIds
			End Get
			Set
				m_SenderIds = Value
			End Set
		End Property
		Private m_SenderIds As List(Of SenderId)
	End Class
End Namespace
