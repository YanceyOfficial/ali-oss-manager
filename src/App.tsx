import React from 'react';
import { notify } from './shared/tools';
import './App.css';

// const electron = window.require('electron');
// const fs = electron.remote.require('fs');
// const ipcRenderer = electron.ipcRenderer;

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.showNotice = this.showNotice.bind(this);
  }

  public componentDidMount() {}

  public showNotice() {
    notify(
      'Hello',
      '欢迎使用 Ali OSS 管理平台桌面版',
      'https://js.yanceyleo.com/logo.png',
    );
  }
  public render() {
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
