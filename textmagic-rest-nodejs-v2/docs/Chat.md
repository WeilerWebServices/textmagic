# TextmagicClient.Chat

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Chat ID. | 
**originalId** | **Number** |  | 
**phone** | **String** | Chat partner's phone number. | 
**contact** | [**Contact**](Contact.md) |  | 
**unsubscribedContactId** | **Number** | If this field has a value, it means that the chat phone number has been unsubscribed from you and this value is an ID of an Unsubscribed contact entity. See [Get all unsubscribed contacts](https://docs.textmagic.com/#operation/getUnsubscribers). | 
**unread** | **Number** | Total unread incoming messages. | 
**updatedAt** | **Date** | Time when the last incoming message arrived at this chat. | 
**status** | **String** | Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted.  | 
**mute** | **Number** | Indicates when the chat is muted. | 
**lastMessage** | **String** | The last message content of a chat. | 
**direction** | **String** | Last message type: * **ci** - incoming call; * **co** - outgoing call; * **i** - incoming message; * **o** - outgoing message.  | 
**from** | **String** | If filled, the value will be used as a sender number for all outgoing messages of a chat. | 
**mutedUntil** | **Date** | Date and time until the chat will be muted. | 
**timeLeftMute** | **Number** | Time left untill the chat will be unmuted (seconds). | 
**country** | [**Country**](Country.md) |  | 
**pinned** | **Boolean** | Indicates when the chat is pinned. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `a` (value: `"a"`)

* `c` (value: `"c"`)

* `d` (value: `"d"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `ci` (value: `"ci"`)

* `co` (value: `"co"`)

* `i` (value: `"i"`)

* `o` (value: `"o"`)




