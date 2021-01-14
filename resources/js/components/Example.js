import React from 'react';
import ReactDOM from 'react-dom';

function Example({name, authname}) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{name}</div>

                        <div className="card-body">{authname}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    const name = document.getElementById("example").getAttribute('name');
    const authname = document.getElementById("example").getAttribute('authname');
    ReactDOM.render(<Example name={name} authname={authname} />, document.getElementById('example'));
}
