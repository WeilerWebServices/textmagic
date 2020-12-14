/*
 * TextMagic API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.textmagic.sdk.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * UpdateSurveyCountryItem
 */

public class UpdateSurveyCountryItem {
  @SerializedName("country")
  private String country = null;

  @SerializedName("userInboundId")
  private Integer userInboundId = null;

  public UpdateSurveyCountryItem country(String country) {
    this.country = country;
    return this;
  }

   /**
   * The 2-letter ISO country code.
   * @return country
  **/
  @ApiModelProperty(example = "US", required = true, value = "The 2-letter ISO country code.")
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public UpdateSurveyCountryItem userInboundId(Integer userInboundId) {
    this.userInboundId = userInboundId;
    return this;
  }

   /**
   * User inbound phone ID.
   * @return userInboundId
  **/
  @ApiModelProperty(example = "10", required = true, value = "User inbound phone ID.")
  public Integer getUserInboundId() {
    return userInboundId;
  }

  public void setUserInboundId(Integer userInboundId) {
    this.userInboundId = userInboundId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateSurveyCountryItem updateSurveyCountryItem = (UpdateSurveyCountryItem) o;
    return Objects.equals(this.country, updateSurveyCountryItem.country) &&
        Objects.equals(this.userInboundId, updateSurveyCountryItem.userInboundId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(country, userInboundId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateSurveyCountryItem {\n");
    
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    userInboundId: ").append(toIndentedString(userInboundId)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
