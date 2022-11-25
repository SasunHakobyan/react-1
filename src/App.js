import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <div className='app-wrapper'>
                <Navbar state={props.state.navbar} />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer/>}/>bn
                        <Route path='/profile/:userId'
                               element={<ProfileContainer />}/>
                        <Route path='/users'
                               element={<UsersContainer />}/>

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;