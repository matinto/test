import { Request, Response } from "express";
 
/**
 * GET /
 * Test
 */
export let test = (req: Request, res: Response) => {
  res.send("Hello World");
};