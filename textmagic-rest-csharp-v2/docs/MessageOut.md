# TextMagicClient.Model.MessageOut
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | Message ID. | 
**Sender** | **string** | Message sender (phone number or alphanumeric Sender ID). | [optional] 
**Receiver** | **string** | Recipient&#x60;s phone number. | [optional] 
**Text** | **string** |  | 
**Status** | **string** | Delivery status of the message. See [message delivery statuses](https://docs.textmagic.com/#section/Delivery-status-codes) for details.  | 
**ContactId** | **int?** | Recipient contact ID. | 
**SessionId** | **int?** | Message Session ID of a message. | 
**MessageTime** | **DateTime?** | Sending time. | 
**Avatar** | **string** |  | 
**Deleted** | **bool?** | Indicates that the message has been deleted. | [optional] 
**Charset** | **string** | Message charset. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS.  | 
**CharsetLabel** | **string** | Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS; *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages.  | 
**FirstName** | **string** | Contact first name. Could be substituted from your [Contacts](https://docs.textmagic.com/#tag/Contacts) (even if you submitted the phone number instead of the contact ID).  | 
**LastName** | **string** | Contact last name. | 
**Country** | **string** | The 2-letter ISO country code of the recipient&#39;s phone number.  | 
**Phone** | **string** | Receipent&#x60;s phone number. | [optional] 
**Price** | **float?** | Message price. | [optional] 
**PartsCount** | **int?** | Message parts (multiples of 160 characters) count. | 
**FromEmail** | **string** | The user email which this message came from. For Email2SMS and Distribution Lists the messages, it is an original email address - in other cases, it is an account email address. | [optional] 
**FromNumber** | **string** | The Phone number used to send the SMS. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

