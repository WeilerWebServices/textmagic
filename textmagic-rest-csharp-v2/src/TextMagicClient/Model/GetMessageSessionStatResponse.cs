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
    /// GetMessageSessionStatResponse
    /// </summary>
    [DataContract]
    public partial class GetMessageSessionStatResponse :  IEquatable<GetMessageSessionStatResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetMessageSessionStatResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected GetMessageSessionStatResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="GetMessageSessionStatResponse" /> class.
        /// </summary>
        /// <param name="failed">Amount of failed messages. (required).</param>
        /// <param name="delivered">Amount of delivered messages. (required).</param>
        /// <param name="accepted">Amount of accepted messages. (required).</param>
        /// <param name="rejected">Amount of rejected messages. (required).</param>
        /// <param name="scheduled">Amount of scheduled messages. (required).</param>
        /// <param name="all">Total amount of messages. (required).</param>
        /// <param name="sent">Amount of sent but not yet delivered messages. (required).</param>
        public GetMessageSessionStatResponse(int? failed = default(int?), int? delivered = default(int?), int? accepted = default(int?), int? rejected = default(int?), int? scheduled = default(int?), int? all = default(int?), int? sent = default(int?))
        {
            // to ensure "failed" is required (not null)
            if (failed == null)
            {
                throw new InvalidDataException("failed is a required property for GetMessageSessionStatResponse and cannot be null");
            }
            else
            {
                this.Failed = failed;
            }
            // to ensure "delivered" is required (not null)
            if (delivered == null)
            {
                throw new InvalidDataException("delivered is a required property for GetMessageSessionStatResponse and cannot be null");
            }
            else
            {
                this.Delivered = delivered;
            }
            // to ensure "accepted" is required (not null)
            if (accepted == null)
            {
                throw new InvalidDataException("accepted is a required property for GetMessageSessionStatResponse and cannot be null");
            }
            else
            {
                this.Accepted = accepted;
            }
            // to ensure "rejected" is required (not null)
            if (rejected == null)
            {
                throw new InvalidDataException("rejected is a required property for GetMessageSessionStatResponse and cannot be null");
            }
            else
            {
                this.Rejected = rejected;
            }
            // to ensure "scheduled" is required (not null)
            if (scheduled == null)
            {
                throw new InvalidDataException("scheduled is a required property for GetMessageSessionStatResponse and cannot be null");
            }
            else
            {
                this.Scheduled = scheduled;
            }
            // to ensure "all" is required (not null)
            if (all == null)
            {
                throw new InvalidDataException("all is a required property for GetMessageSessionStatResponse and cannot be null");
            }
            else
            {
                this.All = all;
            }
            // to ensure "sent" is required (not null)
            if (sent == null)
            {
                throw new InvalidDataException("sent is a required property for GetMessageSessionStatResponse and cannot be null");
            }
            else
            {
                this.Sent = sent;
            }
        }
        
        /// <summary>
        /// Amount of failed messages.
        /// </summary>
        /// <value>Amount of failed messages.</value>
        [DataMember(Name="failed", EmitDefaultValue=false)]
        public int? Failed { get; set; }

        /// <summary>
        /// Amount of delivered messages.
        /// </summary>
        /// <value>Amount of delivered messages.</value>
        [DataMember(Name="delivered", EmitDefaultValue=false)]
        public int? Delivered { get; set; }

        /// <summary>
        /// Amount of accepted messages.
        /// </summary>
        /// <value>Amount of accepted messages.</value>
        [DataMember(Name="accepted", EmitDefaultValue=false)]
        public int? Accepted { get; set; }

        /// <summary>
        /// Amount of rejected messages.
        /// </summary>
        /// <value>Amount of rejected messages.</value>
        [DataMember(Name="rejected", EmitDefaultValue=false)]
        public int? Rejected { get; set; }

        /// <summary>
        /// Amount of scheduled messages.
        /// </summary>
        /// <value>Amount of scheduled messages.</value>
        [DataMember(Name="scheduled", EmitDefaultValue=false)]
        public int? Scheduled { get; set; }

        /// <summary>
        /// Total amount of messages.
        /// </summary>
        /// <value>Total amount of messages.</value>
        [DataMember(Name="all", EmitDefaultValue=false)]
        public int? All { get; set; }

        /// <summary>
        /// Amount of sent but not yet delivered messages.
        /// </summary>
        /// <value>Amount of sent but not yet delivered messages.</value>
        [DataMember(Name="sent", EmitDefaultValue=false)]
        public int? Sent { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GetMessageSessionStatResponse {\n");
            sb.Append("  Failed: ").Append(Failed).Append("\n");
            sb.Append("  Delivered: ").Append(Delivered).Append("\n");
            sb.Append("  Accepted: ").Append(Accepted).Append("\n");
            sb.Append("  Rejected: ").Append(Rejected).Append("\n");
            sb.Append("  Scheduled: ").Append(Scheduled).Append("\n");
            sb.Append("  All: ").Append(All).Append("\n");
            sb.Append("  Sent: ").Append(Sent).Append("\n");
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
            return this.Equals(input as GetMessageSessionStatResponse);
        }

        /// <summary>
        /// Returns true if GetMessageSessionStatResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of GetMessageSessionStatResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GetMessageSessionStatResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Failed == input.Failed ||
                    (this.Failed != null &&
                    this.Failed.Equals(input.Failed))
                ) && 
                (
                    this.Delivered == input.Delivered ||
                    (this.Delivered != null &&
                    this.Delivered.Equals(input.Delivered))
                ) && 
                (
                    this.Accepted == input.Accepted ||
                    (this.Accepted != null &&
                    this.Accepted.Equals(input.Accepted))
                ) && 
                (
                    this.Rejected == input.Rejected ||
                    (this.Rejected != null &&
                    this.Rejected.Equals(input.Rejected))
                ) && 
                (
                    this.Scheduled == input.Scheduled ||
                    (this.Scheduled != null &&
                    this.Scheduled.Equals(input.Scheduled))
                ) && 
                (
                    this.All == input.All ||
                    (this.All != null &&
                    this.All.Equals(input.All))
                ) && 
                (
                    this.Sent == input.Sent ||
                    (this.Sent != null &&
                    this.Sent.Equals(input.Sent))
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
                if (this.Failed != null)
                    hashCode = hashCode * 59 + this.Failed.GetHashCode();
                if (this.Delivered != null)
                    hashCode = hashCode * 59 + this.Delivered.GetHashCode();
                if (this.Accepted != null)
                    hashCode = hashCode * 59 + this.Accepted.GetHashCode();
                if (this.Rejected != null)
                    hashCode = hashCode * 59 + this.Rejected.GetHashCode();
                if (this.Scheduled != null)
                    hashCode = hashCode * 59 + this.Scheduled.GetHashCode();
                if (this.All != null)
                    hashCode = hashCode * 59 + this.All.GetHashCode();
                if (this.Sent != null)
                    hashCode = hashCode * 59 + this.Sent.GetHashCode();
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
