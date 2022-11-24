import clsx from "clsx";
import { FC, MutableRefObject, useState } from "react";
import useWebsiteState from "../../state/store";

interface CTAProps {
  innerRef: MutableRefObject<any>;
  onClick?: () => void;
}

const CTA: FC<CTAProps> = ({ innerRef, onClick, ...props }) => {
  const [visible, setVisible] = useState(true);
  const { setHovering } = useWebsiteState();

  return (
    <div
      ref={innerRef}
      className={clsx(
        "w-[80px] h-[80px] absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[8]",
        visible ? null : "hidden"
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => {
        if (onClick !== undefined) {
          onClick();
        }
        setVisible(false);
      }}
      {...props}
    >
      <div
        className="absolute w-[80px] h-[80px] rounded-full animate-ping border-white border-2"
        style={{
          animationDuration: "2s",
        }} /* override tailwind's default animation speed without extra config */
      ></div>
    </div>
  );
};

export default CTA;
