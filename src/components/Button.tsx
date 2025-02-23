interface Props extends React.HTMLProps<HTMLAnchorElement> {
  link: string;
  variant?: ButtonVariant;
}

type ButtonVariant = "primary" | "secondary";

const buttonVariants: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "black",
    color: "white",
  },
  secondary: {
    backgroundColor: "white",
    color: "black",
  },
} as const;

export function Button({ link, children, ...rest }: Props) {
  const { variant = "primary", style } = rest;
  return (
    <a
      style={{ ...baseStyle, ...buttonVariants[variant], ...style }}
      href={link}
      {...rest}
    >
      {children}
    </a>
  );
}

const baseStyle: React.CSSProperties = {
  border: "2px solid black",
};
