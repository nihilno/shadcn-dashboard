import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(48),
  email: z.email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(8, { message: "Phone number must be 9 characters." })
    .max(12),
  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters." })
    .max(48),
  role: z.enum(["admin", "user"]),
});
