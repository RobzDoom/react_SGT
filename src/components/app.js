import React from 'react';
import Header from './header.js'
import StudentList from './student_list.js'
import AddingStudent from './adding_student.js'

import styles from '../style/styles.css';


const App = () => (
    <div className={styles.app}>
        <h1>Welcome to React!</h1>
        <Header />
        <StudentList />
        <AddingStudent />
    </div>
);

export default App;


