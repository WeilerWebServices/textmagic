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
    /// SetChatStatusInputObject
    /// </summary>
    [DataContract]
    public partial class SetChatStatusInputObject :  IEquatable<SetChatStatusInputObject>, IValidatableObject
    {
        /// <summary>
        /// Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted. 
        /// </summary>
        /// <value>Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted. </value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            
            /// <summary>
            /// Enum A for value: a
            /// </summary>
            [EnumMember(Value = "a")]
            A = 1,
            
            /// <summary>
            /// Enum C for value: c
            /// </summary>
            [EnumMember(Value = "c")]
            C = 2,
            
            /// <summary>
            /// Enum D for value: d
            /// </summary>
            [EnumMember(Value = "d")]
            D = 3
        }

        /// <summary>
        /// Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted. 
        /// </summary>
        /// <value>Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted. </value>
        [DataMember(Name="status", EmitDefaultValue=false)]
        public StatusEnum? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="SetChatStatusInputObject" /> class.
        /// </summary>
        /// <param name="id">Chat ID..</param>
        /// <param name="status">Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted. .</param>
        public SetChatStatusInputObject(int? id = default(int?), StatusEnum? status = default(StatusEnum?))
        {
            this.Id = id;
            this.Status = status;
        }
        
        /// <summary>
        /// Chat ID.
        /// </summary>
        /// <value>Chat ID.</value>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public int? Id { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SetChatStatusInputObject {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
            return this.Equals(input as SetChatStatusInputObject);
        }

        /// <summary>
        /// Returns true if SetChatStatusInputObject instances are equal
        /// </summary>
        /// <param name="input">Instance of SetChatStatusInputObject to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SetChatStatusInputObject input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
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
