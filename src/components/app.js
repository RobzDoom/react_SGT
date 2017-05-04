import React from 'react';
import Header from './header.js'
import styles from './app.css';

const App = () => (
    <div className={styles.app}>
        <h1>Welcome to React!</h1>
        <Header />
    </div>
);

export default App;