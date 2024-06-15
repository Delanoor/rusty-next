"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconSpinner } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { createUser } from "../action";
import { Checkbox } from "@/components/ui/checkbox";
import { registerUserSchema, type RegisterUserSchema } from "@/types/auth";

import { toast } from "@/components/ui/use-toast";

const RegisterForm = () => {
  const callbackUrl = useSearchParams().get("callbackUrl");
  const errorMessage = useSearchParams().get("message");

  const [inValidCredentials, setInValidCredentials] = useState(false);

  const form = useForm<RegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      requires2FA: true,
    },
  });

  const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      void form.handleSubmit(onSubmit)();
    }
  }, []);

  const router = useRouter();

  const {
    formState: { isSubmitting, isValid },
  } = form;

  const onSubmit = async (data: z.infer<typeof registerUserSchema>) => {
    const res = await createUser(data);

    if (res?.error) {
      setInValidCredentials(true);
      form.setError("root", {
        type: "manual",
        message: res.error,
      });
      form.reset();
      return;
    }

    toast({
      title: "Success",
      description: <span>successfully registered</span>,
    });
    router.push(`/login`);
  };

  return (
    <div className="lg:p-8 h-full bg-background items-center flex">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Register</h1>
          <p className="text-sm text-muted-foreground">Create your account</p>
        </div>
        {inValidCredentials && (
          <p className="text-red-600">
            {errorMessage} <br /> Please try again.
          </p>
        )}
        <Form {...form}>
          <form
            onKeyDown={handleKeyPress}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-6">
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="border-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className="border-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Password Confirm</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password confirm"
                          className="border-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="requires2FA"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Enable two-factor authentication</FormLabel>
                    <FormDescription>
                      For added security, two-factor authentication requires you
                      to enter a code from your authenticator app.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <div className="w-full">
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                className="inline-flex w-full"
              >
                {isSubmitting ? (
                  <>
                    <IconSpinner className="animate-spin mr-2" />
                    Signing up...
                  </>
                ) : (
                  "Sign up"
                )}
              </Button>
            </div>
          </form>
        </Form>

        {/* <div className="mt-10">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-muted-foreground" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-background px-6">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col space-y-2">
            <GoogleLoginButton callbackUrl={callbackUrl} />
            <GithubLoginButton />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RegisterForm;
