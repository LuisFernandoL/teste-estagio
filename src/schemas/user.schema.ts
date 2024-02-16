import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(60),
  email: z.string().max(45).email(),
  password: z.string().max(120),
});

const userSchemaCreate = userSchema.omit({ password: true });
const userSchemaUpdate = userSchemaCreate.partial();
const userSchemaList = userSchemaCreate.array();

export { userSchema, userSchemaCreate, userSchemaUpdate, userSchemaList };
