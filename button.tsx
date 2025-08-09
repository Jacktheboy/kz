import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeMap = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-5 py-2.5 text-base'
};

export function Button({ variant='default', size='md', className='', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition';
  const styles = variant === 'outline'
    ? 'border border-zinc-300 bg-transparent hover:bg-zinc-100'
    : 'bg-zinc-900 text-white hover:bg-zinc-800';
  const sz = sizeMap[size];
  return <button className={`${base} ${styles} ${sz} ${className}`} {...props} />;
}
