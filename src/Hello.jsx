import React from 'react';

function Hello() {
  const el = 10;
  const num = 20;
  let content;

  if (num > el) {
    return(
<p>ok</p>
    ) ;
  } else {
    
  return (
    <p>wrong</p>
  );
  }

}

export default Hello;
