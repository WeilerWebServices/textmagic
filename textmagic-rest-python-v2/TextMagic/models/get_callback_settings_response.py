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


class GetCallbackSettingsResponse(object):
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
        'out_url': 'str',
        'in_url': 'str',
        'format': 'str'
    }

    attribute_map = {
        'out_url': 'outUrl',
        'in_url': 'inUrl',
        'format': 'format'
    }

    def __init__(self, out_url=None, in_url=None, format=None):  # noqa: E501
        """GetCallbackSettingsResponse - a model defined in Swagger"""  # noqa: E501

        self._out_url = None
        self._in_url = None
        self._format = None
        self.discriminator = None

        self.out_url = out_url
        self.in_url = in_url
        self.format = format

    @property
    def out_url(self):
        """Gets the out_url of this GetCallbackSettingsResponse.  # noqa: E501

        This URL is used to push message delivery status updates to your application.  # noqa: E501

        :return: The out_url of this GetCallbackSettingsResponse.  # noqa: E501
        :rtype: str
        """
        return self._out_url

    @out_url.setter
    def out_url(self, out_url):
        """Sets the out_url of this GetCallbackSettingsResponse.

        This URL is used to push message delivery status updates to your application.  # noqa: E501

        :param out_url: The out_url of this GetCallbackSettingsResponse.  # noqa: E501
        :type: str
        """

        self._out_url = out_url

    @property
    def in_url(self):
        """Gets the in_url of this GetCallbackSettingsResponse.  # noqa: E501

        This URL is used to push incoming SMS to your application.  # noqa: E501

        :return: The in_url of this GetCallbackSettingsResponse.  # noqa: E501
        :rtype: str
        """
        return self._in_url

    @in_url.setter
    def in_url(self, in_url):
        """Sets the in_url of this GetCallbackSettingsResponse.

        This URL is used to push incoming SMS to your application.  # noqa: E501

        :param in_url: The in_url of this GetCallbackSettingsResponse.  # noqa: E501
        :type: str
        """

        self._in_url = in_url

    @property
    def format(self):
        """Gets the format of this GetCallbackSettingsResponse.  # noqa: E501

        Desired callback data format. m - multipart/form-data, u - application/x-www-form-urlencoded, j - application/json.  # noqa: E501

        :return: The format of this GetCallbackSettingsResponse.  # noqa: E501
        :rtype: str
        """
        return self._format

    @format.setter
    def format(self, format):
        """Sets the format of this GetCallbackSettingsResponse.

        Desired callback data format. m - multipart/form-data, u - application/x-www-form-urlencoded, j - application/json.  # noqa: E501

        :param format: The format of this GetCallbackSettingsResponse.  # noqa: E501
        :type: str
        """
        allowed_values = ["m", "u", "j"]  # noqa: E501
        if format not in allowed_values:
            raise ValueError(
                "Invalid value for `format` ({0}), must be one of {1}"  # noqa: E501
                .format(format, allowed_values)
            )

        self._format = format

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
        if issubclass(GetCallbackSettingsResponse, dict):
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
        if not isinstance(other, GetCallbackSettingsResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
