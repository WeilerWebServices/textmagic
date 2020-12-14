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
import com.textmagic.sdk.model.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.threeten.bp.OffsetDateTime;

/**
 * ContactNote
 */

public class ContactNote {
  @SerializedName("id")
  private Integer id = null;

  @SerializedName("createdAt")
  private OffsetDateTime createdAt = null;

  @SerializedName("note")
  private String note = null;

  @SerializedName("user")
  private User user = null;

  public ContactNote id(Integer id) {
    this.id = id;
    return this;
  }

   /**
   * Contact note ID.
   * @return id
  **/
  @ApiModelProperty(example = "5", required = true, value = "Contact note ID.")
  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public ContactNote createdAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Contact note creation time.
   * @return createdAt
  **/
  @ApiModelProperty(example = "2015-06-19T09:48:24+0000", required = true, value = "Contact note creation time.")
  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public ContactNote note(String note) {
    this.note = note;
    return this;
  }

   /**
   * Contact note text.
   * @return note
  **/
  @ApiModelProperty(example = "Test note", required = true, value = "Contact note text.")
  public String getNote() {
    return note;
  }

  public void setNote(String note) {
    this.note = note;
  }

  public ContactNote user(User user) {
    this.user = user;
    return this;
  }

   /**
   * Get user
   * @return user
  **/
  @ApiModelProperty(required = true, value = "")
  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContactNote contactNote = (ContactNote) o;
    return Objects.equals(this.id, contactNote.id) &&
        Objects.equals(this.createdAt, contactNote.createdAt) &&
        Objects.equals(this.note, contactNote.note) &&
        Objects.equals(this.user, contactNote.user);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, createdAt, note, user);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContactNote {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
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
