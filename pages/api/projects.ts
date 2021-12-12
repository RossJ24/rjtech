import type { NextApiRequest, NextApiResponse } from 'next';
import { getProjects, Project } from '../../utils/get-projects';

// API endpoint for fetching projects from github
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      let projects = await getProjects();
      res.status(200).json(projects);
    }
  } catch(err){
    res.status(500).json({});
  }
}
