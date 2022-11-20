import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(<React.StrictMode>
        <Provider store={store}>
            <App state={state} />
        </Provider>
    </React.StrictMode>);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();