"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { Button, type ButtonProps } from "@/components/ui/button";

type CalendlyButtonProps = {
  label?: string;
  className?: string;
} & Pick<ButtonProps, "variant" | "size" | "withRipple">;

export default function CalendlyButton({
  label = "Book a Free Consultation",
  variant = "primary",
  size = "lg",
  withRipple = true,
  className,
}: CalendlyButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/rohantgeorge/free-digital-growth-consultation-rtr-technologies";

  useEffect(() => {
    setMounted(true);
    setRootEl(document.body);
  }, []);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        withRipple={withRipple}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {label}
      </Button>
      {mounted && rootEl && (
        <PopupModal
          url={calendlyUrl}
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={rootEl}
        />
      )}
    </>
  );
}

