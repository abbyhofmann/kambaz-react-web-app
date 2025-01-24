import { Form, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2"
             defaultValue={"alice"}/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2"
             defaultValue={123}/>
      <Form.Control id="wd-firstname"
             placeholder="First Name"
             className="mb-2"
             defaultValue={"Alice"}/>
      <Form.Control id="wd-lastname"
             placeholder="Last Name"
             className="mb-2"
             defaultValue={"Wonderland"}/>
      <Form.Control id="wd-dob"
             type="date"
             className="mb-2"
             defaultValue={"2000-01-01"}/>
      <Form.Control id="wd-email"
             type="email"
             className="mb-2"
             defaultValue={"alice@wonderland"}/>
      <FormSelect id="wd-role" defaultValue="FACULTY" className="mb-2">
        <option selected value="USER">User</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Signout 
      </Link>
    </div>
);}
