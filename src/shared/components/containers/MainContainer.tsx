import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}
const MainContainer: React.FC<MainContainerProps> = ({children, className}) => (
  <main className={`h-full w-full flex flex-col py-4 gap-4 ${className}`}>
    {children}
  </main>
)

export default MainContainer;