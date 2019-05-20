import React from 'react';

const titleScreen = (props) => {

	const handleCreate = () => {
		props.handleCreate();
	}

	const handleLogin = () => {
		props.handleLogin();
	}


  if (props.showTitle === true) {
  	return (
  		<div>
  		<h1> GAME TITLE!!! </h1>
  		  <button onClick={handleCreate}>Create Account!</button>
  		  <button onClick={handleLogin}>Log in!</button>
  		  </div>

  	)
  } else return null;
}

export default titleScreen;