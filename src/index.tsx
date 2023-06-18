import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import './firebase';

import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<App />);

