import React, { Component } from "react";
import Buttons from "../components/Buttons";
import CounterListContainer from "./CounterListContainer";

import { connect } from "react-redux";
import * as actions from '../modules';

import { getRandomColor } from "../utils";

class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer />
            </div>
        );
    }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

// Redux 에 연결 시키고 내보낸다.
export default connect(null, mapToDispatch)(App);