"use client";

import React from "react";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SuccessModal from "./success-modal";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  company: z.string().optional(),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const interests = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "Branding & Creative Art",
  "SaaS Application",
  "Motion Design",
  "3D Art & Direction",
  "Product Design",
];

export default function ContactForm() {
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);
  // 2. Initialize Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      interests: [],
      message: "",
    },
  });

  // 3. Submit Handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSuccessOpen(true);
        form.reset();
      }
    } catch (error) {
      console.error("Submission Error:", error);
      form.setError("name", { message: "Submission Error" });
    }
  }

  return (
    <section className="bg-white border-y">
      <div className="py-12 md:py-16 px-5 md:px-16 lg:px-32 max-w-4xl border-x mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem className="space-y-5">
                  <FormLabel className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                    I&apos;m Interested with in...
                  </FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {interests.map((item) => {
                        const isSelected = field.value.includes(item);
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => {
                              const newValue = isSelected
                                ? field.value.filter((v) => v !== item)
                                : [...field.value, item];
                              field.onChange(newValue);
                            }}
                            className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                              isSelected
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 lg:gap-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-lg font-medium">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Mr. Daniel Robert"
                        {...field}
                        className="bg-[#F2F2F2] border-none h-12 rounded-md px-3 lg:px-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-lg font-medium">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="info@example.com"
                        {...field}
                        className="bg-[#F2F2F2] border-none h-12 rounded-md px-3 lg:px-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-lg font-medium">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+1 (234) 567-580"
                        {...field}
                        className="bg-[#F2F2F2] border-none h-12 rounded-md px-3 lg:px-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-lg font-medium">
                      Company
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Onetrack Express (optional)"
                        {...field}
                        className="bg-[#F2F2F2] border-none h-12 rounded-md px-3 lg:px-6"
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
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-sm md:text-lg font-medium">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write a short note"
                        {...field}
                        className="bg-[#F2F2F2] border-none rounded-md px-3 lg:px-6 py-2 lg:py-4 min-h-37.5 resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="bg-[#1A1A1A] text-white px-10 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50 cursor-pointer"
            >
              {form.formState.isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </Form>
      </div>
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />
    </section>
  );
}
