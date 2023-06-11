import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const GoogleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [toggle,setToggle]=useState(false);



    const createUser = (email, password) => {

        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    };


    const login = (email, password) => {

        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)

    };

    const googleLogin = () => {

        setLoading(true)

        return signInWithPopup(auth, GoogleProvider)
    }

    const logOut = () => {

        setLoading(true)

        return signOut(auth)

    };


    const updateUserProfile = (name, photo) => {


        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }


    useEffect(() => {


        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {


            setUser(currentUser);

            console.log(currentUser)


            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {



                        localStorage.setItem('jwt-token', data.data)

                        console.log(data.data)

                        setLoading(false)


                    })



            }
            else { localStorage.removeItem('jwt-token') }




        });



        return () => {

            return unSubscribe();
        }



    }, []);



    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile,
        googleLogin,
        toggle,
        setToggle
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;