import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-md border border-white/10  bg-primary px-4 py-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium text-base font-light file:text-foreground  focus:border-accent disabled:cursor-not-allowed disabled:opacity-50 outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
