import React from 'react';
import CardContainer from "@/shared/components/containers/CardContainer";
import {LocationResponse} from "@/features/explore/api/dto";

interface MiniSuggestListProps {
  title: string;
  //data: LocationResponse
}
const MiniSuggestList: React.FC<MiniSuggestListProps> = ({title}) => {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="px-4">{title}</h3>
      <div className="flex flex-nowrap overflow-x-auto gap-3 px-4">
        <CardContainer title={"초원"} score={4.9} bookmark={1200} distance={12302} isBookmark={false} url={"https://i.namu.wiki/i/x-TYMKHuloRIDpzRQD2hWz9WUxq0vq8-D59I_lsTRYAVl8js-0zNVPDFLAB6wa-DqpBbnz4NXRsml2YciyVjmPePN5xyvn2NUxh-_m1H9mdcfPbrtss8iBwNLw6zEu7hTvNCZlzPGRghevoPj_zF8g.webp"} />
        <CardContainer title={"초원"} score={4.9} bookmark={1200} distance={12302} isBookmark={false} url={"https://i.namu.wiki/i/x-TYMKHuloRIDpzRQD2hWz9WUxq0vq8-D59I_lsTRYAVl8js-0zNVPDFLAB6wa-DqpBbnz4NXRsml2YciyVjmPePN5xyvn2NUxh-_m1H9mdcfPbrtss8iBwNLw6zEu7hTvNCZlzPGRghevoPj_zF8g.webp"} />
        <CardContainer title={"초원"} score={4.9} bookmark={1200} distance={12302} isBookmark={true} url={"https://i.namu.wiki/i/x-TYMKHuloRIDpzRQD2hWz9WUxq0vq8-D59I_lsTRYAVl8js-0zNVPDFLAB6wa-DqpBbnz4NXRsml2YciyVjmPePN5xyvn2NUxh-_m1H9mdcfPbrtss8iBwNLw6zEu7hTvNCZlzPGRghevoPj_zF8g.webp"} />
      </div>
    </section>
  )
}

export default MiniSuggestList;