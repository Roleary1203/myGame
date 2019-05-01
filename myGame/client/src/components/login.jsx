import React from 'react';

const loginScreen = (props) => {

	if (props.showLogin === true) {
		return (
			<div>
			  <h1>Login</h1>
			  <form>
			    <label>
			    Account Name:
			    <input required type="text" name="name" />
			    Password:
			    <input required type="text" name="password" />
			    </label>
                <input type="submit" value="Submit" />
                </form>


			</div>
	  )
	}
	else return null;
}

export default loginScreen;