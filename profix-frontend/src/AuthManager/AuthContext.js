import React, { useEffect, createContext ,useState} from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase'

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setCurrentUser(user);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const gAuth = () => {
        return signInWithPopup(auth, provider)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

  return (
    <AuthContext.Provider value={{currentUser, createUser, gAuth, logOut, signIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;