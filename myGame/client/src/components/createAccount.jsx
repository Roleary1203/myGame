import React from 'react';

const createAccount = (props) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(e);
	}

	if (props.showCreateAccount === true) {
		return (
			<div>
			  <h1>Create New Account</h1>
			  <form onSubmit={handleSubmit}>
			    <label>
			    Account Name:
			    <input required type="text" name="accName" />
			    Password:
			    <input required type="text" name="accPassword" />
			    </label>
                <input type="submit" value="Submit" />
                </form>


			</div>
	  )
	}
	else return null;
}

export default createAccount;