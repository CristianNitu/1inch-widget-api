/**
 * 1inch Aggregation protocol API
 *  <h2>Ethereum Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)
 *
 * The version of the OpenAPI document: 4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { ApproveCalldataResponseDto, ApproveSpenderResponseDto } from '../models';
export interface ApproveFactoryControllerGetAllowanceRequest {
    tokenAddress: string;
    walletAddress: string;
}
export interface ApproveFactoryControllerGetCallDataRequest {
    tokenAddress: string;
    amount?: string;
}
/**
 *
 */
export declare class ApproveApi extends runtime.BaseAPI {
    /**
     * Get the number of tokens that the 1inch router is allowed to spend
     */
    approveFactoryControllerGetAllowanceRaw(requestParameters: ApproveFactoryControllerGetAllowanceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>>;
    /**
     * Get the number of tokens that the 1inch router is allowed to spend
     */
    approveFactoryControllerGetAllowance(requestParameters: ApproveFactoryControllerGetAllowanceRequest, initOverrides?: RequestInit): Promise<void>;
    /**
     * Generate data for calling the contract in order to allow the 1inch router to spend funds
     */
    approveFactoryControllerGetCallDataRaw(requestParameters: ApproveFactoryControllerGetCallDataRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApproveCalldataResponseDto>>;
    /**
     * Generate data for calling the contract in order to allow the 1inch router to spend funds
     */
    approveFactoryControllerGetCallData(requestParameters: ApproveFactoryControllerGetCallDataRequest, initOverrides?: RequestInit): Promise<ApproveCalldataResponseDto>;
    /**
     * Address of the 1inch router that must be trusted to spend funds for the exchange
     */
    approveFactoryControllerGetSpenderRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApproveSpenderResponseDto>>;
    /**
     * Address of the 1inch router that must be trusted to spend funds for the exchange
     */
    approveFactoryControllerGetSpender(initOverrides?: RequestInit): Promise<ApproveSpenderResponseDto>;
}