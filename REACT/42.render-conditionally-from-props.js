
class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {/* Change code below this line */}
        return (
            <div>
                {
                    //  Using props to conditionally render code is very common with React developers
                    this.props.fiftyFifty < .5
                        ? <h1>You win!</h1>
                        : <h1>You lose!</h1>
                }
            </div>
        )
        {/* Change code above this line */}
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            // Complete the return statement:
            console.log(prevState.counter)
            return {
                counter: prevState.counter + 1
            }
        });
    }
    render() {
        const expression = Math.random(); // Change this line
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                {/* Change code below this line */}
                <Results fiftyFifty={expression} />
                {/* Change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}
