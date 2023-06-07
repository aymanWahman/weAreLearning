import React, { useState } from "react";

function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const nameHandler = (value) => {
    setName(value)
  }
  const passwordHandler = (value) => {
    setPassword(value)
  }
  const genderdHandler = (value) => {
    setGender(value)
  }
  return ( 
    <form className="col-auto" onSubmit={(e) =>{
      e.preventDefault();
      console.log({
        name,
        password,
        gender
      });
    }
    }>
      <label for='n' className="form-label">Name</label>
      <input className="form-control form-control-lg" type='text' placeholder='Your name' id='n' onChange={(e) => {
        nameHandler(e.target.value)
      }}/>
      <label for='p' className="form-label">Password</label>
      <input className="form-control" type='password' placeholder='Your password' id='p' onChange={(e) => {
        passwordHandler(e.target.value)
      }}/>
      <label for='g' className="form-label">Gender</label>
      <select className="form-select" id='g' onChange={(e) => {
        genderdHandler(e.target.value)
      }}>
        <option value='male'>male</option>
        <option value='female'>female</option>
      </select>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
   );
}

// class Form extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { 
//       name: '',
//       password: '',
//       gender: ''
//      } 
//     }
//        nameHandler = (value) => {
//           this.setState({name: value})
//         }
//        passwordHandler = (value) => {
//           this.setState({password: value})
//         }
//        genderdHandler = (value) => {
//           this.setState({gender: value})
//         }
//         render() {
//         return ( 
//           <form onSubmit={(e) =>{
//             e.preventDefault();
//             console.log(this.state);
//           }}>
//             <label className="form-label">Name</label>
//             <input className="form-control" type='text' placeholder='Your name' onChange={(e) => {
//               this.nameHandler(e.target.value)
//             }}/>
//             <label className="form-label">Password</label>
//             <input className="form-control" type='password' placeholder='Your password' onChange={(e) => {
//               this.passwordHandler(e.target.value)
//             }}/>
//             <label className="form-label">Gender</label>
//             <select className="form-select" onChange={(e) => {
//               this.genderdHandler(e.target.value)
//             }}>
//               <option value='male'>male</option>
//               <option value='female'>female</option>
//             </select>
//             <button className="btn btn-primary" type="submit">Submit</button>
//           </form>
//          );
// }}

export default Form;