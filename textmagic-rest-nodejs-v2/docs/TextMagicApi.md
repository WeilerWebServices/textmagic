# TextmagicClient.TextMagicApi

All URIs are relative to *https://rest.textmagic.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignContactsToList**](TextMagicApi.md#assignContactsToList) | **PUT** /api/v2/lists/{id}/contacts | Assign contacts to a list
[**blockContact**](TextMagicApi.md#blockContact) | **POST** /api/v2/contacts/block | Block a contact by phone number
[**buyDedicatedNumber**](TextMagicApi.md#buyDedicatedNumber) | **POST** /api/v2/numbers | Buy a dedicated number
[**cancelVerification**](TextMagicApi.md#cancelVerification) | **DELETE** /api/v2/verify/{verifyId} | Cancel verification process
[**checkPhoneVerificationCodeTFA**](TextMagicApi.md#checkPhoneVerificationCodeTFA) | **PUT** /api/v2/verify | Step 2: Check the verification code 
[**clearAndAssignContactsToList**](TextMagicApi.md#clearAndAssignContactsToList) | **POST** /api/v2/lists/{id}/contacts | Reset list members to the specified contacts
[**closeChatsBulk**](TextMagicApi.md#closeChatsBulk) | **POST** /api/v2/chats/close/bulk | Close chats (bulk)
[**closeReadChats**](TextMagicApi.md#closeReadChats) | **POST** /api/v2/chats/close/read | Close read chats
[**closeSubaccount**](TextMagicApi.md#closeSubaccount) | **DELETE** /api/v2/subaccounts/{id} | Close sub-account
[**createContact**](TextMagicApi.md#createContact) | **POST** /api/v2/contacts/normalized | Add a new contact
[**createContactNote**](TextMagicApi.md#createContactNote) | **POST** /api/v2/contacts/{id}/notes | Create a new contact note
[**createCustomField**](TextMagicApi.md#createCustomField) | **POST** /api/v2/customfields | Add a new custom field
[**createList**](TextMagicApi.md#createList) | **POST** /api/v2/lists | Create a new list
[**createTemplate**](TextMagicApi.md#createTemplate) | **POST** /api/v2/templates | Create a template
[**deleteAllContacts**](TextMagicApi.md#deleteAllContacts) | **DELETE** /api/v2/contact/all | Delete contacts (bulk)
[**deleteAllOutboundMessages**](TextMagicApi.md#deleteAllOutboundMessages) | **DELETE** /api/v2/message/all | Delete all messages
[**deleteAvatar**](TextMagicApi.md#deleteAvatar) | **DELETE** /api/v2/user/avatar | Delete an avatar
[**deleteChatMessages**](TextMagicApi.md#deleteChatMessages) | **POST** /api/v2/chats/{id}/messages/delete | Delete chat messages by ID(s)
[**deleteChatsBulk**](TextMagicApi.md#deleteChatsBulk) | **POST** /api/v2/chats/delete | Delete chats (bulk)
[**deleteContact**](TextMagicApi.md#deleteContact) | **DELETE** /api/v2/contacts/{id} | Delete a contact
[**deleteContactAvatar**](TextMagicApi.md#deleteContactAvatar) | **DELETE** /api/v2/contacts/{id}/avatar | Delete an avatar
[**deleteContactNote**](TextMagicApi.md#deleteContactNote) | **DELETE** /api/v2/notes/{id} | Delete a contact note
[**deleteContactNotesBulk**](TextMagicApi.md#deleteContactNotesBulk) | **POST** /api/v2/contacts/{id}/notes/delete | Delete contact notes (bulk)
[**deleteContactsByIds**](TextMagicApi.md#deleteContactsByIds) | **POST** /api/v2/contacts/delete | Delete contacts by IDs (bulk)
[**deleteContactsFromList**](TextMagicApi.md#deleteContactsFromList) | **DELETE** /api/v2/lists/{id}/contacts | Unassign contacts from a list
[**deleteCustomField**](TextMagicApi.md#deleteCustomField) | **DELETE** /api/v2/customfields/{id} | Delete a custom field
[**deleteDedicatedNumber**](TextMagicApi.md#deleteDedicatedNumber) | **DELETE** /api/v2/numbers/{id} | Cancel a dedicated number subscription
[**deleteInboundMessage**](TextMagicApi.md#deleteInboundMessage) | **DELETE** /api/v2/replies/{id} | Delete a single inbound message
[**deleteInboundMessagesBulk**](TextMagicApi.md#deleteInboundMessagesBulk) | **POST** /api/v2/replies/delete | Delete inbound messages (bulk)
[**deleteList**](TextMagicApi.md#deleteList) | **DELETE** /api/v2/lists/{id} | Delete a list
[**deleteListAvatar**](TextMagicApi.md#deleteListAvatar) | **DELETE** /api/v2/lists/{id}/avatar | Delete an avatar for a list
[**deleteListContactsBulk**](TextMagicApi.md#deleteListContactsBulk) | **POST** /api/v2/lists/{id}/contacts/delete | Delete contacts from a list (bulk)
[**deleteListsBulk**](TextMagicApi.md#deleteListsBulk) | **POST** /api/v2/lists/delete | Delete lists (bulk)
[**deleteMessageSession**](TextMagicApi.md#deleteMessageSession) | **DELETE** /api/v2/sessions/{id} | Delete a session
[**deleteMessageSessionsBulk**](TextMagicApi.md#deleteMessageSessionsBulk) | **POST** /api/v2/sessions/delete | Delete sessions (bulk)
[**deleteOutboundMessage**](TextMagicApi.md#deleteOutboundMessage) | **DELETE** /api/v2/messages/{id} | Delete message
[**deleteOutboundMessagesBulk**](TextMagicApi.md#deleteOutboundMessagesBulk) | **POST** /api/v2/messages/delete | Delete messages (bulk)
[**deleteScheduledMessage**](TextMagicApi.md#deleteScheduledMessage) | **DELETE** /api/v2/schedules/{id} | Delete a single scheduled message
[**deleteScheduledMessagesBulk**](TextMagicApi.md#deleteScheduledMessagesBulk) | **POST** /api/v2/schedules/delete | Delete scheduled messages (bulk)
[**deleteSenderId**](TextMagicApi.md#deleteSenderId) | **DELETE** /api/v2/senderids/{id} | Delete a Sender ID
[**deleteTemplate**](TextMagicApi.md#deleteTemplate) | **DELETE** /api/v2/templates/{id} | Delete a template
[**deleteTemplatesBulk**](TextMagicApi.md#deleteTemplatesBulk) | **POST** /api/v2/templates/delete | Delete templates (bulk)
[**doCarrierLookup**](TextMagicApi.md#doCarrierLookup) | **GET** /api/v2/lookups/{phone} | Carrier Lookup
[**doEmailLookup**](TextMagicApi.md#doEmailLookup) | **GET** /api/v2/email-lookups/{email} | Email Lookup
[**getAllBulkSessions**](TextMagicApi.md#getAllBulkSessions) | **GET** /api/v2/bulks | Get all bulk sessions
[**getAllChats**](TextMagicApi.md#getAllChats) | **GET** /api/v2/chats | Get all chats
[**getAllInboundMessages**](TextMagicApi.md#getAllInboundMessages) | **GET** /api/v2/replies | Get all inbound messages
[**getAllMessageSessions**](TextMagicApi.md#getAllMessageSessions) | **GET** /api/v2/sessions | Get all sessions
[**getAllOutboundMessages**](TextMagicApi.md#getAllOutboundMessages) | **GET** /api/v2/messages | Get all messages
[**getAllScheduledMessages**](TextMagicApi.md#getAllScheduledMessages) | **GET** /api/v2/schedules | Get all scheduled messages
[**getAllTemplates**](TextMagicApi.md#getAllTemplates) | **GET** /api/v2/templates | Get all templates
[**getAvailableDedicatedNumbers**](TextMagicApi.md#getAvailableDedicatedNumbers) | **GET** /api/v2/numbers/available | Find dedicated numbers available for purchase
[**getAvailableSenderSettingOptions**](TextMagicApi.md#getAvailableSenderSettingOptions) | **GET** /api/v2/sources | Get available sender settings
[**getBalanceNotificationOptions**](TextMagicApi.md#getBalanceNotificationOptions) | **GET** /api/v2/user/notification/balance/bundles | Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance
[**getBalanceNotificationSettings**](TextMagicApi.md#getBalanceNotificationSettings) | **GET** /api/v2/user/notification/balance | Get balance notification settings
[**getBlockedContacts**](TextMagicApi.md#getBlockedContacts) | **GET** /api/v2/contacts/block/list | Get blocked contacts
[**getBulkSession**](TextMagicApi.md#getBulkSession) | **GET** /api/v2/bulks/{id} | Get bulk session status
[**getCallbackSettings**](TextMagicApi.md#getCallbackSettings) | **GET** /api/v2/callback/settings | Fetch callback URL settings
[**getChat**](TextMagicApi.md#getChat) | **GET** /api/v2/chats/{id} | Get a single chat
[**getChatByPhone**](TextMagicApi.md#getChatByPhone) | **GET** /api/v2/chats/{phone}/by/phone | Find chats by phone
[**getChatMessages**](TextMagicApi.md#getChatMessages) | **GET** /api/v2/chats/{id}/message | Get chat messages
[**getContact**](TextMagicApi.md#getContact) | **GET** /api/v2/contacts/{id} | Get the details of a specific contact
[**getContactByPhone**](TextMagicApi.md#getContactByPhone) | **GET** /api/v2/contacts/phone/{phone} | Get the details of a specific contact by phone number
[**getContactIfBlocked**](TextMagicApi.md#getContactIfBlocked) | **GET** /api/v2/contacts/block/phone | Check if a phone number is blocked
[**getContactImportSessionProgress**](TextMagicApi.md#getContactImportSessionProgress) | **GET** /api/v2/contacts/import/progress/{id} | Check import progress
[**getContactNote**](TextMagicApi.md#getContactNote) | **GET** /api/v2/notes/{id} | Get a contact note
[**getContactNotes**](TextMagicApi.md#getContactNotes) | **GET** /api/v2/contacts/{id}/notes | Fetch notes assigned to a given contact
[**getContacts**](TextMagicApi.md#getContacts) | **GET** /api/v2/contacts | Get all contacts
[**getContactsAutocomplete**](TextMagicApi.md#getContactsAutocomplete) | **GET** /api/v2/contacts/autocomplete | Get contacts autocomplete suggestions
[**getContactsByListId**](TextMagicApi.md#getContactsByListId) | **GET** /api/v2/lists/{id}/contacts | Get all contacts in a list
[**getCountries**](TextMagicApi.md#getCountries) | **GET** /api/v2/countries | Get countries
[**getCurrentUser**](TextMagicApi.md#getCurrentUser) | **GET** /api/v2/user | Get current account information
[**getCustomField**](TextMagicApi.md#getCustomField) | **GET** /api/v2/customfields/{id} | Get the details of a specific custom field
[**getCustomFields**](TextMagicApi.md#getCustomFields) | **GET** /api/v2/customfields | Get all custom fields
[**getDedicatedNumber**](TextMagicApi.md#getDedicatedNumber) | **GET** /api/v2/numbers/{id} | Get the details of a specific dedicated number
[**getFavorites**](TextMagicApi.md#getFavorites) | **GET** /api/v2/contacts/favorite | Get favorite contacts and lists
[**getInboundMessage**](TextMagicApi.md#getInboundMessage) | **GET** /api/v2/replies/{id} | Get a single inbound message
[**getInboundMessagesNotificationSettings**](TextMagicApi.md#getInboundMessagesNotificationSettings) | **GET** /api/v2/user/notification/inbound | Get inbound messages notification settings
[**getInvoices**](TextMagicApi.md#getInvoices) | **GET** /api/v2/invoices | Get all invoices
[**getList**](TextMagicApi.md#getList) | **GET** /api/v2/lists/{id} | Get the details of a specific list
[**getListContactsIds**](TextMagicApi.md#getListContactsIds) | **GET** /api/v2/lists/{id}/contacts/ids | Get all contact IDs in a list
[**getLists**](TextMagicApi.md#getLists) | **GET** /api/v2/lists | Get all lists
[**getListsOfContact**](TextMagicApi.md#getListsOfContact) | **GET** /api/v2/contacts/{id}/lists | Get a contact's lists
[**getMessagePreview**](TextMagicApi.md#getMessagePreview) | **GET** /api/v2/messages/preview | Preview message
[**getMessagePrice**](TextMagicApi.md#getMessagePrice) | **GET** /api/v2/messages/price/normalized | Check message price
[**getMessageSession**](TextMagicApi.md#getMessageSession) | **GET** /api/v2/sessions/{id} | Get a session`s details
[**getMessageSessionStat**](TextMagicApi.md#getMessageSessionStat) | **GET** /api/v2/sessions/{id}/stat | Get a session`s statistics
[**getMessagesBySessionId**](TextMagicApi.md#getMessagesBySessionId) | **GET** /api/v2/sessions/{id}/messages | Get a session`s messages
[**getMessagingCounters**](TextMagicApi.md#getMessagingCounters) | **GET** /api/v2/stats/messaging/data | Get sent/received messages counters values
[**getMessagingStat**](TextMagicApi.md#getMessagingStat) | **GET** /api/v2/stats/messaging | Get messaging statistics
[**getOutboundMessage**](TextMagicApi.md#getOutboundMessage) | **GET** /api/v2/messages/{id} | Get a single message
[**getOutboundMessagesHistory**](TextMagicApi.md#getOutboundMessagesHistory) | **GET** /api/v2/history | Get history
[**getScheduledMessage**](TextMagicApi.md#getScheduledMessage) | **GET** /api/v2/schedules/{id} | Get a single scheduled message
[**getSenderId**](TextMagicApi.md#getSenderId) | **GET** /api/v2/senderids/{id} | Get the details of a specific Sender ID
[**getSenderIds**](TextMagicApi.md#getSenderIds) | **GET** /api/v2/senderids | Get all your approved Sender IDs
[**getSenderSettings**](TextMagicApi.md#getSenderSettings) | **GET** /api/v2/sender/settings/normalized | Get current sender settings
[**getSpendingStat**](TextMagicApi.md#getSpendingStat) | **GET** /api/v2/stats/spending | Get spending statistics
[**getSubaccount**](TextMagicApi.md#getSubaccount) | **GET** /api/v2/subaccounts/{id} | Get sub-account information
[**getSubaccounts**](TextMagicApi.md#getSubaccounts) | **GET** /api/v2/subaccounts | Get a sub-accounts list
[**getSubaccountsWithTokens**](TextMagicApi.md#getSubaccountsWithTokens) | **POST** /api/v2/subaccounts/tokens/list | Get all sub-accounts with their REST API tokens associated with a specified app name
[**getTemplate**](TextMagicApi.md#getTemplate) | **GET** /api/v2/templates/{id} | Get a template`s details
[**getTimezones**](TextMagicApi.md#getTimezones) | **GET** /api/v2/timezones | Get timezones
[**getUnreadMessagesTotal**](TextMagicApi.md#getUnreadMessagesTotal) | **GET** /api/v2/chats/unread/count | Get unread messages number
[**getUnsubscribedContact**](TextMagicApi.md#getUnsubscribedContact) | **GET** /api/v2/unsubscribers/{id} | Get the details of a specific unsubscribed contact
[**getUnsubscribers**](TextMagicApi.md#getUnsubscribers) | **GET** /api/v2/unsubscribers | Get all unsubscribed contacts
[**getUserDedicatedNumbers**](TextMagicApi.md#getUserDedicatedNumbers) | **GET** /api/v2/numbers | Get all your dedicated numbers
[**importContacts**](TextMagicApi.md#importContacts) | **POST** /api/v2/contacts/import/normalized | Import contacts
[**inviteSubaccount**](TextMagicApi.md#inviteSubaccount) | **POST** /api/v2/subaccounts | Invite a new sub-account
[**markChatsReadBulk**](TextMagicApi.md#markChatsReadBulk) | **POST** /api/v2/chats/read/bulk | Mark chats as read (bulk)
[**markChatsUnreadBulk**](TextMagicApi.md#markChatsUnreadBulk) | **POST** /api/v2/chats/unread/bulk | Mark chats as unread (bulk)
[**muteChat**](TextMagicApi.md#muteChat) | **POST** /api/v2/chats/mute | Mute chat sounds
[**muteChatsBulk**](TextMagicApi.md#muteChatsBulk) | **POST** /api/v2/chats/mute/bulk | Mute chats (bulk)
[**ping**](TextMagicApi.md#ping) | **GET** /api/v2/ping | Ping
[**reopenChatsBulk**](TextMagicApi.md#reopenChatsBulk) | **POST** /api/v2/chats/reopen/bulk | Reopen chats (bulk)
[**requestNewSubaccountToken**](TextMagicApi.md#requestNewSubaccountToken) | **POST** /api/v2/subaccounts/tokens | Request a new REST API token for sub-account
[**requestSenderId**](TextMagicApi.md#requestSenderId) | **POST** /api/v2/senderids | Apply for a new Sender ID
[**searchChats**](TextMagicApi.md#searchChats) | **GET** /api/v2/chats/search | Find chats by message text
[**searchChatsByIds**](TextMagicApi.md#searchChatsByIds) | **GET** /api/v2/chats/search/ids | Find chats (bulk)
[**searchChatsByReceipent**](TextMagicApi.md#searchChatsByReceipent) | **GET** /api/v2/chats/search/recipients | Find chats by recipient
[**searchContacts**](TextMagicApi.md#searchContacts) | **GET** /api/v2/contacts/search | Find contacts by given criteria
[**searchInboundMessages**](TextMagicApi.md#searchInboundMessages) | **GET** /api/v2/replies/search | Find inbound messages
[**searchLists**](TextMagicApi.md#searchLists) | **GET** /api/v2/lists/search | Find lists by given criteria
[**searchOutboundMessages**](TextMagicApi.md#searchOutboundMessages) | **GET** /api/v2/messages/search | Find messages
[**searchScheduledMessages**](TextMagicApi.md#searchScheduledMessages) | **GET** /api/v2/schedules/search | Find scheduled messages
[**searchTemplates**](TextMagicApi.md#searchTemplates) | **GET** /api/v2/templates/search | Find templates by criteria
[**sendMessage**](TextMagicApi.md#sendMessage) | **POST** /api/v2/messages | Send message
[**sendPhoneVerificationCodeTFA**](TextMagicApi.md#sendPhoneVerificationCodeTFA) | **POST** /api/v2/verify | Step 1: Send a verification code 
[**setChatStatus**](TextMagicApi.md#setChatStatus) | **POST** /api/v2/chats/status | Change chat status
[**unblockContact**](TextMagicApi.md#unblockContact) | **POST** /api/v2/contacts/unblock | Unblock a contact by phone number
[**unblockContactsBulk**](TextMagicApi.md#unblockContactsBulk) | **POST** /api/v2/contacts/unblock/bulk | Unblock contacts (bulk)
[**unmuteChatsBulk**](TextMagicApi.md#unmuteChatsBulk) | **POST** /api/v2/chats/unmute/bulk | Unmute chats (bulk)
[**unsubscribeContact**](TextMagicApi.md#unsubscribeContact) | **POST** /api/v2/unsubscribers | Manually unsubscribe a contact
[**updateBalanceNotificationSettings**](TextMagicApi.md#updateBalanceNotificationSettings) | **PUT** /api/v2/user/notification/balance | Update balance notification settings
[**updateCallbackSettings**](TextMagicApi.md#updateCallbackSettings) | **PUT** /api/v2/callback/settings | Update callback URL settings
[**updateChatDesktopNotificationSettings**](TextMagicApi.md#updateChatDesktopNotificationSettings) | **PUT** /api/v2/user/desktop/notification | Update chat desktop notification settings
[**updateContact**](TextMagicApi.md#updateContact) | **PUT** /api/v2/contacts/{id}/normalized | Edit a contact
[**updateContactNote**](TextMagicApi.md#updateContactNote) | **PUT** /api/v2/notes/{id} | Update a contact note
[**updateCurrentUser**](TextMagicApi.md#updateCurrentUser) | **PUT** /api/v2/user | Edit current account info
[**updateCustomField**](TextMagicApi.md#updateCustomField) | **PUT** /api/v2/customfields/{id} | Edit a custom field
[**updateCustomFieldValue**](TextMagicApi.md#updateCustomFieldValue) | **PUT** /api/v2/customfields/{id}/update | Edit the custom field value of a specified contact
[**updateInboundMessagesNotificationSettings**](TextMagicApi.md#updateInboundMessagesNotificationSettings) | **PUT** /api/v2/user/notification/inbound | Update inbound messages notification settings
[**updateList**](TextMagicApi.md#updateList) | **PUT** /api/v2/lists/{id} | Edit a list
[**updateSenderSetting**](TextMagicApi.md#updateSenderSetting) | **PUT** /api/v2/sender/settings | Change sender settings
[**updateTemplate**](TextMagicApi.md#updateTemplate) | **PUT** /api/v2/templates/{id} | Update a template
[**uploadAvatar**](TextMagicApi.md#uploadAvatar) | **POST** /api/v2/user/avatar | Upload an avatar
[**uploadContactAvatar**](TextMagicApi.md#uploadContactAvatar) | **POST** /api/v2/contacts/{id}/avatar | Upload an avatar
[**uploadListAvatar**](TextMagicApi.md#uploadListAvatar) | **POST** /api/v2/lists/{id}/avatar | Add an avatar for a list
[**uploadMessageAttachment**](TextMagicApi.md#uploadMessageAttachment) | **POST** /api/v2/messages/attachment | Upload message attachment
[**uploadMessageMMSAttachment**](TextMagicApi.md#uploadMessageMMSAttachment) | **POST** /api/v2/messages/mms/attachment | Upload message mms attachment


<a name="assignContactsToList"></a>
# **assignContactsToList**
> ResourceLinkResponse assignContactsToList(assignContactsToListInputObject, id)

Assign contacts to a list

> Unlike all other PUT requests, this command does not need old contact IDs to be submitted. For example, if you have a list with contacts 150, 151 and 152 and you want to add contact ID 153, you only need to submit 153 as a parameter of PUT /api/v2/lists/{id}/contacts. 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var assignContactsToListInputObject = new TextmagicClient.AssignContactsToListInputObject(); // AssignContactsToListInputObject | 

var id = 1; // Number | 

apiInstance.assignContactsToList(assignContactsToListInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignContactsToListInputObject** | [**AssignContactsToListInputObject**](AssignContactsToListInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blockContact"></a>
# **blockContact**
> ResourceLinkResponse blockContact(blockContactInputObject)

Block a contact by phone number

Block a contact from inbound and outbound communication by phone number.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var blockContactInputObject = new TextmagicClient.BlockContactInputObject(); // BlockContactInputObject | 

apiInstance.blockContact(blockContactInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockContactInputObject** | [**BlockContactInputObject**](BlockContactInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buyDedicatedNumber"></a>
# **buyDedicatedNumber**
> buyDedicatedNumber(buyDedicatedNumberInputObject)

Buy a dedicated number

To buy a dedicated number, you first need to find an available number matching your criteria using the `/api/v2/numbers/available` command described above.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var buyDedicatedNumberInputObject = new TextmagicClient.BuyDedicatedNumberInputObject(); // BuyDedicatedNumberInputObject | 

apiInstance.buyDedicatedNumber(buyDedicatedNumberInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyDedicatedNumberInputObject** | [**BuyDedicatedNumberInputObject**](BuyDedicatedNumberInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelVerification"></a>
# **cancelVerification**
> cancelVerification(verifyId)

Cancel verification process

You can cancel the verification not earlier than 30 seconds after the initial request.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var verifyId = "123e4567-e89b-12d3-a456-426655440000"; // String | The verifyId that you received in Step 1.

apiInstance.cancelVerification(verifyId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyId** | **String**| The verifyId that you received in Step 1. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkPhoneVerificationCodeTFA"></a>
# **checkPhoneVerificationCodeTFA**
> checkPhoneVerificationCodeTFA(checkPhoneVerificationCodeTFAInputObject)

Step 2: Check the verification code 

Check received code from user with the code which was actually sent.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var checkPhoneVerificationCodeTFAInputObject = new TextmagicClient.CheckPhoneVerificationCodeTFAInputObject(); // CheckPhoneVerificationCodeTFAInputObject | 

apiInstance.checkPhoneVerificationCodeTFA(checkPhoneVerificationCodeTFAInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPhoneVerificationCodeTFAInputObject** | [**CheckPhoneVerificationCodeTFAInputObject**](CheckPhoneVerificationCodeTFAInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearAndAssignContactsToList"></a>
# **clearAndAssignContactsToList**
> ResourceLinkResponse clearAndAssignContactsToList(clearAndAssignContactsToListInputObject, id)

Reset list members to the specified contacts



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var clearAndAssignContactsToListInputObject = new TextmagicClient.ClearAndAssignContactsToListInputObject(); // ClearAndAssignContactsToListInputObject | 

var id = 1; // Number | 

apiInstance.clearAndAssignContactsToList(clearAndAssignContactsToListInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clearAndAssignContactsToListInputObject** | [**ClearAndAssignContactsToListInputObject**](ClearAndAssignContactsToListInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="closeChatsBulk"></a>
# **closeChatsBulk**
> closeChatsBulk(closeChatsBulkInputObject)

Close chats (bulk)

Close chats by chat IDs or close all chats

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var closeChatsBulkInputObject = new TextmagicClient.CloseChatsBulkInputObject(); // CloseChatsBulkInputObject | 

apiInstance.closeChatsBulk(closeChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeChatsBulkInputObject** | [**CloseChatsBulkInputObject**](CloseChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="closeReadChats"></a>
# **closeReadChats**
> closeReadChats()

Close read chats

Close all chats that have no unread messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.closeReadChats().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="closeSubaccount"></a>
# **closeSubaccount**
> closeSubaccount(id)

Close sub-account



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.closeSubaccount(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="createContact"></a>
# **createContact**
> ResourceLinkResponse createContact(createContactInputObject)

Add a new contact



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createContactInputObject = new TextmagicClient.CreateContactInputObject(); // CreateContactInputObject | 

apiInstance.createContact(createContactInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactInputObject** | [**CreateContactInputObject**](CreateContactInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContactNote"></a>
# **createContactNote**
> ResourceLinkResponse createContactNote(createContactNoteInputObject, id)

Create a new contact note



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createContactNoteInputObject = new TextmagicClient.CreateContactNoteInputObject(); // CreateContactNoteInputObject | 

var id = 1; // Number | 

apiInstance.createContactNote(createContactNoteInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactNoteInputObject** | [**CreateContactNoteInputObject**](CreateContactNoteInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCustomField"></a>
# **createCustomField**
> ResourceLinkResponse createCustomField(createCustomFieldInputObject)

Add a new custom field



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createCustomFieldInputObject = new TextmagicClient.CreateCustomFieldInputObject(); // CreateCustomFieldInputObject | 

apiInstance.createCustomField(createCustomFieldInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomFieldInputObject** | [**CreateCustomFieldInputObject**](CreateCustomFieldInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createList"></a>
# **createList**
> ResourceLinkResponse createList(createListInputObject)

Create a new list



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createListInputObject = new TextmagicClient.CreateListInputObject(); // CreateListInputObject | 

apiInstance.createList(createListInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createListInputObject** | [**CreateListInputObject**](CreateListInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTemplate"></a>
# **createTemplate**
> ResourceLinkResponse createTemplate(createTemplateInputObject)

Create a template

There are times when creating a new template makes sense (such as when targeting specific clients or improving your business strategies).  You can create new SMS templates for marketing purposes or SMS templates for business campaigns. 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var createTemplateInputObject = new TextmagicClient.CreateTemplateInputObject(); // CreateTemplateInputObject | 

apiInstance.createTemplate(createTemplateInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTemplateInputObject** | [**CreateTemplateInputObject**](CreateTemplateInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAllContacts"></a>
# **deleteAllContacts**
> deleteAllContacts()

Delete contacts (bulk)



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.deleteAllContacts().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteAllOutboundMessages"></a>
# **deleteAllOutboundMessages**
> deleteAllOutboundMessages()

Delete all messages

Delete all messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.deleteAllOutboundMessages().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteAvatar"></a>
# **deleteAvatar**
> deleteAvatar()

Delete an avatar



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.deleteAvatar().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteChatMessages"></a>
# **deleteChatMessages**
> deleteChatMessages(deleteChatMessagesBulkInputObject, id)

Delete chat messages by ID(s)

Delete messages from chat by given message IDs.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteChatMessagesBulkInputObject = new TextmagicClient.DeleteChatMessagesBulkInputObject(); // DeleteChatMessagesBulkInputObject | 

var id = 1; // Number | 

apiInstance.deleteChatMessages(deleteChatMessagesBulkInputObject, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatMessagesBulkInputObject** | [**DeleteChatMessagesBulkInputObject**](DeleteChatMessagesBulkInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteChatsBulk"></a>
# **deleteChatsBulk**
> deleteChatsBulk(deleteChatsBulkInputObject)

Delete chats (bulk)

Delete chats by given IDs or delete all chats.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteChatsBulkInputObject = new TextmagicClient.DeleteChatsBulkInputObject(); // DeleteChatsBulkInputObject | 

apiInstance.deleteChatsBulk(deleteChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChatsBulkInputObject** | [**DeleteChatsBulkInputObject**](DeleteChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContact"></a>
# **deleteContact**
> deleteContact(id)

Delete a contact

> This command removes your contact completely. If it was assigned or saved to a shared list, it will disappear from there too. If you only need to remove a contact from selected lists, use the Contact assignment command in the Lists section instead, rather than deleting the contact. 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteContact(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactAvatar"></a>
# **deleteContactAvatar**
> deleteContactAvatar(id)

Delete an avatar



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteContactAvatar(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContactNote"></a>
# **deleteContactNote**
> deleteContactNote(id)

Delete a contact note



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteContactNote(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactNotesBulk"></a>
# **deleteContactNotesBulk**
> deleteContactNotesBulk(id, deleteContactNotesBulkInputObject)

Delete contact notes (bulk)



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var deleteContactNotesBulkInputObject = new TextmagicClient.DeleteContactNotesBulkInputObject(); // DeleteContactNotesBulkInputObject | 

apiInstance.deleteContactNotesBulk(id, deleteContactNotesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **deleteContactNotesBulkInputObject** | [**DeleteContactNotesBulkInputObject**](DeleteContactNotesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactsByIds"></a>
# **deleteContactsByIds**
> deleteContactsByIds(deleteContactsByIdsInputObject)

Delete contacts by IDs (bulk)



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteContactsByIdsInputObject = new TextmagicClient.DeleteContactsByIdsInputObject(); // DeleteContactsByIdsInputObject | 

apiInstance.deleteContactsByIds(deleteContactsByIdsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContactsByIdsInputObject** | [**DeleteContactsByIdsInputObject**](DeleteContactsByIdsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteContactsFromList"></a>
# **deleteContactsFromList**
> deleteContactsFromList(deleteContacsFromListObject, id)

Unassign contacts from a list

> When you remove contacts from a specific list, they will be deleted permanently, unless they are first saved in another list. 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteContacsFromListObject = new TextmagicClient.DeleteContacsFromListObject(); // DeleteContacsFromListObject | 

var id = 1; // Number | 

apiInstance.deleteContactsFromList(deleteContacsFromListObject, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteContacsFromListObject** | [**DeleteContacsFromListObject**](DeleteContacsFromListObject.md)|  | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteCustomField"></a>
# **deleteCustomField**
> deleteCustomField(id)

Delete a custom field

> When a custom field is deleted, all the information that was added to contacts under this custom field will also be lost. 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteCustomField(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteDedicatedNumber"></a>
# **deleteDedicatedNumber**
> deleteDedicatedNumber(id)

Cancel a dedicated number subscription



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteDedicatedNumber(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteInboundMessage"></a>
# **deleteInboundMessage**
> deleteInboundMessage(id)

Delete a single inbound message

> Note: deleted inbound messages will disappear from TextMagic Online, chats, and any other place they are referenced.  So, be careful! 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | The unique numeric ID for the inbound message.

apiInstance.deleteInboundMessage(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The unique numeric ID for the inbound message. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteInboundMessagesBulk"></a>
# **deleteInboundMessagesBulk**
> deleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject)

Delete inbound messages (bulk)

> Note: deleted inbound messages will disappear from TextMagic Online, chats, and any other place they are referenced.  So, be careful! 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteInboundMessagesBulkInputObject = new TextmagicClient.DeleteInboundMessagesBulkInputObject(); // DeleteInboundMessagesBulkInputObject | 

apiInstance.deleteInboundMessagesBulk(deleteInboundMessagesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteInboundMessagesBulkInputObject** | [**DeleteInboundMessagesBulkInputObject**](DeleteInboundMessagesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteList"></a>
# **deleteList**
> deleteList(id)

Delete a list

This command has no parameters. If successful, this command will return the standard delete response (204 No Content); otherwise, a standard error response will be returned.  When you delete a list, the contacts in it are deleted as well, unless they were saved in another list.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteList(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteListAvatar"></a>
# **deleteListAvatar**
> deleteListAvatar(id)

Delete an avatar for a list

Delete an avatar for a list

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteListAvatar(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteListContactsBulk"></a>
# **deleteListContactsBulk**
> deleteListContactsBulk(deleteListContactsBulkInputObject, id)

Delete contacts from a list (bulk)

Delete contacts from a list (bulk)

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteListContactsBulkInputObject = new TextmagicClient.DeleteListContactsBulkInputObject(); // DeleteListContactsBulkInputObject | 

var id = 1; // Number | 

apiInstance.deleteListContactsBulk(deleteListContactsBulkInputObject, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListContactsBulkInputObject** | [**DeleteListContactsBulkInputObject**](DeleteListContactsBulkInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteListsBulk"></a>
# **deleteListsBulk**
> deleteListsBulk(deleteListsBulkInputObject)

Delete lists (bulk)



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteListsBulkInputObject = new TextmagicClient.DeleteListsBulkInputObject(); // DeleteListsBulkInputObject | 

apiInstance.deleteListsBulk(deleteListsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteListsBulkInputObject** | [**DeleteListsBulkInputObject**](DeleteListsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteMessageSession"></a>
# **deleteMessageSession**
> deleteMessageSession(id)

Delete a session

Delete a message session, together with all nested messages. > You will not be refunded for any deleted sent sessions. 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteMessageSession(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteMessageSessionsBulk"></a>
# **deleteMessageSessionsBulk**
> deleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject)

Delete sessions (bulk)

Delete message sessions, together with all nested messages, by given ID(s) or delete all message sessions.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteMessageSessionsBulkInputObject = new TextmagicClient.DeleteMessageSessionsBulkInputObject(); // DeleteMessageSessionsBulkInputObject | 

apiInstance.deleteMessageSessionsBulk(deleteMessageSessionsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteMessageSessionsBulkInputObject** | [**DeleteMessageSessionsBulkInputObject**](DeleteMessageSessionsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteOutboundMessage"></a>
# **deleteOutboundMessage**
> deleteOutboundMessage(id)

Delete message

Delete a single message.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteOutboundMessage(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteOutboundMessagesBulk"></a>
# **deleteOutboundMessagesBulk**
> deleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject)

Delete messages (bulk)

Delete outbound messages by the given ID(s) or delete all outbound messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteOutboundMessagesBulkInputObject = new TextmagicClient.DeleteOutboundMessagesBulkInputObject(); // DeleteOutboundMessagesBulkInputObject | 

apiInstance.deleteOutboundMessagesBulk(deleteOutboundMessagesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteOutboundMessagesBulkInputObject** | [**DeleteOutboundMessagesBulkInputObject**](DeleteOutboundMessagesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteScheduledMessage"></a>
# **deleteScheduledMessage**
> deleteScheduledMessage(id)

Delete a single scheduled message



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteScheduledMessage(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteScheduledMessagesBulk"></a>
# **deleteScheduledMessagesBulk**
> deleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject)

Delete scheduled messages (bulk)



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteScheduledMessagesBulkInputObject = new TextmagicClient.DeleteScheduledMessagesBulkInputObject(); // DeleteScheduledMessagesBulkInputObject | 

apiInstance.deleteScheduledMessagesBulk(deleteScheduledMessagesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteScheduledMessagesBulkInputObject** | [**DeleteScheduledMessagesBulkInputObject**](DeleteScheduledMessagesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteSenderId"></a>
# **deleteSenderId**
> deleteSenderId(id)

Delete a Sender ID



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteSenderId(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteTemplate"></a>
# **deleteTemplate**
> deleteTemplate(id)

Delete a template



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.deleteTemplate(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deleteTemplatesBulk"></a>
# **deleteTemplatesBulk**
> deleteTemplatesBulk(deleteTemplatesBulkInputObject)

Delete templates (bulk)

Delete templates by given IDs or delete all templates.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var deleteTemplatesBulkInputObject = new TextmagicClient.DeleteTemplatesBulkInputObject(); // DeleteTemplatesBulkInputObject | 

apiInstance.deleteTemplatesBulk(deleteTemplatesBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTemplatesBulkInputObject** | [**DeleteTemplatesBulkInputObject**](DeleteTemplatesBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="doCarrierLookup"></a>
# **doCarrierLookup**
> DoCarrierLookupResponse doCarrierLookup(phone, opts)

Carrier Lookup

This API call allows you to retrieve additional information about a phone number: region-specific phone number formatting, carrier, phone type (landline/mobile) and country information.  > Numbers must be checked one by one. You cannot check multiple numbers in one request.   

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var phone = "447860021130"; // String | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) or in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers). 

var opts = { 
  'country': "GB" // String | This option must be specified only if the phone number is in a **[National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers)**. 
};
apiInstance.doCarrierLookup(phone, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) or in [National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).  | 
 **country** | **String**| This option must be specified only if the phone number is in a **[National format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers)**.  | [optional] 

### Return type

[**DoCarrierLookupResponse**](DoCarrierLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="doEmailLookup"></a>
# **doEmailLookup**
> DoEmailLookupResponse doEmailLookup(email)

Email Lookup

To get more details about an email address or to check whether it is a valid email or not, you can use the Email Lookup command. To upload and check emails in bulk, please use our [Web app](https://my.textmagic.com/online/email-lookup/).  This API call allows you to retrieve additional information about an email address, such as mailbox detection, syntax checks, DNS validation, deliverability status, and many more helpful values (see the table below).  > Emails must be checked one by one. You cannot check multiple emails in one request. To upload and check emails in bulk, please use our [Web app](https://my.textmagic.com/online/email-lookup/).

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var email = "john@sample.com"; // String | Email address.

apiInstance.doEmailLookup(email).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address. | 

### Return type

[**DoEmailLookupResponse**](DoEmailLookupResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllBulkSessions"></a>
# **getAllBulkSessions**
> GetAllBulkSessionsPaginatedResponse getAllBulkSessions(opts)

Get all bulk sessions



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getAllBulkSessions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetAllBulkSessionsPaginatedResponse**](GetAllBulkSessionsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllChats"></a>
# **getAllChats**
> GetAllChatsPaginatedResponse getAllChats(opts)

Get all chats



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'status': "a", // String | Fetch only (a)ctive, (c)losed or (d)eleted chats.
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'voice': 0, // Number | Fetch results with voice calls.
  'flat': 0 // Number | Should additional contact info be included?
};
apiInstance.getAllChats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Fetch only (a)ctive, (c)losed or (d)eleted chats. | [optional] 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **voice** | **Number**| Fetch results with voice calls. | [optional] [default to 0]
 **flat** | **Number**| Should additional contact info be included? | [optional] [default to 0]

### Return type

[**GetAllChatsPaginatedResponse**](GetAllChatsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllInboundMessages"></a>
# **getAllInboundMessages**
> GetAllInboundMessagesPaginatedResponse getAllInboundMessages(opts)

Get all inbound messages



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.getAllInboundMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetAllInboundMessagesPaginatedResponse**](GetAllInboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllMessageSessions"></a>
# **getAllMessageSessions**
> GetAllMessageSessionsPaginatedResponse getAllMessageSessions(opts)

Get all sessions

Get all message sending sessions. > This list contains all of your sessions, including those which were sent but not via API 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getAllMessageSessions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetAllMessageSessionsPaginatedResponse**](GetAllMessageSessionsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllOutboundMessages"></a>
# **getAllOutboundMessages**
> GetAllOutboundMessagesPaginatedResponse getAllOutboundMessages(opts)

Get all messages

Get all user oubound messages.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'lastId': 56 // Number | Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified.
};
apiInstance.getAllOutboundMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified. | [optional] 

### Return type

[**GetAllOutboundMessagesPaginatedResponse**](GetAllOutboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllScheduledMessages"></a>
# **getAllScheduledMessages**
> GetAllScheduledMessagesPaginatedResponse getAllScheduledMessages(opts)

Get all scheduled messages



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'status': "x", // String | Fetch schedules with a specific status: a - actual, c - completed, x - all.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.getAllScheduledMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **status** | **String**| Fetch schedules with a specific status: a - actual, c - completed, x - all. | [optional] [default to x]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetAllScheduledMessagesPaginatedResponse**](GetAllScheduledMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTemplates"></a>
# **getAllTemplates**
> GetAllTemplatesPaginatedResponse getAllTemplates(opts)

Get all templates



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getAllTemplates(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] 
 **limit** | **Number**| The number of results per page. | [optional] 

### Return type

[**GetAllTemplatesPaginatedResponse**](GetAllTemplatesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableDedicatedNumbers"></a>
# **getAvailableDedicatedNumbers**
> GetAvailableDedicatedNumbersResponse getAvailableDedicatedNumbers(country, opts)

Find dedicated numbers available for purchase



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var country = "GB"; // String | The 2-letter dedicated number country ISO code.

var opts = { 
  'prefix': 447155, // Number | Desired number prefix. Should include the country code (i.e. 447 for UK phone number format). Leave blank to get all the available numbers for the specified country.
  'tollfree': 0 // Number | Should we show only tollfree numbers (tollfree available only for US).
};
apiInstance.getAvailableDedicatedNumbers(country, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The 2-letter dedicated number country ISO code. | 
 **prefix** | **Number**| Desired number prefix. Should include the country code (i.e. 447 for UK phone number format). Leave blank to get all the available numbers for the specified country. | [optional] 
 **tollfree** | **Number**| Should we show only tollfree numbers (tollfree available only for US). | [optional] [default to 0]

### Return type

[**GetAvailableDedicatedNumbersResponse**](GetAvailableDedicatedNumbersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvailableSenderSettingOptions"></a>
# **getAvailableSenderSettingOptions**
> GetAvailableSenderSettingOptionsResponse getAvailableSenderSettingOptions(opts)

Get available sender settings

Get all available sender setting options which can be used in the \"from\" parameter of the POST messages method.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'country': "US" // String | The 2-letter ISO country ID. If not specified, it returns all the available sender settings.
};
apiInstance.getAvailableSenderSettingOptions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| The 2-letter ISO country ID. If not specified, it returns all the available sender settings. | [optional] 

### Return type

[**GetAvailableSenderSettingOptionsResponse**](GetAvailableSenderSettingOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBalanceNotificationOptions"></a>
# **getBalanceNotificationOptions**
> GetBalanceNotificationOptionsResponse getBalanceNotificationOptions()

Returns the list of available balance options which can be used as a bound to determine when to send email to user with low balance notification. See https://my.textmagic.com/online/account/notifications/balance



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getBalanceNotificationOptions().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetBalanceNotificationOptionsResponse**](GetBalanceNotificationOptionsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBalanceNotificationSettings"></a>
# **getBalanceNotificationSettings**
> GetBalanceNotificationSettingsResponse getBalanceNotificationSettings()

Get balance notification settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getBalanceNotificationSettings().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetBalanceNotificationSettingsResponse**](GetBalanceNotificationSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBlockedContacts"></a>
# **getBlockedContacts**
> GetBlockedContactsPaginatedResponse getBlockedContacts(opts)

Get blocked contacts



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example", // String | Find blocked contacts by specified search query.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.getBlockedContacts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find blocked contacts by specified search query. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetBlockedContactsPaginatedResponse**](GetBlockedContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBulkSession"></a>
# **getBulkSession**
> BulkSession getBulkSession(id)

Get bulk session status



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getBulkSession(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**BulkSession**](BulkSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCallbackSettings"></a>
# **getCallbackSettings**
> GetCallbackSettingsResponse getCallbackSettings()

Fetch callback URL settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getCallbackSettings().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetCallbackSettingsResponse**](GetCallbackSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChat"></a>
# **getChat**
> Chat getChat(id)

Get a single chat



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getChat(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChatByPhone"></a>
# **getChatByPhone**
> Chat getChatByPhone(phone, opts)

Find chats by phone



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var phone = "447860021130"; // String | 

var opts = { 
  'upsert': 0, // Number | Create a new chat if not found.
  'reopen': 0 // Number | Reopen chat if found or do not change status.
};
apiInstance.getChatByPhone(phone, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 
 **upsert** | **Number**| Create a new chat if not found. | [optional] [default to 0]
 **reopen** | **Number**| Reopen chat if found or do not change status. | [optional] [default to 0]

### Return type

[**Chat**](Chat.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChatMessages"></a>
# **getChatMessages**
> GetChatMessagesPaginatedResponse getChatMessages(id, opts)

Get chat messages



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example", // String | Find messages by specified search query.
  'start': "start_example", // String | Return messages since specified timestamp only. Required when `end` parameter specified.
  'end': "end_example", // String | Return messages up to specified timestamp only. Required when `start` parameter specified.
  'direction': "desc", // String | Order direction. Default is desc.
  'voice': 0 // Number | Fetch results with voice calls.
};
apiInstance.getChatMessages(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find messages by specified search query. | [optional] 
 **start** | **String**| Return messages since specified timestamp only. Required when `end` parameter specified. | [optional] 
 **end** | **String**| Return messages up to specified timestamp only. Required when `start` parameter specified. | [optional] 
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]
 **voice** | **Number**| Fetch results with voice calls. | [optional] [default to 0]

### Return type

[**GetChatMessagesPaginatedResponse**](GetChatMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContact"></a>
# **getContact**
> Contact getContact(id)

Get the details of a specific contact



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | Contact ID.

apiInstance.getContact(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Contact ID. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactByPhone"></a>
# **getContactByPhone**
> Contact getContactByPhone(phone)

Get the details of a specific contact by phone number



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var phone = "447860021130"; // String | 

apiInstance.getContactByPhone(phone).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactIfBlocked"></a>
# **getContactIfBlocked**
> Contact getContactIfBlocked(phone)

Check if a phone number is blocked



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var phone = "447860021130"; // String | Phone number to check.

apiInstance.getContactIfBlocked(phone).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| Phone number to check. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactImportSessionProgress"></a>
# **getContactImportSessionProgress**
> GetContactImportSessionProgressResponse getContactImportSessionProgress(id)

Check import progress

Get contact import session progress.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getContactImportSessionProgress(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**GetContactImportSessionProgressResponse**](GetContactImportSessionProgressResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactNote"></a>
# **getContactNote**
> ContactNote getContactNote(id)

Get a contact note



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getContactNote(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ContactNote**](ContactNote.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactNotes"></a>
# **getContactNotes**
> GetContactNotesPaginatedResponse getContactNotes(id, opts)

Fetch notes assigned to a given contact



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getContactNotes(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetContactNotesPaginatedResponse**](GetContactNotesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContacts"></a>
# **getContacts**
> GetContactsPaginatedResponse getContacts(opts)

Get all contacts



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'shared': 0, // Number | Should shared contacts be included?
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.getContacts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **shared** | **Number**| Should shared contacts be included? | [optional] [default to 0]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetContactsPaginatedResponse**](GetContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsAutocomplete"></a>
# **getContactsAutocomplete**
> GetContactsAutocompleteResponse getContactsAutocomplete(query, opts)

Get contacts autocomplete suggestions

Get contacts autocomplete suggestions by given search terms.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var query = "A"; // String | Find recipients by specified search query.

var opts = { 
  'limit': 10, // Number | The number of results per page.
  'lists': 0 // Number | Should lists be returned or not?
};
apiInstance.getContactsAutocomplete(query, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Find recipients by specified search query. | 
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **lists** | **Number**| Should lists be returned or not? | [optional] [default to 0]

### Return type

[**GetContactsAutocompleteResponse**](GetContactsAutocompleteResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsByListId"></a>
# **getContactsByListId**
> GetContactsByListIdPaginatedResponse getContactsByListId(id, opts)

Get all contacts in a list

A useful synonym for the \"contacts/search\" command with the provided \"listId\" parameter.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | Given group ID.

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.getContactsByListId(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Given group ID. | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetContactsByListIdPaginatedResponse**](GetContactsByListIdPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCountries"></a>
# **getCountries**
> GetCountriesResponse getCountries()

Get countries



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getCountries().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetCountriesResponse**](GetCountriesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentUser"></a>
# **getCurrentUser**
> User getCurrentUser()

Get current account information



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getCurrentUser().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomField"></a>
# **getCustomField**
> UserCustomField getCustomField(id)

Get the details of a specific custom field



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getCustomField(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UserCustomField**](UserCustomField.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomFields"></a>
# **getCustomFields**
> GetCustomFieldsPaginatedResponse getCustomFields(opts)

Get all custom fields



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getCustomFields(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetCustomFieldsPaginatedResponse**](GetCustomFieldsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDedicatedNumber"></a>
# **getDedicatedNumber**
> UsersInbound getDedicatedNumber(id)

Get the details of a specific dedicated number



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getDedicatedNumber(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UsersInbound**](UsersInbound.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFavorites"></a>
# **getFavorites**
> GetFavoritesPaginatedResponse getFavorites(opts)

Get favorite contacts and lists



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "A" // String | Find contacts or lists by specified search query.
};
apiInstance.getFavorites(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find contacts or lists by specified search query. | [optional] 

### Return type

[**GetFavoritesPaginatedResponse**](GetFavoritesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboundMessage"></a>
# **getInboundMessage**
> MessageIn getInboundMessage(id)

Get a single inbound message



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1782832; // Number | The unique numeric ID for the inbound message.

apiInstance.getInboundMessage(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The unique numeric ID for the inbound message. | 

### Return type

[**MessageIn**](MessageIn.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboundMessagesNotificationSettings"></a>
# **getInboundMessagesNotificationSettings**
> GetInboundMessagesNotificationSettingsResponse getInboundMessagesNotificationSettings()

Get inbound messages notification settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getInboundMessagesNotificationSettings().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetInboundMessagesNotificationSettingsResponse**](GetInboundMessagesNotificationSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoices"></a>
# **getInvoices**
> GetInvoicesPaginatedResponse getInvoices(opts)

Get all invoices

With the TextMagic API, you can check the invoices and transactions for your account.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getInvoices(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetInvoicesPaginatedResponse**](GetInvoicesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getList"></a>
# **getList**
> List getList(id)

Get the details of a specific list



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getList(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**List**](List.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListContactsIds"></a>
# **getListContactsIds**
> GetListContactsIdsResponse getListContactsIds(id)

Get all contact IDs in a list



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getListContactsIds(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**GetListContactsIdsResponse**](GetListContactsIdsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLists"></a>
# **getLists**
> GetListsPaginatedResponse getLists(opts)

Get all lists



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | The current fetched page.
  'limit': 10, // Number | The number of results per page.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc", // String | Order direction. Default is desc.
  'favoriteOnly': 0, // Number | Return only favorited lists.
  'onlyMine': 0 // Number | Return only current user lists.
};
apiInstance.getLists(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The current fetched page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]
 **favoriteOnly** | **Number**| Return only favorited lists. | [optional] [default to 0]
 **onlyMine** | **Number**| Return only current user lists. | [optional] [default to 0]

### Return type

[**GetListsPaginatedResponse**](GetListsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getListsOfContact"></a>
# **getListsOfContact**
> GetListsOfContactPaginatedResponse getListsOfContact(id, opts)

Get a contact's lists

Get all the lists in which a contact is included.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getListsOfContact(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetListsOfContactPaginatedResponse**](GetListsOfContactPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagePreview"></a>
# **getMessagePreview**
> GetMessagePreviewResponse getMessagePreview(opts)

Preview message

Get a messages preview (with tags merged) of up to 100 messages per session.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'text': "Test message test", // String | Message text. Required if **template_id** is not set.
  'templateId': 1, // Number | Template used instead of message text. Required if **text** is not set.
  'sendingTime': 1565606455, // Number | DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time is in unix timestamp format. Default is now.
  'sendingDateTime': "2020-05-27 13:02:33", // String | Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone.
  'sendingTimezone': "America/Buenos_Aires", // String | The ID or ISO-name of the timezone used for sending when the sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone.
  'contacts': "1,2,3,4", // String | Comma-separated array of contact resources id message will be sent to.
  'lists': "1,2,3,4", // String | Comma-separated array of list resources id message will be sent to.
  'phones': "447860021130,447860021131", // String | Comma-separated array of E.164 phone numbers message will be sent to.
  'cutExtra': 0, // Number | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead.
  'partsCount': 6, // Number | Maximum message parts count (TextMagic allows sending of 1 to 6 message parts).
  'referenceId': 1, // Number | Custom message reference id which can be used in your application infrastructure.
  'from': "Test Sender ID", // String | One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs).
  'rule': "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1", // String | An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details.
  'createChat': 0, // Number | Should the sending method try to create new Chat(if not exist) with specified recipients?
  'tts': 0, // Number | Send Text-to-Speech message.
  'local': 0, // Number | Treat phone numbers passed in the \\'phones\\' field as local.
  'localCountry': "US" // String | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country.
};
apiInstance.getMessagePreview(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**| Message text. Required if **template_id** is not set. | [optional] 
 **templateId** | **Number**| Template used instead of message text. Required if **text** is not set. | [optional] 
 **sendingTime** | **Number**| DEPRECATED, consider using sendingDateTime and sendingTimezone parameters instead: Optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. | [optional] 
 **sendingDateTime** | **String**| Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. | [optional] 
 **sendingTimezone** | **String**| The ID or ISO-name of the timezone used for sending when the sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. | [optional] 
 **contacts** | **String**| Comma-separated array of contact resources id message will be sent to. | [optional] 
 **lists** | **String**| Comma-separated array of list resources id message will be sent to. | [optional] 
 **phones** | **String**| Comma-separated array of E.164 phone numbers message will be sent to. | [optional] 
 **cutExtra** | **Number**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to 0]
 **partsCount** | **Number**| Maximum message parts count (TextMagic allows sending of 1 to 6 message parts). | [optional] [default to 6]
 **referenceId** | **Number**| Custom message reference id which can be used in your application infrastructure. | [optional] 
 **from** | **String**| One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional] 
 **rule** | **String**| An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional] 
 **createChat** | **Number**| Should the sending method try to create new Chat(if not exist) with specified recipients? | [optional] [default to 0]
 **tts** | **Number**| Send Text-to-Speech message. | [optional] [default to 0]
 **local** | **Number**| Treat phone numbers passed in the \\'phones\\' field as local. | [optional] [default to 0]
 **localCountry** | **String**| The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country. | [optional] 

### Return type

[**GetMessagePreviewResponse**](GetMessagePreviewResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagePrice"></a>
# **getMessagePrice**
> GetMessagePriceResponse getMessagePrice(opts)

Check message price

Check pricing for a new outbound message.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'includeBlocked': 0, // Number | Should we show the pricing for blocked contacts?
  'text': "Test message test", // String | Message text. Required if the **template_id** is not set.
  'templateId': 1, // Number | Template used instead of message text. Required if the **text** is not set.
  'sendingTime': 1565606455, // Number | DEPRECATED, consider using the sendingDateTime and sendingTimezone parameters instead: optional (required with rrule set). Message sending time is in unix timestamp format. Default is now.
  'sendingDateTime': "2020-05-27 13:02:33", // String | Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone.
  'sendingTimezone': "America/Buenos_Aires", // String | The ID or ISO-name of the timezone used for sending when sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone.
  'contacts': "1,2,3,4", // String | Comma-separated array of contact resources id message will be sent to.
  'lists': "1,2,3,4", // String | Comma-separated array of list resources id message will be sent to.
  'phones': "447860021130,447860021131", // String | Comma-separated array of E.164 phone numbers message will be sent to.
  'cutExtra': 0, // Number | Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead.
  'partsCount': 6, // Number | Maximum message parts count (TextMagic allows sending 1 to 6 message parts).
  'referenceId': 1, // Number | Custom message reference id which can be used in your application infrastructure.
  'from': "Test Sender ID", // String | One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs).
  'rule': "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;COUNT=1", // String | An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details.
  'createChat': 0, // Number | Should the sending method try to create new Chat (if not exist) with specified recipients?
  'tts': 0, // Number | Send a Text-to-Speech message.
  'local': 0, // Number | Treat phone numbers passed in the \\'phones\\' field as local.
  'localCountry': "US" // String | The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country.
};
apiInstance.getMessagePrice(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeBlocked** | **Number**| Should we show the pricing for blocked contacts? | [optional] [default to 0]
 **text** | **String**| Message text. Required if the **template_id** is not set. | [optional] 
 **templateId** | **Number**| Template used instead of message text. Required if the **text** is not set. | [optional] 
 **sendingTime** | **Number**| DEPRECATED, consider using the sendingDateTime and sendingTimezone parameters instead: optional (required with rrule set). Message sending time is in unix timestamp format. Default is now. | [optional] 
 **sendingDateTime** | **String**| Sending time is in Y-m-d H:i:s format (e.g. 2016-05-27 13:02:33). This time is relative to the sendingTimezone. | [optional] 
 **sendingTimezone** | **String**| The ID or ISO-name of the timezone used for sending when sendingDateTime parameter is set, e.g. if you specify sendingDateTime = \\\"2016-05-27 13:02:33\\\" and sendingTimezone = \\\"America/Buenos_Aires\\\", your message will be sent on May 27, 2016 13:02:33 Buenos Aires time, or 16:02:33 UTC. Default is the account timezone. | [optional] 
 **contacts** | **String**| Comma-separated array of contact resources id message will be sent to. | [optional] 
 **lists** | **String**| Comma-separated array of list resources id message will be sent to. | [optional] 
 **phones** | **String**| Comma-separated array of E.164 phone numbers message will be sent to. | [optional] 
 **cutExtra** | **Number**| Should sending method cut extra characters which not fit supplied partsCount or return 400 Bad request response instead. | [optional] [default to 0]
 **partsCount** | **Number**| Maximum message parts count (TextMagic allows sending 1 to 6 message parts). | [optional] [default to 6]
 **referenceId** | **Number**| Custom message reference id which can be used in your application infrastructure. | [optional] 
 **from** | **String**| One of the allowed Sender ID (phone number or alphanumeric sender ID). If the specified Sender ID is not allowed for some destinations, a fallback default Sender ID will be used to ensure delivery. See [Get timezones](https://docs.textmagic.com/#tag/Sender-IDs). | [optional] 
 **rule** | **String**| An iCal RRULE parameter to create recurrent scheduled messages. When used, sendingTime is mandatory as the start point of sending. See https://www.textmagic.com/free-tools/rrule-generator for format details. | [optional] 
 **createChat** | **Number**| Should the sending method try to create new Chat (if not exist) with specified recipients? | [optional] [default to 0]
 **tts** | **Number**| Send a Text-to-Speech message. | [optional] [default to 0]
 **local** | **Number**| Treat phone numbers passed in the \\'phones\\' field as local. | [optional] [default to 0]
 **localCountry** | **String**| The 2-letter ISO country code for local phone numbers, used when \\'local\\' is set to true. Default is the account country. | [optional] 

### Return type

[**GetMessagePriceResponse**](GetMessagePriceResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessageSession"></a>
# **getMessageSession**
> MessageSession getMessageSession(id)

Get a session`s details

Get a specific session’s details.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | Session ID.

apiInstance.getMessageSession(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Session ID. | 

### Return type

[**MessageSession**](MessageSession.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessageSessionStat"></a>
# **getMessageSessionStat**
> GetMessageSessionStatResponse getMessageSessionStat(id, opts)

Get a session`s statistics



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'includeDeleted': 0 // Number | Search also in deleted messages.
};
apiInstance.getMessageSessionStat(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **includeDeleted** | **Number**| Search also in deleted messages. | [optional] [default to 0]

### Return type

[**GetMessageSessionStatResponse**](GetMessageSessionStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagesBySessionId"></a>
# **getMessagesBySessionId**
> GetMessagesBySessionIdPaginatedResponse getMessagesBySessionId(id, opts)

Get a session`s messages

A useful synonym for the \"messages/search\" command with the provided \"sessionId\" parameter.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'statuses': "statuses_example", // String | Find messages by status.
  'includeDeleted': 0 // Number | Search also in deleted messages.
};
apiInstance.getMessagesBySessionId(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **statuses** | **String**| Find messages by status. | [optional] 
 **includeDeleted** | **Number**| Search also in deleted messages. | [optional] [default to 0]

### Return type

[**GetMessagesBySessionIdPaginatedResponse**](GetMessagesBySessionIdPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagingCounters"></a>
# **getMessagingCounters**
> GetMessagingCountersResponse getMessagingCounters()

Get sent/received messages counters values

Get total contacts, sent messages and received messages counters values.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getMessagingCounters().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetMessagingCountersResponse**](GetMessagingCountersResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMessagingStat"></a>
# **getMessagingStat**
> GetMessagingStatResponse getMessagingStat(opts)

Get messaging statistics



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'by': "off", // String | *   **off** - to get total values per specified time interval; *   **day** - to show values grouped by day; *   **month** - to show values grouped by month; *   **year** - to show values grouped by year. 
  'start': 1430438400, // Number | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior. 
  'end': 1431648000 // Number | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today. 
};
apiInstance.getMessagingStat(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **by** | **String**| *   **off** - to get total values per specified time interval; *   **day** - to show values grouped by day; *   **month** - to show values grouped by month; *   **year** - to show values grouped by year.  | [optional] [default to off]
 **start** | **Number**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  | [optional] 
 **end** | **Number**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  | [optional] 

### Return type

[**GetMessagingStatResponse**](GetMessagingStatResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOutboundMessage"></a>
# **getOutboundMessage**
> MessageOut getOutboundMessage(id)

Get a single message

Get a single outgoing message.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getOutboundMessage(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessageOut**](MessageOut.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOutboundMessagesHistory"></a>
# **getOutboundMessagesHistory**
> GetOutboundMessagesHistoryPaginatedResponse getOutboundMessagesHistory(opts)

Get history

Get the outbound messages history.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'limit': 10, // Number | The number of results per page.
  'lastId': 56, // Number | Filter results by ID, selecting all values lesser than the specified ID.
  'query': "query_example", // String | Find message by specified search query.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.getOutboundMessagesHistory(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. | [optional] 
 **query** | **String**| Find message by specified search query. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**GetOutboundMessagesHistoryPaginatedResponse**](GetOutboundMessagesHistoryPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScheduledMessage"></a>
# **getScheduledMessage**
> MessagesIcs getScheduledMessage(id)

Get a single scheduled message



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getScheduledMessage(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessagesIcs**](MessagesIcs.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderId"></a>
# **getSenderId**
> SenderId getSenderId(id)

Get the details of a specific Sender ID



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getSenderId(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**SenderId**](SenderId.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderIds"></a>
# **getSenderIds**
> GetSenderIdsPaginatedResponse getSenderIds(opts)

Get all your approved Sender IDs



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getSenderIds(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetSenderIdsPaginatedResponse**](GetSenderIdsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSenderSettings"></a>
# **getSenderSettings**
> GetSenderSettingsResponse getSenderSettings(opts)

Get current sender settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'country': "US" // String | Return sender settings enabled for sending to a specified country. Should be 2 upper-case characters.
};
apiInstance.getSenderSettings(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **String**| Return sender settings enabled for sending to a specified country. Should be 2 upper-case characters. | [optional] 

### Return type

[**GetSenderSettingsResponse**](GetSenderSettingsResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSpendingStat"></a>
# **getSpendingStat**
> GetSpendingStatPaginatedResponse getSpendingStat(opts)

Get spending statistics



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'start': "2018-11-11 11:11", // String | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior. 
  'end': "2019-11-11 11:11" // String | Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today. 
};
apiInstance.getSpendingStat(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **start** | **String**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is 7 days prior.  | [optional] 
 **end** | **String**| Time period start in [UNIX timestamp](https://en.wikipedia.org/wiki/Unix_time) format. The default is today.  | [optional] 

### Return type

[**GetSpendingStatPaginatedResponse**](GetSpendingStatPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccount"></a>
# **getSubaccount**
> User getSubaccount(id)

Get sub-account information



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getSubaccount(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccounts"></a>
# **getSubaccounts**
> User getSubaccounts(opts)

Get a sub-accounts list



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getSubaccounts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubaccountsWithTokens"></a>
# **getSubaccountsWithTokens**
> GetSubaccountsWithTokensResponse getSubaccountsWithTokens(getSubaccountsWithTokensInputObject, opts)

Get all sub-accounts with their REST API tokens associated with a specified app name

Get all sub-accounts with their REST API tokens associated with specified app name. When more than one token related to app name, last key will be returned.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var getSubaccountsWithTokensInputObject = new TextmagicClient.GetSubaccountsWithTokensInputObject(); // GetSubaccountsWithTokensInputObject | 

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getSubaccountsWithTokens(getSubaccountsWithTokensInputObject, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSubaccountsWithTokensInputObject** | [**GetSubaccountsWithTokensInputObject**](GetSubaccountsWithTokensInputObject.md)|  | 
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetSubaccountsWithTokensResponse**](GetSubaccountsWithTokensResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTemplate"></a>
# **getTemplate**
> MessageTemplate getTemplate(id)

Get a template`s details

Get a single template.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getTemplate(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**MessageTemplate**](MessageTemplate.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTimezones"></a>
# **getTimezones**
> GetTimezonesResponse getTimezones(opts)

Get timezones

Return all available timezone IDs

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'full': 0 // Number | Return full info about timezones in array (0 or 1). Default is 0.
};
apiInstance.getTimezones(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **full** | **Number**| Return full info about timezones in array (0 or 1). Default is 0. | [optional] [default to 0]

### Return type

[**GetTimezonesResponse**](GetTimezonesResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnreadMessagesTotal"></a>
# **getUnreadMessagesTotal**
> GetUnreadMessagesTotalResponse getUnreadMessagesTotal()

Get unread messages number

Get the total amount of unread messages in the current user chats.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.getUnreadMessagesTotal().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetUnreadMessagesTotalResponse**](GetUnreadMessagesTotalResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnsubscribedContact"></a>
# **getUnsubscribedContact**
> UnsubscribedContact getUnsubscribedContact(id)

Get the details of a specific unsubscribed contact



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

apiInstance.getUnsubscribedContact(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**UnsubscribedContact**](UnsubscribedContact.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnsubscribers"></a>
# **getUnsubscribers**
> GetUnsubscribersPaginatedResponse getUnsubscribers(opts)

Get all unsubscribed contacts

When one of your message recipients sends a request with one of the [STOP-words](https://www.textmagic.com/sms-stop-command/), they will be immediately opted-out of your send lists and their contact status will change to an unsubscribed contact. To retrieve information on all contacts who have unsubscribed status, use: 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10 // Number | The number of results per page.
};
apiInstance.getUnsubscribers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]

### Return type

[**GetUnsubscribersPaginatedResponse**](GetUnsubscribersPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserDedicatedNumbers"></a>
# **getUserDedicatedNumbers**
> GetUserDedicatedNumbersPaginatedResponse getUserDedicatedNumbers(opts)

Get all your dedicated numbers



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'surveyId': 56 // Number | Fetch only those numbers that are ready for the survey.
};
apiInstance.getUserDedicatedNumbers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **surveyId** | **Number**| Fetch only those numbers that are ready for the survey. | [optional] 

### Return type

[**GetUserDedicatedNumbersPaginatedResponse**](GetUserDedicatedNumbersPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importContacts"></a>
# **importContacts**
> ResourceLinkResponse importContacts(file, column, opts)

Import contacts

Import contacts from the CSV, XLS or XLSX file.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var file = "/path/to/file.txt"; // File | File containing contacts in csv or xls(x) formats.

var column = "0:firstName;1:lastName;3:phone;4:email"; // String | Import file column mapping. The string must contain sub-strings of mapping in format `columnNumber:field` glued by `;`. For example: `0:firstName;1:lastName;3:phone;4:email` where the value before `:` is a number of the column in the file, and the value after `:` is a field of the newly created contact or the ID of a custom field. Numbers of columns begin from zero. Allowed built-in contact fields are: `firstName`, `lastName`, `phone`, `email`. Existing of `phone` mapping is required. 

var opts = { 
  'listId': 443, // Number | List that ID contacts will be imported to. Ignored if `listName` is specified. 
  'listName': "A new list" // String | List name. This list will be created during import. If such name is already taken, an ordinal (1, 2, ...) will be added to the end. Ignored if `listId` is specified. 
};
apiInstance.importContacts(file, column, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| File containing contacts in csv or xls(x) formats. | 
 **column** | **String**| Import file column mapping. The string must contain sub-strings of mapping in format `columnNumber:field` glued by `;`. For example: `0:firstName;1:lastName;3:phone;4:email` where the value before `:` is a number of the column in the file, and the value after `:` is a field of the newly created contact or the ID of a custom field. Numbers of columns begin from zero. Allowed built-in contact fields are: `firstName`, `lastName`, `phone`, `email`. Existing of `phone` mapping is required.  | 
 **listId** | **Number**| List that ID contacts will be imported to. Ignored if `listName` is specified.  | [optional] 
 **listName** | **String**| List name. This list will be created during import. If such name is already taken, an ordinal (1, 2, ...) will be added to the end. Ignored if `listId` is specified.  | [optional] 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="inviteSubaccount"></a>
# **inviteSubaccount**
> inviteSubaccount(inviteSubaccountInputObject)

Invite a new sub-account



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var inviteSubaccountInputObject = new TextmagicClient.InviteSubaccountInputObject(); // InviteSubaccountInputObject | 

apiInstance.inviteSubaccount(inviteSubaccountInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inviteSubaccountInputObject** | [**InviteSubaccountInputObject**](InviteSubaccountInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="markChatsReadBulk"></a>
# **markChatsReadBulk**
> markChatsReadBulk(markChatsReadBulkInputObject)

Mark chats as read (bulk)

Mark several chats as read by chat IDs or mark all chats as read

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var markChatsReadBulkInputObject = new TextmagicClient.MarkChatsReadBulkInputObject(); // MarkChatsReadBulkInputObject | 

apiInstance.markChatsReadBulk(markChatsReadBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsReadBulkInputObject** | [**MarkChatsReadBulkInputObject**](MarkChatsReadBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="markChatsUnreadBulk"></a>
# **markChatsUnreadBulk**
> markChatsUnreadBulk(markChatsUnreadBulkInputObject)

Mark chats as unread (bulk)

Mark several chats as UNread by chat IDs or mark all chats as UNread

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var markChatsUnreadBulkInputObject = new TextmagicClient.MarkChatsUnreadBulkInputObject(); // MarkChatsUnreadBulkInputObject | 

apiInstance.markChatsUnreadBulk(markChatsUnreadBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markChatsUnreadBulkInputObject** | [**MarkChatsUnreadBulkInputObject**](MarkChatsUnreadBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="muteChat"></a>
# **muteChat**
> ResourceLinkResponse muteChat(muteChatInputObject)

Mute chat sounds



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var muteChatInputObject = new TextmagicClient.MuteChatInputObject(); // MuteChatInputObject | 

apiInstance.muteChat(muteChatInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatInputObject** | [**MuteChatInputObject**](MuteChatInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="muteChatsBulk"></a>
# **muteChatsBulk**
> muteChatsBulk(muteChatsBulkInputObject)

Mute chats (bulk)

Mute several chats by chat ids or mute all chats.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var muteChatsBulkInputObject = new TextmagicClient.MuteChatsBulkInputObject(); // MuteChatsBulkInputObject | 

apiInstance.muteChatsBulk(muteChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **muteChatsBulkInputObject** | [**MuteChatsBulkInputObject**](MuteChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="ping"></a>
# **ping**
> PingResponse ping()

Ping

Make a simple ping request.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();
apiInstance.ping().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PingResponse**](PingResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reopenChatsBulk"></a>
# **reopenChatsBulk**
> reopenChatsBulk(reopenChatsBulkInputObject)

Reopen chats (bulk)

Reopen chats by chat IDs or reopen all chats

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var reopenChatsBulkInputObject = new TextmagicClient.ReopenChatsBulkInputObject(); // ReopenChatsBulkInputObject | 

apiInstance.reopenChatsBulk(reopenChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reopenChatsBulkInputObject** | [**ReopenChatsBulkInputObject**](ReopenChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="requestNewSubaccountToken"></a>
# **requestNewSubaccountToken**
> User requestNewSubaccountToken(requestNewSubaccountTokenInputObject)

Request a new REST API token for sub-account

Returning user object, key and app name.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var requestNewSubaccountTokenInputObject = new TextmagicClient.RequestNewSubaccountTokenInputObject(); // RequestNewSubaccountTokenInputObject | 

apiInstance.requestNewSubaccountToken(requestNewSubaccountTokenInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNewSubaccountTokenInputObject** | [**RequestNewSubaccountTokenInputObject**](RequestNewSubaccountTokenInputObject.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestSenderId"></a>
# **requestSenderId**
> ResourceLinkResponse requestSenderId(requestSenderIdInputObject)

Apply for a new Sender ID

> Sender IDs are shared among all of your sub-accounts.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var requestSenderIdInputObject = new TextmagicClient.RequestSenderIdInputObject(); // RequestSenderIdInputObject | 

apiInstance.requestSenderId(requestSenderIdInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestSenderIdInputObject** | [**RequestSenderIdInputObject**](RequestSenderIdInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChats"></a>
# **searchChats**
> SearchChatsPaginatedResponse searchChats(opts)

Find chats by message text



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example" // String | Find chats by specified search query.
};
apiInstance.searchChats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find chats by specified search query. | [optional] 

### Return type

[**SearchChatsPaginatedResponse**](SearchChatsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChatsByIds"></a>
# **searchChatsByIds**
> SearchChatsByIdsPaginatedResponse searchChatsByIds(opts)

Find chats (bulk)



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'ids': "ids_example" // String | Find chats by ID(s).
};
apiInstance.searchChatsByIds(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find chats by ID(s). | [optional] 

### Return type

[**SearchChatsByIdsPaginatedResponse**](SearchChatsByIdsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchChatsByReceipent"></a>
# **searchChatsByReceipent**
> SearchChatsByReceipentPaginatedResponse searchChatsByReceipent(opts)

Find chats by recipient

Find chats by recipient (contact, list name or phone number).

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example", // String | Find chats by specified search query.
  'orderBy': "id" // String | Order results by some field. Default is id.
};
apiInstance.searchChatsByReceipent(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find chats by specified search query. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]

### Return type

[**SearchChatsByReceipentPaginatedResponse**](SearchChatsByReceipentPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContacts"></a>
# **searchContacts**
> SearchContactsPaginatedResponse searchContacts(opts)

Find contacts by given criteria



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'shared': 0, // Number | Should shared contacts be included?
  'ids': "ids_example", // String | Find contacts by IDs.
  'listId': 56, // Number | Find contacts by List ID.
  'includeBlocked': 56, // Number | Should blocked contacts be included?
  'query': "query_example", // String | Find contacts by specified search query.
  'local': 0, // Number | Treat phone number passed in the \"query\" field as local. Default is 0.
  'exactMatch': 0, // Number | Return only exactly matching contacts. Default is 0.
  'country': "country_example", // String | The 2-letter ISO country code for local phone numbers, used when \"local\" is set to true. Default is the account country.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.searchContacts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **shared** | **Number**| Should shared contacts be included? | [optional] [default to 0]
 **ids** | **String**| Find contacts by IDs. | [optional] 
 **listId** | **Number**| Find contacts by List ID. | [optional] 
 **includeBlocked** | **Number**| Should blocked contacts be included? | [optional] 
 **query** | **String**| Find contacts by specified search query. | [optional] 
 **local** | **Number**| Treat phone number passed in the \"query\" field as local. Default is 0. | [optional] [default to 0]
 **exactMatch** | **Number**| Return only exactly matching contacts. Default is 0. | [optional] [default to 0]
 **country** | **String**| The 2-letter ISO country code for local phone numbers, used when \"local\" is set to true. Default is the account country. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**SearchContactsPaginatedResponse**](SearchContactsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchInboundMessages"></a>
# **searchInboundMessages**
> SearchInboundMessagesPaginatedResponse searchInboundMessages(opts)

Find inbound messages

Find inbound messages by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'ids': "ids_example", // String | Find message by ID(s).
  'query': "query_example", // String | Find recipients by specified search query.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc", // String | Order direction. Default is desc.
  'expand': 0 // Number | Expand by adding firstName, lastName and contactId.
};
apiInstance.searchInboundMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find message by ID(s). | [optional] 
 **query** | **String**| Find recipients by specified search query. | [optional] 
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]
 **expand** | **Number**| Expand by adding firstName, lastName and contactId. | [optional] [default to 0]

### Return type

[**SearchInboundMessagesPaginatedResponse**](SearchInboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchLists"></a>
# **searchLists**
> SearchListsPaginatedResponse searchLists(opts)

Find lists by given criteria



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'ids': "1,2,3,4", // String | Find lists by IDs.
  'query': "A", // String | Find lists by specified search query.
  'onlyMine': 0, // Number | Return only current user lists.
  'onlyDefault': 0, // Number | Return only default lists.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.searchLists(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find lists by IDs. | [optional] 
 **query** | **String**| Find lists by specified search query. | [optional] 
 **onlyMine** | **Number**| Return only current user lists. | [optional] [default to 0]
 **onlyDefault** | **Number**| Return only default lists. | [optional] [default to 0]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**SearchListsPaginatedResponse**](SearchListsPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchOutboundMessages"></a>
# **searchOutboundMessages**
> SearchOutboundMessagesPaginatedResponse searchOutboundMessages(opts)

Find messages

Find outbound messages by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'lastId': 56, // Number | Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified.
  'ids': "ids_example", // String | Find message by ID(s).
  'sessionId': 56, // Number | Find messages by session ID.
  'statuses': "q", // String | Find messages by status.
  'includeDeleted': 0, // Number | Search also in deleted messages.
  'query': "query_example" // String | Find messages by specified search query.
};
apiInstance.searchOutboundMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **lastId** | **Number**| Filter results by ID, selecting all values lesser than the specified ID. Note that the \\'page\\' parameter is ignored when \\'lastId\\' is specified. | [optional] 
 **ids** | **String**| Find message by ID(s). | [optional] 
 **sessionId** | **Number**| Find messages by session ID. | [optional] 
 **statuses** | **String**| Find messages by status. | [optional] 
 **includeDeleted** | **Number**| Search also in deleted messages. | [optional] [default to 0]
 **query** | **String**| Find messages by specified search query. | [optional] 

### Return type

[**SearchOutboundMessagesPaginatedResponse**](SearchOutboundMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchScheduledMessages"></a>
# **searchScheduledMessages**
> SearchScheduledMessagesPaginatedResponse searchScheduledMessages(opts)

Find scheduled messages



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'query': "query_example", // String | Find messages by specified search query.
  'ids': "ids_example", // String | Find schedules by ID(s).
  'status': "x", // String | Fetch schedules with a specific status: a - actual, c - completed, x - all.
  'orderBy': "id", // String | Order results by some field. Default is id.
  'direction': "desc" // String | Order direction. Default is desc.
};
apiInstance.searchScheduledMessages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **query** | **String**| Find messages by specified search query. | [optional] 
 **ids** | **String**| Find schedules by ID(s). | [optional] 
 **status** | **String**| Fetch schedules with a specific status: a - actual, c - completed, x - all. | [optional] [default to x]
 **orderBy** | **String**| Order results by some field. Default is id. | [optional] [default to id]
 **direction** | **String**| Order direction. Default is desc. | [optional] [default to desc]

### Return type

[**SearchScheduledMessagesPaginatedResponse**](SearchScheduledMessagesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchTemplates"></a>
# **searchTemplates**
> SearchTemplatesPaginatedResponse searchTemplates(opts)

Find templates by criteria

Find user templates by given parameters.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var opts = { 
  'page': 1, // Number | Fetch specified results page.
  'limit': 10, // Number | The number of results per page.
  'ids': "ids_example", // String | Find template by ID(s).
  'name': "name_example", // String | Find template by name.
  'content': "content_example" // String | Find template by content.
};
apiInstance.searchTemplates(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Fetch specified results page. | [optional] [default to 1]
 **limit** | **Number**| The number of results per page. | [optional] [default to 10]
 **ids** | **String**| Find template by ID(s). | [optional] 
 **name** | **String**| Find template by name. | [optional] 
 **content** | **String**| Find template by content. | [optional] 

### Return type

[**SearchTemplatesPaginatedResponse**](SearchTemplatesPaginatedResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMessage"></a>
# **sendMessage**
> SendMessageResponse sendMessage(sendMessageInputObject)

Send message

This is the main entrypoint to send messages. See the examples above for the reference.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var sendMessageInputObject = new TextmagicClient.SendMessageInputObject(); // SendMessageInputObject | 

apiInstance.sendMessage(sendMessageInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMessageInputObject** | [**SendMessageInputObject**](SendMessageInputObject.md)|  | 

### Return type

[**SendMessageResponse**](SendMessageResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendPhoneVerificationCodeTFA"></a>
# **sendPhoneVerificationCodeTFA**
> SendPhoneVerificationCodeResponse sendPhoneVerificationCodeTFA(sendPhoneVerificationCodeTFAInputObject)

Step 1: Send a verification code 

Sends a verification code to a specified phone number.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var sendPhoneVerificationCodeTFAInputObject = new TextmagicClient.SendPhoneVerificationCodeTFAInputObject(); // SendPhoneVerificationCodeTFAInputObject | 

apiInstance.sendPhoneVerificationCodeTFA(sendPhoneVerificationCodeTFAInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendPhoneVerificationCodeTFAInputObject** | [**SendPhoneVerificationCodeTFAInputObject**](SendPhoneVerificationCodeTFAInputObject.md)|  | 

### Return type

[**SendPhoneVerificationCodeResponse**](SendPhoneVerificationCodeResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setChatStatus"></a>
# **setChatStatus**
> ResourceLinkResponse setChatStatus(setChatStatusInputObject)

Change chat status

Set the status of the chat given by ID.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var setChatStatusInputObject = new TextmagicClient.SetChatStatusInputObject(); // SetChatStatusInputObject | 

apiInstance.setChatStatus(setChatStatusInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setChatStatusInputObject** | [**SetChatStatusInputObject**](SetChatStatusInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unblockContact"></a>
# **unblockContact**
> unblockContact(unblockContactInputObject)

Unblock a contact by phone number

Unblock a contact by phone number

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var unblockContactInputObject = new TextmagicClient.UnblockContactInputObject(); // UnblockContactInputObject | 

apiInstance.unblockContact(unblockContactInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactInputObject** | [**UnblockContactInputObject**](UnblockContactInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unblockContactsBulk"></a>
# **unblockContactsBulk**
> unblockContactsBulk(unblockContactsBulkInputObject)

Unblock contacts (bulk)

Unblock several contacts by blocked contact IDs or unblock all contacts.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var unblockContactsBulkInputObject = new TextmagicClient.UnblockContactsBulkInputObject(); // UnblockContactsBulkInputObject | 

apiInstance.unblockContactsBulk(unblockContactsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unblockContactsBulkInputObject** | [**UnblockContactsBulkInputObject**](UnblockContactsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unmuteChatsBulk"></a>
# **unmuteChatsBulk**
> unmuteChatsBulk(unmuteChatsBulkInputObject)

Unmute chats (bulk)

Unmute several chats by chat ids or unmute all chats.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var unmuteChatsBulkInputObject = new TextmagicClient.UnmuteChatsBulkInputObject(); // UnmuteChatsBulkInputObject | 

apiInstance.unmuteChatsBulk(unmuteChatsBulkInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unmuteChatsBulkInputObject** | [**UnmuteChatsBulkInputObject**](UnmuteChatsBulkInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="unsubscribeContact"></a>
# **unsubscribeContact**
> ResourceLinkResponse unsubscribeContact(unsubscribeContactInputObject)

Manually unsubscribe a contact

> Please note, if you unsubscribe a contact, this action cannot be reversed. 

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var unsubscribeContactInputObject = new TextmagicClient.UnsubscribeContactInputObject(); // UnsubscribeContactInputObject | 

apiInstance.unsubscribeContact(unsubscribeContactInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsubscribeContactInputObject** | [**UnsubscribeContactInputObject**](UnsubscribeContactInputObject.md)|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBalanceNotificationSettings"></a>
# **updateBalanceNotificationSettings**
> updateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject)

Update balance notification settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateBalanceNotificationSettingsInputObject = new TextmagicClient.UpdateBalanceNotificationSettingsInputObject(); // UpdateBalanceNotificationSettingsInputObject | 

apiInstance.updateBalanceNotificationSettings(updateBalanceNotificationSettingsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBalanceNotificationSettingsInputObject** | [**UpdateBalanceNotificationSettingsInputObject**](UpdateBalanceNotificationSettingsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateCallbackSettings"></a>
# **updateCallbackSettings**
> updateCallbackSettings(updateCallbackSettingsInputObject)

Update callback URL settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateCallbackSettingsInputObject = new TextmagicClient.UpdateCallbackSettingsInputObject(); // UpdateCallbackSettingsInputObject | 

apiInstance.updateCallbackSettings(updateCallbackSettingsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallbackSettingsInputObject** | [**UpdateCallbackSettingsInputObject**](UpdateCallbackSettingsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateChatDesktopNotificationSettings"></a>
# **updateChatDesktopNotificationSettings**
> updateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject)

Update chat desktop notification settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateChatDesktopNotificationSettingsInputObject = new TextmagicClient.UpdateChatDesktopNotificationSettingsInputObject(); // UpdateChatDesktopNotificationSettingsInputObject | 

apiInstance.updateChatDesktopNotificationSettings(updateChatDesktopNotificationSettingsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChatDesktopNotificationSettingsInputObject** | [**UpdateChatDesktopNotificationSettingsInputObject**](UpdateChatDesktopNotificationSettingsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContact"></a>
# **updateContact**
> ResourceLinkResponse updateContact(updateContactInputObject, id)

Edit a contact



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateContactInputObject = new TextmagicClient.UpdateContactInputObject(); // UpdateContactInputObject | 

var id = 1; // Number | 

apiInstance.updateContact(updateContactInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactInputObject** | [**UpdateContactInputObject**](UpdateContactInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContactNote"></a>
# **updateContactNote**
> ResourceLinkResponse updateContactNote(updateContactNoteInputObject, id)

Update a contact note



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateContactNoteInputObject = new TextmagicClient.UpdateContactNoteInputObject(); // UpdateContactNoteInputObject | 

var id = 1; // Number | 

apiInstance.updateContactNote(updateContactNoteInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateContactNoteInputObject** | [**UpdateContactNoteInputObject**](UpdateContactNoteInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCurrentUser"></a>
# **updateCurrentUser**
> UpdateCurrentUserResponse updateCurrentUser(updateCurrentUserInputObject)

Edit current account info



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateCurrentUserInputObject = new TextmagicClient.UpdateCurrentUserInputObject(); // UpdateCurrentUserInputObject | 

apiInstance.updateCurrentUser(updateCurrentUserInputObject).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCurrentUserInputObject** | [**UpdateCurrentUserInputObject**](UpdateCurrentUserInputObject.md)|  | 

### Return type

[**UpdateCurrentUserResponse**](UpdateCurrentUserResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomField"></a>
# **updateCustomField**
> ResourceLinkResponse updateCustomField(updateCustomFieldInputObject, id)

Edit a custom field



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateCustomFieldInputObject = new TextmagicClient.UpdateCustomFieldInputObject(); // UpdateCustomFieldInputObject | 

var id = 1; // Number | 

apiInstance.updateCustomField(updateCustomFieldInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldInputObject** | [**UpdateCustomFieldInputObject**](UpdateCustomFieldInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomFieldValue"></a>
# **updateCustomFieldValue**
> ResourceLinkResponse updateCustomFieldValue(updateCustomFieldValueInputObject, id)

Edit the custom field value of a specified contact



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateCustomFieldValueInputObject = new TextmagicClient.UpdateCustomFieldValueInputObject(); // UpdateCustomFieldValueInputObject | 

var id = 554; // Number | 

apiInstance.updateCustomFieldValue(updateCustomFieldValueInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomFieldValueInputObject** | [**UpdateCustomFieldValueInputObject**](UpdateCustomFieldValueInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInboundMessagesNotificationSettings"></a>
# **updateInboundMessagesNotificationSettings**
> updateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject)

Update inbound messages notification settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateInboundMessagesNotificationSettingsInputObject = new TextmagicClient.UpdateInboundMessagesNotificationSettingsInputObject(); // UpdateInboundMessagesNotificationSettingsInputObject | 

apiInstance.updateInboundMessagesNotificationSettings(updateInboundMessagesNotificationSettingsInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateInboundMessagesNotificationSettingsInputObject** | [**UpdateInboundMessagesNotificationSettingsInputObject**](UpdateInboundMessagesNotificationSettingsInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateList"></a>
# **updateList**
> ResourceLinkResponse updateList(id, opts)

Edit a list



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var id = 1; // Number | 

var opts = { 
  'updateListObject': new TextmagicClient.UpdateListObject() // UpdateListObject | 
};
apiInstance.updateList(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **updateListObject** | [**UpdateListObject**](UpdateListObject.md)|  | [optional] 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSenderSetting"></a>
# **updateSenderSetting**
> updateSenderSetting(updateSenderSettingInputObject)

Change sender settings



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateSenderSettingInputObject = new TextmagicClient.UpdateSenderSettingInputObject(); // UpdateSenderSettingInputObject | 

apiInstance.updateSenderSetting(updateSenderSettingInputObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSenderSettingInputObject** | [**UpdateSenderSettingInputObject**](UpdateSenderSettingInputObject.md)|  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateTemplate"></a>
# **updateTemplate**
> ResourceLinkResponse updateTemplate(updateTemplateInputObject, id)

Update a template



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var updateTemplateInputObject = new TextmagicClient.UpdateTemplateInputObject(); // UpdateTemplateInputObject | 

var id = 1; // Number | 

apiInstance.updateTemplate(updateTemplateInputObject, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTemplateInputObject** | [**UpdateTemplateInputObject**](UpdateTemplateInputObject.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadAvatar"></a>
# **uploadAvatar**
> uploadAvatar(image)

Upload an avatar



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var image = "/path/to/file.txt"; // File | User avatar. Should be a PNG or JPG file not more than 10 MB.

apiInstance.uploadAvatar(image).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| User avatar. Should be a PNG or JPG file not more than 10 MB. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadContactAvatar"></a>
# **uploadContactAvatar**
> ResourceLinkResponse uploadContactAvatar(image, id)

Upload an avatar



### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var image = "/path/to/file.txt"; // File | Contact avatar. Should be a PNG or JPG file not more than 10 MB.

var id = 1; // Number | 

apiInstance.uploadContactAvatar(image, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| Contact avatar. Should be a PNG or JPG file not more than 10 MB. | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadListAvatar"></a>
# **uploadListAvatar**
> ResourceLinkResponse uploadListAvatar(image, id)

Add an avatar for a list

Add an avatar for a list

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var image = "/path/to/file.txt"; // File | List avatar. Should be a PNG or JPG file not more than 10 MB.

var id = 1; // Number | 

apiInstance.uploadListAvatar(image, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| List avatar. Should be a PNG or JPG file not more than 10 MB. | 
 **id** | **Number**|  | 

### Return type

[**ResourceLinkResponse**](ResourceLinkResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadMessageAttachment"></a>
# **uploadMessageAttachment**
> UploadMessageAttachmentResponse uploadMessageAttachment(file)

Upload message attachment

Upload a new file to insert it as a link.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var file = "/path/to/file.txt"; // File | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats.

apiInstance.uploadMessageAttachment(file).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats. | 

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadMessageMMSAttachment"></a>
# **uploadMessageMMSAttachment**
> UploadMessageAttachmentResponse uploadMessageMMSAttachment(file)

Upload message mms attachment

Upload a new file to mms.

### Example
```javascript
var TextmagicClient = require('textmagic-client');
var defaultClient = TextmagicClient.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new TextmagicClient.TextMagicApi();

var file = "/path/to/file.txt"; // File | Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats.

apiInstance.uploadMessageMMSAttachment(file).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Attachment. Supports .jpg, .gif, .png, .pdf, .txt, .csv, .doc, .docx, .xls, .xlsx, .ppt, .pptx & .vcf file formats. | 

### Return type

[**UploadMessageAttachmentResponse**](UploadMessageAttachmentResponse.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

