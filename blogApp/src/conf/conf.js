const conf = {
  project_Id: String(import.meta.env.VITE_PROJECT_ID),
  url: String(import.meta.env.VITE_URL),
  database_id: String(import.meta.env.VITE_DATABASE_ID),
  collection_id: String(import.meta.env.VITE_COLLECTION_ID),
  bucket_id: String(import.meta.env.VITE_BUCKET_ID),
};

export default conf;
