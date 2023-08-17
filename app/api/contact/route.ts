import ContactEmail from "@/email/ContactEmail";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/validations/contactValidation";
import { NextResponse } from "next/server";
import { ErrorResponse } from "resend";
import { ZodError } from "zod";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { email, message } = await contactSchema.parse(body);
    
    const data = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: "landavazobenjamin@gmail.com",
      subject: "Contact from Portfolio",
      react: ContactEmail({ email, message }),
    });

    return NextResponse.json("All good");
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(error.message, { status: 400 });
    }

    const resendError = error as ErrorResponse;

    if (resendError?.error?.message) {
      return new Response(resendError.error.message, { status: 400 });
    }

    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Something went wrong", { status: 500 });
  }
}
