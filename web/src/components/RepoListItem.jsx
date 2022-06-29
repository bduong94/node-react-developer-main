import React from 'react';

const RepoListItem = ({ name, language, forkCount, date }) => {
  return (
    <li>{`Name: ${name} Language:${language} Fork Count:${forkCount}`}</li>
  );
};

export default RepoListItem;
