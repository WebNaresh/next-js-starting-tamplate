"use client";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({ message: "Email is not Valid" }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

const LoginForm = () => {
  const { data } = useSession();
  const router = useRouter();
  if (data?.user) {
    router.push("/");
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    console.log(`🚀 ~ res:`, res);
    if (res?.error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      <div className="pt-6">
        <p className="text-sm text-primary  ">Welecome back</p>
        <h1 className={`text-2xl pt-2 font-semibold text-center`}>
          Login to your account
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 "
        ></form>
      </Form>

      <p className="text-xs text-gray-400 text-center mt-4 pb-10">
        Don`t have an account?
        <Link href={"/signUp"} className="text-primary pl-1">
          {" "}
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
