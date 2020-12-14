
Namespace Model
	''' <summary>
	''' User account representation class
	''' </summary>
	Public Class User
		Inherits BaseModel
		''' <summary>
		''' User ID
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
		''' Account username
		''' </summary>
		Public Property Username() As String
			Get
				Return m_Username
			End Get
			Set
				m_Username = Value
			End Set
		End Property
		Private m_Username As String

		''' <summary>
		''' Account first name
		''' </summary>
		Public Property FirstName() As String
			Get
				Return m_FirstName
			End Get
			Set
				m_FirstName = Value
			End Set
		End Property
		Private m_FirstName As String

		''' <summary>
		''' Account last name
		''' </summary>
		Public Property LastName() As String
			Get
				Return m_LastName
			End Get
			Set
				m_LastName = Value
			End Set
		End Property
		Private m_LastName As String

		''' <summary>
		''' Account full name
		''' </summary>
		Public Overridable ReadOnly Property Name() As String
			Get
				Return FirstName & " " & LastName
			End Get
		End Property

		''' <summary>
		''' Account balance, in account currency
		''' </summary>
		Public Property Balance() As Double
			Get
				Return m_Balance
			End Get
			Set
				m_Balance = Value
			End Set
		End Property
		Private m_Balance As Double

		''' <summary>
		''' Account currency
		''' </summary>
		Public Property Currency() As Currency
			Get
				Return m_Currency
			End Get
			Set
				m_Currency = Value
			End Set
		End Property
		Private m_Currency As Currency

		''' <summary>
		''' Account timezone
		''' </summary>
		Public Property Timezone() As Timezone
			Get
				Return m_Timezone
			End Get
			Set
				m_Timezone = Value
			End Set
		End Property
		Private m_Timezone As Timezone
	End Class
End Namespace
