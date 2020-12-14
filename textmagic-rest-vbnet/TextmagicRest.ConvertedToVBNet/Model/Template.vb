
Namespace Model
	''' <summary>
	''' Message template class
	''' </summary>
	Public Class Template
		Inherits BaseModel
		''' <summary>
		''' Template ID
		''' </summary>
		Public Property Id() As Integer
			Get
				Return m_Id
			End Get
			Set
				m_Id = Value
			End Set
		End Property
		Private m_Id As Integer

		''' <summary>
		''' Template name
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

		''' <summary>
		''' Template content
		''' </summary>
		Public Property Content() As String
			Get
				Return m_Content
			End Get
			Set
				m_Content = Value
			End Set
		End Property
		Private m_Content As String

		''' <summary>
		''' Last modification date
		''' </summary>
		Public Property LastModified() As System.Nullable(Of DateTime)
			Get
				Return m_LastModified
			End Get
			Set
				m_LastModified = Value
			End Set
		End Property
		Private m_LastModified As System.Nullable(Of DateTime)
	End Class
End Namespace
