import { Bengaluru } from "../utils/constants";
import User from "./User"
import UserClass from "./UserClass";
const About =() =>{

    return(
     <div className="about">   
        <h1> About Page</h1>
        <h2> This is Namaste React</h2>
        <User name={"Srinu Tippana (function)"} location={"Bengaluru(function)"}/>
        <UserClass name={"Srinu Tippana (Class)"} location={"Bengaluru(class)"}/>
     </div>
     
    );
}
export default About;