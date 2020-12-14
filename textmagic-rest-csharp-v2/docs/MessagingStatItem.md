# TextMagicClient.Model.MessagingStatItem
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReplyRate** | **float?** | The number of incoming messages divided by the number of total messages. | 
**Date** | **DateTime?** | Time interval start: empty if the **by** parameter was set to **off**.  | 
**DeliveryRate** | **float?** | Message delivery rate:the number of delivered messages divided by the number of total messages. | 
**Costs** | **float?** | Cost for sent messages during this period. The costs are in the [Account](https://docs.textmagic.com/#tag/User) currency.  | 
**MessagesReceived** | **int?** | Total received messages count. | 
**MessagesSentDelivered** | **int?** | Delivered messages count. As messages are retried for up to 48 hours, this value could change. | 
**MessagesSentAccepted** | **int?** | Messages accepted for delivery (in queue) but not yet delivered. | 
**MessagesSentBuffered** | **int?** | Messages buffered by endpoint cell phone operators. | 
**MessagesSentFailed** | **int?** | Messages that have failed for whatever reason, e.g. the destination phone was switched off for 48 hours or the recipient&#39;s phone account is out of service. | 
**MessagesSentRejected** | **int?** | Messages that were rejected: invalid Sender ID used (e.g. you cannot use the Sender ID or your own mobile number when sending to the United States and Canada.)  | 
**MessagesSentParts** | **int?** | Total sent messages **parts** count. Note that this is not equal to the sent messages count, because one message could consist of 1 to 6 parts and users are charged per part, not per message. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

