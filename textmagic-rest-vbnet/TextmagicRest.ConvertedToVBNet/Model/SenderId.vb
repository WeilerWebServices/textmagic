Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	Public Enum SenderIdStatus
        Active
        Pending
        Rejected
	End Enum

	Public Class SenderId
		Inherits BaseModel
		''' <summary>
		''' Sender ID numeric ID
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
		''' Alphanumeric Sender ID itself
		''' </summary>
		<DeserializeAs(Name := "senderId")> _
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
		''' User who applied for this Sender ID
		''' </summary>
		Public Property User() As User
			Get
				Return m_User
			End Get
			Set
				m_User = Value
			End Set
		End Property
		Private m_User As User

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
		''' Dedicated number status
		''' </summary>
		<DeserializeAs(Name := "fake-unused-name")> _
		Public Property Status() As SenderIdStatus
			Get
                Select Case StatusChar
                    Case "A"c
                        Return SenderIdStatus.Active
                    Case "P"c
                        Return SenderIdStatus.Pending
                    Case "R"c
                        Return SenderIdStatus.Rejected
                End Select
                Return Nothing
			End Get
			Set
				StatusChar = value.ToString()(0)
			End Set
		End Property
	End Class
End Namespace
