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
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  label = "Boop",
  size = "medium",
  backgroundColor,
  ...props
}: Props) => {
  return (
    <button
      className={`
        ${size === "small" && "ui-text-xs ui-px-4 ui-py-2"}
        ${size === "medium" && "text-sm ui-px-5 ui-py-2.5"}
        ${size === "large" && "text-md ui-px-6 ui-py-3"}
        ${
          primary
            ? "ui-text-white ui-bg-blue-500"
            : "ui-text-gray-900 ui-bg-transparent ui-shadow-md"
        }
        ui-font-bold ui-border-0 ui-rounded-[3em] ui-cursor-pointer ui-inline-block ui-leading-none
      `}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
