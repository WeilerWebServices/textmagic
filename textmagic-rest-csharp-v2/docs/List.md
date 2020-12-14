# TextMagicClient.Model.List
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int?** | List ID. | 
**Name** | **string** | List name. | 
**Description** | **string** | Description of the list. | 
**Favorited** | **bool?** | Is the List favorited? See [Favorites list](https://docs.textmagic.com/#operation/getFavourites). | 
**MembersCount** | **int?** | List members count. | 
**User** | [**User**](User.md) |  | 
**Service** | **bool?** | Internal service field. | 
**Shared** | **bool?** | Is the list **shared** among all sub-accounts? | 
**Avatar** | [**ListImage**](ListImage.md) |  | 
**IsDefault** | **bool?** | Indicates that List is used as a default. All new contacts added via the Web-app will be added in this List by default. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

