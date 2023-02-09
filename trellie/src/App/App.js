
import { useEffect } from "react";
import { connect } from "react-redux";

import Trellie from "../Components/Trellie/Trellie";
import trelliesObject from "../Data/Trellies";
import './App.css';

const App = (props) => {

  useEffect(() => {
    props.setTrelliesFromRedux(trelliesObject)
  }, []);

 

  let render = props.trelliesFromRedux.map(object => {
    return <Trellie id={object.id}  key={object.id} trellie={object} />
  });

  return (
    <>
      {render}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    trelliesFromRedux: state.trellies,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setTrelliesFromRedux: (payload) => dispatch({ type: "trellies", payload: payload })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
