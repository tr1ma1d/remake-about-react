import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './main_block/Header';
import Content from './main_block/Content';
import Footer from './main_block/Footer';
// Импортируйте другие компоненты и маршруты здесь

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
