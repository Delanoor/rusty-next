import { Container } from '@/components/default-container';

export function CallToAction() {
  return (
    <section id="get-started-today" className="relative overflow-hidden bg-[#F6FAFF] py-32">
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-neutral-500 sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel recusandae eum.
            Quam odit minus velit fuga ducimus nihil ea!
          </p>
          {/* <Button href="/register" color="slate" className="mt-10"> */}
          Get 6 months free
          {/* </Button> */}
        </div>
      </Container>
    </section>
  );
}
