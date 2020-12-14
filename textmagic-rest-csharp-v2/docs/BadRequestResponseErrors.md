# TextMagicClient.Model.BadRequestResponseErrors
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Common** | **List&lt;string&gt;** | Array of messages with errors related to the entire request. For example, you did not specify either the **text** or the **templateId** when [sending the message](https://docs.textmagic.com/#tag/Outbound-Messages).  | [optional] 
**Fields** | **Object** | Associative array. The keys are the POST/PUT parameter names and the values are arrays with error messages for these parameters.  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

