import { useAuth } from 'app/providers/auth/AuthProvider';
import { Button, Input } from 'antd';
import { FC, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import { Controller, useForm } from 'react-hook-form';

const LoginForm: FC = () => {

    const { login, error, setError } = useAuth();
    const { control, handleSubmit, watch } = useForm();

    const onSubmit = (data: any) => {
        login(data);
    };

    useEffect(() => {
        watch(() => {
            if (!!error) {
                setError('');
            }
        });
    }, [error, setError, watch]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
        >
            {error && <span className={styles.error}>{error}</span>}
            <div className={styles.hidden}>
                <input type="text" autoComplete="new-password" />
                <input type="password" autoComplete="new-password" />
            </div>
            <div className={styles.group}>
                <strong>Логин</strong>
                <Controller
                    render={({ field }) => <Input {...field} />}
                    name="email"
                    control={control}
                    rules={{ required: true }}
                />
            </div>
            <div className={styles.group}>
                <strong>Пароль</strong>
                <Controller
                    render={({ field }) => <Input.Password {...field} type="password" />}
                    name="password"
                    control={control}
                    rules={{ required: true }}
                />
            </div>
            <Button type="primary" htmlType="submit">
                Войти
            </Button>
        </form>
    );
};

export default LoginForm;
