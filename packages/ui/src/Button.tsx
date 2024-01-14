import { cva, VariantProps } from "cva";

interface ButtonProps {
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const buttonStyles = cva(
  "ui-font-bold ui-border-0 ui-rounded-[3em] ui-cursor-pointer ui-inline-block ui-leading-none",
  {
    variants: {
      intent: {
        primary: "ui-text-white ui-bg-blue-500",
        secondary: "ui-text-gray-900 ui-bg-transparent ui-shadow-md",
      },
      size: {
        small: "ui-text-xs ui-px-4 ui-py-2",
        medium: "text-sm ui-px-5 ui-py-2.5",
        large: "text-md ui-px-6 ui-py-3",
      },
    },
    defaultVariants: {
      intent: "secondary",
      size: "medium",
    },
  },
);

interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export const Button = ({ intent, size, label = "Boop", ...props }: Props) => {
  return (
    <button className={buttonStyles({ intent, size })} {...props}>
      {label}
    </button>
  );
};
