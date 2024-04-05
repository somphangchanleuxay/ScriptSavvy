import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method to add content to the database
export const putDb = async (content) => {
  const db = await openDB ('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id:1, value:content});
  const result = await request;
  console.log('Content added to the database:', result);
};

// Method to get all content from the database
export const getDb = async () => {
  const contentDb = await openDB('jate', 1);
  const tx = contentDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const response = await request;
  console.log('All content retrieved from the database:',response);
  return response?.value;
};

initdb();
