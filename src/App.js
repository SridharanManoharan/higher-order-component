import React from 'react';
import './App.scss';
import UserProfile from './components/user-profile/user-profile.component.jsx'

function App() {
  return (
    <div className="App">
      <UserProfile
        name='Yihua'
        email='yihuazhang@gmail.com'
        dataSource='https://jsonplaceholder.typicode.com/posts'
      />
    </div>
  );
}

export default App;
