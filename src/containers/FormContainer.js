import React, {Component} from 'react';

// Import Components
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
// import Button from '../components/Button';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: '',
                email: '',
                age: '',
                gender: '',
                skills: '',
                about: ''
            },

            genderOptions: ['Male', 'Female', 'Others'],
            skillOptions: ['Programming', 'Development', 'Design', 'Testing']
        }
    }

    handleFormSubmit = () => {
        // Form Submission logic
    }

    handleClearForm = () => {
        // Logic for resetting the form
    }

    // handleFullName = (e) => {
    //     let value = e.target.value;
    //     this.setState(prevState => ({newUser: {...prevState.newUser, name: value}}));
    // }

    // handleAge = (e) => {
    //     let value = e.target.value;
    //     this.setState(prevState => ({newUser: {...prevState.newUser, age: value}}), () => console.log(this.state.newUser))
    // }

    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => {
                return {
                    newUser: {
                        ...prevState.newUser, 
                        [name]: value
                    }
                }
            }, () => console.log(this.state.newUser)
        );
    }

    handleSkillsCheckBox = (e) => {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.newUser.skills.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newUser.skills.filter( s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.newUser.skills, newSelection];
        }
        
        this.setState(prevState => ({
            newUser: {...prevState.newUser, skills: newSelectionArray}
        }))
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                <Input 
                    type="text"
                    name="name"
                    title="Full Name"
                    value={this.state.newUser.name}
                    placeholder="Enter your name"
                    handleChange={this.handleInput}
                /> 
                <Input 
                    type="number"
                    name="age"
                    title="Age"
                    value={this.state.newUser.age}
                    placeholder="Enter your age"
                    handleChange={this.handleInput}
                /> 
                <Select 
                    title="Gender"
                    name="gender"
                    options={this.state.genderOptions}
                    value={this.state.newUser.gender}
                    handleChange={this.handleInput}
                /> 
                <CheckBox 
                    title="List of skills"
                    name="skills"
                    options={this.state.skillOptions}
                    selectedOptions={this.state.newUser.skills}
                    handleChange={this.handleSkillsCheckBox}
                />
                <TextArea 
                    title="About"
                    name="about"
                    value={this.state.newUser.about}
                    placeholder="About"
                    handleChange={this.handleInput}
                />
                {/* <Button /> 
                <Button /> */}

            </form>
        );
    }
}

export default FormContainer;