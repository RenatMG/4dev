import { FC } from 'react';
import styles from './Tasks.module.scss';
import { Avatar, Button } from 'antd';
import { useAuth } from '../../../app/providers/auth/AuthProvider';
import { useModal } from '../../../app/providers/modal/modalContext';

const TasksHeader: FC = () => {
    const { user, signOut } = useAuth();
    const { setContentType } = useModal();
    const createTaskHandler = () => {
        setContentType('CREATE');
    };
    return (
        <div className={styles.header}>
            <Button onClick={createTaskHandler}>Новая задача</Button>
            <div>
                <Button type="link" onClick={signOut}>Выйти</Button>
                <Avatar>{user}</Avatar>
            </div>
        </div>
    );
};

export default TasksHeader;
