Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' List of Schedule resources
	''' </summary>
	Public Class SchedulesResult
		Inherits BaseModelList
		<DeserializeAs(Name := "resources")> _
		Public Property Schedules() As List(Of Schedule)
			Get
				Return m_Schedules
			End Get
			Set
				m_Schedules = Value
			End Set
		End Property
		Private m_Schedules As List(Of Schedule)
	End Class
End Namespace
