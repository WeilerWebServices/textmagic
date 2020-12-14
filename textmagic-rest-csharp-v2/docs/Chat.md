# TextMagicClient.Model.Chat
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | Chat ID. | 
**OriginalId** | **int?** |  | 
**Phone** | **string** | Chat partner&#39;s phone number. | 
**Contact** | [**Contact**](Contact.md) |  | 
**UnsubscribedContactId** | **int?** | If this field has a value, it means that the chat phone number has been unsubscribed from you and this value is an ID of an Unsubscribed contact entity. See [Get all unsubscribed contacts](https://docs.textmagic.com/#operation/getUnsubscribers). | 
**Unread** | **int?** | Total unread incoming messages. | 
**UpdatedAt** | **DateTime?** | Time when the last incoming message arrived at this chat. | 
**Status** | **string** | Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted.  | 
**Mute** | **int?** | Indicates when the chat is muted. | 
**LastMessage** | **string** | The last message content of a chat. | 
**Direction** | **string** | Last message type: * **ci** - incoming call; * **co** - outgoing call; * **i** - incoming message; * **o** - outgoing message.  | 
**From** | **string** | If filled, the value will be used as a sender number for all outgoing messages of a chat. | 
**MutedUntil** | **DateTime?** | Date and time until the chat will be muted. | 
**TimeLeftMute** | **int?** | Time left untill the chat will be unmuted (seconds). | 
**Country** | [**Country**](Country.md) |  | 
**Pinned** | **bool?** | Indicates when the chat is pinned. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

