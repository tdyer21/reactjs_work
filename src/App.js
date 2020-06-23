import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Product extends React.Component {
    render() {
        return (
            <div>
                something
            </div>
        );
    }
}

class ProductList extends React.Component {
    render() {
        return (
            <div className='ui stackable items'>
                Hello, I am a basic React component
            </div>
        );
    }
}
console.log('what');

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);