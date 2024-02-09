import {UseAuth} from './LanguageContext'
import { Component } from 'react'
import { UserLanguage } from './LanguageContext';



export class Product extends Component{
  static contextType = UserLanguage;
    constructor(props)
    {
      super(props);
      
    }

    render(){
    
    return <>
       <h2>Product Component</h2>
       <h3>{this.context.getLanguage}</h3>
     </>
    }
}

