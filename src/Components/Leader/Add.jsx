// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { createEvent } from "../../js/actions/index";
// import logo from '../../Images/logo-only.png';
// import '../../Styles/dashboard.scss';

// class Add extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             password: ''
//         };
//     };
//     handleSubmit = e => {
//         event.preventDefault();
//         this.props.loginUser(this.state);
//     };

//     render() {
//         return (
//             <div className="user-form">
//                 <img className="med-logo-only" src={logo} alt="Make School"></img>
//                 <h1>Add Event</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type='text' name='username' id='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />                  
//                     <input type='password' name='password'  id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
//                     <button className="black_btn" type='submit' disabled={!this.validateForm()} >Submit</button>                     
//                 </form>
//             </div>     
//         );
//     };
// };

// const mapStateToProps = state => {
//     return { user: state.user, clubs: state.clubs};
// };

// function mapDispatchToProps() {
//     return {
//         createEvent
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps())(Add);
