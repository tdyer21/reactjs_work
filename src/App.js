import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Seed from './seed.js';

// Product Component, used inside of ProductList
// And filled with data from seed.js
// Placeholder doing this as a version test
class Product extends React.Component {

    // Binding for data
    constructor(props){
        // Always call this first
        super(props);

        // There will typically be a set of custom
        // Method bindings here. 
        this.handleUpvote = this.handleUpvote.bind(this);
    }

    // Used for propagating the button click to actually
    // Update the vote count values
    handleUpvote() {
        this.props.onVote(this.props.id);
    }

    // How the product should be formatted
    render() {
        console.log(this.props.productImageUrl);
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl}
                         alt=' ' />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpvote}>
                            <i className='large caret up icon'/>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image'
                             src={this.props.submitterAvatarUrl}
                             alt=' '
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// Product list contains Product components
class ProductList extends React.Component {

    // Constructor for state
    constructor(props){
        super(props);

        this.state = {
            products: [],
        };
    }

    // Used to check if the upvote request worked
    handleProductUpvote(productId){
        console.log(productId + 'was upvoted');
    }

    // Sort products by vote count and display them
    render() {
        const products = this.state.seed.sort((a, b) => (
            b.votes - a.votes
        ));
        const productComponents = this.props.seed.map((product) => (
            <Product 
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpvote}
            />
        ));
        return (
            <div className='ui stackable items'>
                {productComponents}
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <ProductList 
                seed={Seed}
            />
        )
    }
}
// ReactDOM.render(
//     <ProductList />,
//     document.getElementById('content')
// );

export default App;