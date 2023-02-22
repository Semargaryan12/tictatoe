import React from "react";

export default class Tictactoe extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: new Array(9).fill(null),
      count: 0,
    };
  }

  winnerLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  checkClick = (e) => {
    let data = e.target.getAttribute("data");
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = this.state.count % 2 === 0 ? "X" : "O";
      this.setState({ squares: currentSquares });
      this.setState({ count: this.state.count + 1 });
    }
    this.winner();
  };

  winner = () => {
    let win = this.state.count % 2 === 0 ? "X" : "O";
    for (let i = 0; i < this.winnerLine.length; i++) {
      let line = this.winnerLine[i];
      if (
        this.state.squares[line[0]] === win &&
        this.state.squares[line[1]] === win &&
        this.state.squares[line[2]] === win
      ) {
        setTimeout(() => {
          alert(win + " is won");
          this.setState({ count: 0 });
          this.setState({ squares: new Array(9).fill(null) });
        }, 600);
      } else if (!win ? "X" : "O" && this.state.count >= 8) {
        setTimeout(() => {
          alert("it's a draw");
          this.setState({ count: 0 });
          this.setState({ squares: new Array(9).fill(null) });
        }, 600);
        return;
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="tictactoe">
          <div className="cell" data="0" onClick={this.checkClick}>
            {this.state.squares[0]}
          </div>
          <div className="cell" data="1" onClick={this.checkClick}>
            {this.state.squares[1]}
          </div>
          <div className="cell" data="2" onClick={this.checkClick}>
            {this.state.squares[2]}
          </div>
          <div className="cell" data="3" onClick={this.checkClick}>
            {this.state.squares[3]}
          </div>
          <div className="cell" data="4" onClick={this.checkClick}>
            {this.state.squares[4]}
          </div>
          <div className="cell" data="5" onClick={this.checkClick}>
            {this.state.squares[5]}
          </div>
          <div className="cell" data="6" onClick={this.checkClick}>
            {this.state.squares[6]}
          </div>
          <div className="cell" data="7" onClick={this.checkClick}>
            {this.state.squares[7]}
          </div>
          <div className="cell" data="8" onClick={this.checkClick}>
            {this.state.squares[8]}
          </div>
        </div>
        <button
          onClick={() => {
            this.setState({ count: 0 });
            this.setState({ squares: new Array(9).fill(null) });
          }}
        >
          Refresh
        </button>
        <h2>{}</h2>
      </div>
    );
  }
}
