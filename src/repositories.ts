import { AppDataSource } from "./data-source";
import { User } from "./entities";
import { UserRepo } from "./interfaces";

const userRepository: UserRepo = AppDataSource.getRepository(User);

export { userRepository };
