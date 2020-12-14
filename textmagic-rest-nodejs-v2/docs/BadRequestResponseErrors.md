# TextmagicClient.BadRequestResponseErrors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | **[String]** | Array of messages with errors related to the entire request. For example, you did not specify either the **text** or the **templateId** when [sending the message](https://docs.textmagic.com/#tag/Outbound-Messages).  | [optional] 
**fields** | **Object** | Associative array. The keys are the POST/PUT parameter names and the values are arrays with error messages for these parameters.  | [optional] 


