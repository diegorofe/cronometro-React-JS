import React, { Component } from 'react';
import Cronometro from './assets/cronometro-color.png'
import './style.css'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            numero: 0,
            btnIniciar: "Iniciar",
            btnLimpar: "Limpar"
        };

        //armazena o timer
        this.timer = null;

        this.iniciar = this.iniciar.bind(this);
        this.limpar = this.limpar.bind(this);
    }


    iniciar() {
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.btnIniciar = "Iniciar"
        }else{
        this.timer = setInterval( () =>{
            let state = this.state;
            state.numero += 0.1;
            this.setState(state);
           
        }, 100);
        state.btnIniciar = "Parar"
        }
        this.setState(state);
    }

    limpar() {
        
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }

        state.numero = 0;
        state.btnIniciar = "Iniciar" 
        this.setState(state);
        
    }
    render(){
        return(
            <div className='container'>
              <img src={Cronometro} className='img'/>
              <a className='timer'>{this.state.numero.toFixed(1)}</a>
              <div className='areaBtn'>
                  <button className='botao' onClick={this.iniciar}>{this.state.btnIniciar}</button>
                  <button className='botao' onClick={this.limpar}>{this.state.btnLimpar}</button>
              </div>
            </div>
        )
    }
}