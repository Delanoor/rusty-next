import dynamic from "next/dynamic";
import { Suspense } from "react";

import FerrisGestureSvg from "@/images/ferris-gesture";

const RegisterForm = dynamic(() => import("./_components/register-form"));

export default function RegisterPage() {
  return (
    <div className="container relative grid h-screen flex-col bg-background items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-background p-10 text-white dark:border-r dark:border-r-zinc-800 lg:flex">
        <Suspense fallback={null}>
          <FerrisGestureSvg className="absolute inset-0 h-full w-full object-cover p-32" />
        </Suspense>
      </div>
      <RegisterForm />
    </div>
  );
}
