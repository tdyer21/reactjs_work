import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Product extends React.Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={require('./images/slug.png')}
                         alt=' ' />
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Sammy The Slug</a>
                        <p>University of California, Santa Cruz</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image'
                             src={require('./images/prof.jpg')}
                             alt=' '
                        />
                    </div>
                </div>
            </div>
        );
    }
}

class ProductList extends React.Component {
    render() {
        return (
            <div className='ui stackable items'>
                <Product />
            </div>
        );
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);