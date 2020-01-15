import React, { Component } from 'react';
import axios from 'axios'

import {Url} from '../utils/util'
import Header from '../template/pageHeader'
import Form from './todoForm'
import List from './todoList';


export default class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handlerMarkAsDone = this.handlerMarkAsDone.bind(this)
        this.handlerMarkAsPeding = this.handlerMarkAsPeding.bind(this)
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${Url}?sort=-createdAt${search}`).then(resp => this.setState({...this.state, description , list: resp.data }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description  = this.state.description
        axios.post(Url, { description}).then(resp => this.refresh())
    }

    handleRemove(todo){
        axios.delete(`${Url}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    handlerMarkAsDone(todo){
        axios.put(`${Url}/${todo._id}`, {...todo, done: true}).then(resp => this.refresh(this.state.description))
    }

    handlerMarkAsPeding(todo){
        axios.put(`${Url}/${todo._id}`, {...todo, done: false}).then(resp => this.refresh(this.state.description))
    }

    render(){
        return(
            <div>
                <Header name="Tarefas" small="Cadastro"/>
                <Form 
                    description={this.state.description}
                    handleChange={this.handleChange} 
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <List  
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handlerMarkAsDone={this.handlerMarkAsDone}
                    handlerMarkAsPeding={this.handlerMarkAsPeding}       
                />
            </div>
        )
    }
}