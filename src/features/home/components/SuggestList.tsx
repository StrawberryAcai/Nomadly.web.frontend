import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import CardContainer from "@/shared/components/containers/CardContainer";

const SuggestList: React.FC = () => {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="px-6">🍀 이번 여행은 여기 어때요?</h3>
      <div className="flex flex-nowrap overflow-x-auto gap-8 px-6">
        <CardContainer title={"초원"} score={4.9} bookmark={1200} like={12302} url={"https://i.namu.wiki/i/x-TYMKHuloRIDpzRQD2hWz9WUxq0vq8-D59I_lsTRYAVl8js-0zNVPDFLAB6wa-DqpBbnz4NXRsml2YciyVjmPePN5xyvn2NUxh-_m1H9mdcfPbrtss8iBwNLw6zEu7hTvNCZlzPGRghevoPj_zF8g.webp"} />
        <CardContainer title={"초원"} score={4.9} bookmark={1200} like={12302} url={"https://i.namu.wiki/i/x-TYMKHuloRIDpzRQD2hWz9WUxq0vq8-D59I_lsTRYAVl8js-0zNVPDFLAB6wa-DqpBbnz4NXRsml2YciyVjmPePN5xyvn2NUxh-_m1H9mdcfPbrtss8iBwNLw6zEu7hTvNCZlzPGRghevoPj_zF8g.webp"} />
        <CardContainer title={"초원"} score={4.9} bookmark={1200} like={12302} url={"https://i.namu.wiki/i/x-TYMKHuloRIDpzRQD2hWz9WUxq0vq8-D59I_lsTRYAVl8js-0zNVPDFLAB6wa-DqpBbnz4NXRsml2YciyVjmPePN5xyvn2NUxh-_m1H9mdcfPbrtss8iBwNLw6zEu7hTvNCZlzPGRghevoPj_zF8g.webp"} />
      </div>
    </section>
  )
}

export default SuggestList;