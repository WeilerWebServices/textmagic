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
 * DeleteOutboundMessagesBulkInputObject
 */

public class DeleteOutboundMessagesBulkInputObject {
  @SerializedName("ids")
  private String ids = null;

  @SerializedName("all")
  private Integer all = null;

  public DeleteOutboundMessagesBulkInputObject ids(String ids) {
    this.ids = ids;
    return this;
  }

   /**
   * Entity ID(s), separated by comma.
   * @return ids
  **/
  @ApiModelProperty(example = "1,2,3", value = "Entity ID(s), separated by comma.")
  public String getIds() {
    return ids;
  }

  public void setIds(String ids) {
    this.ids = ids;
  }

  public DeleteOutboundMessagesBulkInputObject all(Integer all) {
    this.all = all;
    return this;
  }

   /**
   * Default is 0 (false). If set to 1, all the entities will be removed.
   * @return all
  **/
  @ApiModelProperty(example = "1", value = "Default is 0 (false). If set to 1, all the entities will be removed.")
  public Integer getAll() {
    return all;
  }

  public void setAll(Integer all) {
    this.all = all;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DeleteOutboundMessagesBulkInputObject deleteOutboundMessagesBulkInputObject = (DeleteOutboundMessagesBulkInputObject) o;
    return Objects.equals(this.ids, deleteOutboundMessagesBulkInputObject.ids) &&
        Objects.equals(this.all, deleteOutboundMessagesBulkInputObject.all);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ids, all);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeleteOutboundMessagesBulkInputObject {\n");
    
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
    sb.append("    all: ").append(toIndentedString(all)).append("\n");
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

