import React, { useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import RepoList from './components/RepoList';

export function App() {
  const [repoData, setRepoData] = useState([]);

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
      <RepoList repoData={repoData} />
    </div>
  );
}
