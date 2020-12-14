Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

''' <summary>
''' Validation errors
''' </summary>
Public Class ValidationErrors
	''' <summary>
	''' Validation global form errors
	''' </summary>
	Public Property Common() As List(Of String)
		Get
			Return m_Common
		End Get
		Set
			m_Common = Value
		End Set
	End Property
	Private m_Common As List(Of String)

	''' <summary>
	''' Validation form field errors
	''' </summary>
	Public Property Fields() As Dictionary(Of String, List(Of String))
		Get
			Return m_Fields
		End Get
		Set
			m_Fields = Value
		End Set
	End Property
	Private m_Fields As Dictionary(Of String, List(Of String))
End Class
