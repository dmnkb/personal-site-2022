import { FC, Suspense } from "react";
import DominoCanvas from "./DominoCanvas";

const Hero: FC = () => (
  <header className="h-screen w-full bg-background">
    <aside className="absolute w-full h-full">
      <Suspense>
        <DominoCanvas />
      </Suspense>
    </aside>
  </header>
);

export default Hero;
