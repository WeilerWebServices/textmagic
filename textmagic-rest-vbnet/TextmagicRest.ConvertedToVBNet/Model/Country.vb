
Namespace Model
	''' <summary>
	''' Country representation class
	''' </summary>
	Public Class Country
		''' <summary>
		''' 2-letter ISO country ID
		''' </summary>
		Public Property Id() As String
			Get
				Return m_Id
			End Get
			Set
				m_Id = Value
			End Set
		End Property
		Private m_Id As String

		''' <summary>
		''' Country name
		''' </summary>
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
