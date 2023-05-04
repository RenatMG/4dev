import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';
import { createId } from '@paralleldrive/cuid2';
import { ACCESS_TOKEN, EXPIRE_TIME } from 'shared/config/auth';
import { useContext } from 'react';
import { Auth } from '../../../shared/interfaces/auth.interface';
import useSession from './hooks/useSession';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../../shared/config/route';

interface ContextProps {
    authorized: boolean;
    user: string;
    signIn: (data: Auth) => string | null;
    signOut: () => void;
}

export const AuthContext = createContext<ContextProps>({} as ContextProps);
export const useAuth = () => useContext(AuthContext);


const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {

    const navigate = useNavigate();
    const [authorized, setAuthorized] = useState(false);
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<string>('');

    const signIn = (data: { login: string, password: string }) => {
        const { login, password } = data;
        if (login === 'admin' && password === 'admin') {
            const fakeToken = window.btoa(login + ':' + createId());
            localStorage.setItem(ACCESS_TOKEN, fakeToken);
            setToken(fakeToken);
            setUser(login);
            return fakeToken;
        }
        return null;
    };

    const signOut = async () => {
        localStorage.removeItem(ACCESS_TOKEN);
        setAuthorized(false);
        setToken('');
        navigate(RoutePath[AppRoutes.MAIN]);
    };

    useSession({
        callback: signOut,
        expireTime: EXPIRE_TIME
    });

    useEffect(() => {
        const accessToken = token || localStorage.getItem(ACCESS_TOKEN);
        setAuthorized(!!accessToken);
        if (accessToken) {
            const user = window.atob(accessToken).split(':')[0];
            if (user) {
                setUser(user);
            }
        }
    }, [token]);

    const context = {
        signIn,
        signOut,
        authorized,
        user,
    };

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

