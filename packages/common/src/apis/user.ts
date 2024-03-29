import vine from "@vinejs/vine";
import { Infer } from "@vinejs/vine/types";

export const userName = vine.string().trim().minLength(2).maxLength(20).optional();
export const updateUserValidator = vine.compile(
  vine.object({
    name: userName.clone().optional(),
    object: vine.object({ foo: vine.string(), bar: vine.string() }).optional()
  }),
);

export type UpdateUser = Infer<typeof updateUserValidator>;
