
# MessagesIcsTextParameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | [**BigDecimal**](BigDecimal.md) | Cost to check that one number is constant – 0.04 in your account currency. | 
**parts** | **Integer** | Message parts (multiples of 160 characters) count. | 
**chars** | **Integer** | Characters count. | 
**encoding** | [**EncodingEnum**](#EncodingEnum) | Message charset. Could be: * **ISO-8859-1** – for plaintext SMS; * **UTF-16BE** – for Unicode SMS.  | 
**countries** | **List&lt;String&gt;** |  | 
**charsetLabel** | **String** | Human-readable message charset label. Could be: *   **ISO-8859-1** for plaintext SMS; *   **UTF-16BE** for Unicode SMS; *   **Voice** for voice services (Text-to-Speech or Voice Broadcast) messages.  | 


<a name="EncodingEnum"></a>
## Enum: EncodingEnum
Name | Value
---- | -----
ISO_8859_1 | &quot;ISO-8859-1&quot;
UTF_16BE | &quot;UTF-16BE&quot;



