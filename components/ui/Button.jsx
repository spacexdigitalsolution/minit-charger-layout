import Link from 'next/link';

/**
 * Button Component
 * 
 * Reusable button with standard variants and sizes.
 * Supports rendering as an anchor link (via next/link) or a button element.
 * 
 * @param {Object} props
 * @param {string} [props.href] - If provided, renders as a Link. Otherwise renders as a button.
 * @param {'primary' | 'secondary' | 'outline' | 'dark'} [props.variant='primary'] - Visual style of the button.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Size of the button.
 * @param {string} [props.className] - Additional Tailwind classes.
 * @param {React.ReactNode} props.children - Button content.
 * @returns {JSX.Element}
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold shadow-sm transition';
  
  const variants = {
    primary: 'bg-gradient-to-b from-[#6BFFB1] to-volt text-[#04150C] hover:brightness-110 shadow-volt hover:-translate-y-0.5',
    secondary: 'bg-white text-ink-950 hover:bg-gray-50 hover:-translate-y-0.5 shadow-lg',
    outline: 'bg-transparent border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/10',
    'outline-dark': 'bg-transparent border-2 border-volt-dim text-volt-dim hover:bg-volt-dim hover:text-white',
    dark: 'bg-ink-950 text-white hover:bg-ink-800 hover:-translate-y-0.5 shadow-lg',
    unstyled: ''
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base'
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
