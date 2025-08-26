import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}
const SectionContainer: React.FC<SectionContainerProps> = ({children, className}) => (
  <section className={`w-full flex px-6 py-2 ${className}`}>
    {children}
  </section>
)

export default SectionContainer;