import { HomeNavbar } from "@/components/nav/default-navbar";

import Hero from "./(home)/_components/hero";
import SecondaryFeatures from "./(home)/_components/secondary-features";
import HomeContents from "./(home)/_components/home-contents";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HomeNavbar />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Привет, это Habsida!
        </h1>

        <Hero />
        <SecondaryFeatures />
        <HomeContents />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
