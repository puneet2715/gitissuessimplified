/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_GITHUB_TOKEN: string //VITE_ is for making the key accessible to the browser
}

interface ImportMeta {
    env: ImportMetaEnv
}