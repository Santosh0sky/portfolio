"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"
import { Resend } from 'resend';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function sendContactForm(data: z.infer<typeof contactFormSchema>) {
  // Validate the form data 
  const validatedFields = contactFormSchema.safeParse(data)

  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data" }
  }

  // In a real application, you would send an email or store in a database
  // For now, we'll just simulate a delay
  // re_SnNmCWZ4_AVdmQCjXPTKNWmcMQhyK17ED
  await new Promise((resolve) => setTimeout(resolve, 1500))



const resend = new Resend('re_SnNmCWZ4_AVdmQCjXPTKNWmcMQhyK17ED');

console.log(validatedFields,"--",data,"--",contactFormSchema);

resend.emails.send({
  from: validatedFields.data.email,
  to: 'ssantosh.kr.yd.sky@gmail.com',
  subject: validatedFields.data.subject,
  html: validatedFields.data.message
});

  // This would be where you would call your email service or database
  console.log("Form submission:", validatedFields.data)

  revalidatePath("/")
  return { success: true }
}

