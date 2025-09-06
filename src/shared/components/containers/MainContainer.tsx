import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}
const MainContainer: React.FC<MainContainerProps> = ({children, className}) => (
  <main className={`w-full flex flex-col py-4 gap-4 overflow-y-auto ${className}`}>
    {children}
  </main>
)

export default MainContainer;