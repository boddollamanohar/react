import React from 'react'
import Product from './product/Product'
import { store } from './redux/Store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h1>App Component</h1>
                <hr />
                <Product />
            </Provider>
            <Counter/>
        </div>
    )
}

export default App