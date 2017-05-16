import React, {Component} from 'react';
import StudentList from './student_list.js'
import database from '../database/firebase.js'

export default class IndividualStudent extends Component {
    constructor(props){
        super(props)
            this.state={
               edit: false,
               name: this.props.name,
               course: this.props.course,
               grade: this.props.grade

            }       
    }
    editStudent(){
        this.setState({
            edit: true
        })
        console.log('Edit Student is', this.state.edit)
    }

//------------------------------------- Function to edit and change Student Information ---------------
    changeInformation (event, inputField){
            this.setState({
                [inputField]: event.target.value
            })
    }
//--------------------------------------Render this if user wants to make an edit. ----------------------------2

   render(){
       const {name, course, grade, edit} = this.state;
       // This it the equivalent to this.state.name in ES6
       if (edit){
           return (
                <tbody>
               <tr>
               <td><input className="form-control" type="text" value={name} onChange={(event) => this.changeInformation(event, 'name')}/></td>
                <td><input className="form-control" type="text" value={course} onChange={(event) => this.changeInformation(event, 'course')}/></td>
                <td><input className="form-control" type="number" value={grade} onChange={(event) => this.changeInformation(event, 'grade')}/></td>
        <td>
            <button type="button" className="btn btn-default btn-md"><span className="glyphicon glyphicon-pencil"></span></button>
            <button type="button" className="btn btn-danger btn-md" onClick= {this.props.remove}><span className="glyphicon glyphicon-trash"></span></button>
        </td>
               </tr>
           </tbody> 
           )
       }
//--------------------------------------Render this if nothing is being edited ----------------------
       return (    
           <tbody>
               <tr>
                <td>{this.props.name}</td>
                <td>{this.props.course}</td>
                <td>{this.props.grade}</td>
        <td>
            <button type="button" className="btn btn-default btn-md" onClick= {() => this.editStudent()}><span className="glyphicon glyphicon-pencil"></span></button>
            <button type="button" className="btn btn-danger btn-md" onClick= {this.props.remove}><span className="glyphicon glyphicon-trash"></span></button>
        </td>
               </tr>
           </tbody> 
       )
   }
}