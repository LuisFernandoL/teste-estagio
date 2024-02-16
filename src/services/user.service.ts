import { User } from "../entities";
import { UserCreate } from "../interfaces";
import { userRepository } from "../repositories";
import { userSchemaCreate } from "../schemas";

const create = async ({ ...data }: UserCreate): Promise<UserCreate> => {
  const user: User = userRepository.create({
    ...data,
  });
  await userRepository.save(user);
  return userSchemaCreate.parse(user);
};

export default {
  create,
};
