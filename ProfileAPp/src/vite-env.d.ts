/// <reference types="vite/client" />

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

interface Document {
  startViewTransition?: (callback: () => void | Promise<void>) => { finished: Promise<void> };
}
