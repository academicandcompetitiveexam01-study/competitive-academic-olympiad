SCHOOL ACADEMIC SECTION UPDATE
================================

This update adds a class -> subject -> chapter browsing page backed by your existing
Firebase Realtime Database publishedMaterials path and Google Drive PDF links.

FILES
-----
index.html     Updated existing homepage links to open School Academic.
school.html    New class/subject/chapter browsing page.
materials.html Existing public materials library (included for convenience, unchanged).
README.txt     Installation instructions.

INSTALL
-------
1. Download and extract this ZIP.
2. Open your GitHub repository:
   https://github.com/academicandcompetitiveexam01-study/competitive-academic-olympiad
3. Upload index.html, school.html, and materials.html to the repository root.
4. If GitHub asks whether to replace index.html or materials.html, review the files.
   index.html is updated; materials.html is included unchanged.
5. Do NOT replace firebase-config.js, admin.html, or README-SETUP.txt.
6. Wait for GitHub Pages to deploy, then press Ctrl+F5 on the homepage.
7. Click School Learning or Explore school resources. The new page reads only
   publishedMaterials; drafts remain private to the administrator.

IMPORTANT
---------
- Keep your current Firebase database rules unchanged.
- The page does not upload files to Drive; it displays PDF links already registered
  and published through your admin panel.
- Only materials that exist in publishedMaterials can appear. If a class has no
  published items yet, the page will show a helpful empty-state message.
- Your separate Live Quiz Competition website is not modified.
