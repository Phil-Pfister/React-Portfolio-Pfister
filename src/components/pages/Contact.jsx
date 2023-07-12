import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;
        

        if (inputType === 'fname') {
            setFirstName(inputValue)
        } else if (inputType === 'lname') {
            setLastName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setComment(inputValue)
        }
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
		if (!validateEmail(email)) {
			setErrorMessage('invalid email address');
			return;
		}
		if (!firstName || !lastName) {
			setErrorMessage('Both name fields are required');
			return;	
		}
		if (!comment) {
			setErrorMessage('comment field required');
			return;
		}

        setFirstName('');
        setLastName('');
        setEmail('');
        setComment('');
		setErrorMessage('');
        alert(`Thank you ${firstName} ${lastName} for your submission`)
    }

    return (
        <div className="container contact mt-5 min-vh-100">
	<div className="row">
		<div className="col-md-3">
			<div className="contact-info">
            <i className="bi bi-envelope contact-icon"></i>
				<h2>Contact Me</h2>
				<h4>I would love to hear from you!</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
				<div className="col-sm-10">          
					<input value={firstName} onChange={handleInputChange} type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
				<div className="col-sm-10">          
					<input value={lastName} onChange={handleInputChange} type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="email">Email:</label>
				<div className="col-sm-10">
					<input value={email} onChange={handleInputChange} type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
				</div>
				</div>
				<div className="form-group">
				<label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
				<div className="col-sm-10">
					<textarea value={comment} onChange={handleInputChange} className="form-control" rows="5" id="comment"></textarea>
				</div>
				</div>
				<div className="form-group"> 
				<div>
					<p className="error-message">{errorMessage}</p>
				</div>       
				<div className="col-sm-offset-2 col-sm-10">
					<button type="button" onClick={handleFormSubmit} className="btn btn-outline-secondary">Submit</button>
				</div>
				</div>
				
			</div>
		</div>
	</div>
</div>
    )

}