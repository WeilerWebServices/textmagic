Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' Account timezone class
	''' </summary>
	Public Class Timezone
		''' <summary>
		''' Timezone area
		''' </summary>
		Public Property Area() As String
			Get
				Return m_Area
			End Get
			Set
				m_Area = Value
			End Set
		End Property
		Private m_Area As String

		''' <summary>
		''' Is daylight saving time used (raw string data)
		''' </summary>
		Public Property Dst() As Integer
			Get
				Return m_Dst
			End Get
			Set
				m_Dst = Value
			End Set
		End Property
		Private m_Dst As Integer

		''' <summary>
		''' Timezone offset in ms
		''' </summary>
		Public Property Offset() As Integer
			Get
				Return m_Offset
			End Get
			Set
				m_Offset = Value
			End Set
		End Property
		Private m_Offset As Integer

		''' <summary>
		''' Timezone name (probably what you need to display)
		''' </summary>
		<DeserializeAs(Name := "timezone")> _
		Public Property Name() As String
			Get
				Return m_Name
			End Get
			Set
				m_Name = Value
			End Set
		End Property
		Private m_Name As String
	End Class
End Namespace
