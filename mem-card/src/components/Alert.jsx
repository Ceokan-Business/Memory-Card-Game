import React, { Component } from "react";

export default class Alert extends Component { 
    constructor (props) { 
        super(props);
    }

    classesHandler = () => { 
        let classes = "alert-buttons-section";

        if(!this.props.boolFirstButton || !this.props.boolSecondButton) { 
            classes = "alert-buttons-section-one-button";
        }

        return classes; 
    }

    render () { 
        const {
                description, onMainFunction, onCancel, boolFirstButton, 
                firstButtonName, boolSecondButton, secondButtonName
            } = this.props;
        return ( 
            <section className="alert">
                <p className="alert-description"> { description } </p>
                <section className = { `${this.classesHandler()}`}>
                { boolFirstButton && 
                    <button
                        type = 'button'
                        onClick= { onMainFunction }
                        className="alert-first-button alert-button"> { firstButtonName }</button> }

                { boolSecondButton && 
                    <button
                        type='button'
                        onClick = { onCancel }
                        className = "alert-second-button alert-button"> { secondButtonName }</button> }
                        </section>
            </section>
        )
    }
}