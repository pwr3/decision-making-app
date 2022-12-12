import React, {useEffect} from 'react';
import { useAppSelector } from './hooks';
import { useDispatch } from "react-redux";
import {createIssue, fetchIssues} from './store/issuesSlice'

import {bindActionCreators} from "@reduxjs/toolkit";

export default function App() {
    const issues = useAppSelector((state) => state.issues);

    useEffect(() => {
        dispatch(fetchIssues());
    }, [issues.currentIssue])

    const dispatch = useDispatch();
    console.log(issues)
  return (
    <div>
      App
        <br />
        <br />
        {issues.issueList.map((issue) => {
            return <p>{issue.id} {issue.title} {issue.optionNum}</p>
        })}
        <br />
      <button onClick={() => dispatch(fetchIssues())}>Get</button>
      <button onClick={() => dispatch((createIssue()))
          .then(() => dispatch(fetchIssues()))}>ADD</button>
    </div>
  );
}
