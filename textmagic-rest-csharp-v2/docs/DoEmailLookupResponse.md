# TextMagicClient.Model.DoEmailLookupResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | **string** | The email address passed to the call. | 
**Status** | **string** | The email is &#x60;valid&#x60; or &#x60;invalid&#x60;. | 
**Deliverability** | **string** | The delivery status of the email address is&#x60;deliverable&#x60;, &#x60;undeliverable&#x60;. or &#x60;unknown&#x60;. | 
**Reason** | **string** | The reason why the checked email is invalid/undeliverable. | 
**Risk** | **string** | The risk score of the email is&#x60;high&#x60;, &#x60;medium&#x60;, &#x60;low&#x60; or &#x60;null&#x60;. | 
**AddressType** | **string** | The email address type (domain) is &#x60;free&#x60; or &#x60;corporate&#x60;. | 
**IsDisposableAddress** | **bool?** | This is &#x60;true&#x60; if the domain is in the list of disposable email addresses; otherwise, it returns as &#x60;false&#x60;. | 
**Suggestion** | **string** | Null if nothing is suggested; however, if there is a potential typo in the email address, the closest suggestion is provided. | 
**EmailRole** | **string** | Checks the mailbox part of the email to see whether it matches a specific role type (‘admin’, ‘sales’, ‘webmaster’). | 
**LocalPart** | **string** | The local part of the email address. | 
**DomainPart** | **string** | The domain part of the email address. | 
**Exchange** | **string** | Email exchange server domain name (MX record value). | 
**Preference** | **int?** | MX record preference. | 
**IsInWhiteList** | **bool?** | &#x60;true&#x60; if the email address exists in the TextMagic whitelist.  | 
**IsInBlackList** | **bool?** | &#x60;true&#x60; if the email address exists in the TextMagic blacklist.  | 
**HasMx** | **bool?** | &#x60;true&#x60; if the email address domain has an MX record.  | 
**HasAa** | **bool?** | &#x60;true&#x60; if the email address domain has an A record (IPv4).  | 
**HasAaaa** | **bool?** | &#x60;true&#x60; if the email address domain has an AAAA record (IPv6).  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

