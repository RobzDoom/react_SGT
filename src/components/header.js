import React, {Component} from 'react';
import database from '../database/firebase.js';

export default class Header extends Component {
  constructor(){
    super()
      this.state = {
        grade: 0,
        listOfStudents: []
      }
  }
 // ----------------------Making FireBase Call --------------------------------
 componentDidMount (){
    database.ref('students').on('value', snapshot =>{
            this.setState({
              listOfStudents: snapshot.val()
            })
        })
    }
  renderGradeAverage (){
    const {listOfStudents} = this.state;
    
    if(!listOfStudents){
            return 
        }
    return Object.keys(listOfStudents).map(key => {
            const {grade} = listOfStudents[key]
            
          const numbers =  parseInt(grade, 10);


          //  const total = 0;
          //  const allNumbers = total + numbers;

           console.log(allNumbers)

            return (
              <h6 key={key}>{grade}</h6>
            )

        })
            
  }

  render(){
    return(
      <div className="page-header">
        <h1 className="hidden-xs hidden-sm">Student Grade Table
          <small className="pull-right">Grade Average: <span className="label label-default"></span>{this.renderGradeAverage()}</small>
        </h1>
        <h3 className="hidden-md hidden-lg">Student Grade Table 
          <small className="pull-right">Grade Average: 
          <span className="label label-default"></span></small>
          
        </h3>
        
      </div>
    )
  }
}
