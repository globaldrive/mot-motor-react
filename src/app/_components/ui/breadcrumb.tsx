import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import PropTypes from "prop-types";
import * as React from "react";

import { cn } from "@/_utils/_utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5 dark:text-slate-400",
      className,
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";
BreadcrumbList.propTypes = {
  className: PropTypes.string,
};

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";
BreadcrumbItem.propTypes = {
  className: PropTypes.string,
};

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn(
        "transition-colors hover:text-slate-950 dark:hover:text-slate-50",
        className,
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
BreadcrumbLink.propTypes = {
  className: PropTypes.string,
};

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-slate-950 dark:text-slate-50", className)}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";
BreadcrumbPage.propTypes = {
  className: PropTypes.string,
};
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
BreadcrumbSeparator.propTypes = {
  className: PropTypes.string,
};
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
BreadcrumbEllipsis.propTypes = {
  className: PropTypes.string,
};

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
