import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom'
import { getProductByIdAsync } from '../../../redux/actions/productActions'

// export default function ProductDetail({ match, history, location }) {
//    console.log(parseInt(match.params.id))
//     return (
//         <div>
//             Product Detail
//         </div>
//     )
// }

export default function ProductDetail() {
    const history = useHistory();
    const params = useParams();
    const product = useSelector(state => state.singleProductReducer.product)
    const error = useSelector(state => state.singleProductReducer.errorMessage)
    const loading = useSelector(state => state.singleProductReducer.loading)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductByIdAsync(parseInt(params.id)))
        return ()=>{
            window.alert('being unmounted')
        }
    }, [params.id])
    // const location = useLocation();

    //const [redirectState, setRedirectState] = useState(false);

    const redirectHandler = () => {
        // if (redirectState) {
        //     return <Redirect to='/products' />
        // }
        history.push('/products');
    }
    return (
        <div>
            {
                error !== '' && <span>{error}</span>

            }
            {
                loading ? <span>Loading...</span> : <span>Name:{product.productName}</span>
            }
            <br />
            <button onClick={redirectHandler} className='btn btn-success'>Ok</button>
            {/* <button className='btn btn-success' onClick={() => setRedirectState(true)}>Ok</button>
            {redirectHandler()} */}
        </div>
    )
}
