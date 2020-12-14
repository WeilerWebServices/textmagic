
Namespace Model
	''' <summary>
	''' Account currency object
	''' </summary>
	Public Class Currency
		''' <summary>
		''' 3-letter ISO currency code
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
		''' HTML-ready currency symbol (i.e. &pound; for GBP)
		''' </summary>
		Public Property HtmlSymbol() As String
			Get
				Return m_HtmlSymbol
			End Get
			Set
				m_HtmlSymbol = Value
			End Set
		End Property
		Private m_HtmlSymbol As String
	End Class
End Namespace
