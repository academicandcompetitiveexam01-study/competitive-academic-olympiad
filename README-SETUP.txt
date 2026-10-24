COMPETITIVE EXAM, ACADEMIC & OLYMPIAD — SITE PACKAGE
====================================================

FILES
-----
admin.html             Admin sign-in and study-material management.
materials.html         Public library of published study materials.
firebase-config.js     Firebase web configuration placeholders.
README-SETUP.txt       Setup steps and secure database rules.

IMPORTANT PRESERVATION NOTE
---------------------------
This safe package deliberately does NOT include index.html. That avoids overwriting
your existing working homepage. Upload these four files to the ROOT of your academic
repository and leave your current index.html untouched.

IMPORTANT
---------
1. This package does NOT contain your Firebase password, UID, API secrets or private keys.
2. Do not upload a service-account JSON file or any private key to GitHub.
3. The Firebase Web App config (apiKey, authDomain, databaseURL, projectId, appId) is used in browser apps. It is not a service-account secret. Database rules must provide the actual security.
4. Admin page checks the administrator UID in the browser for user experience only. The Realtime Database rules below are the real security boundary.
5. Google Drive PDFs must be shared individually as "Anyone with the link — Viewer" if you want public students to access them. Anyone who obtains such a link may open that PDF. Keep unpublished PDFs restricted.
6. The site registers Drive links; it does not upload the PDF bytes to Drive automatically.
7. Keep your existing Live Quiz Competition website separate. Do not upload this package to that repository.
8. Existing GitHub Pages homepage design is retained. Still, compare the bundled index.html to your current live file before overwriting, if you have made any changes since the package was prepared.

STEP 1 — CONFIGURE FIREBASE WEB APP
-----------------------------------
A. Firebase Console > Project settings (gear) > General.
B. Under "Your apps", create a Web app if one does not exist. Register it with a name such as "Academic Website".
C. Copy the Firebase web config values into firebase-config.js:
   apiKey
   authDomain
   databaseURL
   projectId
   appId
D. Open Authentication > Users and copy your administrator's User UID.
E. Put that UID into ADMIN_UID in firebase-config.js.
F. Do not put your password in any file.

STEP 2 — SECURE REALTIME DATABASE RULES
---------------------------------------
Before publishing these rules, replace ADMIN_UID_HERE with your exact administrator UID.
Do not paste your UID into chat. Paste the final rules into Realtime Database > Rules and click Publish.

{
  "rules": {
    "publishedMaterials": {
      ".read": true,
      "$materialId": {
        ".write": "auth != null && auth.uid === 'ADMIN_UID_HERE'"
      }
    },
    "studyMaterials": {
      ".read": "auth != null && auth.uid === 'ADMIN_UID_HERE'",
      ".write": "auth != null && auth.uid === 'ADMIN_UID_HERE'"
    }
  }
}

These rules intentionally allow anyone to READ the public publishedMaterials branch, but only the configured administrator to WRITE it. The private studyMaterials branch is admin-only. All other database paths are denied by default because no permission is granted there.
Do not add a root-level ".read": false or ".write": false alongside these child rules; Firebase rules cascade and a parent false would block the intended child permissions.

STEP 3 — UPLOAD FILES TO GITHUB
-------------------------------
1. Download/keep a backup of your current repository before replacing files.
2. In your academic repository only:
   https://github.com/academicandcompetitiveexam01-study/competitive-academic-olympiad
   Upload these files to the repository root:
   admin.html
   materials.html
   firebase-config.js
   README-SETUP.txt
3. Do NOT delete or replace your existing index.html. This package intentionally excludes it.
4. Commit the changes. GitHub Pages will publish them.

STEP 4 — TEST
-------------
1. Visit https://academicandcompetitiveexam01-study.github.io/competitive-academic-olympiad/admin.html
2. Sign in with the Firebase administrator email/password.
3. Add a test material with a Google Drive PDF link and save as draft.
4. Click Publish. Check the public library:
   https://academicandcompetitiveexam01-study.github.io/competitive-academic-olympiad/materials.html
5. Test with a signed-out browser: published materials should load; drafts must not be exposed.

TROUBLESHOOTING
---------------
- "Permission denied": check that the UID in firebase-config.js exactly matches the UID in the rules, and that the rules were published.
- Sign-in errors: verify Email/Password provider is enabled in Firebase Authentication.
- Empty public library: ensure the material was published and the publishedMaterials record exists.
- Google Drive asks for access: change sharing on that individual PDF to "Anyone with the link — Viewer", if your account allows it.
- The admin page is not a replacement for secure rules. Never loosen the rules to "read": true and "write": true for the whole database.
