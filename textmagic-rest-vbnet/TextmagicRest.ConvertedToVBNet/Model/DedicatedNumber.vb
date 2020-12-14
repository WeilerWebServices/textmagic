Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	Public Enum DedicatedNumberStatus
        Active
        Unused
	End Enum

	''' <summary>
	''' Dedicated number class
	''' </summary>
	Public Class DedicatedNumber
		Inherits BaseModel
		''' <summary>
		''' Dedicated number ID
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
		''' Dedicated number assignee
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

		''' <summary>
		''' Dedicated number purchase date
		''' </summary>
		Public Property PurchasedAt() As System.Nullable(Of DateTime)
			Get
				Return m_PurchasedAt
			End Get
			Set
				m_PurchasedAt = Value
			End Set
		End Property
		Private m_PurchasedAt As System.Nullable(Of DateTime)

		''' <summary>
		''' Dedicated number expiration date
		''' </summary>
		Public Property ExpireAt() As System.Nullable(Of DateTime)
			Get
				Return m_ExpireAt
			End Get
			Set
				m_ExpireAt = Value
			End Set
		End Property
		Private m_ExpireAt As System.Nullable(Of DateTime)

		''' <summary>
		''' Dedicated phone number
		''' </summary>
		Public Property Phone() As String
			Get
				Return m_Phone
			End Get
			Set
				m_Phone = Value
			End Set
		End Property
		Private m_Phone As String

		''' <summary>
		''' Dedicated number country
		''' </summary>
		Public Property Country() As Country
			Get
				Return m_Country
			End Get
			Set
				m_Country = Value
			End Set
		End Property
		Private m_Country As Country

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
		Public Property Status() As DedicatedNumberStatus
			Get
                Select Case StatusChar
                    Case "A"c
                        Return DedicatedNumberStatus.Active
                    Case "U"c
                        Return DedicatedNumberStatus.Unused
                End Select
                Return Nothing
			End Get
			Set
				StatusChar = value.ToString()(0)
			End Set
		End Property
	End Class
End Namespace
