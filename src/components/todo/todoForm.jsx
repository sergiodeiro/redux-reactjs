import React from 'react'
import Grid from '../template/grid'
import IconBtt from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ?  props.handleAdd() : props.handleSearch()
        } else if(e.key === 'Escape') {
            props.handleClear()
        }
    }

    return(
        <div role="form" className="todoForm"> 
            <Grid cols="12 9 10">
                <input id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa" 
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}
                />
            </Grid>
            <Grid cols="12 3 2">
                <IconBtt  onClick={props.handleAdd} style='primary' icon='plus'/>
                <IconBtt  onClick={props.handleSearch} style='info' icon='search'/>
                <IconBtt  onClick={props.handleClear} style='default' icon='close'/>
            </Grid> 
        </div>
    )
}