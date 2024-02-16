import { z } from "zod";

import { User } from "../entities";
import { Repository } from "typeorm";
import { userSchemaCreate, userSchemaList, userSchemaUpdate } from "../schemas";

type UserCreate = z.infer<typeof userSchemaCreate>;
type UserList = z.infer<typeof userSchemaList>;
type UserUpdate = z.infer<typeof userSchemaUpdate>;

type UserRepo = Repository<User>;

export { UserCreate, UserList, UserUpdate, UserRepo };
