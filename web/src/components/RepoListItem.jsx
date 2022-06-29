import React from 'react';
// Include the repository name, description,
//     language, and forks count in the list.

// const testData = {
//   name: 'Test Name',
//   language: 'Test Language',
//   'fork-count': 5,
// };

const RepoListItem = ({ name, language, forkCount }) => {
  return <li>{`${name} ${language} ${forkCount}`}</li>;
};

export default RepoListItem;
