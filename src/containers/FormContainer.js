import React, {Component} from 'react';

// Import Components
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: '',
                email: '',
                age: '',
                gender: '',
                expertise: '',
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

    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                <Input /> {/* Name of the user */}
                <Input /> {/* Input for Age */}
                <Select /> {/* Gender Selection */}
                <CheckBox /> {/* List of Skills */}
                <TextArea /> {/* About you */}
                <Button /> {/* Submit */}
                <Button /> {/* Clear the form */}
            </form>
        );
    }
}

export default FormContainer;