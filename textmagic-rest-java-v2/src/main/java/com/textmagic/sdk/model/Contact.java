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
import com.textmagic.sdk.model.ContactCustomField;
import com.textmagic.sdk.model.ContactImage;
import com.textmagic.sdk.model.ContactNote;
import com.textmagic.sdk.model.Country;
import com.textmagic.sdk.model.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Contact
 */

public class Contact {
  @SerializedName("id")
  private Integer id = null;

  @SerializedName("favorited")
  private Boolean favorited = null;

  @SerializedName("blocked")
  private Boolean blocked = null;

  @SerializedName("firstName")
  private String firstName = null;

  @SerializedName("lastName")
  private String lastName = null;

  @SerializedName("companyName")
  private String companyName = null;

  @SerializedName("phone")
  private String phone = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("country")
  private Country country = null;

  @SerializedName("customFields")
  private List<ContactCustomField> customFields = new ArrayList<ContactCustomField>();

  @SerializedName("user")
  private User user = null;

  @SerializedName("lists")
  private List<List> lists = new ArrayList<List>();

  @SerializedName("phoneType")
  private String phoneType = null;

  @SerializedName("avatar")
  private ContactImage avatar = null;

  @SerializedName("notes")
  private List<ContactNote> notes = new ArrayList<ContactNote>();

  public Contact id(Integer id) {
    this.id = id;
    return this;
  }

   /**
   * Contact ID.
   * @return id
  **/
  @ApiModelProperty(example = "27074", required = true, value = "Contact ID.")
  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Contact favorited(Boolean favorited) {
    this.favorited = favorited;
    return this;
  }

   /**
   * Is the Contact favorite? [Favorite list](https://docs.textmagic.com/#operation/getFavorites).
   * @return favorited
  **/
  @ApiModelProperty(example = "true", required = true, value = "Is the Contact favorite? [Favorite list](https://docs.textmagic.com/#operation/getFavorites).")
  public Boolean isFavorited() {
    return favorited;
  }

  public void setFavorited(Boolean favorited) {
    this.favorited = favorited;
  }

  public Contact blocked(Boolean blocked) {
    this.blocked = blocked;
    return this;
  }

   /**
   * Is the Contact blocked? [Blocked contacts](https://docs.textmagic.com/#operation/getBlockedContacts).
   * @return blocked
  **/
  @ApiModelProperty(example = "true", required = true, value = "Is the Contact blocked? [Blocked contacts](https://docs.textmagic.com/#operation/getBlockedContacts).")
  public Boolean isBlocked() {
    return blocked;
  }

  public void setBlocked(Boolean blocked) {
    this.blocked = blocked;
  }

  public Contact firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * Contact first name.
   * @return firstName
  **/
  @ApiModelProperty(example = "Charles", required = true, value = "Contact first name.")
  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public Contact lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * Contact last name.
   * @return lastName
  **/
  @ApiModelProperty(example = "Conway", required = true, value = "Contact last name.")
  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Contact companyName(String companyName) {
    this.companyName = companyName;
    return this;
  }

