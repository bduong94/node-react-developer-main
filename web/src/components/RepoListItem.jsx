import React from 'react';
// Include the repository name, description,
//     language, and forks count in the list.

const testData = {
  name: 'Test Name',
  language: 'Test Language',
  'fork-count': 5,
};

const RepoListItem = ({ repoInformation }) => {
  return (
    <li>{`${testData.name} ${testData.language} ${testData['fork-count']}`}</li>
  );
};

export default RepoListItem;
