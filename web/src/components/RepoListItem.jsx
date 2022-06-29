import React from 'react';

const RepoListItem = ({ name, language, forkCount, date }) => {
  return <li>{`${name} ${forkCount} ${language} ${date} `}</li>;
};

export default RepoListItem;
