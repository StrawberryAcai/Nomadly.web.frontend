import React from 'react';

interface CardContainerProps {
  title: string;
  score: number;
  bookmark: number;
  like: number;
  isLarge?: boolean;
}
const CardContainer: React.FC<CardContainerProps> = ({isLarge}) => {

  return (
    <article>

    </article>
  )
}

export default CardContainer;