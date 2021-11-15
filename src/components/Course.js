import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export class Course extends Component {
    state={courseData:[]};
    componentDidMount(){
        fetch(" http://localhost:3009/courses")
        .then(res=>res.json())
        .then(data=>{
            this.setState({courseData:data})
        })
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                <div className="row">
                {this.state.courseData.map(course=>
                        <div className="col-sm-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top"  height="200px" src={`./images/${course.image}`} />
                                <Card.Body>
                                    <Card.Title>{course.cname}</Card.Title>
                                    <Card.Text>
                                    Fees: {course.fees} <br />
                                    Seats: {course.seats}
                                    </Card.Text>
                                    <Button variant="dark"><Link to={`/enquiry`}>Enquiry Form</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    )}
                </div>
            </div>
        )
    }
}

export default Course
