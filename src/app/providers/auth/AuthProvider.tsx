import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { EXPIRE_TIME } from 'shared/config/auth';
import { useContext } from 'react';
import { Auth } from '../../../shared/interfaces/auth.interface';
import useSession from './hooks/useSession';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../../shared/config/route';

import { User } from '../../../shared/interfaces/user.interface';

interface ContextProps {
    authenticated: boolean;
    user: User | null;
    error: string;
    login: (data: Auth) => void;
    logout: () => void;
    setError: (error: string) => void;
}

export const AuthContext = createContext<ContextProps>({} as ContextProps);
export const useAuth = () => useContext(AuthContext);
const auth = getAuth();


const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string>('');

    const login = ({ email, password }: { email: string, password: string }) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser({
                    id: user.uid,
                    email: user.email,
                });
            })
            .catch(() => {
                setError('Неверный логин или пароль!');
            });
    };

    const logout = async () => {
        signOut(auth).then(() => {
            console.log('Sign-out successful');
            navigate(RoutePath[AppRoutes.MAIN]);
        }).catch((error) => {
            console.log('Sign-out error: ' + error.message());
        });
    };

    useSession({
        callback: logout,
        expireTime: EXPIRE_TIME
    });

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    id: user.uid,
                    email: user.email,
                });
            } else {
                setUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);

    const context = {
        login,
        logout,
        user,
        error,
        setError,
        authenticated: !!user?.email,
    };

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

