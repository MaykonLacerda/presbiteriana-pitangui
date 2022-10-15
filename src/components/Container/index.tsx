import { ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="flex justify-center w-screen">
      <div className="container">
        {children}
      </div>
    </div>
  );
}
