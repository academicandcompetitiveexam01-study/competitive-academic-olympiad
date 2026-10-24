// Add the Firebase Web App configuration from Firebase Console > Project settings > Your apps.
// This configuration is intended to be public; never put service-account keys or private API secrets here.
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_FIREBASE_WEB_API_KEY_HERE",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://competitive-academic-olympiad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "competitive-academic-olympiad",
  appId: "PASTE_FIREBASE_APP_ID_HERE"
};

// Used only to hide admin UI for non-admin users. Database rules MUST enforce this UID too.
window.ADMIN_UID = "PASTE_YOUR_FIREBASE_AUTH_USER_UID_HERE";
