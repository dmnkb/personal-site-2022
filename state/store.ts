import create from "zustand";

interface WebsiteState {
  hovering: boolean;
  setHovering: (hovering: boolean) => void;
}

const useWebsiteStore = create<WebsiteState>((set) => ({
  hovering: false,
  setHovering: (hovering) => set(() => ({ hovering })),
}));

export default useWebsiteStore;
