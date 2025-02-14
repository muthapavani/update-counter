import { Component } from "react"

class Singlecard extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            card:null
        }
    }
    increment =()=>{
        this.setState({count:this.state.count+1})
    }
    decrement =()=>{
        this.setState({count:this.state.count-1})
    }
    fetchproducts=()=>{
        fetch(`https://fakestoreapi.com/products/${this.state.count}`)
        .then(res=>res.text())
        .then(data=>this.setState({card:data}))
    }
    componentDidMount(){
        this.fetchproducts()
    }
    componentDidUpdate(prevprops,prevstate,shot){
        console.log(prevstate)
        if(prevstate.count !==this.state.count){
        this.fetchproducts()
        }
    }
    render(){
        return(<>
        <h1>{this.state.card && this.state.card.title}</h1>
        <div>
         {this.state.count}
        <button onClick={this.decrement}>previous</button>
        <button onClick={this.increment}>next</button>
        </div>
        </>)
    }
}
export default Singlecard