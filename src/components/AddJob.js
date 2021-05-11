import React,{useContext, useState} from "react";
import { Card, Button, Form } from "react-bootstrap";
import './addPost.css'
import './profile.css'
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import JobContext from '../State/JobContext'
function AddJob(props) {
  const jobContext =useContext(JobContext)
  const {setCurrent }=jobContext
  const [jobData, setjobData] = useState({
    title: "",
    location: "",
    
  });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrent(jobData) 

    props.history.push("/profile");
  };
  return (
    <Card className ="formBody">
      <Card.Header className='heading'>ADD JOB</Card.Header>
      <Card.Body >
        <Form controlId='' onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label    >Job Title</Form.Label>
            <Form.Control name="title"  value={jobData.title}
          onChange={(e) => setjobData({ ...jobData, title: e.target.value })} id="go"  type="text" placeholder="" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control name="location"  value={jobData.location}
          onChange={(e) => setjobData({ ...jobData, location: e.target.value })} id="go"  type="text" placeholder="Enter the Location" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="This Job is remote" />
          </Form.Group>
          <Button  variant="primary" className='glow-on-hover' type="submit">
         
        
           Next
          
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AddJob;
