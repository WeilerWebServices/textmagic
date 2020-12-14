# TextmagicClient.MessageOut

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Message ID. | 
**sender** | **String** | Message sender (phone number or alphanumeric Sender ID). | [optional] 
**receiver** | **String** | Recipient`s phone number. | [optional] 
**text** | **String** |  | 
**status** | **String** | Delivery status of the message. See [message delivery statuses](https://docs.textmagic.com/#section/Delivery-status-codes) for details.  | 
**contactId** | **Number** | Recipient contact ID. | 
**sessionId** | **Number** | Message Session ID of a message. | 
**messageTime** | **Date** | Sending time. | 
**avatar** | **String** |  | 
**deleted** | **Boolean** | Indicates that the message has been deleted. | [optional] 
**charset** | **String** | Message charset. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS.  | 
**charsetLabel** | **String** | Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS; *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages.  | 
**firstName** | **String** | Contact first name. Could be substituted from your [Contacts](https://docs.textmagic.com/#tag/Contacts) (even if you submitted the phone number instead of the contact ID).  | 
**lastName** | **String** | Contact last name. | 
**country** | **String** | The 2-letter ISO country code of the recipient's phone number.  | 
**phone** | **String** | Receipent`s phone number. | [optional] 
**price** | **Number** | Message price. | [optional] 
**partsCount** | **Number** | Message parts (multiples of 160 characters) count. | 
**fromEmail** | **String** | The user email which this message came from. For Email2SMS and Distribution Lists the messages, it is an original email address - in other cases, it is an account email address. | [optional] 
**fromNumber** | **String** | The Phone number used to send the SMS. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `q` (value: `"q"`)

* `s` (value: `"s"`)

* `e` (value: `"e"`)

* `r` (value: `"r"`)

* `a` (value: `"a"`)

* `d` (value: `"d"`)

* `b` (value: `"b"`)

* `f` (value: `"f"`)

* `u` (value: `"u"`)

* `j` (value: `"j"`)

* `i` (value: `"i"`)

* `p` (value: `"p"`)

* `h` (value: `"h"`)




