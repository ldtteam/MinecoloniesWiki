declare module 'gl' {
  function createContext(
    width: number,
    height: number,
    options?: {
      alpha?: boolean;
      depth?: boolean;
      stencil?: boolean;
      antialias?: boolean;
      premultipliedAlpha?: boolean;
      preserveDrawingBuffer?: boolean;
      preferLowPowerToHighPerformance?: boolean;
      failIfMajorPerformanceCaveat?: boolean;
      createWebGL2Context?: boolean;
    }
  ): WebGLRenderingContext;

  export default createContext;
}
