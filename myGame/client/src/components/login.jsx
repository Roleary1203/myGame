import React from 'react';

const loginScreen = (props) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(e);
	}

	const handleBack = () => {
		props.handleBack();
	}

	if (props.showLogin === true) {
		return (
			<div>
			  <h1>Login</h1>
			  <form onSubmit={handleSubmit}>
			    <label>
			    Account Name:
			    <input required type="text" name="accName" />
			    Password:
			    <input required type="text" name="accPassword" />
			    </label>
                <input type="submit" value="Submit" />
                </form>
                <button onClick={handleBack}>back</button>



			</div>
	  )
	}
	else return null;
}

export default loginScreen;