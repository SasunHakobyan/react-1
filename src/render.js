import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import { addPost, updateNewPostText, updateMessageText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} updateMessageText={updateMessageText} />
    </React.StrictMode>
  );
}