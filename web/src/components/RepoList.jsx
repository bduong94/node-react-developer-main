import React from 'react';
import RepoListItem from './RepoListItem';

const RepoList = ({ repoData }) => {
  const listOfRepoData = repoData.map((repository) => {
    return (
      <RepoListItem
        key={repository.id}
        name={repository.name}
        language={repository.language}
        forkCount={repository.forks_count}
      />
    );
  });
  console.log(listOfRepoData);
  return <ul>{listOfRepoData}</ul>;
};

export default RepoList;
