/* 
 * TextMagic API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = TextMagicClient.Client.SwaggerDateConverter;

namespace TextMagicClient.Model
{
    /// <summary>
    /// ClearAndAssignContactsToListInputObject
    /// </summary>
    [DataContract]
    public partial class ClearAndAssignContactsToListInputObject :  IEquatable<ClearAndAssignContactsToListInputObject>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ClearAndAssignContactsToListInputObject" /> class.
        /// </summary>
        /// <param name="contacts">Contact ID(s), separated by a comma or \&quot;all\&quot; to add all contacts belonging to the current user..</param>
        public ClearAndAssignContactsToListInputObject(string contacts = default(string))
        {
            this.Contacts = contacts;
        }
        
        /// <summary>
        /// Contact ID(s), separated by a comma or \&quot;all\&quot; to add all contacts belonging to the current user.
        /// </summary>
        /// <value>Contact ID(s), separated by a comma or \&quot;all\&quot; to add all contacts belonging to the current user.</value>
        [DataMember(Name="contacts", EmitDefaultValue=false)]
        public string Contacts { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ClearAndAssignContactsToListInputObject {\n");
            sb.Append("  Contacts: ").Append(Contacts).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as ClearAndAssignContactsToListInputObject);
        }

        /// <summary>
        /// Returns true if ClearAndAssignContactsToListInputObject instances are equal
        /// </summary>
        /// <param name="input">Instance of ClearAndAssignContactsToListInputObject to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ClearAndAssignContactsToListInputObject input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Contacts == input.Contacts ||
                    (this.Contacts != null &&
                    this.Contacts.Equals(input.Contacts))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Contacts != null)
                    hashCode = hashCode * 59 + this.Contacts.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}