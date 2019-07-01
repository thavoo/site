import React from 'react';
import './App.css';

import { Layout, Content, Header, Navigation, Drawer } from 'react-mdl';

import Main from './components/Main';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="My Portfolio" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content">
                <Main />
              </div>  
          </Content>
      </Layout>
  </div>
  );
}

export default App;
