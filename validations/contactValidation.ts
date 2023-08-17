import * as z from "zod";

export const contactSchema = z.object({
  email: z.string().email(),
  message: z
    .string()
    .min(5, { message: "Please provide a message larger than 5 characters" })
    .max(300, { message: "Please provide a message no more than 300 characters" }),
});
