import React from "react";
import { connect } from "react-redux";
import "./Input.css";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: "" }
    }

    onInputChange = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    onActivityAdded = (event) => {
        event.preventDefault();
        let oldState = [...this.props.trelliesFromRedux];
        let newState = {
            label: "Vandaag",
            description:this.state.inputValue,
            id: oldState[this.props.id - 1].activities.lenght + 1
        }
        oldState[this.props.id - 1].activities.push(newState);
        this.props.setTrelliesFromRedux(oldState);
    }

    render() {
        return (
            <>
                <form onSubmit={this.onActivityAdded} action="" className="input">
                    <label htmlFor="activity" className="input__label">Nieuwe activiteit </label>
                    <input onChange={this.onInputChange} id="activity" type="text" className="input__input" placeholder="boodschappen doen......" value={this.state.inputValue}></input>
                </form>
            </>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        props,
        trelliesFromRedux: state.trellies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTrelliesFromRedux: (payload) => { dispatch({ type: "trellies", payload: payload }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);

