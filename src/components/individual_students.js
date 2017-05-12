import React, {Component} from 'react';
import StudentList from './student_list.js'
import database from '../database/firebase.js'

export default class IndividualStudent extends Component {
    constructor(props) {
    super(props);
    
    }

   render(){
       return (
           <tbody>
               <tr>
                <td>{this.props.name}</td>
                <td>{this.props.course}</td>
                <td>{this.props.grade}</td>
        <td>
            <button type="button" className="btn btn-default btn-md"><span className="glyphicon glyphicon-pencil"></span></button>
            <button type="button" className="btn btn-danger btn-md" onClick= {this.props.remove}><span className="glyphicon glyphicon-trash"></span></button>
        </td>
               </tr>
           </tbody> 
       )
   }
}