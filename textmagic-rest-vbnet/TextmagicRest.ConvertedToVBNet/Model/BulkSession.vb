Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	Public Enum BulkSessionStatus
        NotStarted
        InProgress
        Completed
        Failed
	End Enum

	''' <summary>
	''' Bulk sending session class
	''' </summary>
	Public Class BulkSession
		Inherits BaseModel
		''' <summary>
		''' Bulk session ID
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

		<DeserializeAs(Name := "status")> _
		Public Property StatusChar() As Char
			Get
				Return m_StatusChar
			End Get
			Set
				m_StatusChar = Value
			End Set
		End Property
		Private m_StatusChar As Char
		''' <summary>
		''' Bulk session status
		''' </summary>
		<DeserializeAs(Name := "fake-unused-name")> _
		Public Property Status() As BulkSessionStatus
			Get
                Select Case StatusChar
                    Case "n"c
                        Return BulkSessionStatus.NotStarted
                    Case "w"c
                        Return BulkSessionStatus.InProgress
                    Case "c"c
                        Return BulkSessionStatus.Completed
                    Case "f"c
                        Return BulkSessionStatus.Failed
                End Select
                Return Nothing
            End Get
			Set
				StatusChar = value.ToString()(0)
			End Set
		End Property

		''' <summary>
		''' How many items (messages) processed during this session
		''' </summary>
		Public Property ItemsProcessed() As Integer
			Get
				Return m_ItemsProcessed
			End Get
			Set
				m_ItemsProcessed = Value
			End Set
		End Property
		Private m_ItemsProcessed As Integer

		''' <summary>
		''' How many items (messages) total
		''' </summary>
		Public Property ItemsTotal() As Integer
			Get
				Return m_ItemsTotal
			End Get
			Set
				m_ItemsTotal = Value
			End Set
		End Property
		Private m_ItemsTotal As Integer

		''' <summary>
		''' Bulk session date creation
		''' </summary>
		Public Property CreatedAt() As System.Nullable(Of DateTime)
			Get
				Return m_CreatedAt
			End Get
			Set
				m_CreatedAt = Value
			End Set
		End Property
		Private m_CreatedAt As System.Nullable(Of DateTime)

		''' <summary>
		''' Session text
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

		''' <summary>
		''' Messages session (if already created)
		''' </summary>
		Public Property Session() As Session
			Get
				Return m_Session
			End Get
			Set
				m_Session = Value
			End Set
		End Property
		Private m_Session As Session
	End Class
End Namespace
