import { FC, MutableRefObject } from "react";
import useWebsiteState from "../../state/store";

interface CTAProps {
  innerRef: MutableRefObject<any>;
  onClick?: () => void;
}

const CTA: FC<CTAProps> = ({ innerRef, onClick, ...props }) => {
  const { setHovering } = useWebsiteState();

  return (
    <div
      ref={innerRef}
      className="w-[50px] h-[50px] rounded-full bg-white absolute -translate-x-1/2 -translate-y-full flex items-center justify-center z-[999]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
      {...props}
    >
      <div className="absolute w-[50px] h-[50px] rounded-full bg-white animate-ping delay-1000"></div>
    </div>
  );
};

export default CTA;
