import { fetchFakeApi, issues } from "../fake-server";

export const apiGetIssues = async () => {
//     fetch through adapter (adapter do fetch)...
    return await fetchFakeApi(issues.get);
}
export const apiCreateIssue = async (title) => {
    return await fetchFakeApi(issues.create, {title: title});
}