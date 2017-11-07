declare module '*.svg' {
  const content: string;
  export default content;
}

declare interface Window {
  readonly env?: { readonly [key: string]: number|string|boolean };
}

