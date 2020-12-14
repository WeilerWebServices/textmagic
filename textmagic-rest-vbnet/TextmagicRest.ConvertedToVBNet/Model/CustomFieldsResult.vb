Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

Namespace Model
	''' <summary>
	''' Contact custom fields list
	''' </summary>
	Public Class CustomFieldsResult
		<DeserializeAs(Name := "resources")> _
		Public Property CustomFields() As List(Of CustomField)
			Get
				Return m_CustomFields
			End Get
			Set
				m_CustomFields = Value
			End Set
		End Property
		Private m_CustomFields As List(Of CustomField)
	End Class
End Namespace
