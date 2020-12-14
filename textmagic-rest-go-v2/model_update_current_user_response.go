/*
 * TextMagic API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package TextMagic

type UpdateCurrentUserResponse struct {
	// Username.
	Username string `json:"username,omitempty"`
	// Account first name.
	FirstName string `json:"firstName,omitempty"`
	// Account last name.
	LastName string `json:"lastName,omitempty"`
	// User email address.
	Email string `json:"email,omitempty"`
	Phone string `json:"phone,omitempty"`
	// Account company name.
	Company string `json:"company,omitempty"`
	// Internal timezone ID. See [Get timezones](https://docs.textmagic.com/#operation/getTimezones).
	Timezone int32 `json:"timezone,omitempty"`
}
