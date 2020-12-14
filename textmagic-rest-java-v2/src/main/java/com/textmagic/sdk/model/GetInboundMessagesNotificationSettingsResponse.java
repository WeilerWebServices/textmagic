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
 * GetInboundMessagesNotificationSettingsResponse
 */

public class GetInboundMessagesNotificationSettingsResponse {
  @SerializedName("inboundMessageNotification")
  private Boolean inboundMessageNotification = null;

  @SerializedName("forwardedCallNotification")
  private Boolean forwardedCallNotification = null;

  @SerializedName("includeSmsHistory")
  private Boolean includeSmsHistory = null;

  @SerializedName("sendInHtmlFormat")
  private Boolean sendInHtmlFormat = null;

  @SerializedName("alertEmail1")
  private String alertEmail1 = null;

  @SerializedName("alertEmail2")
  private String alertEmail2 = null;

  @SerializedName("alertEmail3")
  private String alertEmail3 = null;

  public GetInboundMessagesNotificationSettingsResponse inboundMessageNotification(Boolean inboundMessageNotification) {
    this.inboundMessageNotification = inboundMessageNotification;
    return this;
  }

   /**
   * Should user receive notification about new incoming messages.
   * @return inboundMessageNotification
  **/
  @ApiModelProperty(example = "true", required = true, value = "Should user receive notification about new incoming messages.")
  public Boolean isInboundMessageNotification() {
    return inboundMessageNotification;
  }

  public void setInboundMessageNotification(Boolean inboundMessageNotification) {
    this.inboundMessageNotification = inboundMessageNotification;
  }

  public GetInboundMessagesNotificationSettingsResponse forwardedCallNotification(Boolean forwardedCallNotification) {
    this.forwardedCallNotification = forwardedCallNotification;
    return this;
  }

   /**
   * Should user receive notification about new forwarded calls.
   * @return forwardedCallNotification
  **/
  @ApiModelProperty(example = "true", required = true, value = "Should user receive notification about new forwarded calls.")
  public Boolean isForwardedCallNotification() {
    return forwardedCallNotification;
  }

  public void setForwardedCallNotification(Boolean forwardedCallNotification) {
    this.forwardedCallNotification = forwardedCallNotification;
  }

  public GetInboundMessagesNotificationSettingsResponse includeSmsHistory(Boolean includeSmsHistory) {
    this.includeSmsHistory = includeSmsHistory;
    return this;
  }

   /**
   * Include SMS history into notification Email.
   * @return includeSmsHistory
  **/
  @ApiModelProperty(example = "true", required = true, value = "Include SMS history into notification Email.")
  public Boolean isIncludeSmsHistory() {
    return includeSmsHistory;
  }

  public void setIncludeSmsHistory(Boolean includeSmsHistory) {
    this.includeSmsHistory = includeSmsHistory;
  }

  public GetInboundMessagesNotificationSettingsResponse sendInHtmlFormat(Boolean sendInHtmlFormat) {
    this.sendInHtmlFormat = sendInHtmlFormat;
    return this;
  }

   /**
   * Send Email notification in HTML format.
   * @return sendInHtmlFormat
  **/
  @ApiModelProperty(example = "true", required = true, value = "Send Email notification in HTML format.")
  public Boolean isSendInHtmlFormat() {
    return sendInHtmlFormat;
  }

  public void setSendInHtmlFormat(Boolean sendInHtmlFormat) {
    this.sendInHtmlFormat = sendInHtmlFormat;
  }

  public GetInboundMessagesNotificationSettingsResponse alertEmail1(String alertEmail1) {
    this.alertEmail1 = alertEmail1;
    return this;
  }

   /**
   * New message notification email 1.
   * @return alertEmail1
  **/
  @ApiModelProperty(example = "test@test.com", required = true, value = "New message notification email 1.")
  public String getAlertEmail1() {
    return alertEmail1;
  }

  public void setAlertEmail1(String alertEmail1) {
    this.alertEmail1 = alertEmail1;
  }

  public GetInboundMessagesNotificationSettingsResponse alertEmail2(String alertEmail2) {
    this.alertEmail2 = alertEmail2;
    return this;
  }

   /**
   * New message notification email 2.
   * @return alertEmail2
  **/
  @ApiModelProperty(example = "test@test.com", required = true, value = "New message notification email 2.")
  public String getAlertEmail2() {
    return alertEmail2;
  }

  public void setAlertEmail2(String alertEmail2) {
    this.alertEmail2 = alertEmail2;
  }

  public GetInboundMessagesNotificationSettingsResponse alertEmail3(String alertEmail3) {
    this.alertEmail3 = alertEmail3;
    return this;
  }

   /**
   * New message notification email 3.
   * @return alertEmail3
  **/
  @ApiModelProperty(example = "test@test.com", required = true, value = "New message notification email 3.")
  public String getAlertEmail3() {
    return alertEmail3;
  }

  public void setAlertEmail3(String alertEmail3) {
    this.alertEmail3 = alertEmail3;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetInboundMessagesNotificationSettingsResponse getInboundMessagesNotificationSettingsResponse = (GetInboundMessagesNotificationSettingsResponse) o;
    return Objects.equals(this.inboundMessageNotification, getInboundMessagesNotificationSettingsResponse.inboundMessageNotification) &&
        Objects.equals(this.forwardedCallNotification, getInboundMessagesNotificationSettingsResponse.forwardedCallNotification) &&
        Objects.equals(this.includeSmsHistory, getInboundMessagesNotificationSettingsResponse.includeSmsHistory) &&
        Objects.equals(this.sendInHtmlFormat, getInboundMessagesNotificationSettingsResponse.sendInHtmlFormat) &&
        Objects.equals(this.alertEmail1, getInboundMessagesNotificationSettingsResponse.alertEmail1) &&
        Objects.equals(this.alertEmail2, getInboundMessagesNotificationSettingsResponse.alertEmail2) &&
        Objects.equals(this.alertEmail3, getInboundMessagesNotificationSettingsResponse.alertEmail3);
  }

  @Override
  public int hashCode() {
    return Objects.hash(inboundMessageNotification, forwardedCallNotification, includeSmsHistory, sendInHtmlFormat, alertEmail1, alertEmail2, alertEmail3);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetInboundMessagesNotificationSettingsResponse {\n");
    
    sb.append("    inboundMessageNotification: ").append(toIndentedString(inboundMessageNotification)).append("\n");
    sb.append("    forwardedCallNotification: ").append(toIndentedString(forwardedCallNotification)).append("\n");
    sb.append("    includeSmsHistory: ").append(toIndentedString(includeSmsHistory)).append("\n");
    sb.append("    sendInHtmlFormat: ").append(toIndentedString(sendInHtmlFormat)).append("\n");
    sb.append("    alertEmail1: ").append(toIndentedString(alertEmail1)).append("\n");
    sb.append("    alertEmail2: ").append(toIndentedString(alertEmail2)).append("\n");
    sb.append("    alertEmail3: ").append(toIndentedString(alertEmail3)).append("\n");
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

