import FerrisHappySvg from "@/images/ferris-happy";
import { cn } from "@/lib/utils";
import React from "react";

interface ProtectedResourceProps {
  className?: string;
}
const ProtectedResource = ({ className }: ProtectedResourceProps) => {
  return (
    <div className={cn(className)}>
      <FerrisHappySvg />
    </div>
  );
};

export default ProtectedResource;
