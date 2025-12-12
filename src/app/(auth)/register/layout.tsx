import Link from 'next/link'

import { ReactNode } from 'react'

export default async function LoginLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark">
      {children}
      <div className="fixed inset-x-0 bottom-0 bg-background">
        <div className="flex sm:inline-flex sm:space-x-4 w-full items-center justify-center border-t">
          <div className="flex">
            <Link href="/">
              <div className="block p-4 text-center text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Rusty-AUTH
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
