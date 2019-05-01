import React from 'react';

const createHero = (props) => {


  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(e);
  }


  if (props.showCreateHero === true) {
	return(
    <div>
    <div>
    <h1>Create your hero!</h1>
    <form onSubmit={handleSubmit}>
    <label>
    Name:
    <input required type="text" name="name" />
    Class:
    <select name="role">
      <option>Warrior</option>
      <option>Mage</option>
    </select>
    </label>
    <input type="submit" value="Submit" />
    </form>
    </div>

    </div>
	)
 } else return null;
}

export default createHero;