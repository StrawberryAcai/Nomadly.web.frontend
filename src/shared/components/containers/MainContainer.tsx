import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}
const MainContainer: React.FC<MainContainerProps> = ({children}) => (
  <main className="h-full w-full flex flex-col py-4 gap-4">
    {children}
  </main>
)

export default MainContainer;