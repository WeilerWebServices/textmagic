# CreateContactInputObject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | **string** | Contact first name. | [optional] [default to null]
**LastName** | **string** | Contact last name. | [optional] [default to null]
**Phone** | **string** | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). | [optional] [default to null]
**Email** | **string** | Contact email address. | [optional] [default to null]
**CompanyName** | **string** | Company name. | [optional] [default to null]
**Lists** | **string** | Contact [list](https://docs.textmagic.com/#tag/Lists) ID. Each contact must be assigned to at least one list. | [optional] [default to null]
**Favorited** | **bool** | Is the contact marked as favorite? | [optional] [default to null]
**Blocked** | **bool** | Is the contact blocked for outgoing and incoming messaging? | [optional] [default to null]
**Type_** | **int32** | Force type of phone. Possible values: 0 is landline; 1 is mobile; default is -1 (auto-detection). | [optional] [default to null]
**CustomFieldValues** | [**[]CustomFieldListItem**](CustomFieldListItem.md) |  | [optional] [default to null]
**Local** | **int32** | Treat phone numbers passed in the request body as local. | [optional] [default to null]
**Country** | **string** | The 2-letter ISO country code for local phone numbers, used when local is  set to true. Default is the account country. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


