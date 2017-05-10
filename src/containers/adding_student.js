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
        const buttonStyle = {background: "#eee",margin: '10px'}
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
                               onChange={e => this.setState({grade: e.target.value})}/>
                </div>
                    <h6 style= {visible}>You need to complete buttons</h6>
                    <button style = {buttonStyle} type="button" className="btn btn-success" onClick={() => this.addStudent()} id="add_button">Add</button>
                    <button type="button" className="btn btn-default" onClick={() => this.resetForm()} id="cancel">Cancel</button>                 
                </div>
           
        )
    }
}
