# TextMagicClient.Model.CreateContactInputObject
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | **string** | Contact first name. | [optional] 
**LastName** | **string** | Contact last name. | [optional] 
**Phone** | **string** | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). | [optional] 
**Email** | **string** | Contact email address. | [optional] 
**CompanyName** | **string** | Company name. | [optional] 
**Lists** | **string** | Contact [list](https://docs.textmagic.com/#tag/Lists) ID. Each contact must be assigned to at least one list. | [optional] 
**Favorited** | **bool?** | Is the contact marked as favorite? | [optional] 
**Blocked** | **bool?** | Is the contact blocked for outgoing and incoming messaging? | [optional] 
**Type** | **int?** | Force type of phone. Possible values: 0 is landline; 1 is mobile; default is -1 (auto-detection). | [optional] 
**CustomFieldValues** | [**List&lt;CustomFieldListItem&gt;**](CustomFieldListItem.md) |  | [optional] 
**Local** | **int?** | Treat phone numbers passed in the request body as local. | [optional] 
**Country** | **string** | The 2-letter ISO country code for local phone numbers, used when local is  set to true. Default is the account country. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

