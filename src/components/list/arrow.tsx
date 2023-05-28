import Image from "next/image";
import React, { FunctionComponent } from "react";

interface ArrowProps {
  className?: string;
  icon: string;
  enabled?: boolean;
}

const Arrow: FunctionComponent<ArrowProps> = ({
  className,
  icon,
  enabled = true,
}) => {
  return (
    <div className={`arrow ${className} ${enabled ? "" : "disabled"}`}>
      <Image src={icon} width={16} height={16} alt="arrow" />
    </div>
  );
};

export default Arrow;
