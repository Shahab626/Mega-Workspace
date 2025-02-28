import { tv, VariantProps } from "tailwind-variants";
import { ComponentProps, forwardRef, ReactNode } from "react";

const wrapper = tv({
  base: "rounded border-gray-200 flex flex-col has-[input:focus]:border-primary-500 has-[[data-type='error']]:border-red-500",
});

const inputWrapper = tv({
  base: "flex items-center", // Adds spacing between input and suffix
});

export const input = tv({
  base: "focus:border-primary-500 outline-none",
  variants: {
    variant: {
      default:
        "px-5 py-4 rounded-lg border border-[#C4C4C4] w-full bg-white resize-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Input = forwardRef<
  HTMLInputElement,
  ComponentProps<"input"> & {
    label: ReactNode;
    error?: string;
    suffix?: ReactNode;
  } & VariantProps<typeof input>
>(({ error, label, suffix, className, variant, ...props }, ref) => (
  <label className={wrapper()}>
    <div className="text-base text-gray-500">{label}</div>
    <div className={inputWrapper()}>
      {suffix && <div className="text-gray-900">{suffix}</div>}
      <input ref={ref} className={input({ variant, className })} {...props} />
    </div>
    {!!error && (
      <div data-type="error" className="text-sm text-red-500">
        {error}
      </div>
    )}
  </label>
));

Input.displayName = "Input";
