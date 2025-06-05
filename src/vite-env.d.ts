/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent;
  export default component;
}

type ImportMetaEnv = {
  readonly VITE_API_URL: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
