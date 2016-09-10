// Any JS in here is automatically ran for us

// Import the React library
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// Create a component
class App extends Component {

    constructor(props){
        // Callbacks for super class constructor
        super(props);

        // state contains an image property that is an empty array
        this.state = {images:[]};
    }
    // Always available for all Component classes
    componentWillMount(){
        // Good place to load data
        // Only called once per instance of the component
        // Set state is in charge of trigger the render function
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({images :response.data.data}));
        //NEVER DO THIS : this.state.images = [{}, {}];

    }

    render(){
        return (
            // Root component is a <div>
            <div>
                <ImageList images = {this.state.images}/>
            </div>

        );
    }
}

// Render this component to the screen only do once for the root component
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
