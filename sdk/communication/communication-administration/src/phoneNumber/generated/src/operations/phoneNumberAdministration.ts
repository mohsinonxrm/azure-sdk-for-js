/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PhoneNumberRestClient } from "../phoneNumberRestClient";
import {
  PhoneNumberAdministrationGetAllPhoneNumbersOptionalParams,
  PhoneNumberAdministrationGetAllPhoneNumbersResponse,
  LocationOptionsQueries,
  PhoneNumberAdministrationGetAllAreaCodesResponse,
  PhoneNumberAdministrationGetCapabilitiesUpdateResponse,
  UpdateNumberCapabilitiesRequest,
  PhoneNumberAdministrationUpdateCapabilitiesResponse,
  PhoneNumberAdministrationGetAllSupportedCountriesOptionalParams,
  PhoneNumberAdministrationGetAllSupportedCountriesResponse,
  NumberConfigurationPhoneNumber,
  PhoneNumberAdministrationGetNumberConfigurationResponse,
  NumberConfiguration,
  PhoneNumberAdministrationGetPhonePlanGroupsOptionalParams,
  PhoneNumberAdministrationGetPhonePlanGroupsResponse,
  PhoneNumberAdministrationGetPhonePlansOptionalParams,
  PhoneNumberAdministrationGetPhonePlansResponse,
  PhoneNumberAdministrationGetPhonePlanLocationOptionsOptionalParams,
  PhoneNumberAdministrationGetPhonePlanLocationOptionsResponse,
  PhoneNumberAdministrationGetReleaseByIdResponse,
  ReleaseRequest,
  PhoneNumberAdministrationReleasePhoneNumbersResponse,
  PhoneNumberAdministrationGetAllReleasesOptionalParams,
  PhoneNumberAdministrationGetAllReleasesResponse,
  PhoneNumberAdministrationGetSearchByIdResponse,
  CreateSearchOptions,
  PhoneNumberAdministrationCreateSearchResponse,
  PhoneNumberAdministrationGetAllSearchesOptionalParams,
  PhoneNumberAdministrationGetAllSearchesResponse,
  PhoneNumberAdministrationGetAllPhoneNumbersNextOptionalParams,
  PhoneNumberAdministrationGetAllPhoneNumbersNextResponse,
  PhoneNumberAdministrationGetAllSupportedCountriesNextOptionalParams,
  PhoneNumberAdministrationGetAllSupportedCountriesNextResponse,
  PhoneNumberAdministrationGetPhonePlanGroupsNextOptionalParams,
  PhoneNumberAdministrationGetPhonePlanGroupsNextResponse,
  PhoneNumberAdministrationGetPhonePlansNextOptionalParams,
  PhoneNumberAdministrationGetPhonePlansNextResponse,
  PhoneNumberAdministrationGetAllReleasesNextOptionalParams,
  PhoneNumberAdministrationGetAllReleasesNextResponse,
  PhoneNumberAdministrationGetAllSearchesNextOptionalParams,
  PhoneNumberAdministrationGetAllSearchesNextResponse
} from "../models";

/**
 * Class representing a PhoneNumberAdministration.
 */
export class PhoneNumberAdministration {
  private readonly client: PhoneNumberRestClient;

  /**
   * Initialize a new instance of the class PhoneNumberAdministration class.
   * @param client - Reference to the service client
   */
  constructor(client: PhoneNumberRestClient) {
    this.client = client;
  }

