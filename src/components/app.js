import React from 'react';
import Header from './header.js'
import StudentList from './student_list.js'
import AddingStudent from '../containers/adding_student.js'

import styles from '../style/styles.css';



const App = () => (
    <div className={styles.app}>
        <Header />
        <StudentList />
        <AddingStudent />
    </div>
);

export default App;