   /**
   * Company name.
   * @return companyName
  **/
  @ApiModelProperty(example = "Example Ltd.", required = true, value = "Company name.")
  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }

  public Contact phone(String phone) {
    this.phone = phone;
    return this;
  }

   /**
   * Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164).
   * @return phone
  **/
  @ApiModelProperty(example = "447860021130", required = true, value = "Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164).")
  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public Contact email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Contact email address.
   * @return email
  **/
  @ApiModelProperty(example = "charles@example.com", required = true, value = "Contact email address.")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Contact country(Country country) {
    this.country = country;
    return this;
  }

   /**
   * Contact country.
   * @return country
  **/
  @ApiModelProperty(required = true, value = "Contact country.")
  public Country getCountry() {
    return country;
  }

  public void setCountry(Country country) {
    this.country = country;
  }

  public Contact customFields(List<ContactCustomField> customFields) {
    this.customFields = customFields;
    return this;
  }

  public Contact addCustomFieldsItem(ContactCustomField customFieldsItem) {
    this.customFields.add(customFieldsItem);
    return this;
  }

   /**
   * See the [Custom Fields](https://docs.textmagic.com/#tag/Custom-Fields) section.
   * @return customFields
  **/
  @ApiModelProperty(required = true, value = "See the [Custom Fields](https://docs.textmagic.com/#tag/Custom-Fields) section.")
  public List<ContactCustomField> getCustomFields() {
    return customFields;
  }

  public void setCustomFields(List<ContactCustomField> customFields) {
    this.customFields = customFields;
  }

  public Contact user(User user) {
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

  public Contact lists(List<List> lists) {
    this.lists = lists;
    return this;
  }

  public Contact addListsItem(List listsItem) {
    this.lists.add(listsItem);
    return this;
  }

   /**
   * Get lists
   * @return lists
  **/
  @ApiModelProperty(required = true, value = "")
  public List<List> getLists() {
    return lists;
  }

  public void setLists(List<List> lists) {
    this.lists = lists;
  }

  public Contact phoneType(String phoneType) {
    this.phoneType = phoneType;
    return this;
  }

   /**
   * Phone number type: * **0** if it is fixed-line; * **1** if it is mobile; * **2** if it is mobile or fixed-line (in case we cannot distingush between fixed-line or mobile); * **3** if it is toll-free; * **4** if it is a premium rate phone; * **5** if it is a shared cost phone; * **6** if it is a VoIP; * **7** if it is a [Personal Number](); * **8** if it is a pager; * **9** if it is a Universal Access Number; * **10** if the phone type is unknown; * **-1** if the phone type is not yet processed or cannot be determined. 
   * @return phoneType
  **/
  @ApiModelProperty(required = true, value = "Phone number type: * **0** if it is fixed-line; * **1** if it is mobile; * **2** if it is mobile or fixed-line (in case we cannot distingush between fixed-line or mobile); * **3** if it is toll-free; * **4** if it is a premium rate phone; * **5** if it is a shared cost phone; * **6** if it is a VoIP; * **7** if it is a [Personal Number](); * **8** if it is a pager; * **9** if it is a Universal Access Number; * **10** if the phone type is unknown; * **-1** if the phone type is not yet processed or cannot be determined. ")
  public String getPhoneType() {
    return phoneType;
  }

  public void setPhoneType(String phoneType) {
    this.phoneType = phoneType;
  }

  public Contact avatar(ContactImage avatar) {
    this.avatar = avatar;
    return this;
  }

   /**
   * Get avatar
   * @return avatar
  **/
  @ApiModelProperty(required = true, value = "")
  public ContactImage getAvatar() {
    return avatar;
  }

  public void setAvatar(ContactImage avatar) {
    this.avatar = avatar;
  }

  public Contact notes(List<ContactNote> notes) {
    this.notes = notes;
    return this;
  }

  public Contact addNotesItem(ContactNote notesItem) {
    this.notes.add(notesItem);
    return this;
  }

   /**
   * Get notes
   * @return notes
  **/
  @ApiModelProperty(required = true, value = "")
  public List<ContactNote> getNotes() {
    return notes;
  }

  public void setNotes(List<ContactNote> notes) {
    this.notes = notes;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Contact contact = (Contact) o;
    return Objects.equals(this.id, contact.id) &&
        Objects.equals(this.favorited, contact.favorited) &&
        Objects.equals(this.blocked, contact.blocked) &&
        Objects.equals(this.firstName, contact.firstName) &&
        Objects.equals(this.lastName, contact.lastName) &&
        Objects.equals(this.companyName, contact.companyName) &&
        Objects.equals(this.phone, contact.phone) &&
        Objects.equals(this.email, contact.email) &&
        Objects.equals(this.country, contact.country) &&
        Objects.equals(this.customFields, contact.customFields) &&
        Objects.equals(this.user, contact.user) &&
        Objects.equals(this.lists, contact.lists) &&
        Objects.equals(this.phoneType, contact.phoneType) &&
        Objects.equals(this.avatar, contact.avatar) &&
        Objects.equals(this.notes, contact.notes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, favorited, blocked, firstName, lastName, companyName, phone, email, country, customFields, user, lists, phoneType, avatar, notes);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Contact {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    favorited: ").append(toIndentedString(favorited)).append("\n");
    sb.append("    blocked: ").append(toIndentedString(blocked)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    companyName: ").append(toIndentedString(companyName)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    customFields: ").append(toIndentedString(customFields)).append("\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
    sb.append("    lists: ").append(toIndentedString(lists)).append("\n");
    sb.append("    phoneType: ").append(toIndentedString(phoneType)).append("\n");
    sb.append("    avatar: ").append(toIndentedString(avatar)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
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