  /**
   * Gets the list of the acquired phone numbers.
   * @param options - The options parameters.
   */
  getAllPhoneNumbers(
    options?: PhoneNumberAdministrationGetAllPhoneNumbersOptionalParams
  ): Promise<PhoneNumberAdministrationGetAllPhoneNumbersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getAllPhoneNumbersOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllPhoneNumbersResponse>;
  }

  /**
   * Gets a list of the supported area codes
   * @param locationType - The type of location information required by the plan.
   * @param countryCode - The ISO 3166-2 country code
   * @param phonePlanId - The plan id from which to search area codes.
   * @param body - Location options for when location type is selection.
   * @param options - The options parameters.
   */
  getAllAreaCodes(
    locationType: string,
    countryCode: string,
    phonePlanId: string,
    body: LocationOptionsQueries,
    options?: coreHttp.OperationOptions
  ): Promise<PhoneNumberAdministrationGetAllAreaCodesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        locationType,
        countryCode,
        phonePlanId,
        body,
        options: operationOptions
      },
      getAllAreaCodesOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllAreaCodesResponse>;
  }

  /**
   * Get capabilities by capabilities update id.
   * @param capabilitiesUpdateId
   * @param options - The options parameters.
   */
  getCapabilitiesUpdate(
    capabilitiesUpdateId: string,
    options?: coreHttp.OperationOptions
  ): Promise<PhoneNumberAdministrationGetCapabilitiesUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { capabilitiesUpdateId, options: operationOptions },
      getCapabilitiesUpdateOperationSpec
    ) as Promise<PhoneNumberAdministrationGetCapabilitiesUpdateResponse>;
  }

  /**
   * Adds or removes phone number capabilities
   * @param body - Represents a numbers capabilities update request
   * @param options - The options parameters.
   */
  updateCapabilities(
    body: UpdateNumberCapabilitiesRequest,
    options?: coreHttp.OperationOptions
  ): Promise<PhoneNumberAdministrationUpdateCapabilitiesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { body, options: operationOptions },
      updateCapabilitiesOperationSpec
    ) as Promise<PhoneNumberAdministrationUpdateCapabilitiesResponse>;
  }

  /**
   * Gets a list of supported countries
   * @param options - The options parameters.
   */
  getAllSupportedCountries(
    options?: PhoneNumberAdministrationGetAllSupportedCountriesOptionalParams
  ): Promise<PhoneNumberAdministrationGetAllSupportedCountriesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getAllSupportedCountriesOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllSupportedCountriesResponse>;
  }

  /**
   * Endpoint for getting number configurations
   * @param body - The phone number whose configuration is to be fetched
   * @param options - The options parameters.
   */
  getNumberConfiguration(
    body: NumberConfigurationPhoneNumber,
    options?: coreHttp.OperationOptions
  ): Promise<PhoneNumberAdministrationGetNumberConfigurationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { body, options: operationOptions },
      getNumberConfigurationOperationSpec
    ) as Promise<PhoneNumberAdministrationGetNumberConfigurationResponse>;
  }

  /**
   * Endpoint for configuring a pstn number
   * @param body - Details of pstn number configuration of the given phoneNumber
   * @param options - The options parameters.
   */
  configureNumber(
    body: NumberConfiguration,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { body, options: operationOptions },
      configureNumberOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Endpoint for unconfiguring a pstn number by removing the configuration
   * @param body - The phone number to un-configure
   * @param options - The options parameters.
   */
  unconfigureNumber(
    body: NumberConfigurationPhoneNumber,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { body, options: operationOptions },
      unconfigureNumberOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a list of phone plan groups for the given country
   * @param countryCode - The ISO 3166-2 country code.
   * @param options - The options parameters.
   */
  getPhonePlanGroups(
    countryCode: string,
    options?: PhoneNumberAdministrationGetPhonePlanGroupsOptionalParams
  ): Promise<PhoneNumberAdministrationGetPhonePlanGroupsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { countryCode, options: operationOptions },
      getPhonePlanGroupsOperationSpec
    ) as Promise<PhoneNumberAdministrationGetPhonePlanGroupsResponse>;
  }

  /**
   * Gets a list of phone plans for a phone plan group
   * @param countryCode - The ISO 3166-2 country code.
   * @param phonePlanGroupId
   * @param options - The options parameters.
   */
  getPhonePlans(
    countryCode: string,
    phonePlanGroupId: string,
    options?: PhoneNumberAdministrationGetPhonePlansOptionalParams
  ): Promise<PhoneNumberAdministrationGetPhonePlansResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { countryCode, phonePlanGroupId, options: operationOptions },
      getPhonePlansOperationSpec
    ) as Promise<PhoneNumberAdministrationGetPhonePlansResponse>;
  }

  /**
   * Gets a list of location options for a phone plan
   * @param countryCode - The ISO 3166-2 country code.
   * @param phonePlanGroupId
   * @param phonePlanId
   * @param options - The options parameters.
   */
  getPhonePlanLocationOptions(
    countryCode: string,
    phonePlanGroupId: string,
    phonePlanId: string,
    options?: PhoneNumberAdministrationGetPhonePlanLocationOptionsOptionalParams
  ): Promise<PhoneNumberAdministrationGetPhonePlanLocationOptionsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { countryCode, phonePlanGroupId, phonePlanId, options: operationOptions },
      getPhonePlanLocationOptionsOperationSpec
    ) as Promise<PhoneNumberAdministrationGetPhonePlanLocationOptionsResponse>;
  }

  /**
   * Gets a release by a release id
   * @param releaseId - Represents the release id
   * @param options - The options parameters.
   */
  getReleaseById(
    releaseId: string,
    options?: coreHttp.OperationOptions
  ): Promise<PhoneNumberAdministrationGetReleaseByIdResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { releaseId, options: operationOptions },
      getReleaseByIdOperationSpec
    ) as Promise<PhoneNumberAdministrationGetReleaseByIdResponse>;
  }

  /**
   * Creates a release for the given phone numbers
   * @param body - Config api Release request
   * @param options - The options parameters.
   */
  releasePhoneNumbers(
    body: ReleaseRequest,
    options?: coreHttp.OperationOptions
  ): Promise<PhoneNumberAdministrationReleasePhoneNumbersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { body, options: operationOptions },
      releasePhoneNumbersOperationSpec
    ) as Promise<PhoneNumberAdministrationReleasePhoneNumbersResponse>;
  }

  /**
   * Gets a list of all releases
   * @param options - The options parameters.
   */
  getAllReleases(
    options?: PhoneNumberAdministrationGetAllReleasesOptionalParams
  ): Promise<PhoneNumberAdministrationGetAllReleasesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getAllReleasesOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllReleasesResponse>;
  }

  /**
   * Get search by search id
   * @param searchId - The search id to be searched for
   * @param options - The options parameters.
   */
  getSearchById(
    searchId: string,
    options?: coreHttp.OperationOptions
  ): Promise<PhoneNumberAdministrationGetSearchByIdResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { searchId, options: operationOptions },
      getSearchByIdOperationSpec
    ) as Promise<PhoneNumberAdministrationGetSearchByIdResponse>;
  }

  /**
   * Creates a phone number search
   * @param body - Defines the search options
   * @param options - The options parameters.
   */
  createSearch(
    body: CreateSearchOptions,
    options?: coreHttp.OperationOptions
  ): Promise<PhoneNumberAdministrationCreateSearchResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { body, options: operationOptions },
      createSearchOperationSpec
    ) as Promise<PhoneNumberAdministrationCreateSearchResponse>;
  }

  /**
   * Gets a list of all searches
   * @param options - The options parameters.
   */
  getAllSearches(
    options?: PhoneNumberAdministrationGetAllSearchesOptionalParams
  ): Promise<PhoneNumberAdministrationGetAllSearchesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getAllSearchesOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllSearchesResponse>;
  }

  /**
   * Cancels the search. This means existing numbers in the search will be made available.
   * @param searchId - The search id to be canceled
   * @param options - The options parameters.
   */
  cancelSearch(
    searchId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { searchId, options: operationOptions },
      cancelSearchOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Purchases the phone number search.
   * @param searchId - The search id to be purchased
   * @param options - The options parameters.
   */
  purchaseSearch(
    searchId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { searchId, options: operationOptions },
      purchaseSearchOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * GetAllPhoneNumbersNext
   * @param nextLink - The nextLink from the previous successful call to the GetAllPhoneNumbers method.
   * @param options - The options parameters.
   */
  getAllPhoneNumbersNext(
    nextLink: string,
    options?: PhoneNumberAdministrationGetAllPhoneNumbersNextOptionalParams
  ): Promise<PhoneNumberAdministrationGetAllPhoneNumbersNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getAllPhoneNumbersNextOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllPhoneNumbersNextResponse>;
  }

  /**
   * GetAllSupportedCountriesNext
   * @param nextLink - The nextLink from the previous successful call to the GetAllSupportedCountries
   *                 method.
   * @param options - The options parameters.
   */
  getAllSupportedCountriesNext(
    nextLink: string,
    options?: PhoneNumberAdministrationGetAllSupportedCountriesNextOptionalParams
  ): Promise<PhoneNumberAdministrationGetAllSupportedCountriesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getAllSupportedCountriesNextOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllSupportedCountriesNextResponse>;
  }

  /**
   * GetPhonePlanGroupsNext
   * @param countryCode - The ISO 3166-2 country code.
   * @param nextLink - The nextLink from the previous successful call to the GetPhonePlanGroups method.
   * @param options - The options parameters.
   */
  getPhonePlanGroupsNext(
    countryCode: string,
    nextLink: string,
    options?: PhoneNumberAdministrationGetPhonePlanGroupsNextOptionalParams
  ): Promise<PhoneNumberAdministrationGetPhonePlanGroupsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { countryCode, nextLink, options: operationOptions },
      getPhonePlanGroupsNextOperationSpec
    ) as Promise<PhoneNumberAdministrationGetPhonePlanGroupsNextResponse>;
  }

  /**
   * GetPhonePlansNext
   * @param countryCode - The ISO 3166-2 country code.
   * @param phonePlanGroupId
   * @param nextLink - The nextLink from the previous successful call to the GetPhonePlans method.
   * @param options - The options parameters.
   */
  getPhonePlansNext(
    countryCode: string,
    phonePlanGroupId: string,
    nextLink: string,
    options?: PhoneNumberAdministrationGetPhonePlansNextOptionalParams
  ): Promise<PhoneNumberAdministrationGetPhonePlansNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { countryCode, phonePlanGroupId, nextLink, options: operationOptions },
      getPhonePlansNextOperationSpec
    ) as Promise<PhoneNumberAdministrationGetPhonePlansNextResponse>;
  }

  /**
   * GetAllReleasesNext
   * @param nextLink - The nextLink from the previous successful call to the GetAllReleases method.
   * @param options - The options parameters.
   */
  getAllReleasesNext(
    nextLink: string,
    options?: PhoneNumberAdministrationGetAllReleasesNextOptionalParams
  ): Promise<PhoneNumberAdministrationGetAllReleasesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getAllReleasesNextOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllReleasesNextResponse>;
  }

  /**
   * GetAllSearchesNext
   * @param nextLink - The nextLink from the previous successful call to the GetAllSearches method.
   * @param options - The options parameters.
   */
  getAllSearchesNext(
    nextLink: string,
    options?: PhoneNumberAdministrationGetAllSearchesNextOptionalParams
  ): Promise<PhoneNumberAdministrationGetAllSearchesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      getAllSearchesNextOperationSpec
    ) as Promise<PhoneNumberAdministrationGetAllSearchesNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getAllPhoneNumbersOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/phonenumbers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AcquiredPhoneNumbers
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.locale, Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  serializer
};
const getAllAreaCodesOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/countries/{countryCode}/areacodes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AreaCodes
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion, Parameters.locationType, Parameters.phonePlanId],
  urlParameters: [Parameters.endpoint, Parameters.countryCode],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getCapabilitiesUpdateOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/capabilities/{capabilitiesUpdateId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdatePhoneNumberCapabilitiesResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.capabilitiesUpdateId],
  serializer
};
const updateCapabilitiesOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/capabilities",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateNumberCapabilitiesResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAllSupportedCountriesOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/countries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberCountries
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.locale, Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  serializer
};
const getNumberConfigurationOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/numberconfiguration",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NumberConfigurationResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const configureNumberOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/numberconfiguration/configure",
  httpMethod: "PATCH",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const unconfigureNumberOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/numberconfiguration/unconfigure",
  httpMethod: "PATCH",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getPhonePlanGroupsOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/countries/{countryCode}/phoneplangroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhonePlanGroups
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.locale,
    Parameters.skip,
    Parameters.take,
    Parameters.apiVersion,
    Parameters.includeRateInformation
  ],
  urlParameters: [Parameters.endpoint, Parameters.countryCode],
  serializer
};
const getPhonePlansOperationSpec: coreHttp.OperationSpec = {
  path:
    "/administration/phonenumbers/countries/{countryCode}/phoneplangroups/{phonePlanGroupId}/phoneplans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhonePlansResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.locale, Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.countryCode, Parameters.phonePlanGroupId],
  serializer
};
const getPhonePlanLocationOptionsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/administration/phonenumbers/countries/{countryCode}/phoneplangroups/{phonePlanGroupId}/phoneplans/{phonePlanId}/locationoptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocationOptionsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.locale, Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.countryCode,
    Parameters.phonePlanGroupId,
    Parameters.phonePlanId1
  ],
  serializer
};
const getReleaseByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/releases/{releaseId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberRelease
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.releaseId],
  serializer
};
const releasePhoneNumbersOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/releases",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ReleaseResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAllReleasesOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/releases",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberEntities
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  serializer
};
const getSearchByIdOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/searches/{searchId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberReservation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.searchId],
  serializer
};
const createSearchOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/searches",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.CreateSearchResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAllSearchesOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/searches",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberEntities
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  serializer
};
const cancelSearchOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/searches/{searchId}/cancel",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.searchId],
  serializer
};
const purchaseSearchOperationSpec: coreHttp.OperationSpec = {
  path: "/administration/phonenumbers/searches/{searchId}/purchase",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.searchId],
  serializer
};
const getAllPhoneNumbersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AcquiredPhoneNumbers
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.locale, Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  serializer
};
const getAllSupportedCountriesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberCountries
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.locale, Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  serializer
};
const getPhonePlanGroupsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhonePlanGroups
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.locale,
    Parameters.skip,
    Parameters.take,
    Parameters.apiVersion,
    Parameters.includeRateInformation
  ],
  urlParameters: [Parameters.endpoint, Parameters.countryCode, Parameters.nextLink],
  serializer
};
const getPhonePlansNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhonePlansResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.locale, Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.countryCode,
    Parameters.phonePlanGroupId,
    Parameters.nextLink
  ],
  serializer
};
const getAllReleasesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberEntities
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  serializer
};
const getAllSearchesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PhoneNumberEntities
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.take, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  serializer
};