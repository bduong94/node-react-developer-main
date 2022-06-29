import React from 'react';
import RepoListItem from './RepoListItem';

const RepoList = ({ repoData }) => {
  const listOfRepoData = repoData;
  console.log(listOfRepoData);
  return (
    <ul>
      <RepoListItem />
    </ul>
  );
};

export default RepoList;
