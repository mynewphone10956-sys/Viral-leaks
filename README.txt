VERCEL HOSTING SETUP

1. Extract this ZIP.
2. Upload the extracted folder to a new GitHub repository.
3. Open Vercel, choose Add New > Project, and import the repository.
4. In the Vercel project, open Storage and create/connect a Blob store.
5. In Settings > Environment Variables add:
   ADMIN_PASSWORD = your chosen admin password
6. Redeploy the project.

Landing page: your-vercel-domain.vercel.app
Admin panel: your-vercel-domain.vercel.app/admin

From the admin panel you can directly upload/replace the APK, four video clips,
poster images, headings, descriptions, titles, quality, and duration.

The Blob store automatically provides BLOB_READ_WRITE_TOKEN to the project.

