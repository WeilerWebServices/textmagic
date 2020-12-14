# TextmagicClient.DoEmailLookupResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The email address passed to the call. | 
**status** | **String** | The email is `valid` or `invalid`. | 
**deliverability** | **String** | The delivery status of the email address is`deliverable`, `undeliverable`. or `unknown`. | 
**reason** | **String** | The reason why the checked email is invalid/undeliverable. | 
**risk** | **String** | The risk score of the email is`high`, `medium`, `low` or `null`. | 
**addressType** | **String** | The email address type (domain) is `free` or `corporate`. | 
**isDisposableAddress** | **Boolean** | This is `true` if the domain is in the list of disposable email addresses; otherwise, it returns as `false`. | 
**suggestion** | **String** | Null if nothing is suggested; however, if there is a potential typo in the email address, the closest suggestion is provided. | 
**emailRole** | **String** | Checks the mailbox part of the email to see whether it matches a specific role type (‘admin’, ‘sales’, ‘webmaster’). | 
**localPart** | **String** | The local part of the email address. | 
**domainPart** | **String** | The domain part of the email address. | 
**exchange** | **String** | Email exchange server domain name (MX record value). | 
**preference** | **Number** | MX record preference. | 
**isInWhiteList** | **Boolean** | `true` if the email address exists in the TextMagic whitelist.  | 
**isInBlackList** | **Boolean** | `true` if the email address exists in the TextMagic blacklist.  | 
**hasMx** | **Boolean** | `true` if the email address domain has an MX record.  | 
**hasAa** | **Boolean** | `true` if the email address domain has an A record (IPv4).  | 
**hasAaaa** | **Boolean** | `true` if the email address domain has an AAAA record (IPv6).  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `valid` (value: `"valid"`)

* `invalid` (value: `"invalid"`)




<a name="RiskEnum"></a>
## Enum: RiskEnum


* `high` (value: `"high"`)

* `medium` (value: `"medium"`)

* `low` (value: `"low"`)

* `unknown` (value: `"unknown"`)




<a name="AddressTypeEnum"></a>
## Enum: AddressTypeEnum


* `corporate` (value: `"corporate"`)

* `free` (value: `"free"`)




