import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to='/'
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Home</NavLink><NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >About</NavLink>
      <NavLink
        to='/login'
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Login</NavLink>
        <NavLink
          to='/signup'
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
          >Sign Up</NavLink>
          <NavLink
            to='/messages'
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
            >Messages</NavLink>
  </div>


const Home = () => <h1>Home</h1>;

const About = () => <h1>About</h1>;

const Login = () =>
    <form>
      <h1>Login</h1>
      <div>
        <input type="text" name="username" placeholder="Username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>

const SignUp = () =>
  <form>
    <h1>Sign Up</h1>
    <div>
      <input type='text' name="email" placeholder='Email' />
      <label htmlFor='email'>Full Name</label>
    </div>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <div>
      <input type="submit" value="Sign Up" />
    </div>
  </form>

const Messages = () => {
  const messagesArray = {
    messages: [{content: "You're doing great in the lab's. Keep it up! You'll have a job in no time!"},
    {content: "Don't worry if you're confused. With some more practice, it will all click."}]
  }

  return (
    <div>
      <h1>Messages</h1>
      <div className='messages'>
        {messagesArray.messages.map((m, i) => <p key={i}>{m.content}</p>)}
      </div>
    </div>
  )
}






const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' render={Home} />
        <Route exact path='/about' render={About} />
        <Route exact path="/login" render={Login} />
        <Route exact path='/signup' render={SignUp} />
        <Route exact path='/messages' render={Messages} />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
