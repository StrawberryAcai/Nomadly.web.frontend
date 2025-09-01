import React from 'react';
import Image from "next/image";

import Distance from '@public/icons/distance.svg';

const formatDistance = (distance: number): string => {
  if (distance < 1000) {
    return `${distance}m`;
  }
  return `${(distance / 1000).toFixed(1)}km`;
};

interface DistanceContainerProps {
  distance: number;
}
const DistanceContainer: React.FC<DistanceContainerProps> = ({distance}) => {
  return (
    <div className="h-8 flex flex-row gap-1 py-2 items-center">
      <Image src={Distance} alt="Distance icon" />
      <span className="text-caption text-secondary">{formatDistance(distance)}</span>
    </div>
  )
}

export default DistanceContainer;