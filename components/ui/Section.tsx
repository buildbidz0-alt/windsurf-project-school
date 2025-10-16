import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  background?: 'white' | 'cream' | 'slate' | 'primary' | 'none';
  container?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    padding = 'lg', 
    background = 'none',
    container = true,
    containerSize = 'xl',
    children, 
    ...props 
  }, ref) => {
    const paddings = {
      none: '',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16 lg:py-24',
      xl: 'py-20 lg:py-32',
    };

    const backgrounds = {
      none: '',
      white: 'bg-white',
      cream: 'bg-cream',
      slate: 'bg-slate-50',
      primary: 'bg-primary-800 text-white',
    };

    const content = container ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        className={cn(
          paddings[padding],
          backgrounds[background],
          className
        )}
        {...props}
      >
        {content}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
