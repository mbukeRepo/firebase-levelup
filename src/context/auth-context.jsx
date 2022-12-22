import { onAuthStateChanged } from "firebase/auth";
import { useCallback, useState } from "react";
import { useContext } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { auth } from "../utils/firebase";
import { signInGoogle, signOutUser } from "../utils/services";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const authUnSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          photoURL: user.photoURL,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
        setIsAuthenticated(true);
      }
    });
    return () => authUnSubscribe();
  }, []);
  const signIn = useCallback(async () => {
    const { photoURL, displayName, email, uid } = await signInGoogle();
    setUser({ photoURL, displayName, email, uid });
    setIsAuthenticated(true);
  }, []);
  const signOut = useCallback(async () => {
    setUser(null);
    await signOutUser();
    setIsAuthenticated(false);
  }, []);
  const value = useMemo(
    () => ({ user, signIn, signOut, isAuthenticated }),
    [user, isAuthenticated]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("Hahahaha! You forgot to use AuthProvider motherfocker");
  return context;
};

export { useAuth, AuthProvider };
