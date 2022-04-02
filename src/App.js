import { Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path="friends" element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
