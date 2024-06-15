import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../../../components/ui/button";

export default function Hero() {
  return (
    <main className="z-40 w-full">
      {/* Testimonial section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-10 sm:px-6 lg:px-8">
        <div className="relative h-full w-full overflow-hidden bg-gray-500 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <Image
            className="absolute inset-0 brightness-[0.6] saturate-[0.3]"
            // src="https://images.unsplash.com/photo-1686223678656-6e7e9ae98416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5826&q=80"
            src="https://images.unsplash.com/photo-1603286658544-8823ca3a780d?q=80&w=4287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gray-400/90 mix-blend-multiply" />

          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <figure>
              <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                <p>
                  Освойте программирование и начните карьеру в Корее <br /> с
                  нашей платформой обучения для студентов!
                </p>
              </blockquote>
              <figcaption className="mt-6 text-base text-foreground">
                <div className="font-semibold text-foreground">
                  With RUSTYAUTH
                </div>
                <Link
                  href={"https://habsida.com"}
                  className={buttonVariants({
                    variant: "outline",
                    className:
                      "mt-10 border border-white font-semibold transition-all duration-200",
                  })}
                >
                  Узнать больше
                </Link>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}
