cmake_minimum_required (VERSION 2.8)

#PROJECT's NAME
project(textmagic_client)

# THE LOCATION OF OUTPUT BINARIES
set(CMAKE_LIBRARY_DIR ${PROJECT_SOURCE_DIR}/lib)
set(LIBRARY_OUTPUT_PATH ${CMAKE_LIBRARY_DIR})
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

#SUPPORTING FILES
set(SUPPORTING_FILES  "ApiClient" "ApiConfiguration" "ApiException" "HttpContent" "IHttpBody" "JsonBody" "ModelBase" "MultipartFormData" "Object")
#SOURCE FILES
file(GLOB SOURCE_FILES  "api/*"  "model/*")

add_library(${PROJECT_NAME} SHARED ${SUPPORTING_FILES} ${SOURCE_FILES})

target_link_libraries(${PROJECT_NAME} PUBLIC boost_system PUBLIC cpprest PUBLIC crypto)
target_include_directories(${PROJECT_NAME} PUBLIC ${PROJECT_SOURCE_DIR} api model)