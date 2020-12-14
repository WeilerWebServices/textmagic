# TextMagicClient.Model.Conversation
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** |  | 
**Direction** | **string** | Message type: inbound or outbound.  | 
**Sender** | **string** | Sender phone number. | 
**MessageTime** | **DateTime?** | Time when  the message arrived at TextMagic. | 
**Text** | **string** | Message text. | 
**Receiver** | **string** | Receiver&#39;s phone number. | 
**Status** | **string** | Message status (for chats outbound only). See [message delivery statuses](https://docs.textmagic.com/#section/Delivery-status-codes) for details. | 
**FirstName** | **string** | Contact first name. | 
**LastName** | **string** | Contact last name. | 
**SessionId** | **int?** | Session ID of a message. See [message sessions](https://docs.textmagic.com/#tag/Outbound-Message-Sessions) for details. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

