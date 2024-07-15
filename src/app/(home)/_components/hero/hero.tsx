import Image from 'next/image'
import ArrowBounce from './arrow-bounce'

export default function Hero() {
  return (
    <main className="z-40 w-full pt-16 h-[calc(100vh_-64px)]">
      <div className="relative h-full w-full overflow-hidden bg-gray-500 px-6 py-20 shadow-xl sm:py-24">
        <Image
          className="absolute inset-0 brightness-[0.6] saturate-[0.3]"
          // src="https://images.unsplash.com/photo-1686223678656-6e7e9ae98416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5826&q=80"
          src="https://images.unsplash.com/photo-1603286658544-8823ca3a780d?q=80&w=4287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gray-400/90 mix-blend-multiply" />

        <div className="relative mx-auto lg:mx-0 text-center w-full">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-center text-background dark:text-foreground">
            Auth with Rust!
          </h1>
          <figure>
            <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
              <p>
                With Rust, authentication is now a safe and secure way <br /> to
                manage your users and their data.
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
      <ArrowBounce
        size={40}
        className="mx-auto w-full justify-center absolute bottom-16 inline-flex"
      />
    </main>
  )
}
