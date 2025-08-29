import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}
const SectionContainer: React.FC<SectionContainerProps> = ({children, className}) => (
  <section className={`w-full flex px-4 py-2 ${className}`}>
    {children}
  </section>
)

export default SectionContainer;