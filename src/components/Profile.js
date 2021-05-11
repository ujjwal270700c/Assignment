import React,{useContext,useState} from 'react'
import { Card, Button, Form } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import './profile.css'
import JobContext from '../State/JobContext'
const Profile = (props) => {
  const jobContext =useContext(JobContext)
  const {current,AddPost }=jobContext
  console.log(current);
    const [ value3, setValue3 ] = React.useState(30);
    const [profileData, setprofileData] = useState({
      skills: "",
      stipend: "",
      mode:"",
      startdate:"",
      duration:"",
      discription:"" 
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
      profileData.stipend=value3
   const {skills,stipend,mode,startdate,duration,discription}=profileData
    const data={
      title:current.title,
      location:current.location,
      skills,
      stipend,
      mode,
      startdate,
      duration,
      discription
    }
    AddPost(data)
   
      props.history.push("/");
    };
    return (
        <Card  className='form-container'>
      <Card.Header className='heading'># Intern Details</Card.Header>
      <Card.Body >
          <div className="form">
        <Form onSubmit={handleSubmit}>
            <div className="form-group">
          <Form.Group controlId="formBasicEmail" className="form-skills">
              <div className="form-skills-child">
            <Form.Label>Skills</Form.Label></div>
            <div className="form-skills-child"> <Form.Control name="skills"  value={profileData.skills}
          onChange={(e) => setprofileData({ ...profileData, skills:e.target.value.split(",")})} type="text" placeholder="" /></div>
           
          </Form.Group>
          <Form.Group controlId="formBasicEmail"  className="form-skills">
            <div className="form-skills-child"><Form.Label>Stipend</Form.Label></div>
            <RangeSlider
            value={value3}
            onChange={e => setValue3(e.target.value)}
            variant='success'
          />
          <span>100K</span>
          </Form.Group>
          
          <Form.Group controlId="formBasicCheckbox">
          <div className="form-skills-child"><Form.Label>Mode</Form.Label></div>
          <div className="form-skills-child"><Form.Check name="mode"  value='Part Time 20 hrs/week'
          onChange={(e) => setprofileData({ ...profileData, mode:e.target.value})} type="checkbox" label="Part Time 20 hrs/week" />
            <Form.Check name="mode" value='Semi Pert Timev30 hrs/week'
          onChange={(e) => setprofileData({ ...profileData, mode:e.target.value})} type="checkbox" label="Semi Pert Timev30 hrs/week" />
            <Form.Check name="mode" value="Full Time40 hrs/week"
          onChange={(e) => setprofileData({ ...profileData, mode:e.target.value})} type="checkbox" label="Full Time40 hrs/week" /></div>
          </Form.Group>



          <Form.Group controlId="dob"  className="form-skills">
                             <div className="form-skills-child"><Form.Label>Start Date</Form.Label></div>
                             <div className="form-skills-child"><Form.Control name="startdate" type="date" value={profileData.startdate}
          onChange={(e) => setprofileData({ ...profileData, startdate:e.target.value})} placeholder="Date of Birth" /></div>
                             <div className="form-skills-child"><Form.Label>Duration</Form.Label></div>
                             <div className="form-skills-child"><Form.Control  name="duration" type="date" value={profileData.duration}
          onChange={(e) => setprofileData({ ...profileData, duration:e.target.value})} type="text" placeholder="Months" /></div>
                        </Form.Group>


          <Form.Group controlId="formBasicPassword"  className="form-skills">
          <div className="form-skills-child"><Form.Label>Job Description</Form.Label></div>
          <div className="form-skills-child"><Form.Control name="discription" type="date" value={profileData.discription}
          onChange={(e) => setprofileData({ ...profileData, discription:e.target.value})}  id="go" as="textarea" rows={6}/></div>
          </Form.Group>
          </div>
        
          <Button  variant="primary" className='glow-on-hover' type="submit">
          POST
          </Button>
        </Form>
        </div>
      </Card.Body>
    </Card>
    )
}

export default Profile
