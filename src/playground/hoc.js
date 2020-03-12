import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthInfo = (WrappedComponent) => {
  return (props) => (
    <div> 
      {!props.isAuth ? (
        <p>Please login</p>
        ) : (
        <WrappedComponent {...props}/>
        )}
      </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthInfo(Info);
ReactDOM.render(<AuthInfo isAuth={true} info="this is the info" />, document.getElementById('app'));