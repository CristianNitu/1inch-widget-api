/* tslint:disable */
/* eslint-disable */
/**
 * 1inch Aggregation protocol API
 *  <h2>Polygon Network</h2> Using 1inch Aggregation protocol API, you can find the best route to exchange assets and make the exchange. <br><br> Step by step: 1. Lookup addresses of tokens you want to swap, for example ‘0xxx’ , ‘0xxxx’ for DAI -> 1INCH 2. Check for allowance of 1inch router contract to spend source asset (/approve/allowance) 3. If necessary, give approval for 1inch router to spend source token (/approve/transaction) 4. Monitor the best exchange route using (/quote) 5. When you ready use to perform swap (/swap)  
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TokenDto,
    TokenDtoFromJSON,
    TokenDtoFromJSONTyped,
    TokenDtoToJSON,
} from './TokenDto';

/**
 * 
 * @export
 * @interface TokensResponseDto
 */
export interface TokensResponseDto {
    /**
     * List of supported tokens
     * @type {Array<TokenDto>}
     * @memberof TokensResponseDto
     */
    tokens: Array<TokenDto>;
}

export function TokensResponseDtoFromJSON(json: any): TokensResponseDto {
    return TokensResponseDtoFromJSONTyped(json, false);
}

export function TokensResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokensResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokens': ((json['tokens'] as Array<any>).map(TokenDtoFromJSON)),
    };
}

export function TokensResponseDtoToJSON(value?: TokensResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tokens': ((value.tokens as Array<any>).map(TokenDtoToJSON)),
    };
}

