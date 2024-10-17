import React from 'react';
import { cn } from '@lib/utils';

interface Props {
  className?: string;
}

export const Main = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        Hello world!
    </div>
  );
};