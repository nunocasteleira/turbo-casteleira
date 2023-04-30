type Size = "small" | "medium" | "large";
interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: Size;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

type Mode = "primary" | "secondary";

export const Button = ({
  primary = false,
  label = "Boop",
  size = "medium",
  backgroundColor,
  ...props
}: Props) => {
  const sizeClass: Record<Size, string> = {
    small: "ui-text-xs ui-px-4 ui-py-2",
    medium: "text-sm ui-px-5 ui-py-2.5",
    large: "text-md ui-px-6 ui-py-3",
  };

  const modeClass: Record<Mode, string> = {
    primary: "ui-text-white ui-bg-blue-500",
    secondary: "ui-text-gray-900 ui-bg-transparent ui-shadow-md",
  };

  const mode: Mode = primary ? "primary" : "secondary";

  return (
    <button
      className={`${sizeClass[size]}
      ${modeClass[mode]}
        ui-font-bold ui-border-0 ui-rounded-[3em] ui-cursor-pointer ui-inline-block ui-leading-none
      `}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
