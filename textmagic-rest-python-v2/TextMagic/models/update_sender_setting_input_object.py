# coding: utf-8

"""
    TextMagic API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 2
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class UpdateSenderSettingInputObject(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'value': 'str',
        'country': 'str',
        'chat_id': 'int'
    }

    attribute_map = {
        'value': 'value',
        'country': 'country',
        'chat_id': 'chatId'
    }

    def __init__(self, value=None, country=None, chat_id=None):  # noqa: E501
        """UpdateSenderSettingInputObject - a model defined in Swagger"""  # noqa: E501

        self._value = None
        self._country = None
        self._chat_id = None
        self.discriminator = None

        if value is not None:
            self.value = value
        if country is not None:
            self.country = country
        if chat_id is not None:
            self.chat_id = chat_id

    @property
    def value(self):
        """Gets the value of this UpdateSenderSettingInputObject.  # noqa: E501

        Available phone number in international E.164 format or senderid.  # noqa: E501

        :return: The value of this UpdateSenderSettingInputObject.  # noqa: E501
        :rtype: str
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this UpdateSenderSettingInputObject.

        Available phone number in international E.164 format or senderid.  # noqa: E501

        :param value: The value of this UpdateSenderSettingInputObject.  # noqa: E501
        :type: str
        """

        self._value = value

    @property
    def country(self):
        """Gets the country of this UpdateSenderSettingInputObject.  # noqa: E501

        Country for which the setting will be set.  # noqa: E501

        :return: The country of this UpdateSenderSettingInputObject.  # noqa: E501
        :rtype: str
        """
        return self._country

    @country.setter
    def country(self, country):
        """Sets the country of this UpdateSenderSettingInputObject.

        Country for which the setting will be set.  # noqa: E501

        :param country: The country of this UpdateSenderSettingInputObject.  # noqa: E501
        :type: str
        """

        self._country = country

    @property
    def chat_id(self):
        """Gets the chat_id of this UpdateSenderSettingInputObject.  # noqa: E501

        Set sender setting for specified chat only.  # noqa: E501

        :return: The chat_id of this UpdateSenderSettingInputObject.  # noqa: E501
        :rtype: int
        """
        return self._chat_id

    @chat_id.setter
    def chat_id(self, chat_id):
        """Sets the chat_id of this UpdateSenderSettingInputObject.

        Set sender setting for specified chat only.  # noqa: E501

        :param chat_id: The chat_id of this UpdateSenderSettingInputObject.  # noqa: E501
        :type: int
        """

        self._chat_id = chat_id

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(UpdateSenderSettingInputObject, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, UpdateSenderSettingInputObject):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
