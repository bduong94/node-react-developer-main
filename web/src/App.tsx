import React, { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import RepoList from './components/RepoList';
import RepoButtonList from './components/RepoButtonList';

export function App() {
  const [repoData, setRepoData] = useState([]);
  const [filteredLanguage, setFilteredLanguage] = useState(false);

  const fetchRepoDataFromApi = async () => {
    const fetchedRepoData = await axios.get('http://localhost:4000/repos');

    return fetchedRepoData;
  };

  useEffect(() => {
    const fetchRepoData = async () => await fetchRepoDataFromApi();

    fetchRepoData().then((response) => {
      setRepoData(response.data);
    });
  }, [repoData]);

  return (
    <div>
      <RepoButtonList repoData={repoData} onClick={setFilteredLanguage} />
      <RepoList repoData={repoData} filteredLanguage={filteredLanguage} />
    </div>
  );
}
