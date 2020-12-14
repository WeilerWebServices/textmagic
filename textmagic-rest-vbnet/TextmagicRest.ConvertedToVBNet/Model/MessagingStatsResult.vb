Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of MessagingStats object
	''' </summary>
	Public Class MessagingStatsResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property MessagingStats() As List(Of MessagingStats)
			Get
				Return m_MessagingStats
			End Get
			Set
				m_MessagingStats = Value
			End Set
		End Property
		Private m_MessagingStats As List(Of MessagingStats)
	End Class
End Namespace
