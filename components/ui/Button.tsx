import type { JSX } from 'react';

export const Button = ({
  children,
  href,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  href: string;
  className?: string;
}): JSX.Element => {
  return (
    <a
      href={href}
      className={`ease-bounce transform rounded-md bg-white px-4 py-2 text-black transition-all duration-500 hover:scale-105 lg:px-6 lg:py-4 ${className}`}
    >
      {children}
    </a>
  );
};

export const TransparentButton = ({
  children,
  href,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  href: string;
  className?: string;
}): JSX.Element => {
  return (
    <a
      href={href}
      className={`ease-bounce transform rounded-md bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-all duration-500 hover:scale-105 lg:px-6 lg:py-4 ${className}`}
    >
      {children}
    </a>
  );
};
