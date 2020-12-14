[comment]: <> (HEAD)
# TextMagic Java SDK
This library provides you with an easy way of sending SMS and receiving replies by integrating the TextMagic SMS Gateway into your Java application.

## What Is TextMagic?
TextMagic’s application programming interface (API) provides the communication link between your application and TextMagic’s SMS Gateway, allowing you to send and receive text messages and to check the delivery status of text messages you’ve already sent.

[comment]: <> (/HEAD)


## Requirements

1. Java 1.7+
2. Maven/Gradle

## Installation

### Maven

Add this dependency to your project's POM:
```xml
<dependencies>
    <dependency>
        <groupId>com.textmagic.sdk</groupId>
        <artifactId>textmagic-java-sdk</artifactId>
        <version>2.0.1588</version>
    </dependency>
</dependencies>
```

### Gradle

Add this dependency to your project’s build file:
```groovy
compile "com.textmagic.sdk:textmagic-java-sdk:2.0.1588"
```

## Usage Example

```java
import com.textmagic.sdk.*;
import com.textmagic.sdk.api.TextMagicApi;
import com.textmagic.sdk.auth.*;
import com.textmagic.sdk.model.*;

public class App {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // put your Username and API Key from https://my.textmagic.com/online/api/rest-api/keys page.
        HttpBasicAuth BasicAuth = (HttpBasicAuth) defaultClient.getAuthentication("BasicAuth");
        BasicAuth.setUsername("YOUR_USERNAME");
        BasicAuth.setPassword("YOUR_API_KEY");

        TextMagicApi apiInstance = new TextMagicApi();

        // Simple ping request example
        try {
            PingResponse response = apiInstance.ping();
            System.out.println(response.getPing());
        } catch (ApiException e) {
        System.err.println("Exception when calling ping");
            e.printStackTrace();
        }

        // Send a new message request example
        SendMessageInputObject sendMessageInputObject = new SendMessageInputObject();
        sendMessageInputObject.setText("I love Textmagic!");
        sendMessageInputObject.setPhones("+19998887766");

        try {
            SendMessageResponse response = apiInstance.sendMessage(sendMessageInputObject, true);
            System.out.println(response.getId());
        } catch (ApiException e) {
            System.err.println("Exception when calling sendMessage");
            e.printStackTrace();
        }

        // Get all outgoing messages request example
        try {
            // Put null if you want to use default values
            GetAllOutboundMessagesResponse response = apiInstance.getAllOutboundMessages(1, 10, null);
            System.out.println(response.getResources().get(0).getText());
        } catch (ApiException e) {
            System.err.println("Exception when calling getAllOutboundMessages");
            e.printStackTrace();
        }

        // Upload new avatar for contacts list (group) with Id 3223 example
        File file = new File("test.jpg");
        try {
            ResourceLinkResponse response = apiInstance.uploadListAvatar(file, 3223);
            System.out.println(response.getId());
        } catch (ApiException e) {
            System.err.println("Exception when calling uploadListAvatar");
            e.printStackTrace();
        }
    }
}
```
[comment]: <> (FOOTER)
## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

[comment]: <> (/FOOTER)
