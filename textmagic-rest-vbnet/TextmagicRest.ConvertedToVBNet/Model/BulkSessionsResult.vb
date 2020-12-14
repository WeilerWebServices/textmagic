Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of BulkSession objects
	''' </summary>
	Public Class BulkSessionsResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property BulkSessions() As List(Of BulkSession)
			Get
				Return m_BulkSessions
			End Get
			Set
				m_BulkSessions = Value
			End Set
		End Property
		Private m_BulkSessions As List(Of BulkSession)
	End Class
End Namespace
