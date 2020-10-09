import React, { Component } from 'react'
import ProductList from '../../components/Product/ProductList/ProductList'
import './ProductContainer.css'
import { getProductsAsync, getProductsInitiate } from '../../redux/actions/productActions'
import { connect } from 'react-redux'

class ProductContainer extends Component {

    getData = () => {

    }
    componentDidMount() {
        this.props.getProducts();
    }
    removeProduct = (productId) => {

    }

    render() {
        const { products, error, loading } = this.props;
        let design = <span>Loading...</span>;
        if (error !== '') {
            design = <span>{this.props.error}</span>
        }
        if (!loading) {
            design = (
                <div className='panel panel-primary panelStyle'>
                    <div className='panel panel-heading'>
                        <h4>{products.length} Record(s) found...</h4>
                    </div>
                    <div className='panel panel-body'>
                        <ProductList productList={products} removeCallback={this.removeProduct} />
                    </div>
                </div>
            );
        }
        return design;
    }
}

const mapStatePropertiesToCompProperties = (state) => {
    return {
        products: state.allProductsReducer.products,
        error: state.allProductsReducer.errorMessage,
        loading: state.allProductsReducer.loading
    }
}

const mapDispatcherToCompProperties = (dispatch) => {
    return {
        // getProducts: () => dispatch(getProductsAsync())
        getProducts: () => dispatch(getProductsInitiate())
    }
}

const hoc = connect(mapStatePropertiesToCompProperties, mapDispatcherToCompProperties);
export default hoc(ProductContainer);

