import React from 'react';

const RepoButton = ({ language, setFilteredLanguage }) => {
  const languageButtonHandler = () => {
    setFilteredLanguage(language);
  };

  return <button onClick={languageButtonHandler}>{language}</button>;
};

export default RepoButton;
