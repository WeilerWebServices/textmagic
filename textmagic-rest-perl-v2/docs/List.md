# Net::Sms::TextMagicClient::Object::List

## Load the model package
```perl
use Net::Sms::TextMagicClient::Object::List;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | List ID. | 
**name** | **string** | List name. | 
**description** | **string** | Description of the list. | 
**favorited** | **boolean** | Is the List favorited? See [Favorites list](https://docs.textmagic.com/#operation/getFavourites). | 
**members_count** | **int** | List members count. | 
**user** | [**User**](User.md) |  | 
**service** | **boolean** | Internal service field. | 
**shared** | **boolean** | Is the list **shared** among all sub-accounts? | 
**avatar** | [**ListImage**](ListImage.md) |  | 
**is_default** | **boolean** | Indicates that List is used as a default. All new contacts added via the Web-app will be added in this List by default. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


