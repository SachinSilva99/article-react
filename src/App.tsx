import React from "react";
import './App.css'

class App extends React.Component<any, any> {

  state = {
    count: 10,
    visible: true
  }


  update = (type: string) => {
    switch (type) {
      case 'UP':
        this.setState({count: this.state.count + 1});
        break;
      default:
        this.setState({count: this.state.count - 1});
    }
  }

  render() {
    const x = 'hello';
    return (
      <div className='flex w-screen h-screen items-center justify-center gap-8'>
        {x}
        <button onClick={() => this.update('UP')}
                className='bg-green-600 w-24 py-3 px-8 text-white active:bg-green-300'> +
        </button>
        <div className='font-bold text-3xl'>{this.state.count}</div>
        <button onClick={() => this.update('DOWN')}
                className='bg-blue-600 w-24 py-3 px-8 text-white active:bg-blue-300'> -
        </button>
      </div>
    );
  }
}

export default App
