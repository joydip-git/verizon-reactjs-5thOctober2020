import React, { Component } from 'react'
import ProductList from '../../components/Product/ProductList/ProductList'
import * as ProductService from '../../service/productService'
import './ProductContainer.css'

export default class ProductContainer extends Component {
    state = {
        products: null
    }
    componentDidMount() {
        ProductService.getProducts()
            .then((resp) => this.setState({ products: resp.data }))
            .catch(e => console.log(e))
    }
    render() {
        const { products } = this.state;
        let design = <span>Loading...</span>;
        if (products !== null && products.length > 0) {
            design = (
                <div className='panel panel-primary panelStyle'>
                    <div className='panel panel-heading'>
                        <h4>{products.length} Record(s) found...</h4>
                    </div>
                    <div className='panel panel-body'>
                        <ProductList productList={this.state.products} />
                    </div>
                </div>
            );
        }
        return design;
    }
}
