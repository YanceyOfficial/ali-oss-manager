import React, { Component } from 'react';
import { notify } from './tools';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.showNotice = this.showNotice.bind(this);
  }
  componentDidMount(){
  }
  showNotice() {
    notify(
      'Hello',
      '欢迎使用 Ali OSS 管理平台桌面版',
      'https://js.yanceyleo.com/logo.png',
    );
  }
  render() {
    return (
      <div className='App'>
        我爱山本彩
        <p>{process.title}</p>
        <button onClick={this.showNotice}>点我显示 Notification</button>
      </div>
    );
  }
}

export default App;
