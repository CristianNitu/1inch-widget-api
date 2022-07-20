/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Arbitrum Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ApproveCalldataResponseDto,
    ApproveCalldataResponseDtoFromJSON,
    ApproveCalldataResponseDtoToJSON,
    ApproveSpenderResponseDto,
    ApproveSpenderResponseDtoFromJSON,
    ApproveSpenderResponseDtoToJSON,
} from '../models';

export interface ChainApproveControllerGetAllowanceRequest {
    tokenAddress: string;
    walletAddress: string;
}

export interface ChainApproveControllerGetCallDataRequest {
    tokenAddress: string;
    amount?: string;
}

/**
 * 
 */
export class ApproveApi extends runtime.BaseAPI {

    /**
     * Get the number of tokens that the 1inch router is allowed to spend
     */
    async chainApproveControllerGetAllowanceRaw(requestParameters: ChainApproveControllerGetAllowanceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tokenAddress === null || requestParameters.tokenAddress === undefined) {
            throw new runtime.RequiredError('tokenAddress','Required parameter requestParameters.tokenAddress was null or undefined when calling chainApproveControllerGetAllowance.');
        }

        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) {
            throw new runtime.RequiredError('walletAddress','Required parameter requestParameters.walletAddress was null or undefined when calling chainApproveControllerGetAllowance.');
        }

        const queryParameters: any = {};

        if (requestParameters.tokenAddress !== undefined) {
            queryParameters['tokenAddress'] = requestParameters.tokenAddress;
        }

        if (requestParameters.walletAddress !== undefined) {
            queryParameters['walletAddress'] = requestParameters.walletAddress;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v4.0/42161/approve/allowance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get the number of tokens that the 1inch router is allowed to spend
     */
    async chainApproveControllerGetAllowance(requestParameters: ChainApproveControllerGetAllowanceRequest, initOverrides?: RequestInit): Promise<void> {
        await this.chainApproveControllerGetAllowanceRaw(requestParameters, initOverrides);
    }

    /**
     * Generate data for calling the contract in order to allow the 1inch router to spend funds
     */
    async chainApproveControllerGetCallDataRaw(requestParameters: ChainApproveControllerGetCallDataRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApproveCalldataResponseDto>> {
        if (requestParameters.tokenAddress === null || requestParameters.tokenAddress === undefined) {
            throw new runtime.RequiredError('tokenAddress','Required parameter requestParameters.tokenAddress was null or undefined when calling chainApproveControllerGetCallData.');
        }

        const queryParameters: any = {};

        if (requestParameters.tokenAddress !== undefined) {
            queryParameters['tokenAddress'] = requestParameters.tokenAddress;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v4.0/42161/approve/transaction`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApproveCalldataResponseDtoFromJSON(jsonValue));
    }

    /**
     * Generate data for calling the contract in order to allow the 1inch router to spend funds
     */
    async chainApproveControllerGetCallData(requestParameters: ChainApproveControllerGetCallDataRequest, initOverrides?: RequestInit): Promise<ApproveCalldataResponseDto> {
        const response = await this.chainApproveControllerGetCallDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Address of the 1inch router that must be trusted to spend funds for the exchange
     */
    async chainApproveControllerGetSpenderRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApproveSpenderResponseDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v4.0/42161/approve/spender`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApproveSpenderResponseDtoFromJSON(jsonValue));
    }

    /**
     * Address of the 1inch router that must be trusted to spend funds for the exchange
     */
    async chainApproveControllerGetSpender(initOverrides?: RequestInit): Promise<ApproveSpenderResponseDto> {
        const response = await this.chainApproveControllerGetSpenderRaw(initOverrides);
        return await response.value();
    }

}
