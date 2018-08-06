# Lunaform.ProvidersApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProvider**](ProvidersApi.md#createProvider) | **POST** /tf/providers/ | 
[**createProviderConfiguration**](ProvidersApi.md#createProviderConfiguration) | **POST** /tf/provider/{provider-name}/configurations | 
[**deleteProvider**](ProvidersApi.md#deleteProvider) | **DELETE** /tf/provider/{name} | 
[**deleteProviderConfiguration**](ProvidersApi.md#deleteProviderConfiguration) | **DELETE** /tf/provider/{provider-name}/configuration/{id} | 
[**getProvider**](ProvidersApi.md#getProvider) | **GET** /tf/provider/{name} | 
[**getProviderConfiguration**](ProvidersApi.md#getProviderConfiguration) | **GET** /tf/provider/{provider-name}/configuration/{id} | 
[**listProviderConfigurations**](ProvidersApi.md#listProviderConfigurations) | **GET** /tf/provider/{provider-name}/configurations | 
[**listProviders**](ProvidersApi.md#listProviders) | **GET** /tf/providers/ | 
[**updateProvider**](ProvidersApi.md#updateProvider) | **PUT** /tf/provider/{name} | 


<a name="createProvider"></a>
# **createProvider**
> ResourceTfProvider createProvider(opts)



Upload a Terraform provider

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var opts = { 
  'terraformProvider': new Lunaform.ResourceTfProvider() // ResourceTfProvider | A terraform module
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProvider(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terraformProvider** | [**ResourceTfProvider**](ResourceTfProvider.md)| A terraform module | [optional] 

### Return type

[**ResourceTfProvider**](ResourceTfProvider.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

<a name="createProviderConfiguration"></a>
# **createProviderConfiguration**
> ResourceTfProviderConfiguration createProviderConfiguration(providerName, providerConfiguration)



Create a Terraform Provider Configuration

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var providerName = "providerName_example"; // String | Terraform Provider Name

var providerConfiguration = new Lunaform.ResourceTfProviderConfiguration(); // ResourceTfProviderConfiguration | A terraform provider configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProviderConfiguration(providerName, providerConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerName** | **String**| Terraform Provider Name | 
 **providerConfiguration** | [**ResourceTfProviderConfiguration**](ResourceTfProviderConfiguration.md)| A terraform provider configuration | 

### Return type

[**ResourceTfProviderConfiguration**](ResourceTfProviderConfiguration.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

<a name="deleteProvider"></a>
# **deleteProvider**
> deleteProvider(name)



Delete a terraform provider

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var name = "name_example"; // String | Unique identifier for this provider


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProvider(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Unique identifier for this provider | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

<a name="deleteProviderConfiguration"></a>
# **deleteProviderConfiguration**
> deleteProviderConfiguration(providerName, id)



Delete a terraform provider configuration

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var providerName = "providerName_example"; // String | Terraform Provider ID

var id = "id_example"; // String | Configuration for a Terraform Provider


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProviderConfiguration(providerName, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerName** | **String**| Terraform Provider ID | 
 **id** | **String**| Configuration for a Terraform Provider | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

<a name="getProvider"></a>
# **getProvider**
> ResourceTfProvider getProvider(name)



Get Terraform Provider

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var name = "name_example"; // String | Terraform Provider Name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProvider(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Terraform Provider Name | 

### Return type

[**ResourceTfProvider**](ResourceTfProvider.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

<a name="getProviderConfiguration"></a>
# **getProviderConfiguration**
> ResourceTfProviderConfiguration getProviderConfiguration(providerName, id)



Get Configuration for Provider

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var providerName = "providerName_example"; // String | Terraform Provider ID

var id = "id_example"; // String | Configuration for a Terraform Provider


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProviderConfiguration(providerName, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerName** | **String**| Terraform Provider ID | 
 **id** | **String**| Configuration for a Terraform Provider | 

### Return type

[**ResourceTfProviderConfiguration**](ResourceTfProviderConfiguration.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

<a name="listProviderConfigurations"></a>
# **listProviderConfigurations**
> ResponseListTfProviderConfiguration listProviderConfigurations(providerName)



List Configurations for s Terraform Provider

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var providerName = "providerName_example"; // String | Terraform Provider Name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listProviderConfigurations(providerName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerName** | **String**| Terraform Provider Name | 

### Return type

[**ResponseListTfProviderConfiguration**](ResponseListTfProviderConfiguration.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

<a name="listProviders"></a>
# **listProviders**
> ResponseListTfProviders listProviders()



List Terraform Providers

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listProviders(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseListTfProviders**](ResponseListTfProviders.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

<a name="updateProvider"></a>
# **updateProvider**
> ResourceTfProvider updateProvider(name, opts)



Update a Terraform provider

### Example
```javascript
var Lunaform = require('lunaform');
var defaultClient = Lunaform.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new Lunaform.ProvidersApi();

var name = "name_example"; // String | Terraform Provider ID

var opts = { 
  'terraformProvider': new Lunaform.ResourceTfProvider() // ResourceTfProvider | A terraform provider
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProvider(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Terraform Provider ID | 
 **terraformProvider** | [**ResourceTfProvider**](ResourceTfProvider.md)| A terraform provider | [optional] 

### Return type

[**ResourceTfProvider**](ResourceTfProvider.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/vnd.lunaform.v1+json
 - **Accept**: application/vnd.lunaform.v1+json

