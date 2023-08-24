import { render } from 'preact'
import App from './App.jsx'
import { StoreProvider } from './context/StoreContext.jsx'

render(<div><StoreProvider><App /></StoreProvider></div>, document.getElementById('app'))
