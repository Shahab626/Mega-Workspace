import { ComponentProps, FC } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex gap-1 items-center justify-center grow-0 border-black active:text-black text-white active:border-black active:bg-white active:bg-transparent bg-black font-normal relative drop-shadow-sm text-center disabled:bg-black disabled:text-white disabled:opacity-20 disabled:cursor-not-allowed max-w-[17rem] w-full whitespace-nowrap",
  variants: {
    variant: {
      ghost:
        "bg-transparent text-black border-transparent disabled:text-gray-500 disabled:border-transparent",
      outline:
        "border-black bg-transparent text-black active:bg-black active:text-white disabled:text-gray-500 disabled:border-black disabled:bg-transparent",
      outlinebgWhite:
        "bg-white text-black active:bg-black active:text-white disabled:text-gray-500 disabled:border-black disabled:bg-transparent",
      filled: "",
    },
    size: {
      xs: "h-6 text-xs border px-4",
      sm: "h-8 text-xs px-9",
      md: "h-12 px-14 border-2",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

export const Button: FC<
  ComponentProps<"button"> & VariantProps<typeof buttonVariants>
> = ({ size, variant, className, ...props }) => {
  return (
    <button
      className={buttonVariants({ className, variant, size })}
      {...props}
    ></button>
  );
};
