import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

window.store = store;

root.render(<React.StrictMode>
    <Provider store={store}>
        <App state={store.getState()}/>
    </Provider>
</React.StrictMode>);

reportWebVitals();
