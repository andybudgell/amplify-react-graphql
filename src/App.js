import logo from './logo.svg';
import { Icon, Menu, Dropdown } from 'semantic-ui-react';

import './App.css';
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function App() {
  return (
    <div className="App">
     <Menu fixed='top' color='blue' inverted>
            <Menu.Menu>
              <Menu.Item header href='/'><Icon name='globe' />Andy's Travel Deals</Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Dropdown item simple text='User Name'>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => alert('Log-out')}><Icon name='power off' />Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
      <h1>Welcome to my rubbish app</h1>
      <li>
      The spinny thing above appearss to be in the App-header class blah
        <MyButton />      
      
      </li>
      
    
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
