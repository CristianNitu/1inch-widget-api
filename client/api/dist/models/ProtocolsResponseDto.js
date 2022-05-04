"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
const ProtocolImageDto_1 = require("./ProtocolImageDto");
function ProtocolsResponseDtoFromJSON(json) {
    return ProtocolsResponseDtoFromJSONTyped(json, false);
}
exports.ProtocolsResponseDtoFromJSON = ProtocolsResponseDtoFromJSON;
function ProtocolsResponseDtoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'protocols': (json['protocols'].map(ProtocolImageDto_1.ProtocolImageDtoFromJSON)),
    };
}
exports.ProtocolsResponseDtoFromJSONTyped = ProtocolsResponseDtoFromJSONTyped;
function ProtocolsResponseDtoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'protocols': (value.protocols.map(ProtocolImageDto_1.ProtocolImageDtoToJSON)),
    };
}
exports.ProtocolsResponseDtoToJSON = ProtocolsResponseDtoToJSON;
