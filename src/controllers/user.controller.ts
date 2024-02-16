import { Response, Request } from "express";
import { UserCreate } from "../interfaces";
import { userService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserCreate = await userService.create(req.body);
  return res.status(200).json(user);
};

export default {
  create,
};
