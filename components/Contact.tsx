"use client";
import { contactSchema } from "@/validations/contactValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/useToast";

type ContactType = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactType) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/contact", values);
      toast({
        title: "Email sent",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
      });
    } finally {
      form.reset();
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col max-w-lg mx-auto py-20 px-4 md:px-0">
      <h2 className="text-5xl font-bold text-center mb-10">Contact</h2>
      <Form {...form}>
        <form
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          className="flex flex-col gap-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="email"
                    {...field}
                    placeholder="Email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    rows={10}
                    {...field}
                    placeholder="Email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} className=" w-32">
            Send
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Contact;
