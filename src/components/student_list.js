import React, {Component} from 'react';
import database from '../database/firebase.js';

export default class StudentList extends Component {
constructor(){
        super();
        this.state = {
            listOfStudents: {}
        }
        
    }
//-------------------------------------Grabbing information from FireBase --------------------------        
componentDidMount (){
    database.ref('students').on('value', snapshot =>{
            this.setState({
                listOfStudents: snapshot.val()
            })
            console.log(this.state.listOfStudents)
        })
    }


    render(){
        return(
            <div className="student-list-container col-sm-8 col-xs-12">
        <table className="student-list table table-condensed table-striped">
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Student ID</th>
                    <th>Student Course</th>
                    <th>Student Grade</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                This is where the list is suppose to go. 
            </tbody>
        </table>
    </div>
        )
    }
}