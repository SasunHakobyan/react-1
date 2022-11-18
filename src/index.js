import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import StoreContext from "./StoreContext";
import Provider from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(<React.StrictMode>
        <Provider store={store}>
            <App state={store.getState()} />
        </Provider>
    </React.StrictMode>);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();