import { fetchFakeApi, options } from "../fake-server";

export const apiGetOptions = async () => {
//     fetch through adapter (adapter do fetch)...
    return await fetchFakeApi(options.get);
}
export const apiCreateOption = async (title) => {
    return await fetchFakeApi(options.create, {title: title});
}