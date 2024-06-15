"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback, useTransition } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconSpinner } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLocalStorage from "@/lib/hooks/use-local-storage";

import { loginUserSchema, type LoginUserSchema } from "@/types/auth";
import { loginUser } from "../register/action";
import { toast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const callbackUrl = useSearchParams().get("callbackUrl");
  const errorMessage = useSearchParams().get("message");

  const [userEmail, setUserId] = useLocalStorage<string>("userEamil", "");
  const [inValidCredentials, setInValidCredentials] = useState(false);

  const form = useForm<LoginUserSchema>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: userEmail ?? "",
      password: "",
    },
    values: {
      email: userEmail ?? "",
      password: "",
    },
    reValidateMode: "onSubmit",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [rememberPreference, setRememberPreference] = useLocalStorage<boolean>(
    "rememberPreference",
    false
  );
  useEffect(() => {
    setRememberMe(rememberPreference);
  }, [rememberPreference]);

  const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      void form.handleSubmit(onSubmit)();
    }
  }, []);

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const onSubmit = async (data: LoginUserSchema) => {
    if (rememberMe) {
      setUserId(data.email);
    }
    startTransition(async () => {
      const res = await loginUser(data);
      // console.log("🚀 ~ onSubmit ~ res:", res);

      if (res?.error) {
        setInValidCredentials(true);
        form.setError("root", {
          type: "manual",
          message: res.error,
        });
        form.reset();
        return;
      }

      if (res?.message === "2FA required") {
        toast({
          title: "Success",
          description: (
            <span>
              you have successfully logged in. Please verify your 2FA code.
            </span>
          ),
        });
        router.push(`/verify-2fa?email=${data.email}`);

        return;
      }
    });
  };

  const {
    formState: { isValid, isSubmitting },
  } = form;

  return (
    <div className="lg:p-8 h-full bg-background items-center flex">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign in to Rusty Auth
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to continue
          </p>
        </div>
        {inValidCredentials && (
          <p className="text-red-600">Invalid credentials. Please try again.</p>
        )}
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <Form {...form}>
          <form
            onKeyDown={handleKeyPress}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-6">
              <div>
                <FormField
                  disabled={isPending}
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
                  disabled={isPending}
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                  checked={rememberMe}
                  onCheckedChange={(checked) => {
                    setRememberMe(checked as boolean);
                    setRememberPreference(checked as boolean);
                  }}
                />
                <Label
                  htmlFor="remember-me"
                  className="ml-3 cursor-pointer text-muted-foreground"
                >
                  Remember me
                </Label>
              </div>

              <div className="text-sm leading-6">
                <button
                  disabled
                  className="font-semibold text-orange-600 hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Forgot password?
                </button>
              </div>
            </div>
            <div className="w-full">
              <Button
                disabled={!isValid || isSubmitting || isPending}
                type="submit"
                className="inline-flex w-full"
              >
                {isSubmitting || isPending ? (
                  <>
                    <IconSpinner className="animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </div>
          </form>
        </Form>

        <div className="mt-10">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full" />
            </div>

            <div className="relative flex justify-center text-sm font-medium leading-6">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  className="text-orange-600 hover:text-orange-500 disabled:cursor-not-allowed"
                  href={"/register"}
                >
                  Signup now
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-muted-foreground" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-background px-6">Or continue with</span>
            </div>
          </div>

          {/* <div className="mt-6 flex flex-col space-y-2">
            <GoogleLoginButton callbackUrl={callbackUrl} />
            <GithubLoginButton />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
