import os
from textmagic.exceptions import TextmagicException
from .models import (
    Messages,
    Contacts,
    CustomFields,
    Unsubscribers,
    Lists,
    Replies,
    Templates,
    Bulks,
    Chats,
    Schedules,
    Sessions,
    Users,
    Numbers,
    Senderids,
    Sources,
    Subaccounts,
    Invoices,
    Tokens,
    MessagingStats,
    SpendingStats,
    Utils,
)

allowed_resources = dict(
    messages=Messages,
    contacts=Contacts,
    custom_fields=CustomFields,
    unsubscribers=Unsubscribers,
    lists=Lists,
    replies=Replies,
    templates=Templates,
    bulks=Bulks,
    chats=Chats,
    schedules=Schedules,
    sessions=Sessions,
    user=Users,
    numbers=Numbers,
    senderids=Senderids,
    sources=Sources,
    subaccounts=Subaccounts,
    invoices=Invoices,
    tokens=Tokens,
    stats_messaging=MessagingStats,
    stats_spending=SpendingStats,
    util=Utils
)


def get_credentials(env=None):
    """
    Gets the TextMagic credentials from current environment

    :param env: environment
    :return: username, token
    """
    environ = env or os.environ
    try:
        username = environ["TEXTMAGIC_USERNAME"]
        token = environ["TEXTMAGIC_AUTH_TOKEN"]
        return username, token
    except KeyError:
        return None, None


class TextmagicRestClient():
    """
    Create a Textmagic APIv2 REST client

    :param str username: TextMagic account's username. Can be found here:
        https://my.textmagic.com/online/account/details
    :param str token: TextMagic account's token. Can be found here:
        https://my.textmagic.com/online/api/rest-api/keys
    :param str base: Base url for APIv2 requests
    """

    def __init__(self, username=None, token=None, base="https://rest.textmagic.com/api/v2", lazy=False):

        if not username or not token:
            username, token = get_credentials()
            if not username or not token:
                raise TextmagicException("""
TextMagic could not find your account credentials. Pass them into the
TextmagicRestClient constructor like this:

    client = TextmagicRestClient(username='my_username', token='i7lG96psSTNe0tRd0zq5QPj1QTSNOI')

Or, add your credentials to your shell environment. From the terminal, run

    echo "export TEXTMAGIC_USERNAME=my_username" >> ~/.bashrc
    echo "export TEXTMAGIC_AUTH_TOKEN=i7lG96psSTNe0tRd0zq5QPj1QTSNOI" >> ~/.bashrc

and be sure to replace the values for the username and auth token with the
values from your Textmagic Account at https://my.textmagic.com/online/api/rest-api/keys.
""")
        self.base = base
        self.auth = (username, token)
        self.lazy = lazy
        self.last_request_time = 0

        if not lazy:
            for attr in allowed_resources:
                getattr(self, attr)

    # Create a resource during a call if it doesn't exists
    def __getattr__(self, attr):
        if attr not in allowed_resources:
            raise AttributeError
        self.__dict__[attr] = allowed_resources[attr](self.base, self.auth)
        return self.__dict__[attr]
