/* FETCH */

export const fetchFakeApi = (cb, params) => {
  console.log('fetchFakeApi (fake-server)');
  const randomDelay = Math.floor(Math.random() * 500);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb(params));
    }, randomDelay);
  });
};



/* ISSUES */

const getIssues = () => {
  return JSON.parse(localStorage.getItem('issues'));
};
const fetchIssues = () => {
  // пускай выдаёт промис, может с рандомной задержкой
  const issues = getIssues();
  if (issues === null) {
    return [];
  }
  return issues.map((issue) => {
    return { ...issue, optionNum: getOptionsByIssueId(issue.id).length };
  });
};

const createIssue = ({ title }) => {
  let issue_id = 1;
  let issues = getIssues();

  if (issues === null) {
    issues = [];
  } else {
    issue_id = parseInt(issues[issues.length - 1].id) + 1;
  }
  const newIssue = { id: issue_id, title };
  issues.push(newIssue);

  localStorage.setItem('issues', JSON.stringify(issues));
  return issue_id;
};

const removeIssue = (id) => {
  const issues = getIssues().filter((issue) => issue.id !== id);
  localStorage.setItem('issues', JSON.stringify(issues));
};

const getIssueById = (id) => {
  return getIssues().filter((issue) => issue.id == id);
}

/* OPTIONS */

const fetchOptions = (issueId) => {
  const issueData = { title: getIssueById(issueId)[0].title };
  const optionsList = getOptionsByIssueId(issueId).map((option) => {
    return { ...option, reasons_stata_data: [] };
  });
  return {issueData, optionsList};
};

const getOptions = () => {
  return JSON.parse(localStorage.getItem('options'));
};

const getOptionsByIssueId = (issueId) => {
  let allOptions = getOptions();
  if (allOptions === null) {
    return [];
  }
  return allOptions.filter((option) => option.issue_id == issueId);
};

export const createOption = (payload) => {
  const { title, issueId } = payload;

  let allOptions = getOptions();

  if (allOptions === null) {
    allOptions = [];
  }

  let optionId = 1;
  //
  if (allOptions.length !== 0) {
    optionId = parseInt(allOptions[allOptions.length - 1].id) + 1;
  }
  const newOption = { id: optionId, title, issue_id: issueId };

  allOptions.push(newOption);
  localStorage.setItem('options', JSON.stringify(allOptions));
  return optionId;
};


/* REASONS */

export const fetchReasons = (optionIds) => {
  // return getReasonsByOptionId(optionId).map((reason) => {
    return optionIds.map((optionId) => ({ optionId, reasons: getReasonsByOptionId(optionId)}));
  // });
};

const getReasons = () => {
  return JSON.parse(localStorage.getItem('reasons'));
};

const getReasonsByOptionId = (optionId) => {
  let allReasons = getReasons();
  if (allReasons === null) {
    return [];
  }
  return allReasons.filter((reason) => reason.option_id === optionId);
};

export const createReason = (title, optionId) => {
  let allReasons = getReasons();

  if (allReasons === null) {
    allReasons = [];
  }

  let reasonId = 1;
  //
  if (allReasons.length !== 0) {
    reasonId = parseInt(allReasons[allReasons.length - 1].id) + 1;
  }
  const newReason = { id: reasonId, title, option_id: optionId };

  allReasons.push(newReason);
  localStorage.setItem('reasons', JSON.stringify(allReasons));
};

/* helper functions */

export const issues = {
  get: fetchIssues,
  create: createIssue,
  delete: removeIssue,
};

export const options = {
  get: fetchOptions,
  create: createOption,
  delete: () => {},
};

export const reasons = {
  get: fetchReasons,
  create: createReason,
  delete: () => {},
};
