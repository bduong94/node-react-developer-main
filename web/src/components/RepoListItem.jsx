import React from 'react';
// Include the repository name, description,
//     language, and forks count in the list.

const RepoListItem = ({ name, language, forkCount, date }) => {
  return <li>{`${name} ${language} ${forkCount} ${date}`}</li>;
};

export default RepoListItem;
