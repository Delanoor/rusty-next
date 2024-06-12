import { Suspense } from "react";

import LoginForm from "../_components/login-form";
import FerrisSvg from "@/images/ferris-svg";

export default function LoginPage() {
  return (
    <div className="container relative grid h-screen flex-col bg-background items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-black p-10 text-white dark:border-r dark:border-r-zinc-800 lg:flex">
        <Suspense fallback={null}>
          <FerrisSvg className="absolute inset-0 h-full w-full object-cover p-32" />
        </Suspense>
      </div>
      <LoginForm />
    </div>
  );
}