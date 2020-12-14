
# UpdateCallbackSettingsInputObject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outUrl** | **String** | This URL is used to push message delivery status updates to your application. |  [optional]
**inUrl** | **String** | This URL is used to push incoming SMS to your application. |  [optional]
**format** | [**FormatEnum**](#FormatEnum) | Desired callback data format. m - multipart/form-data, u - application/x-www-form-urlencoded, j - application/json |  [optional]


<a name="FormatEnum"></a>
## Enum: FormatEnum
Name | Value
---- | -----
M | &quot;m&quot;
U | &quot;u&quot;
J | &quot;j&quot;



