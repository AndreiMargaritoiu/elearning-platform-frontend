/// <reference types="next" />
/// <reference types="next/types/global" />

declare const BASE_URL: string = JSON.stringify(process.env.BASE_URL);
declare const FIREBASE_API_KEY: string = JSON.stringify(
  process.env.FIREBASE_API_KEY,
);
declare const FIREBASE_AUTH_DOMAIN: string = JSON.stringify(
  process.env.FIREBASE_AUTH_DOMAIN,
);
declare const FIREBASE_DATABASE_URL: string = JSON.stringify(
  process.env.FIREBASE_DATABASE_URL,
);
declare const FIREBASE_PROJECT_ID: string = JSON.stringify(
  process.env.FIREBASE_PROJECT_ID,
);
declare const FIREBASE_STORAGE_BUCKET: string = JSON.stringify(
  process.env.FIREBASE_STORAGE_BUCKET,
);
declare const FIREBASE_MESSAGING_SENDER_ID: string = JSON.stringify(
  process.env.FIREBASE_MESSAGING_SENDER_ID,
);
declare const FIREBASE_APP_ID: string = JSON.stringify(
  process.env.FIREBASE_APP_ID,
);
