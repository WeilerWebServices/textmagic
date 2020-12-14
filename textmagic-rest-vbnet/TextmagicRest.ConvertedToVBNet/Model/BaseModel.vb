
Namespace Model
	''' <summary>
	''' Base class for TextMagic REST API resources
	''' </summary>
	Public MustInherit Class BaseModel
		''' <summary>
		''' API exception thrown (if any)
		''' </summary>
		Public Property ClientException() As ClientException
			Get
				Return m_ClientException
			End Get
			Set
				m_ClientException = Value
			End Set
		End Property
		Private m_ClientException As ClientException

		''' <summary>
		''' Is request successful
		''' </summary>
		Public ReadOnly Property Success() As Boolean
			Get
				Return ClientException Is Nothing
			End Get
		End Property
	End Class
End Namespace
