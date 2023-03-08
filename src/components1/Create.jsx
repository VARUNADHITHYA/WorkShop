import { Component } from "react";
import React from "react";
import axios from "axios";

class Create extends Component{
    constructor(props){
        super(props);
        this.state={
            jersey_no:'',
            Runs:'',
            Economy:'',
            member_name:'',
            member_role:'',
            type:'',
            gender:'',
            age:''
        };
    }
    handlejersey_noChange=(event)=>{
        this.setState({jersey_no:event.target.value});
    }
    handleRunsChange =(event)=>{
        this.setState({Runs:event.target.value});
    };
    handleEconomyChange=(event)=>{
        this.setState({Economy:event.target.value});
    };
    handlemember_nameChange=(event)=>{
        this.setState({member_name:event.target.value});
    };
    handlemember_roleChange=(event)=>{
        this.setState({member_role:event.target.value});
    };
    handletypeChange=(event)=>{
        this.setState({type:event.target.value});
    };
    handlegenderChange=(event)=>{
        this.setState({gender:event.target.value});
    };
    handleageChange=(event)=>{
        this.setState({age:event.target.value});
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        const data={
       jersey_no:this.state.jersey_no,
       Runs:this.state.Runs,
       Economy:this.state.Economy,
       member_name:this.state.member_name,
       member_role:this.state.member_role,
       type:this.state.type,
       gender:this.state.gender,
       age:this.state.age
        };
        axios.post('http://localhost:8080/post',data)

        console.log(data);
        
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit} jersey_no="inputdata">
                <label>jersey_no</label>
                <input
                type="number"
                value={this.state.sno}
                onChange={this.handlejersey_noChange}
                />
                <label>Runs</label>
                <input
                type="text"
                value={this.state.Runs}
                onChange={this.handleRunsChange}
                />
                <label>Economy</label>
                <input
                type="number"
                value={this.state.Economy}
                onChange={this.handleEconomyChange}
                />
                <label>member_name</label>
                <input
                type="text"
                value={this.state.member_name}
                onChange={this.handlemember_nameChange}
                />
                <label>member_role</label>
                <input
                type="text"
                value={this.state.member_role}
                onChange={this.handlemember_roleChange}
                />
                <label>type</label>
                <input
                type="text"
                value={this.state.type}
                onChange={this.handletypeChange}
                />
                <label>gender</label>
                <input
                type="text"
                value={this.state.gender}
                onChange={this.handlegenderChange}
                />
                <label>age</label>
                <input
                type="number"
                value={this.state.age}
                onChange={this.handleageChange}
                />
                <button type="submit">Add</button>
                </form>
        )
    }
}
export default Create;