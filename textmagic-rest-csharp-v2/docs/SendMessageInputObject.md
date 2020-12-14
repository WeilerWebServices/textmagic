# TextMagicClient.Model.SendMessageInputObject
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Text** | **string** | Message text. Required if the **template_id** is not set. | [optional] 
**TemplateId** | **int?** | Template used instead of message text. Required if the **text** is not set. | [optional] 
**SendingTime** | **int?** | DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time in unix timestamp format. Default is now. | [optional] 
**SendingDateTime** | **string** | Sending time in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to **sendingTimezone**. | [optional] 
**SendingTimezone** | **string** | ID or ISO-name of timezone used for sending when sendingDateTime parameter is set. E.g. if you specify sendingDateTime &#x3D; \\\&quot;2016-05-27 13:02:33\\\&quot; and sendingTimezone &#x3D; \\\&quot;America/Buenos_Aires\\\&quot;, your message will be sent at May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is account timezone. | [optional] 
**Contacts** | **string** | Comma separated array of contact resources id message will be sent to. | [optional] 
**Lists** | **string** | Comma separated array of list resources id message will be sent to. | [optional] 
**Phones** | **string** | Comma separated array of E.164 phone numbers message will be sent to. | [optional] 
**CutExtra** | **bool?** | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to false]
**PartsCount** | **int?** | Maximum message parts count (TextMagic allows sending 1 to 6 message parts). | [optional] 
**ReferenceId** | **int?** | Custom message reference id which can be used in your application infrastructure. | [optional] 
**From** | **string** | One of allowed Sender ID (phone number or alphanumeric sender ID). If specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional] 
**Rrule** | **string** | iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional] 
**CreateChat** | **bool?** | Should sending method try to create new Chat (if not exist) with specified recipients? | [optional] [default to false]
**Tts** | **bool?** | Send a Text-to-Speech message. | [optional] [default to false]
**Local** | **bool?** | Treat phone numbers passed in the \\&#39;phones\\&#39; field as local. | [optional] [default to false]
**LocalCountry** | **string** | The 2-letter ISO country code for local phone numbers, used when \\&#39;local\\&#39; is set to true. Default is the account country. | [optional] 
**Destination** | **string** | Messsage destination type allowed [mms, tts]. | [optional] 
**Resources** | **string** | File name from mms attachment response (named as resource) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

