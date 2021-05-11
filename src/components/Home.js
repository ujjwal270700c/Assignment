import React,{useContext} from "react";
import { Table, Card, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./hhome.css";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import JobContext from '../State/JobContext'
function Home() {
  const jobContext =useContext(JobContext)
  const {posts }=jobContext
  console.log(posts);
  return (
    <>
      <div className="bo">
        <Form.Group controlId="formBasicCheckbox" className="link">
       
        <Link to="/add-job">
            {" "}
            <AddIcon />
            Add Job
          </Link>
           
         
        </Form.Group>
        <Form className='formtable'>
          <Table className="table">
            <tbody className="tbody">
              <tr>
                <td>1</td>
                <td>Frontend Developer</td>
                <td>22/04/2021</td>
                <LinkContainer to={`/details`}>
                  <td>more details</td>
                </LinkContainer>
              </tr>
              <tr>
                <td>2</td>
                <td>Frontend Developer</td>
                <td>22/04/2021</td>
                <LinkContainer to={`/details`}>
                  <td>more details</td>
                </LinkContainer>
              </tr>
              <tr>
                <td>3</td>
                <td>Frontend Developer</td>
                <td>22/04/2021</td>
                <LinkContainer to={`/details`}>
                  <td>more details</td>
                </LinkContainer>
              </tr>
              <tr>
                <td>4</td>
                <td>Frontend Developer</td>
                <td>22/04/2021</td>
                <LinkContainer to={`/details`}>
                  <td>more details</td>
                </LinkContainer>
              </tr>

              <tr>
                <td>1</td>
                <td>Frontend Developer</td>
                <td>22/04/2021</td>
                <LinkContainer to={`/details`}>
                  <td>more details</td>
                </LinkContainer>
              </tr>
              <tr>
                <td>2</td>
                <td>Frontend Developer</td>
                <td>22/04/2021</td>
                <LinkContainer to={`/details`}>
                  <td>more details</td>
                </LinkContainer>
              </tr>
              <tr>
                <td>3</td>
                <td>Frontend Developer</td>
                <td>22/04/2021</td>
                <LinkContainer to={`/details`}>
                  <td>more details</td>
                </LinkContainer>
              </tr>
              <tr>
                <td>4</td>
                <td>Frontend Developer</td>
                <td>22/04/2021</td>
                <LinkContainer to={`/details`}>
                  <td>more details</td>
                </LinkContainer>
              </tr>
            </tbody>
          </Table>
        </Form>
      </div>
    </>
  );
}

export default Home;
