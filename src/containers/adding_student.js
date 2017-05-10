import React, {Component} from 'react'
import styles from '../style/styles.css';

export default class AddingStudent extends Component{
    constructor(props){
        super(props);

        this.state ={
            name: '',
            course: '',
            grade: '',
        }

    }

    //onChange We always get evn obj here.
    // onInputChange1 (event){
    //     console.log(event.target.value)
    //     this.setState({
    //         name: event.target.value,
    //     })
    // }
    // onInputChange2 (event){
    //     console.log(event.target.value)
    //     this.setState({
    //         course: event.target.value,
    //     })
    // }
    // onInputChange3 (event){
    //     console.log(event.target.value)
    //     this.setState({
    //         grade: event.target.value,
            
    //     })
    // }

    addStudent (){
        let {name, course, grade} = this.state
        //this is the same as name = this.state.name. 
    }

    render(){
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
                    <button type="button" className="btn btn-success " onClick="" id="add_button">Add</button>
                    <button type="button" className="btn btn-default" onClick="" id="cancel">Cancel</button>
                    <button type="button" className="btn btn-info" onClick="" id="data_button">Get Data</button>   
                </div>
           
        )
    }
}

// var config = {
//     apiKey: "AIzaSyAOwQN4uWzQgthytTkb7BQ5PLExHhobqpw",
//     authDomain: "studendgradetable.firebaseapp.com",
//     databaseURL: "https://studendgradetable.firebaseio.com",
//     projectId: "studendgradetable",
//     storageBucket: "studendgradetable.appspot.com",
//     messagingSenderId: "935204100534"
//   };
//   firebase.initializeApp(config);