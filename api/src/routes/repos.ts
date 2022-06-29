import { Router, Request, Response } from 'express';
import axios from 'axios';
import { fork } from 'child_process';
import localRepos from '../../data/repos.json';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  await axios
    .get('https://api.github.com/users/silverorange/repos')
    .then((response) => {
      const repositoryData = response.data;
      const notForkedRepositories = [];

      for (const repo of repositoryData) {
        if (repo.fork === false) {
          notForkedRepositories.push(repo);
        }
      }

      for (const repo of localRepos) {
        if (repo.fork === false) {
          notForkedRepositories.push(repo);
        }
      }

      res.header('Cache-Control', 'no-store');

      res.status(200);

      // TODO: See README.md Task (A). Return repo data here. You’ve got this!
      res.json(notForkedRepositories);
    });
});
