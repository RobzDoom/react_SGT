import React, {Component} from 'react'
import styles from '../style/styles.css';
import database from '../database/firebase.js'


export default class AddingStudent extends Component{
    constructor(props){
        super(props);

        this.state ={
            name: '',
            course: '',
            grade: '',
            visible: 'hidden'
            
        }

    }
//-----------------------------------Adding Students to list ------------------------------------
    addStudent (){
        const {name, course, grade} = this.state
        
        //this is the same as name = this.state.name. 
            if (name && course && grade){
            database.ref('students').push({
                name,
                course,
                grade
            })
            this.resetForm()
        }else (
         this.setState({
            visible: 'visible'
         })
        )
    }
// ---------------------------------Reset the form once student has been added --------------------------
    resetForm (){
        this.setState({  
            name: '',
            course: '',
            grade: '',
            visible: 'hidden'
    })       
    }

    render()
    
    {
        const buttonStyle = {margin: '10px'}
        const visible = {visibility: this.state.visible}

        return(   
            
            <div className="student-add-form form-group pull-right col-sm-4 col-xs-12">
                    <h4>Add Student</h4>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </span>
                        <input className="form-control"  
                               placeholder="Student Name" 
                               value={this.state.name}
                               onChange={e => this.setState({name: e.target.value})}
                               />
                </div>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                    </span>
                        <input className="form-control" 
                            placeholder="Student Course" 
                            value={this.state.course}
                            onChange={e => this.setState({course : e.target.value})}
                            />
                </div>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-education"aria-hidden="true"></span>
                    </span>
                        <input className="form-control" 
                               placeholder="Student Grade" 
                               value={this.state.grade}
                               onChange={e => this.setState({grade: e.target.value})}
                               type= 'number'
                               />
                </div>
                    <h5 style= {visible}>Please fill entire form</h5>
                    <h5>{this.addStudent}</h5>
                    <button style = {buttonStyle} max= {100} type="button" className="btn btn-success" onClick={() => this.addStudent()} id="add_button">Add</button>
                    <button type="button" className="btn btn-default" onClick={() => this.resetForm()} id="cancel">Cancel</button>                 
                </div>
           
        )
    }
}
