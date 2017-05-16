import React, {Component} from 'react';
import database from '../database/firebase.js';
import IndividualStudent from './individual_students.js'

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
        })
    }
// -------------------------------Remove Student ------------------------------------
  removeStudent (key){
        const studentInfo = database.ref('students')
        studentInfo.child(key).remove();    
    }
    
//-----------------------------------Render Students from FireBase ----------------------------
    renderStudents (){
        const {listOfStudents} = this.state;

        if(!listOfStudents){
            return <tbody>
                        <tr><td>There are no current students</td></tr>
                   </tbody>
        }        

        return Object.keys(listOfStudents).map(key => {
            const ID = listOfStudents[key]
            
            return (
            <IndividualStudent key={key} grade = {ID.grade} course= {ID.course} name= {ID.name} id = {ID} remove= {() => this.removeStudent(key)}/>
            )

        })

    }

    render(){
        return(
            <div className="student-list-container col-sm-8 col-xs-12">
        <table className="student-list table table-condensed table-striped">
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Student Course</th>
                    <th>Student Grade</th>
                    <th>Operations</th>
                </tr>
            </thead>          
               {this.renderStudents()} 
        </table>
    </div>
        )
    }
}