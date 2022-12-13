import { fetchFakeApi, options } from "../fake-server";

export const apiGetOptions = async (payload) => {
//     fetch through adapter (adapter do fetch)...
    return await fetchFakeApi(options.get, payload);
}
export const apiCreateOption = async (payload) => {
    return await fetchFakeApi(options.create, payload);
}