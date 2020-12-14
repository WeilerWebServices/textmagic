Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks
Imports RestSharp

Public Class TextmagicAuthenticator
	Implements IAuthenticator
	Public Property Username() As String
		Get
			Return m_Username
		End Get
		Set
			m_Username = Value
		End Set
	End Property
	Private m_Username As String
	Public Property Token() As String
		Get
			Return m_Token
		End Get
		Set
			m_Token = Value
		End Set
	End Property
	Private m_Token As String


	Public Sub New(username__1 As String, token__2 As String)
		Username = username__1
		Token = token__2
	End Sub

	Public Sub Authenticate(client As IRestClient, request As IRestRequest) Implements IAuthenticator.Authenticate
		client.AddDefaultHeader("X-TM-Username", Username)
		client.AddDefaultHeader("X-TM-Key", Token)
	End Sub
End Class
