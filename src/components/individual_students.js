import React, {Component} from 'react';
import StudentList from './student_list.js'

export default class IndividualStudent extends Component {
   render(){
       return (
           <tbody>
               <tr>
                <td>{this.props.name}</td>
                <td>{this.props.course}</td>
                <td>{this.props.grade}</td> 
               </tr>
           </tbody> 
       )
   }
}