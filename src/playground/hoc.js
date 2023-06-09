// HOC Higher Order Component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>  
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p></p> : <p>Please login to continue</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the messages" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));