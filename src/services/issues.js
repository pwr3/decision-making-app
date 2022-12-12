import { fetchFakeApi, issues } from "../api";

export const apiGetIssues = async () => {
//     fetch through adapter (adapter do fetch)...
    const res = await fetchFakeApi(issues.get);
    return res;
}
export const apiCreateIssue = async (title) => {
    const res = await fetchFakeApi(issues.create, {title: title});
    return res;
}

// export const createIssue = () => {}
//
// export const deleteIssue = (issueId) => {}