import React from 'react';
import Tabs from './Tabs.jsx';
import Topics from './Topics.jsx';
import Archives from './Archives.jsx';
import Pages from './Pages.jsx';
import '../../css/main.css';

const Main = () => (
  <div className="main">
    <header className="heading">
      <h1>Browse Site</h1>
      <h3>SELECT A TAB</h3>
    </header>
    <main className="content">
      <Tabs>
        <Topics />
        <Archives />
        <Pages />
      </Tabs>
    </main>
  </div>
);

export default Main;
