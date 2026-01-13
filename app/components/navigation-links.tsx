"use client"

import Link from "next/link"
import type React from "react"

export function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </Link>
  )
}

export function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </Link>
  )
}

export function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label?: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-accent transition-colors"
      title={label}
    >
      {icon}
    </Link>
  )
}
