import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
};

export function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component className={`shell ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

