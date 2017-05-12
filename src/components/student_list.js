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
            // console.log(this.state.listOfStudents)
        })
    }
//-----------------------------------Render Students from React ----------------------------
    renderStudents (){
        const {listOfStudents} = this.state;

        if(!listOfStudents){
            return <tr><td>There are no current students</td></tr>
        }

        return Object.keys(listOfStudents).map(key => {
            const ID = listOfStudents[key]
            console.log(ID)
            return (
            <IndividualStudent key={key} grade = {ID.grade} course= {ID.course} name= {ID.name} />
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