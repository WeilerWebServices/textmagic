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


class GetSubaccountsWithTokensInputObject(object):
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
        'app_name': 'str',
        'password': 'str'
    }

    attribute_map = {
        'app_name': 'appName',
        'password': 'password'
    }

    def __init__(self, app_name=None, password=None):  # noqa: E501
        """GetSubaccountsWithTokensInputObject - a model defined in Swagger"""  # noqa: E501

        self._app_name = None
        self._password = None
        self.discriminator = None

        if app_name is not None:
            self.app_name = app_name
        if password is not None:
            self.password = password

    @property
    def app_name(self):
        """Gets the app_name of this GetSubaccountsWithTokensInputObject.  # noqa: E501

        Application name.  # noqa: E501

        :return: The app_name of this GetSubaccountsWithTokensInputObject.  # noqa: E501
        :rtype: str
        """
        return self._app_name

    @app_name.setter
    def app_name(self, app_name):
        """Sets the app_name of this GetSubaccountsWithTokensInputObject.

        Application name.  # noqa: E501

        :param app_name: The app_name of this GetSubaccountsWithTokensInputObject.  # noqa: E501
        :type: str
        """

        self._app_name = app_name

    @property
    def password(self):
        """Gets the password of this GetSubaccountsWithTokensInputObject.  # noqa: E501

        Your account password.  # noqa: E501

        :return: The password of this GetSubaccountsWithTokensInputObject.  # noqa: E501
        :rtype: str
        """
        return self._password

    @password.setter
    def password(self, password):
        """Sets the password of this GetSubaccountsWithTokensInputObject.

        Your account password.  # noqa: E501

        :param password: The password of this GetSubaccountsWithTokensInputObject.  # noqa: E501
        :type: str
        """

        self._password = password

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
        if issubclass(GetSubaccountsWithTokensInputObject, dict):
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
        if not isinstance(other, GetSubaccountsWithTokensInputObject):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
