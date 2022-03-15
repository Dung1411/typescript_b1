
import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

const myName: string = "Le thi dung";
const myStatus: boolean = true;
const myAge: number = 20;
const product: {id: number, name:string}= {id:1, name:"A"};

type ShowProps = {
  name: string
}
function show(props: ShowProps ): any{
console.log(props.name);
}

function Show(props: ShowProps): any{
console.log('props',props);
console.log(props.name);
return null;
}


ReactDOM.render(<div>
  <h1>Hello {myName}</h1>
  <div>{myStatus ? "Le dung" :"thay giao"}</div>
  <div>{myAge}</div>
  <div>{product.name}</div>
  <div>{show({ name: myName })}</div>

<div><Show name={myName}/></div>
</div>,document.querySelector('#root')
); 
