'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  enableRipple,
  rippleColor,
  ...props
}) {
  const Comp = asChild ? Slot : 'button';
  const [ripples, setRipples] = React.useState([]);
  const buttonRef = React.useRef(null);

  // Ripple включен только если явно передан true или если это outline кнопка
  const shouldEnableRipple =
    enableRipple !== undefined ? enableRipple : variant === 'outline';

  const handleClick = e => {
    if (!shouldEnableRipple) {
      props.onClick?.(e);
      return;
    }

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
    };

    setRipples(prev => [...prev, ripple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 600);

    props.onClick?.(e);
  };

  const getRippleColorClass = () => {
    if (rippleColor) return rippleColor;

    switch (variant) {
      case 'outline':
        return 'bg-foreground/20'; // Изменили цвет ripple для outline кнопки на более контрастный
      case 'destructive':
        return 'bg-white/30';
      case 'secondary':
        return 'bg-black/20';
      case 'ghost':
        return 'bg-black/10';
      case 'link':
        return 'bg-black/10';
      default:
        return 'bg-white/30';
    }
  };

  return (
    <Comp
      ref={buttonRef}
      data-slot="button"
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden',
        buttonVariants({ variant, size, className })
      )}
      {...props}
    >
      {shouldEnableRipple &&
        ripples.map(ripple => (
          <span
            key={ripple.id}
            className={`absolute rounded-full pointer-events-none animate-rippling ${getRippleColorClass()}`}
            style={{
              width: ripple.size,
              height: ripple.size,
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      <span className="relative z-10">{props.children}</span>
    </Comp>
  );
}

export { Button, buttonVariants };
