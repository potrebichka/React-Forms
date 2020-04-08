import React from 'react';

const TextArea = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <textarea 
                className="form-control"
                name={props.name}
                id={props.name}
                onChange={props.handleChange}
                value={props.value}
                placeholder={props.placeholder}
                row="3"
            />
        </div>
    );
}

export default TextArea