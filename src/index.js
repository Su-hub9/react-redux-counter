import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// Redux 관련 객체 불러오기
import { createStore } from "redux";
import reducer from './reducers';
import { Provider } from "react-redux";

// 스토어 생성
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

