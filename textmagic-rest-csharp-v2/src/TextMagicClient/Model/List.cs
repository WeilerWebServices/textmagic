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
    /// List
    /// </summary>
    [DataContract]
    public partial class List :  IEquatable<List>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="List" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected List() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="List" /> class.
        /// </summary>
        /// <param name="id">List ID. (required).</param>
        /// <param name="name">List name. (required).</param>
        /// <param name="description">Description of the list. (required).</param>
        /// <param name="favorited">Is the List favorited? See [Favorites list](https://docs.textmagic.com/#operation/getFavourites). (required).</param>
        /// <param name="membersCount">List members count. (required).</param>
        /// <param name="user">user (required).</param>
        /// <param name="service">Internal service field. (required).</param>
        /// <param name="shared">Is the list **shared** among all sub-accounts? (required).</param>
        /// <param name="avatar">avatar (required).</param>
        /// <param name="isDefault">Indicates that List is used as a default. All new contacts added via the Web-app will be added in this List by default. (required).</param>
        public List(int? id = default(int?), string name = default(string), string description = default(string), bool? favorited = default(bool?), int? membersCount = default(int?), User user = default(User), bool? service = default(bool?), bool? shared = default(bool?), ListImage avatar = default(ListImage), bool? isDefault = default(bool?))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for List and cannot be null");
            }
            else
            {
                this.Id = id;
            }
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for List and cannot be null");
            }
            else
            {
                this.Name = name;
            }
            // to ensure "description" is required (not null)
            if (description == null)
            {
                throw new InvalidDataException("description is a required property for List and cannot be null");
            }
            else
            {
                this.Description = description;
            }
            // to ensure "favorited" is required (not null)
            if (favorited == null)
            {
                throw new InvalidDataException("favorited is a required property for List and cannot be null");
            }
            else
            {
                this.Favorited = favorited;
            }
            // to ensure "membersCount" is required (not null)
            if (membersCount == null)
            {
                throw new InvalidDataException("membersCount is a required property for List and cannot be null");
            }
            else
            {
                this.MembersCount = membersCount;
            }
            // to ensure "user" is required (not null)
            if (user == null)
            {
                throw new InvalidDataException("user is a required property for List and cannot be null");
            }
            else
            {
                this.User = user;
            }
            // to ensure "service" is required (not null)
            if (service == null)
            {
                throw new InvalidDataException("service is a required property for List and cannot be null");
            }
            else
            {
                this.Service = service;
            }
            // to ensure "shared" is required (not null)
            if (shared == null)
            {
                throw new InvalidDataException("shared is a required property for List and cannot be null");
            }
            else
            {
                this.Shared = shared;
            }
            // to ensure "avatar" is required (not null)
            if (avatar == null)
            {
                throw new InvalidDataException("avatar is a required property for List and cannot be null");
            }
            else
            {
                this.Avatar = avatar;
            }
            // to ensure "isDefault" is required (not null)
            if (isDefault == null)
            {
                throw new InvalidDataException("isDefault is a required property for List and cannot be null");
            }
            else
            {
                this.IsDefault = isDefault;
            }
        }
        
        /// <summary>
        /// List ID.
        /// </summary>
        /// <value>List ID.</value>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public int? Id { get; set; }

        /// <summary>
        /// List name.
        /// </summary>
        /// <value>List name.</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Description of the list.
        /// </summary>
        /// <value>Description of the list.</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Is the List favorited? See [Favorites list](https://docs.textmagic.com/#operation/getFavourites).
        /// </summary>
        /// <value>Is the List favorited? See [Favorites list](https://docs.textmagic.com/#operation/getFavourites).</value>
        [DataMember(Name="favorited", EmitDefaultValue=false)]
        public bool? Favorited { get; set; }

        /// <summary>
        /// List members count.
        /// </summary>
        /// <value>List members count.</value>
        [DataMember(Name="membersCount", EmitDefaultValue=false)]
        public int? MembersCount { get; set; }

        /// <summary>
        /// Gets or Sets User
        /// </summary>
        [DataMember(Name="user", EmitDefaultValue=false)]
        public User User { get; set; }

        /// <summary>
        /// Internal service field.
        /// </summary>
        /// <value>Internal service field.</value>
        [DataMember(Name="service", EmitDefaultValue=false)]
        public bool? Service { get; set; }

        /// <summary>
        /// Is the list **shared** among all sub-accounts?
        /// </summary>
        /// <value>Is the list **shared** among all sub-accounts?</value>
        [DataMember(Name="shared", EmitDefaultValue=false)]
        public bool? Shared { get; set; }

        /// <summary>
        /// Gets or Sets Avatar
        /// </summary>
        [DataMember(Name="avatar", EmitDefaultValue=false)]
        public ListImage Avatar { get; set; }

        /// <summary>
        /// Indicates that List is used as a default. All new contacts added via the Web-app will be added in this List by default.
        /// </summary>
        /// <value>Indicates that List is used as a default. All new contacts added via the Web-app will be added in this List by default.</value>
        [DataMember(Name="isDefault", EmitDefaultValue=false)]
        public bool? IsDefault { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class List {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Favorited: ").Append(Favorited).Append("\n");
            sb.Append("  MembersCount: ").Append(MembersCount).Append("\n");
            sb.Append("  User: ").Append(User).Append("\n");
            sb.Append("  Service: ").Append(Service).Append("\n");
            sb.Append("  Shared: ").Append(Shared).Append("\n");
            sb.Append("  Avatar: ").Append(Avatar).Append("\n");
            sb.Append("  IsDefault: ").Append(IsDefault).Append("\n");
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
            return this.Equals(input as List);
        }

        /// <summary>
        /// Returns true if List instances are equal
        /// </summary>
        /// <param name="input">Instance of List to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(List input)
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
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Favorited == input.Favorited ||
                    (this.Favorited != null &&
                    this.Favorited.Equals(input.Favorited))
                ) && 
                (
                    this.MembersCount == input.MembersCount ||
                    (this.MembersCount != null &&
                    this.MembersCount.Equals(input.MembersCount))
                ) && 
                (
                    this.User == input.User ||
                    (this.User != null &&
                    this.User.Equals(input.User))
                ) && 
                (
                    this.Service == input.Service ||
                    (this.Service != null &&
                    this.Service.Equals(input.Service))
                ) && 
                (
                    this.Shared == input.Shared ||
                    (this.Shared != null &&
                    this.Shared.Equals(input.Shared))
                ) && 
                (
                    this.Avatar == input.Avatar ||
                    (this.Avatar != null &&
                    this.Avatar.Equals(input.Avatar))
                ) && 
                (
                    this.IsDefault == input.IsDefault ||
                    (this.IsDefault != null &&
                    this.IsDefault.Equals(input.IsDefault))
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Favorited != null)
                    hashCode = hashCode * 59 + this.Favorited.GetHashCode();
                if (this.MembersCount != null)
                    hashCode = hashCode * 59 + this.MembersCount.GetHashCode();
                if (this.User != null)
                    hashCode = hashCode * 59 + this.User.GetHashCode();
                if (this.Service != null)
                    hashCode = hashCode * 59 + this.Service.GetHashCode();
                if (this.Shared != null)
                    hashCode = hashCode * 59 + this.Shared.GetHashCode();
                if (this.Avatar != null)
                    hashCode = hashCode * 59 + this.Avatar.GetHashCode();
                if (this.IsDefault != null)
                    hashCode = hashCode * 59 + this.IsDefault.GetHashCode();
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
