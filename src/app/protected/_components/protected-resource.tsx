"use client";

import FerrisHappySvg from "@/images/ferris-happy";
import { cn } from "@/lib/utils";

import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

interface ProtectedResourceProps {
  className?: string;
}
const ProtectedResource = ({ className }: ProtectedResourceProps) => {
  return (
    <div className={cn(className)}>
      <Fireworks autorun={{ speed: 3, duration: 2500 }} />
      <FerrisHappySvg />
    </div>
  );
};

export default ProtectedResource;
