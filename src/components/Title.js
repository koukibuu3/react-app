import React from 'react';

const Title = (props) => {
  return(
    <div>
      <h2 id='textStatement'>{props.children}</h2>

      <p onClick={props.onClick}
        id="textChangeButton"
      >
        Change
      </p>
    </div>
  );
}

export default Title;