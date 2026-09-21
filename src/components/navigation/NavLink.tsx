import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface NavLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  variant?: 'light' | 'dark';
}

export function NavLink({ className, variant = 'light', children, ...props }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-300",
        variant === 'light' ? "text-cream hover:text-white" : "text-charcoal hover:text-charcoal/70",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
