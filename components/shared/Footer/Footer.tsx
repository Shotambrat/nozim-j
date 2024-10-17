import React from 'react';
import { cn } from '@lib/utils';

interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        Footer
    </div>
  );
};