import React from 'react';
import RepoListItem from './RepoListItem';

const RepoList = ({ repoData }) => {
  const listOfRepoData = repoData.map((repository) => {
    return (
      <RepoListItem
        key={repository.id}
        name={repository.name}
        language={repository.language}
        forkCount={repository['fork-count']}
      />
    );
  });
  console.log(listOfRepoData);
  return (
    <ul>
      <RepoListItem />
    </ul>
  );
};

export default RepoList;
