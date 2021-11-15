import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';

export default function Enquiry() {
    const url="http://localhost:3004/enquire";
    const [data,setData]=useState({
        name:"",
        email:"",
        mobile:"",
        address:"",
        course:"",
        id:""
    })
    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name: data.name,
            email:data.email,
            mobile:data.mobile,
            address:data.address,
            course:data.course,
            id: parseInt(data.id)
        })
        .then(res=>{
            console.log(res.data)
        })
        alert("Form Submitted...");
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div className="container">
            <h2>Enquiry Form</h2>
            <form onSubmit={(e)=>submit(e)}>
                
                <div class="form-group">
                    <label for="exampleFormControlInput1">Id</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile"/>
                </div>
                <div className="row">
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="email" onChange={(e)=>handle(e)} id="email" value={data.email} class="form-control"  placeholder="name@example.com"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" onChange={(e)=>handle(e)} id="name" value={data.name} class="form-control" placeholder="Name.."/>
                    </div>
                </div>

                <div className="row">
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlInput1">Course</label>
                        <input type="text" onChange={(e)=>handle(e)} id="course" value={data.course} class="form-control" placeholder="Course.."/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlInput1">Mobile</label>
                        <input type="number" onChange={(e)=>handle(e)} id="mobile" value={data.mobile} class="form-control"  placeholder="mobile"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Address</label>
                    <input type="text" onChange={(e)=>handle(e)} id="address" value={data.address} class="form-control" placeholder="Address"/>
                </div>
                <div class="form-group">
                <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
