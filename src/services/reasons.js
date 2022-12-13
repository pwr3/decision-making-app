import { fetchFakeApi, reasons } from "../fake-server";

export const apiGetReasons = async (payload) => {
//     fetch through adapter (adapter do fetch)...
    console.log('payload',payload);
    return await fetchFakeApi(reasons.get, payload);
}
export const apiCreateReason = async (payload) => {
    return await fetchFakeApi(reasons.create, payload);
}