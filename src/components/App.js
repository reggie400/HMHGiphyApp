import React from 'react';
import './../styles/app.scss';

export const App = (props) => {
  return (
      <div className="app-container">
          {props.children}
      </div>
  );
};

App.PropTypes = {
    children: React.PropTypes.obj
};

export default App;
