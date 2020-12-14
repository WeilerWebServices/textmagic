# TextMagicClient.Model.MessageSession
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | Session ID. | 
**StartTime** | **string** | Session creation time. | 
**Text** | **string** | Session text. If a template was used for the session text (see [Messages: Send](https://docs.textmagic.com/#tag/Outbound-Messages) for details), it may contain template tags.  | 
**Source** | **string** | *   **O** – for TextMagic Online; *   **A** – for API; *   **M** – for TextMagic Messenger; *   **E** – for [Email to SMS](https://docs.textmagic.com/#tag/Send-Email-to-SMS); *   **X** – for [Distribution Lists](https://docs.textmagic.com/#tag/Distribution-Lists).  | 
**ReferenceId** | **string** | Custom reference ID (see [Messages: Send](https://docs.textmagic.com/#tag/Send-Email-to-SMS) for details).  | 
**Price** | **decimal?** | Session cost (in account currency). | 
**NumbersCount** | **int?** | Session recipient count. | 
**Destination** | **string** | Destination type of a Message Session: * **t** – text SMS; * **s** – text-to-speech; * **v** – voice broadcast.  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

