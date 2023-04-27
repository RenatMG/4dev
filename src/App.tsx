import AppRouter from './app/providers/router/AppRouter';
import { MainLayout } from './app/layouts/MainLayout';

function App() {
    return (
        <MainLayout>
            <AppRouter />
        </MainLayout>
    );
}

export default App;
