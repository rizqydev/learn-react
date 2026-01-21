// create type for above props!
import { ReactNode } from 'react';

// create type for above props!
type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>Header</header>
      <main className='py-4'>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}