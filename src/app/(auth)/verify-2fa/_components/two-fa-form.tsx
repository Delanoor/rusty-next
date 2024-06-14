"use client";

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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import { verify2FASchema, type Verify2FASchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { verify2FA } from "../../register/action";

const TwoFAForm = () => {
  const email = useSearchParams().get("email") ?? "";
  const form = useForm<Verify2FASchema>({
    resolver: zodResolver(verify2FASchema),
    defaultValues: {
      "2FACode": "",
      email,
    },
    values: {
      "2FACode": "",
      email,
    },
  });

  const router = useRouter();

  const onSubmit = async (data: Verify2FASchema) => {
    const res = await verify2FA(data);
    // console.log("🚀 ~ onSubmit ~ res:", res);

    if (res?.error) {
      form.setError("root", {
        type: "manual",
        message: res.error,
      });
      form.reset();
      return;
    }
    if (res.status === 200) {
      router.push("/protected");
      toast({
        title: "Success",
        description: <span>{res.status}</span>,
      });
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex justify-center flex-col max-w-sm mx-auto"
      >
        <FormField
          control={form.control}
          name="2FACode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verify 2FA</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the 2FA code sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default TwoFAForm;
