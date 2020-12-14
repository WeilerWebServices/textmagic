Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	''' <summary>
	''' Available source sender IDs list
	''' </summary>
	Public Class SourcesResult
		''' <summary>
		''' Dedicated numbers list
		''' </summary>
		Public Property Dedicated() As List(Of String)
			Get
				Return m_Dedicated
			End Get
			Set
				m_Dedicated = Value
			End Set
		End Property
		Private m_Dedicated As List(Of String)

		''' <summary>
		''' Shared numbers list
		''' </summary>
		Public Property [Shared]() As List(Of String)
			Get
				Return m_Shared
			End Get
			Set
				m_Shared = Value
			End Set
		End Property
		Private m_Shared As List(Of String)

		''' <summary>
		''' Alphanumeric Sender IDs
		''' </summary>
		Public Property SenderId() As List(Of String)
			Get
				Return m_SenderId
			End Get
			Set
				m_SenderId = Value
			End Set
		End Property
		Private m_SenderId As List(Of String)

		''' <summary>
		''' Approved user phone numbers
		''' </summary>
		Public Property User() As List(Of String)
			Get
				Return m_User
			End Get
			Set
				m_User = Value
			End Set
		End Property
		Private m_User As List(Of String)
	End Class
End Namespace
