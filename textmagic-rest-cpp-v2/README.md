[comment]: <> (HEAD)
# TextMagic C++ SDK

This library provides you with an easy way to send SMS and receive replies, by integrating the the TextMagic SMS Gateway into your C++ application.

## What is TextMagic?
TextMagic’s application programming interface (API) provides the communication link between your application and TextMagic’s SMS Gateway, allowing you to send and receive text messages and to check the delivery status of text messages you’ve already sent.

For detailed documentation, please visit http://docs.textmagictesting.com/.

[comment]: <> (/HEAD)
## Requirements

* CMake 2.8 and later (https://cmake.org/)
* cpprest (https://github.com/microsoft/cpprestsdk)

Ubuntu dependencies quick installation example:
```shell
apt-get install build-essential cmake libcpprest-dev
```

## Installation

Download and extract lib archive:
```shell
wget https://github.com/textmagic/textmagic-rest-cpp-v2/archive/v2.0.1588.tar.gz && \
tar zxf v2.0.1588.tar.gz && \
rm -f v2.0.1588.tar.gz && \
cd textmagic-rest-cpp-v2-2.0.1588
```
Build using cmake
```shell
cmake . && cmake --build .
```
The output library file will be placed in the `textmagic-rest-cpp-v2-2.0.1588/lib` directory:

## Usage Example
In the example below, we assume that you moved the library sources `textmagic-rest-cpp-v2-2.0.1588` directory to your test project root directory.

Configure your `CMakeLists.txt` as shown here:
```shell
cmake_minimum_required(VERSION 2.8)
project(test)

set(CMAKE_CXX_STANDARD 14)

add_executable(app main.cpp)

add_library(textmagic_client SHARED IMPORTED)
set_property(TARGET textmagic_client PROPERTY IMPORTED_LOCATION "${PROJECT_SOURCE_DIR}/textmagic-rest-cpp-v2-2.0.1588/lib/libtextmagic_client.so")

target_include_directories (app PRIVATE ${PROJECT_SOURCE_DIR}/textmagic-rest-cpp-v2-2.0.1588 ${PROJECT_SOURCE_DIR}/textmagic-rest-cpp-v2-2.0.1588/model ${PROJECT_SOURCE_DIR}/textmagic-rest-cpp-v2-2.0.1588/api)
target_link_libraries(app boost_system cpprest crypto textmagic_client )
```

`main.cpp` file example:
```cpp
#include <iostream>
#include <fstream>
#include "textmagic-rest-cpp-v2-2.0.1588/ApiClient.h"
#include "textmagic-rest-cpp-v2-2.0.1588/ApiConfiguration.h"
#include "textmagic-rest-cpp-v2-2.0.1588/api/TextMagicApi.h"

using namespace com::textmagic::client::api;

int main() {
    std::shared_ptr<ApiClient> apiClient(new ApiClient);
    std::shared_ptr<ApiConfiguration> apiConfig(new ApiConfiguration);

    // put your Username and API Key from https://my.textmagic.com/online/api/rest-api/keys page.
    apiConfig->setBaseUrl("https://rest.textmagic.com");
    apiConfig->getHttpConfig().set_credentials(web::credentials("YOUR_NAME", "YOUR_API_KEY"));
    apiClient->setConfiguration(apiConfig);

    TextMagicApi api(apiClient);

    // Simple ping request example
    pplx::task<std::shared_ptr<PingResponse>> pingResponse = api.ping();
    pingResponse.wait();

    try {
        std::cout << pingResponse.get()->getPing() << '\n';
    } catch(const std::exception& e) {
        std::cout << "getPing() exception: " << e.what() << '\n';
    }

    // Send a new message request example
    std::shared_ptr<SendMessageInputObject> sendMessageInputObject(new SendMessageInputObject);
    sendMessageInputObject->setPhones("+19998887766");
    sendMessageInputObject->setText("I love TextMagic!");

    pplx::task<std::shared_ptr<SendMessageResponse>> sendMessageResponse = api.sendMessage(sendMessageInputObject);
    sendMessageResponse.wait();

    try {
        std::cout << sendMessageResponse.get()->getId() << '\n';
    } catch(const std::exception& e) {
        std::cout << "getId() exception: " << e.what() << '\n';
    }

    // Get all outgoing messages request example
    pplx::task<std::shared_ptr<GetAllOutboundMessagesPaginatedResponse>> getAllOutboundMessagesResponse = api.getAllOutboundMessages(boost::none, boost::none, boost::none);
    getAllOutboundMessagesResponse.wait();

    try {
        std::cout << getAllOutboundMessagesResponse.get()->getResources()[0]->getId() << '\n';
    } catch(const std::exception& e) {
        std::cout << "getId() exception: " << e.what() << '\n';
    }

    // Upload list avatar request example
    std::filebuf fb;
    fb.open ("test.jpg", std::ios::in);
    std::shared_ptr<std::istream> is(new std::istream(&fb));

    std::shared_ptr<HttpContent> image(new HttpContent);
    image->setName("test");
    image->setContentDisposition("attachment");
    image->setFileName("test.jpg");

    image->setContentType("image/jpeg");
    image->setData(is);

    // List ID in current example is 3223
    pplx::task<std::shared_ptr<ResourceLinkResponse>> resourceLinkResponse = api.uploadListAvatar(image, 3223);
    resourceLinkResponse.wait();

    try {
        std::cout << resourceLinkResponse.get()->getId() << '\n';
    } catch(const std::exception& e) {
        std::cout << "getId() exception: " << e.what() << '\n';
    }

    return 0;
}
```
Build your test project:
```shell
cmake . && cmake --build .
```
Run:
```shell
./app
```

[comment]: <> (FOOTER)
## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

[comment]: <> (/FOOTER)
