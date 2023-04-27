import { Suspense } from "react";
import AppRouter from './app/providers/router/AppRouter';

function App() {
    return (
        <Suspense fallback="">

            <div className="content-page">

                <AppRouter />
            </div>
        </Suspense>
    );
}

export default App;
