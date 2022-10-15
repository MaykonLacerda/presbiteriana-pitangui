import { HTMLAttributes, ReactNode } from 'react';

export type MainLayoutProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}

export function MainLayout(props: MainLayoutProps) {
  return (
    <div className="bg-zinc-900 h-screen w-screen" {...props} />
  );
}
