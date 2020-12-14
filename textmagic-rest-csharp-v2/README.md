[comment]: <> (HEAD)
# TextMagic C# / .Net SDK

This library provides you with an easy way to send SMS and receive replies, by integrating the the TextMagic SMS Gateway into your C# / .Net application.

## What Is TextMagic?
TextMagic’s application programming interface (API) provides the communication link between your application and TextMagic’s SMS Gateway, allowing you to send and receive text messages and to check the delivery status of text messages you’ve already sent.


[comment]: <> (/HEAD)

## Frameworks supported
- .NET 4.0 or later
- Windows Phone 7.1 (Mango)

## Dependencies
- [RestSharp](https://www.nuget.org/packages/RestSharp) - 105.1.0 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 7.0.0 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.2.0 or later

The DLLs included in the package may not be the latest versions. We recommend using [NuGet](https://docs.nuget.org/consume/installing-nuget) to obtain the latest version of the packages:
```
Install-Package RestSharp
Install-Package Newtonsoft.Json
Install-Package JsonSubTypes
```

NOTE: RestSharp versions later than 105.1.0 have a bug which causes file uploads to fail. See [RestSharp#742](https://github.com/restsharp/RestSharp/issues/742)

## Installation
Add the library to your project references or install it as a [NuGet package](https://www.nuget.org/packages/TextMagicClient/2.0.1588/).

## C# usage example
```csharp
using System;
using System.IO;
using TextMagicClient.Api;
using TextMagicClient.Client;
using TextMagicClient.Model;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // put your Username and API Key from https://my.textmagic.com/online/api/rest-api/keys page.
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_API_KEY";
            Configuration.Default.BasePath = "https://rest.textmagic.com";

            var apiInstance = new TextMagicApi();

            // Simple Ping request sample
            try
            {
                var result = apiInstance.Ping();
                Console.WriteLine(result.Ping);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception when calling TextMagicApi.Ping: " + e.Message );
            }

            // Send a new message request sample
            try
            {
                var sendMessageInputObject = new SendMessageInputObject
                {
                    Text = "I love TextMagic!", Phones = "+199988887766"
                };

                var result = apiInstance.SendMessage(sendMessageInputObject);
                Console.WriteLine(result.Id);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception when calling TextMagicApi.SendMessage: " + e.Message );
            }

            // Get all outgoing messages sample
            try
            {
                var result = apiInstance.GetAllOutboundMessages(1, 10);
                Console.WriteLine(result.Resources[0].Id);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception when calling TextMagicApi.GetAllOutboundMessages: " + e.Message );
            }

            // Upload list avatar sample, 3223 here is a sample list id
            try
            {
                var stream = File.Open("/CustomPath/Images/test.png", FileMode.Open);
                var result = apiInstance.UploadListAvatar(stream, 3223);
                Console.WriteLine(result.Href);
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception when calling TextMagicApi.UploadListAvatar: " + e.Message );
            }
        }
    }
}
```

## VB.Net usage example

```vbnet
Imports System
Imports System.IO
Imports TextMagicClient.Api
Imports TextMagicClient.Client
Imports TextMagicClient.Model

Module Program
    Sub Main(args As String())
        ' put your Username and API Key from https://my.textmagic.com/online/api/rest-api/keys page.
        Configuration.Default.Username = "YOUR_USERNAME"
        Configuration.Default.Password = "YOUR_API_KEY"
        Configuration.Default.BasePath = "https://rest.textmagic.com"

        Dim apiInstance = New TextMagicApi()

        ' Simple Ping request sample
        Try
            Dim result = apiInstance.Ping()
            Console.WriteLine(result.Ping)
            Catch ex As Exception
            Console.WriteLine("Exception when calling TextMagicApi.Ping: " + ex.Message )
        End Try

        ' Send a new message request sample
        Try
            Dim sendMessageInputObject = New SendMessageInputObject With {
            .Text = "I love TextMagic!",
            .Phones = "+199988887766"
            }
            Dim result = apiInstance.SendMessage(sendMessageInputObject)
            Console.WriteLine(result.Id)
        Catch e As Exception
            Console.WriteLine("Exception when calling TextMagicApi.SendMessage: " & e.Message)
        End Try

        ' Get all outgoing messages sample
        Try
            Dim result = apiInstance.GetAllOutboundMessages(1, 10)
            Console.WriteLine(result.Resources(0).Id)
        Catch e As Exception
            Console.WriteLine("Exception when calling TextMagicApi.GetAllOutboundMessages: " & e.Message)
        End Try

        ' Upload list avatar sample, 3223 here is a sample list id
        Try
            Dim stream = File.Open("/CustomPath/Images/test.png", FileMode.Open)
            Dim result = apiInstance.UploadListAvatar(stream, 3223)
            Console.WriteLine(result.Href)
        Catch e As Exception
            Console.WriteLine("Exception when calling TextMagicApi.UploadListAvatar: " & e.Message)
        End Try
    End Sub
End Module

```
[comment]: <> (FOOTER)
## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

[comment]: <> (/FOOTER)
