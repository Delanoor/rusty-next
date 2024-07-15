import { HomeNavbar } from '@/components/nav/default-navbar'

import Hero from './(home)/_components/hero/hero'
import HomeContents from './(home)/_components/home-contents'
import SecondaryFeatures from './(home)/_components/secondary-features'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HomeNavbar />
      <Hero />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <SecondaryFeatures />
        <HomeContents />
      </div>
      {/* <Footer /> */}
    </main>
  )
}
