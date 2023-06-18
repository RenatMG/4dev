import { FC } from 'react';
import styles from './Tasks.module.scss';
import { Avatar, Button } from 'antd';
import { useAuth } from '../../../app/providers/auth/AuthProvider';
import { useModal } from '../../../app/providers/modal/modalContext';

const TasksHeader: FC = () => {
    const { user, logout } = useAuth();
    const { setContentType } = useModal();
    const createTaskHandler = () => {
        setContentType('CREATE');
    };
    return (
        <div className={styles.header}>
            <Button onClick={createTaskHandler}>Новая задача</Button>
            <div>
                <Button type="link" onClick={logout}>Выйти</Button>
                <Avatar>{user?.id}</Avatar>
            </div>
        </div>
    );
};

export default TasksHeader;
