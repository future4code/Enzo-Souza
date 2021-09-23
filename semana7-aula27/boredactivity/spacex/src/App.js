import "./styles.css"
import React from 'react'
import axios from 'axios'




 export default class  App extends React.Component {
  state ={
    activity: {}
  }


   getActivity = () => {
     axios
     .get("http://www.boredapi.com/api/activity/")
     .then((res) => {
       console.log(res.data)
       this.setState({activity: res.data})
     })
     .catch((erro) =>  {
       console.log(erro)
     })
   }


  render() {
    
   return (
     <div className="CardApp">
       <h2>Está entediado?</h2>
       <button onClick={this.getActivity}>CLIQUE AQUI</button>
       <hr/>
       <h3> Atividade: </h3>
       <p>Nome: {this.state.activity.activity}</p>
       <p>Tipo:{this.state.activity.type}</p>
       
     </div>
   );
  }
}
