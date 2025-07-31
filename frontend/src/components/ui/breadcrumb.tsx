"use client"

import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  separator?: React.ReactNode
  showHomeIcon?: boolean
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, className, separator = <ChevronRight className="h-4 w-4" />, showHomeIcon = true }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
      >
        <ol className="flex items-center space-x-1">
          {items.map((item, index) => {
            const isFirst = index === 0

            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-1" aria-hidden="true">
                    {separator}
                  </span>
                )}
                {item.href && !item.current ? (
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center hover:text-foreground transition-colors",
                      item.current && "text-foreground font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {isFirst && showHomeIcon ? (
                      <Home className="h-4 w-4 mr-1" />
                    ) : null}
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={cn(
                      "flex items-center",
                      item.current && "text-foreground font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {isFirst && showHomeIcon ? (
                      <Home className="h-4 w-4 mr-1" />
                    ) : null}
                    {item.label}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)

Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb } 