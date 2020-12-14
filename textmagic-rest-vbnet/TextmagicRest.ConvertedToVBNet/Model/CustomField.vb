Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace Model
	Public Class CustomField
		Inherits BaseModel
		''' <summary>
		''' Custom field ID
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
		''' Custom field name
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
		''' Custom field creation time
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
		''' Custom field value (when assigned)
		''' </summary>
		Public Property Value() As String
			Get
				Return m_Value
			End Get
			Set
				m_Value = Value
			End Set
		End Property
		Private m_Value As String
	End Class
End Namespace
