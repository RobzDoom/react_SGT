import React, {Component} from 'react'
import styles from '../style/styles.css';

export default class AddingStudent extends Component{
    render(){
        return(   
            
            <div className="student-add-form form-group pull-right col-sm-4 col-xs-12">
                    <h4>Add Student</h4>
                <div className="form-group input-group">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </span>
                        <input type="text" className="form-control" name="studentName" id="studentName" placeholder="Student Name" />
                </div>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                    </span>
                        <input type="text" className="form-control" name="course" id="course"
                            placeholder="Student Course" />
                </div>
                <div className="form-group input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-education"aria-hidden="true"></span>
                    </span>
                        <input type="text" className="form-control" name="studentGrade" id="studentGrade"
                            placeholder="Student Grade" />
                </div>
                    <button type="button" className="btn btn-success " onclick="" id="add_button">Add</button>
                    <button type="button" className="btn btn-default" onclick="" id="cancel">Cancel</button>
                    <button type="button" className="btn btn-info" onclick="" id="data_button">Get Data</button>   
                </div>
           
        )
    }
}
