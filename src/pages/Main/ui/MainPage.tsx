import { Card } from "antd";
import { LoginForm } from "../../../features/auth";
import styles from './MainPage.module.scss';

const MainPage = () => {

    return (
        <div className={styles.page}>
            <Card title="Авторизация" bordered={false} style={{ width: 300 }}>
                <LoginForm />
            </Card>
        </div>
    );
};

export default MainPage;
