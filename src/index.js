import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(<React.StrictMode>
        <StoreContext.Provider value={store}>
            <App state={state} />
        </StoreContext.Provider>;
    </React.StrictMode>);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();