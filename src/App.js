import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Seed from './seed.js';

class Product extends React.Component {

    constructor(props){
        super(props);
        this.handleUpvote = this.handleUpvote.bind(this);
    }

    handleUpvote() {
        this.props.onVote(this.props.id);
    }

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

class ProductList extends React.Component {

    handleProductUpvote(productId){
        console.log(productId + 'was upvoted');
    }

    render() {
        const products = this.props.seed.sort((a, b) => (
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