import { LucideProps } from "lucide-react";
import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export type IconName = keyof typeof dynamicIconImports;

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
}

Icon.displayName = "Icon";
