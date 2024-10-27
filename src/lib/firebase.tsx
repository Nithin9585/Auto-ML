import { getStorage, ref, uploadBytes,getDownloadURL,listAll } from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage(app);
const auth = getAuth(app);

export const uploadCSVToFirebase = async (file: File, userId: string): Promise<void> => {
  try {
    const storageRef = ref(storage, `csv-files/${userId}/${file.name}`);
    await uploadBytes(storageRef, file);
    console.log("File uploaded to Firebase Storage");
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
export const listUserFilesFromFirebase = async (userId: string) => {
  const storageRef = ref(storage, `csv-files/${userId}`);
  const fileList = await listAll(storageRef);

  const fileUrls = await Promise.all(
      fileList.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return { name: item.name, url }; // Store the name and URL of each file
      })
  );

  return fileUrls;
};

export { app, auth, storage };
