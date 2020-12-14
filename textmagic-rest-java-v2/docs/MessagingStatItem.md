
# MessagingStatItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replyRate** | **Float** | The number of incoming messages divided by the number of total messages. | 
**date** | [**OffsetDateTime**](OffsetDateTime.md) | Time interval start: empty if the **by** parameter was set to **off**.  | 
**deliveryRate** | **Float** | Message delivery rate:the number of delivered messages divided by the number of total messages. | 
**costs** | **Float** | Cost for sent messages during this period. The costs are in the [Account](https://docs.textmagic.com/#tag/User) currency.  | 
**messagesReceived** | **Integer** | Total received messages count. | 
**messagesSentDelivered** | **Integer** | Delivered messages count. As messages are retried for up to 48 hours, this value could change. | 
**messagesSentAccepted** | **Integer** | Messages accepted for delivery (in queue) but not yet delivered. | 
**messagesSentBuffered** | **Integer** | Messages buffered by endpoint cell phone operators. | 
**messagesSentFailed** | **Integer** | Messages that have failed for whatever reason, e.g. the destination phone was switched off for 48 hours or the recipient&#39;s phone account is out of service. | 
**messagesSentRejected** | **Integer** | Messages that were rejected: invalid Sender ID used (e.g. you cannot use the Sender ID or your own mobile number when sending to the United States and Canada.)  | 
**messagesSentParts** | **Integer** | Total sent messages **parts** count. Note that this is not equal to the sent messages count, because one message could consist of 1 to 6 parts and users are charged per part, not per message. | 



