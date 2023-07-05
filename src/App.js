
import { Icon, Menu, Dropdown } from 'semantic-ui-react';
import React, {useState, useEffect} from 'react';
import './App.css';


function MyButton() {
  return (
    <button>Get Data</button>
  );
}
function DeleteButton() {
  return (
    <button>Delete</button>
  );
}
function App() {
  const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      //fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      fetch('arn:aws:lambda:eu-west-2:897016508630:function:ff3-submit-fp')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
        
  return (
    <div className="App">
     <Menu fixed='top' color='blue' inverted>
            <Menu.Menu>
              <Menu.Item header href='/'><Icon name='globe' />Andy's AmplifyApp Deals</Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Dropdown item simple text='abudgell'>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => alert('Log-out')}><Icon name='power off' />Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
      
      
      <h1>Welcome to my rubbish app</h1>
  
      
        <MyButton />      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React For James
        </a>
         <div>
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 align="left" className="post-title">{post.title}</h2>
               <p align="left">{post.body}</p>
               <DeleteButton/> 
            </div>
         );
      })}
   </div>
    </div>
  );
}

export default App;
