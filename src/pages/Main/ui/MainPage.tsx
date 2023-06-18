import { Card } from "antd";
import { LoginForm } from "../../../features/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../app/providers/auth/AuthProvider';
import { AppRoutes, RoutePath } from '../../../shared/config/route';


const MainPage = () => {
    const { authenticated } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (authenticated) {
            navigate(RoutePath[AppRoutes.TASKS]);
        }
    }, [authenticated, navigate]);

    return (
        <Card title="Авторизация" bordered={false} style={{ width: 300 }}>
            <LoginForm />
        </Card>
    );
};

export default MainPage;
