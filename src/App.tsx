import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app/providers/router/AppRouter';
import { MainLayout } from './app/layouts/MainLayout';
import { store } from 'app/store';
import AuthProvider from './app/providers/auth/AuthProvider';
import ModalContextProvider from './app/providers/modal/modalContext';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AuthProvider>
                    <ModalContextProvider>
                        <MainLayout>
                            <AppRouter />
                        </MainLayout>
                    </ModalContextProvider>
                </AuthProvider>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
