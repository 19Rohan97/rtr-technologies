"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden group cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-gray-900 to-black text-white shadow-lg hover:shadow-xl hover:from-black hover:to-gray-800 hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-md transform transition-all duration-200 ease-out",
        primary:
          "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black shadow-lg hover:shadow-xl hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-md font-semibold transform transition-all duration-200 ease-out",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl hover:from-red-400 hover:to-red-500 hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-md focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 transform transition-all duration-200 ease-out",
        outline:
          "border-2 border-gray-300 bg-transparent shadow-sm hover:bg-gray-50 hover:border-gray-400 hover:shadow-md hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-500 transform transition-all duration-200 ease-out",
        secondary:
          "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 shadow-sm hover:shadow-md hover:from-gray-200 hover:to-gray-300 hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-sm transform transition-all duration-200 ease-out",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 dark:hover:bg-gray-800 dark:hover:text-gray-100 transform transition-all duration-200 ease-out",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-colors duration-200",
        gradient:
          "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg hover:shadow-xl hover:from-purple-400 hover:via-pink-400 hover:to-red-400 hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-md transform transition-all duration-200 ease-out",
        shine:
          "bg-gradient-to-r from-gray-900 to-black text-white shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-md transform transition-all duration-200 ease-out before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg px-8 text-base has-[>svg]:px-6",
        xl: "h-14 rounded-lg px-10 text-lg has-[>svg]:px-8",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withRipple?: boolean;
  withPulse?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      withRipple = false,
      withPulse = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<
      Array<{ id: number; x: number; y: number }>
    >([]);
    const rippleId = React.useRef(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (withRipple) {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newRipple = {
          id: rippleId.current++,
          x,
          y,
        };

        setRipples((prev) => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples((prev) =>
            prev.filter((ripple) => ripple.id !== newRipple.id)
          );
        }, 600);
      }

      onClick?.(event);
    };

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size, className }),
          withPulse && "animate-pulse"
        )}
        onClick={handleClick}
        {...props}
      >
        {children}

        {/* CSS-based ripple effects */}
        {withRipple &&
          ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute rounded-full bg-white/30 pointer-events-none animate-ping"
              style={{
                left: ripple.x - 10,
                top: ripple.y - 10,
                width: 20,
                height: 20,
                animationDuration: "0.6s",
                animationFillMode: "forwards",
              }}
            />
          ))}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
