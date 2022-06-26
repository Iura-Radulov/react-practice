import React, { Component } from "react";
// import ReactDOM from 'react-dom/client';
// import { nanoid } from "nanoid";

export class LoginForm extends Component {
    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const login = form.elements.login.value;
        const password = form.elements.password.value;
        console.log(login, password);
        this.props.onSubmit({ login, password });
        form.reset();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        )
    }
}
const INITIAL_STATE = {
  login: "",
  email: "",
    password: "",
  agreed: false,
};

export class SignUpForm extends Component {
    state = { ...INITIAL_STATE };

    handleChange = e => {
        const { name, value, type, checked } = e.target;
        this.setState({[name]: type === "checkbox" ? checked : value})
    }
    handleSubmit = evt => {
        evt.preventDefault();
        const { login, email, password, agreed } = this.state;
        console.log(`Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`);
        this.props.onSubmit({ ...this.state });
        this.reset();
    }
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    } 
    render() {
        const { login, email, password, agreed } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        placeholder="Enter login"
                        name="login"
                        value={login}
                    onChange={this.handleChange}/>
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                    onChange={this.handleChange}/>
                </label>
                 <label>
                    Password
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                    onChange={this.handleChange}/>
                </label>
                <label>
                    Agree to tems
                    <input
                        type="checkbox"
                        name="checkbox"
                        checked={agreed}
                    onChange={this.handleChange}/>
                </label>
                <button type="button" disabled={!agreed}>Sign up as { login}</button>
            </form>
        )
    }
} 

// ReactDOM.render(
//   <SignUpForm onSubmit={values => console.log(values)} />,
//   document.getElementById("root")
// );
// class Form extends Component {
//     loginInputId = nanoid();
//     render() {
//         return (
//             <form>
//                 <label htmlFor={this.loginInputId}>Login</label>
//                 <input type="text" name="login" id={this.loginInputId }/>
//             </form>
//         )
//     }
// }