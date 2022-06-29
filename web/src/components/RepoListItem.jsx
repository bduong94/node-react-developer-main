import React, { useState } from 'react';

const RepoListItem = ({ name, language, forkCount, updatedAt }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const toggleDetails = () => {
    if (!showMoreDetails) {
      setShowMoreDetails(true);
    } else {
      setShowMoreDetails(false);
    }
  };

  const commitDate = new Date(updatedAt);
  return (
    <li onClick={toggleDetails}>
      <ul>{`Name: ${name}`}</ul>
      <ul>{`Language: ${language}`}</ul>
      <ul>{`Fork Count: ${forkCount}`}</ul>
      {showMoreDetails && (
        <ul>{`Updated at: ${commitDate.toLocaleDateString('en-US')}`}</ul>
      )}
    </li>
  );
};

export default RepoListItem;
