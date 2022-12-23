import { fetchFakeApi, options } from "../fake-server";

export const apiGetOptions = async (payload) => {
    return await fetchFakeApi(options.get, payload);
};
export const apiCreateOption = async (payload) => {
    return await fetchFakeApi(options.create, payload);
};
