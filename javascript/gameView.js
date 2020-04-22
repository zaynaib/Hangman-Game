'use strict';

const e = React.createElement;

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        // return e(
        //     'button', {
        //         // onClick: () => this.setState({
        //         //     liked: true
        //         // })
        //     },
        //     'Like'
        // );

        return (
            <button onClick={() => this.setState({ liked: true })}>
              Like
            </button>
          );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(View), domContainer);