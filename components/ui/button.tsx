import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-noir text-cream shadow-sm hover:bg-deeprose hover:text-white hover:shadow-[0_18px_40px_-18px_rgba(192,132,151,0.85)]",
        gold:
          "text-noir border border-gold bg-gradient-to-r from-gold/15 via-gold/5 to-gold/15 hover:from-gold hover:via-gold-soft hover:to-gold hover:text-noir hover:shadow-[0_18px_40px_-18px_rgba(212,175,55,0.9)]",
        outline:
          "border border-noir/20 text-noir hover:border-gold hover:text-gold-deep hover:shadow-[0_14px_34px_-20px_rgba(212,175,55,0.8)]",
        ghost: "text-noir hover:bg-secondary/60 hover:text-deeprose",
        rose: "bg-deeprose text-white hover:bg-primary/90 shadow-[0_18px_40px_-18px_rgba(192,132,151,0.8)]",
        link: "text-deeprose underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 rounded-full px-5 text-xs",
        lg: "h-14 px-10 text-[15px]",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
