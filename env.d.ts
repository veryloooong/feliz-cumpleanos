interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}