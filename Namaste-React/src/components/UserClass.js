import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:10,
            count2:20,
        };

        console.log(props);
    }
    render(){
        const{name,location}=this.props;
        const{count,count2}= this.state;
        return(
        <div className="user-card">  
            <h1>Count:{count}</h1>
            <h1>Count2:{count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact : @IamSrinuTippana</h4>
        </div>
        );
    }
}

export default UserClass;