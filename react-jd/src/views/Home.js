import React,{Component} from "react";
import "../assets/css/Home.css";



export default class Home extends Component{
	
	// 构造函数
	constructor(args){
		// 调用父类
		super(args);
		// 全局的数据，等效于 vue中的data
		this.state = {
			msg:'hello react.js',
			todos:['7：00 起床','8：00 出门','9:00打卡']
		};
	}
	
	
	inputChange(e){
		
		this.setState({
			msg:e.target.value
		});
		
	}
	
	// 渲染一个DOM，等效于 vue中的template
	render(){
		return (
			<div id="home">
			 	<h1>Home {this.state.msg}</h1>
			 	<input value={this.state.msg} onChange={ this.inputChange.bind(this) }  />
			 	
			 	<ul>
			 		{
			 			this.state.todos.map((item,index)=>{
			 				return (<li key={index} >{item}</li>)
			 			})
			 		}
			 	</ul>
			 	
			 	
			</div>
		);
	}
}
