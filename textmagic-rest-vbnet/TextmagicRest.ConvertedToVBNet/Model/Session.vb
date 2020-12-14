Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	Public Enum SendingSource
        Api
        WebApp
        Tmm
        EmailToSms
        DistributionList
	End Enum

	''' <summary>
	''' Message sending session
	''' </summary>
	Public Class Session
		Inherits BaseModel
		''' <summary>
		''' Session ID
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
		''' Sesssion start time
		''' </summary>
		Public Property StartTime() As System.Nullable(Of DateTime)
			Get
				Return m_StartTime
			End Get
			Set
				m_StartTime = Value
			End Set
		End Property
		Private m_StartTime As System.Nullable(Of DateTime)

		''' <summary>
		''' Session text. Contains
		''' </summary>
		Public Property Text() As String
			Get
				Return m_Text
			End Get
			Set
				m_Text = Value
			End Set
		End Property
		Private m_Text As String

		<DeserializeAs(Name := "source")> _
		Public Property SourceChar() As Char
			Get
				Return m_SourceChar
			End Get
			Set
				m_SourceChar = Value
			End Set
		End Property
		Private m_SourceChar As Char
		''' <summary>
		''' Session sending source
		''' </summary>
		<DeserializeAs(Name := "fake-unused-name")> _
		Public Property Source() As SendingSource
			Get
                Select Case SourceChar
                    Case "A"c
                        Return SendingSource.Api
                    Case "X"c
                        Return SendingSource.DistributionList
                    Case "E"c
                        Return SendingSource.EmailToSms
                    Case "M"c
                    Case "T"c
                        Return SendingSource.Tmm
                    Case "O"c
                        Return SendingSource.WebApp
                End Select
                Return Nothing
			End Get
			Set
				SourceChar = value.ToString()(0)
			End Set
		End Property

		''' <summary>
		''' Custom Reference ID
		''' </summary>
		Public Property ReferenceId() As String
			Get
				Return m_ReferenceId
			End Get
			Set
				m_ReferenceId = Value
			End Set
		End Property
		Private m_ReferenceId As String

		''' <summary>
		''' Session price (in account currency)
		''' </summary>
		Public Property Price() As Single
			Get
				Return m_Price
			End Get
			Set
				m_Price = Value
			End Set
		End Property
		Private m_Price As Single

		''' <summary>
		''' Session unique recipients count
		''' </summary>
		Public Property NumbersCount() As Integer
			Get
				Return m_NumbersCount
			End Get
			Set
				m_NumbersCount = Value
			End Set
		End Property
		Private m_NumbersCount As Integer
	End Class
End Namespace
