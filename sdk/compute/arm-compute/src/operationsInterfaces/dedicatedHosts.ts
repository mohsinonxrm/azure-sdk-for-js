import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DedicatedHost,
  DedicatedHostsListByHostGroupOptionalParams,
  DedicatedHostsCreateOrUpdateOptionalParams,
  DedicatedHostsCreateOrUpdateResponse,
  DedicatedHostUpdate,
  DedicatedHostsUpdateOptionalParams,
  DedicatedHostsUpdateResponse,
  DedicatedHostsDeleteOptionalParams,
  DedicatedHostsGetOptionalParams,
  DedicatedHostsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DedicatedHosts. */
export interface DedicatedHosts {
  /**
   * Lists all of the dedicated hosts in the specified dedicated host group. Use the nextLink property in
   * the response to get the next page of dedicated hosts.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  listByHostGroup(
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostsListByHostGroupOptionalParams
  ): PagedAsyncIterableIterator<DedicatedHost>;
  /**
   * Create or update a dedicated host .
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host .
   * @param parameters Parameters supplied to the Create Dedicated Host.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    parameters: DedicatedHost,
    options?: DedicatedHostsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DedicatedHostsCreateOrUpdateResponse>,
      DedicatedHostsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a dedicated host .
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host .
   * @param parameters Parameters supplied to the Create Dedicated Host.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    parameters: DedicatedHost,
    options?: DedicatedHostsCreateOrUpdateOptionalParams
  ): Promise<DedicatedHostsCreateOrUpdateResponse>;
  /**
   * Update an dedicated host .
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host .
   * @param parameters Parameters supplied to the Update Dedicated Host operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    parameters: DedicatedHostUpdate,
    options?: DedicatedHostsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DedicatedHostsUpdateResponse>,
      DedicatedHostsUpdateResponse
    >
  >;
  /**
   * Update an dedicated host .
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host .
   * @param parameters Parameters supplied to the Update Dedicated Host operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    parameters: DedicatedHostUpdate,
    options?: DedicatedHostsUpdateOptionalParams
  ): Promise<DedicatedHostsUpdateResponse>;
  /**
   * Delete a dedicated host.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    options?: DedicatedHostsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a dedicated host.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    options?: DedicatedHostsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieves information about a dedicated host.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    options?: DedicatedHostsGetOptionalParams
  ): Promise<DedicatedHostsGetResponse>;
}