
# GetCallbackSettingsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outUrl** | **String** | This URL is used to push message delivery status updates to your application. | 
**inUrl** | **String** | This URL is used to push incoming SMS to your application. | 
**format** | [**FormatEnum**](#FormatEnum) | Desired callback data format. m - multipart/form-data, u - application/x-www-form-urlencoded, j - application/json. | 


<a name="FormatEnum"></a>
## Enum: FormatEnum
Name | Value
---- | -----
M | &quot;m&quot;
U | &quot;u&quot;
J | &quot;j&quot;



