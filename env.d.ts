interface ImportMetaEnv {
  readonly VITE_APP_GITHUB_TOKEN: string;
  // Poți adăuga și alte variabile aici
  readonly VITE_APP_GITHUB_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
