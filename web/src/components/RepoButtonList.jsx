import React from 'react';
import RepoButton from './RepoButton';

const RepoButtonList = ({ repoData }) => {
  const uniqueLanguagesList = [];

  for (const repository of repoData) {
    if (!uniqueLanguagesList.includes(repository.language)) {
      uniqueLanguagesList.push(repository.language);
    }
  }

  const listOfLanguageButtons = uniqueLanguagesList.map((language) => {
    return <RepoButton key={language} language={language} />;
  });

  return <>{listOfLanguageButtons}</>;
};

export default RepoButtonList;
