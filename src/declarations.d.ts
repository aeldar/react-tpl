declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: { [key: string]: any };
  export default content;
}

declare interface Window {
  readonly env?: { readonly [key: string]: number|string|boolean };
}

