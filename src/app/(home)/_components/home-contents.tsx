import Image from 'next/image';
import Link from 'next/link';

const contents = [
  {
    id: 1,
    role: 'Full-time Software Developer',
    href: '#',
    description:
      'Join a leading tech company in Seoul, working on cutting-edge software solutions. Opportunity to work in a dynamic and innovative environment.',
    salary: '$90,000 USD',
    location: 'Seoul, South Korea',
  },
  {
    id: 2,
    role: 'Junior Programmer',
    href: '#',
    description:
      "Kickstart your programming career in Korea's fast-growing tech sector. Work with experienced mentors and gain valuable industry experience.",
    salary: '$60,000 USD',
    location: 'Busan, South Korea',
  },
];

const contents_culture = [
  {
    id: 3,
    title: 'Junior AI Developer',
    href: '#',
    platformExperience:
      'Engage with our interactive AI courses and real-time coding labs. Benefit from a curriculum designed in collaboration with industry leaders to ensure practical, up-to-date skills.',
    platformCulture:
      'Connect with a global network of aspiring and professional AI developers. Participate in our online forums, live Q&A sessions, and virtual hackathons hosted by our platform.',
  },
  {
    id: 4,
    title: 'Entry-Level Web Developer',
    href: '#',
    platformExperience:
      'Learn through hands-on web development projects. Our platform offers a blend of theoretical knowledge and practical application, preparing you for the real-world challenges of a web developer.',
    platformCulture:
      'Immerse yourself in a collaborative learning environment. Join our web development community for peer-to-peer learning, mentorship, and regular webinars on the latest industry trends.',
  },
];

export default function HomeContents() {
  return (
    <div className="z-40 mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="w-full lg:max-w-2xl lg:flex-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl">
          Building Successful Careers in Korea&apos;s Tech Industry
        </h2>
      </div>

      <div className="mx-auto mt-20 flex max-w-2xl justify-between lg:mx-0 lg:max-w-none">
        <div className="flex w-full flex-col items-end justify-between gap-16 lg:flex-row">
          <div
            className={`relative aspect-1 h-full w-full overflow-hidden rounded-2xl bg-gray-50 lg:max-w-[31.25rem]`}
          >
            <Image
              src="https://images.unsplash.com/photo-1635362269799-7db465b6b0ca?q=80&w=3715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="z-10 mx-auto mt-14 h-full w-full">
            <ul className="-my-8 divide-y divide-gray-100 space-y-20">
              {contents.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-200">
                      <a href={opening.href}>
                        {opening.role}
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                      {opening.description}
                    </dd>
                    <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-800 dark:text-gray-200">
                      {opening.salary}
                    </dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                        aria-hidden="true"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <Link
                href={'https://habsida.com'}
                className="text-sm font-semibold leading-6 text-sky-600 hover:text-sky-500"
              >
                Узнать больше<span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-2xl justify-between lg:mx-0 lg:max-w-none">
        <div className="flex w-full flex-col items-end justify-between gap-16 lg:flex-row">
          <div className="relative order-1 aspect-1 h-full w-full overflow-hidden rounded-2xl bg-gray-50 lg:max-w-[31.25rem]">
            <Image
              src="https://images.unsplash.com/photo-1691380303276-341a5ac56744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80"
              alt=""
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="mx-auto mt-14 h-full w-full">
            <ul className="divide-y divide-gray-100 space-y-10 flex-col">
              {contents_culture.map((experience) => (
                <li key={experience.id} className="">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <div>
                      <dt className="sr-only">Experience</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-200">
                        <a href={experience.href}>
                          {experience.title}
                          <span className="absolute inset-0" aria-hidden="true" />
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                        {experience.platformExperience}
                      </dd>
                      <dt className="sr-only">Culture</dt>
                      <dd className="mt-4 text-base font-semibold leading-7 text-gray-800 dark:text-gray-200">
                        {experience.platformCulture}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-orange-600 hover:text-orange-500"
              >
                Узнать больше<span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-2xl justify-between lg:mx-0 lg:max-w-none">
        <div className="flex w-full flex-col items-end justify-between gap-16 lg:flex-row">
          <div
            className={`relative aspect-1 h-full w-full overflow-hidden rounded-2xl bg-gray-50 lg:max-w-[31.25rem]`}
          >
            <Image
              src="https://images.unsplash.com/photo-1646021780609-9c908307edc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2376&q=80"
              alt=""
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="mx-auto mt-14 h-full w-full">
            <ul className="divide-y divide-gray-100 space-y-10">
              {contents.map((opening) => (
                <li key={opening.id}>
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-200">
                      <a href={opening.href}>
                        {opening.role}
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                      {opening.description}
                    </dd>
                    <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-800 dark:text-gray-200">
                      {opening.salary}
                    </dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                        aria-hidden="true"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            {/* <div className="mt-12 flex border-t border-gray-100 pt-8">
              <a
                href={'https://habsida.com'}
                className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-500"
              >
                Узнать больше <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
