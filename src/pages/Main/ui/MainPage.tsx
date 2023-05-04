import { Card } from "antd";
import { LoginForm } from "../../../features/auth";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../../shared/config/route';
import { useAuth } from '../../../app/providers/auth/AuthProvider';


const MainPage = () => {
    const { authorized } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (authorized) {
            navigate(RoutePath[AppRoutes.TASKS]);
        }
    }, [authorized, navigate]);

    return (
            <Card title="Авторизация" bordered={false} style={{ width: 300 }}>
                <LoginForm />
            </Card>
    );
};

export default MainPage;
