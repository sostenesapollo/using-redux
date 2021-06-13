import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class t extends Component {
    state = {
        modules: [
            {id:1, title:"aula 1"},
            {id:2, title:"aula 2"},
            {id:3, title:"aula 3"},
            {id:4, title:"aula 4"}
        ]
    }
    render() {
        const {modules} = this.state
        return (
            <div>
                <aside>
                    {
                        modules.map(module=>(
                            <div key="module.id">
                                {module.title}
                            </div> 
                        ))
                    }
                </aside>
            </div>
        )
    }
}
