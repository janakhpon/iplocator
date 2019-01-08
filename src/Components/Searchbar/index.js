import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage';

const validIPFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

class Searchbar extends Component {

    state = {
        input: "",
        invalidInput: false
    };

    handleInputChange = (e) => {
        this.setState({
            input: e.target.value,
            invalidInput: false
        })
    }

    handleClick = () => {
       this.manageSubmittedInput();
    }


    handleKeypress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.manageSubmittedInput();
        }
    }

    manageSubmittedInput = () => {
        if (this.state.input.match(validIPFormat)) {
          this.props.getSearchedLocation(this.state.input);
        } else {
          this.setState({
            invalidInput: true
          })
        }
    
        this.setState({
          input: ""
        });
      }


    render() {
        const { input, invalidInput } = this.state;

        return (
            <div className="ui container">
            {
                invalidInput &&
                <ErrorMessage
                    icon="fa-exclamation-triangle"
                    text="Please enter valid IP"
                />
            }
            <div className="fluid ui icon input">
                <input type="text" value={input} onChange={this.handleInputChange} onKeyPress={this.handleKeypress} placeholder="Search..." />
                <i className="inverted circular search link icon" onClick={this.handleClick} ></i>
            </div>
            </div>
                
           
        )
    }

}

export default Searchbar;