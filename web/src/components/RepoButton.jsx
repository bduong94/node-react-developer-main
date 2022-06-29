import React from 'react';

const RepoButton = ({ language, onClick }) => {
  return <button onClick={onClick}>{language}</button>;
};

export default RepoButton;
