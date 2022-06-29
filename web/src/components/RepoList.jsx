import React from 'react';
import RepoListItem from './RepoListItem';

const RepoList = ({ repoData, filteredLanguage }) => {
  const sortedRepoDataByDate = filteredLanguage
    ? repoData
        .filter((repository) => repository.language === filteredLanguage)
        .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
    : repoData.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  const listOfRepoData = sortedRepoDataByDate.map((repository) => {
    return (
      <RepoListItem
        key={repository.id}
        name={repository.name}
        language={repository.language}
        forkCount={repository.forks_count}
        date={repository.created_at}
      />
    );
  });
  return <ul>{listOfRepoData}</ul>;
};

export default RepoList;
