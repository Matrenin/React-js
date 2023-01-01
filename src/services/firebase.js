import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCjF5SwgeWzLUVv_8BHDF7B84XSxEwWhlM",
  authDomain: "gb-chats-28e55.firebaseapp.com",
  projectId: "gb-chats-28e55",
  storageBucket: "gb-chats-28e55.appspot.com",
  messagingSenderId: "589885174794",
  appId: "1:589885174794:web:51b07563fa659df2a11bf3"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)
export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)