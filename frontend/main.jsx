import { render } from 'preact'
import App from './App.jsx'
import { StoreProvider } from './context/StoreContext.js'

render(<StoreProvider><App /></StoreProvider>, document.getElementById('app'))
