import   React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword ) {
      alert('Password and Confirmed password must match exactly!');
      return;
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch(error) {
      console.log('there was an error creating a user' + error.message);
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className='' onSubmit={ this.handleSubmit }>
          <FormInput
            type='email'
            name='email'
            value={ email }
            label='Email'
            handleChange={ this.handleChange }
            required
            />
          <FormInput
            type='text'
            name='displayName'
            value={ displayName }
            label='Display Name'
            handleChange={ this.handleChange }
            required
            />
          <FormInput
            type='password'
            name='password'
            value={ password }
            label='Password'
            handleChange={ this.handleChange }
            required
            />
          <FormInput
            type='password'
            name='confirmPassword'
            value={ confirmPassword }
            label='Confirm Password'
            handleChange={ this.handleChange }
            required
            />
            <CustomButton type='submit'>Sign Up</CustomButton>

        </form>

      </div>
    )
  }
}

export default SignUp;