import React from 'react';

interface CardContainerProps {
  title: string;
  score: number;
  bookmark: number;
  like: number;
  url: string;
  isLarge?: boolean;
}
const CardContainer: React.FC<CardContainerProps> = ({title, score, bookmark, like, url, isLarge}) => {

  return (
    <article className="aspect-[3/4] w-[12.5rem] bg-black bg-center bg-cover p-3 flex flex-col justify-between rounded-xl flex-none"
             style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${url})`}}>
      <header className="flex flex-col">
        <span className="text-body-lg text-white">{title}</span>
        <span className="text-caption text-secondary">{score}  ·  {"방문객 증가 중"}</span>
      </header>
      <footer className="">
        북마크랑 좋아요 위치
      </footer>
    </article>
  )
}

export default CardContainer;