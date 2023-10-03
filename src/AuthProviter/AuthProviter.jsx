import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

export default function AuthProviter({children}) {
    const [user , setUser] = useState(null);

    const signInWithGoogle = (provider) =>{
       return signInWithPopup(auth , provider);
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        signInWithGoogle,
        user,
        logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
