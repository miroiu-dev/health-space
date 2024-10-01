import { forwardRef } from "react";
import { Button, ButtonProps } from "./button";
import { Icon, IconName } from "./icon";

type IconButtonProps = Omit<ButtonProps, "variant" | "size"> & {
  name: IconName;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ name, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        size="icon"
        {...props}>
        <Icon
          name={name}
          className="h-4 w-4"
        />
      </Button>
    );
  },
);

IconButton.displayName = "IconButton";
