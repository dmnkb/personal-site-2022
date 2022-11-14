const isSSR = () =>
  typeof window === "undefined" || typeof window.navigator === "undefined";
export default isSSR;
