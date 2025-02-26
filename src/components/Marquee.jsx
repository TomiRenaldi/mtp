import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const lowerMarquee = [
    "/bnilogo.png",
    "/brilogo.png",
    "/amarlogo.png",
    "/dbslogo.png",
    "/hcilogo.png",
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={lowerMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;