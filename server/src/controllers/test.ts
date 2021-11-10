import { Router, Request, Response } from "express";
 
const router = Router();

const ping = async (request: Request, response: Response) => {
  try {
    response.status(200).json({ success: 'OK' });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

router.get("/ping", ping);

export default router;