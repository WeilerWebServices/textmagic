=begin comment

TextMagic API

No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end comment

=cut

#
# NOTE: This class is auto generated by the swagger code generator program. 
# Do not edit the class manually.
# Ref: https://github.com/swagger-api/swagger-codegen
#
package Net::Sms::TextMagicClient::ApiFactory;

use strict;
use warnings;
use utf8;

use Carp;
use Module::Find;

usesub Net::Sms::TextMagicClient::Object;

use Net::Sms::TextMagicClient::ApiClient;

=head1 Name

	Net::Sms::TextMagicClient::ApiFactory - constructs APIs to retrieve Net::Sms::TextMagicClient objects

=head1 Synopsis

	package My::Petstore::App;
	
	use Net::Sms::TextMagicClient::ApiFactory;
	
	my $api_factory = Net::Sms::TextMagicClient::ApiFactory->new( ... ); # any args for ApiClient constructor
							  
	# later...
	my $pet_api = $api_factory->get_api('Pet');  
	
	# $pet_api isa Net::Sms::TextMagicClient::PetApi
	
	my $pet = $pet_api->get_pet_by_id(pet_id => $pet_id);
	
	# object attributes have proper accessors:
	printf "Pet's name is %s", $pet->name;
	
	# change the value stored on the object:
	$pet->name('Dave'); 

=cut

# Load all the API classes and construct a lookup table at startup time
my %_apis = map { $_ =~ /^Net::Sms::TextMagicClient::(.*)$/; $1 => $_ } 
			grep {$_ =~ /Api$/} 
			usesub 'Net::Sms::TextMagicClient';

=head1 new($api_client)
	
	create a new Net::Sms::TextMagicClient::ApiFactory instance with the given Net::Sms::TextMagicClient::ApiClient instance.

=head1 new(%parameters)

	Any parameters are optional, and are passed to and stored on the api_client object.
	
	See L<Net::Sms::TextMagicClient::ApiClient> and L<Net::Sms::TextMagicClient::Configuration> for valid parameters

=cut	

sub new {
    my ($class) = shift;

    my $api_client;
    if ($_[0] && ref $_[0] && ref $_[0] eq 'Net::Sms::TextMagicClient::ApiClient' ) {
        $api_client = $_[0];
    } else {
        $api_client = Net::Sms::TextMagicClient::ApiClient->new(@_);
    }
    bless { api_client => $api_client }, $class;
}

=head1 get_api($which)

	Returns an API object of the requested type. 
	
	$which is a nickname for the class: 
	
		FooBarClient::BazApi has nickname 'Baz'
		
=cut

sub get_api {
	my ($self, $which) = @_;
	croak "API not specified" unless $which;
	my $api_class = $_apis{"${which}Api"} || croak "No known API for '$which'";
	return $api_class->new($self->api_client); 
}

=head1 api_client()

	Returns the api_client object, should you ever need it.
	
=cut

sub api_client { $_[0]->{api_client} }

=head1 apis_available()
=cut 

sub apis_available { return map { $_ =~ s/Api$//; $_ } sort keys %_apis }

=head1 classname_for()
=cut

sub classname_for {
	my ($self, $api_name) = @_;
	return $_apis{"${api_name}Api"};
}


1;
