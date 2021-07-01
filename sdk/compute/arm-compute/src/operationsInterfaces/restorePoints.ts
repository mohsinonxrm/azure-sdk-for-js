import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RestorePoint,
  RestorePointsCreateOptionalParams,
  RestorePointsCreateResponse,
  RestorePointsDeleteOptionalParams,
  RestorePointsGetOptionalParams,
  RestorePointsGetResponse
} from "../models";

/** Interface representing a RestorePoints. */
export interface RestorePoints {
  /**
   * The operation to create the restore point. Updating properties of an existing restore point is not
   * allowed
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param parameters Parameters supplied to the Create restore point operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    parameters: RestorePoint,
    options?: RestorePointsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RestorePointsCreateResponse>,
      RestorePointsCreateResponse
    >
  >;
  /**
   * The operation to create the restore point. Updating properties of an existing restore point is not
   * allowed
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param parameters Parameters supplied to the Create restore point operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    parameters: RestorePoint,
    options?: RestorePointsCreateOptionalParams
  ): Promise<RestorePointsCreateResponse>;
  /**
   * The operation to delete the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * The operation to delete the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsDeleteOptionalParams
  ): Promise<void>;
  /**
   * The operation to get the restore point.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    restorePointCollectionName: string,
    restorePointName: string,
    options?: RestorePointsGetOptionalParams
  ): Promise<RestorePointsGetResponse>;
}