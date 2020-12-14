Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of Schedule resources
	''' </summary>
	Public Class SpendingStatsResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property SpendingStats() As List(Of SpendingStats)
			Get
				Return m_SpendingStats
			End Get
			Set
				m_SpendingStats = Value
			End Set
		End Property
		Private m_SpendingStats As List(Of SpendingStats)
	End Class
End Namespace
