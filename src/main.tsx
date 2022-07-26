import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';
import './main.css'
import "@material-tailwind/react/tailwind.css";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));