Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp.Deserializers

''' <summary>
''' TextMagic REST API exception class
''' </summary>  
Public Class ClientException
	Inherits Exception
	''' <summary>
	''' HTTP code
	''' </summary>
	Public Property Code() As Integer
		Get
			Return m_Code
		End Get
		Set
			m_Code = Value
		End Set
	End Property
	Private m_Code As Integer

	''' <summary>
	''' Brief error message
	''' </summary>
	Public Shadows Property Message() As String
		Get
			Return m_Message
		End Get
		Set
			m_Message = Value
		End Set
	End Property
	Private Shadows m_Message As String

	''' <summary>
	''' Array of errors, grouped by input field
	''' </summary>
	Public Property Errors() As ValidationErrors
		Get
			Return m_Errors
		End Get
		Set
			m_Errors = Value
		End Set
	End Property
	Private m_Errors As ValidationErrors

	Public Sub New()
		MyBase.New()
	End Sub
	Public Sub New(message As String)
		MyBase.New(message)
	End Sub
	Public Sub New(message As String, inner As Exception)
		MyBase.New(message, inner)
	End Sub
End Class
