/*
 * TextMagic API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 2
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package TextMagic

type ReopenChatsBulkInputObject struct {
	// Entity ID(s), separated by comma.
	Ids string `json:"ids,omitempty"`
	// Entity ID(s), separated by comma.
	All bool `json:"all,omitempty"`
}
