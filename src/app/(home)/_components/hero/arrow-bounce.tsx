'use client'
import { cn } from '@/lib/utils'
import { ChevronsDownIcon } from 'lucide-react'
import React, { useEffect } from 'react'

const ArrowBounce = ({
  className,
  size = 14,
}: {
  className?: string
  size?: number
}) => {
  const [scrolled, setScrolled] = React.useState(false)

  useEffect(() => {
    const handleScroll = () => {
      return window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(className, {
        'animate-pulse': !scrolled,
        hidden: scrolled,
      })}
    >
      <ChevronsDownIcon size={size} className="animate-bounce" />
    </div>
  )
}

export default ArrowBounce
