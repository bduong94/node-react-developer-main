// import React, { useState } from 'react';

const RepoListItem = ({ name, language, forkCount }) => {
  //   const [showMoreDetails, setShowMoreDetails] = useState(false);

  //   const showDetails = () => {
  //     setShowMoreDetails(true);
  //   };

  return (
    <li>
      <ul>{`Name: ${name}`}</ul>
      <ul>{`Language: ${language}`}</ul>
      <ul>{`Fork Count: ${forkCount}`}</ul>
    </li>
  );
};

export default RepoListItem;
