import { Router, Request, Response } from 'express';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  await axios
    .get('https://api.github.com/users/silverorange/repos')
    .then((response) => {
      const repositoryData = response.data[0];
    });

  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json([]);
});
