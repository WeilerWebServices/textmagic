[comment]: <> (HEAD)
# TextMagic Perl SDK

This library provides you with an easy way of sending SMS and receiving replies by integrating the TextMagic SMS Gateway into your Perl application.

## What is TextMagic?
TextMagic’s application programming interface (API) provides the communication link between your application and TextMagic’s SMS Gateway, allowing you to send and receive text messages and to check the delivery status of text messages you’ve already sent.


[comment]: <> (/HEAD)
## Installation

```bash
wget https://github.com/textmagic/textmagic-rest-perl-v2/archive/v2.0.1588.tar.gz && \
tar zxf v2.0.1588.tar.gz && \
rm -f v2.0.1588.tar.gz && \
cd textmagic-rest-perl-v2-2.0.1588 && \
perl Makefile.pl && \
make && \
make install && \
cpanm --installdeps .
```\

## Usage Example

Please follow the [installation](#installation) instructions and execute the following Perl code:

```perl
use 5.010;
use strict;
use warnings;
use Net::Sms::TextMagicClient::ApiClient;
use Net::Sms::TextMagicClient::TextMagicApi;
use Net::Sms::TextMagicClient::Object::SendMessageInputObject;

# put your Username and API Key from https://my.textmagic.com/online/api/rest-api/keys page.
my $client = Net::Sms::TextMagicClient::ApiClient::->new(
    username   => 'YOUR_USERNAME',
    password   => 'YOUR_API_KEY',
    base_url  => 'https://rest.textmagic.com'
);

my $api_instance = Net::Sms::TextMagicClient::TextMagicApi::->new($client);

# Ping request example
eval {
    my $result = $api_instance->ping();
    print $result->ping;
};

if ($@) {
    warn "Exception when calling TextMagicApi->ping: $@\n";
}

# Send a new message request example
my $send_message_input_object = Net::Sms::TextMagicClient::Object::SendMessageInputObject->new(
    text => 'I love TextMagic!',
    phones => '+19998887766'
);

eval {
    my $result = $api_instance->send_message(send_message_input_object => $send_message_input_object);
    print $result->id;
};

if ($@) {
    warn "Exception when calling TextMagicApi->send_message: $@\n";
}

# Get all outgoing messages request example
eval {
    my $result = $api_instance->get_all_outbound_messages();
    print $result->resources->[0]->message_time;
};

if ($@) {
    warn "Exception when calling TextMagicApi->get_all_inbound_messages: $@\n";
}

# Upload a new avatar for a  specified contacts list (group) request example (3223 it is sample list ID)
eval {
    my $result = $api_instance->upload_list_avatar(image => "test.jpg", id => 3223);
    print $result->id;
};

if ($@) {
    warn "Exception when calling TextMagicApi->upload_list_avatar: $@\n";
}

```
[comment]: <> (FOOTER)
## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

[comment]: <> (/FOOTER)
