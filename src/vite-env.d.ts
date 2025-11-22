/// <reference types="vite/client" />

// Twitter Widget Types
interface Window {
  twttr?: {
    widgets: {
      load: () => void;
    };
  };
}
