import axios from "axios";
import React from "react";
import { Component } from "react";
class Table1 extends Component{
    state={
    data:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/display')
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error =>{
            console.log(error);
        });
       
    }
    deleteData(jersey_no,e){
        axios.delete(`http://127.0.0.1:8080/delete/${jersey_no}`)
        .then(response =>{
            console.log(response);
            const data = this.state.data.filter(item=>item.jersey_no!== jersey_no);
            this.setState({data});
        })
    }
    updateData(jersey_no,e){
        axios.Update(`http://localhost:8080/updateAdd/${jersey_no}`)
        .then(response=>{
            console.log(response);
            const data = this.state.data.filter(item => item.jersey_no !==jersey_no);
            this.setState({data});
        })
    }
    render(){
        return(
            // <Link to '/add'>Add</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th>jersey_no</th>
                        <th>Runs</th>
                        <th>Economy</th>
                        <th>member_name</th>
                        <th>member_role</th>
                        <th>type</th>
                        <th>gender</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr key={user.jersey_no}>
                            <td>{user.jersey_no}</td>
                            <td>{user.Runs}</td>
                            <td>{user.Economy}</td>
                            <td>{user.member_name}</td>
                            <td>{user.member_role}</td>
                            <td>{user.type}</td>
                            <td>{user.gender}</td>
                            <td>{user.age}</td>
                            <td>
                                <button className="btn btn-danger" onClick={(e)=>this.deleteData(user.jersey_no,e)}>Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-primary col-md-12" onClick={(e)=> this.updateData(user.jersey_no,e)}>update</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        );
    }
}
export default Table1;