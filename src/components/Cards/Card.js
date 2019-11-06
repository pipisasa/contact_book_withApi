import React from 'react'

import EditCard from './EditCard'

class Card extends React.Component{ 
    render(){
        const data = this.props.data;
        return(
        <li className="card-item">
            <div className="card-info">
                {!data.isEdit? (
                <>
                    <h2>{data.name}</h2>
                    <p>{data.phone}</p>
                </>) : 
                    <EditCard 
                    cancel={this.props.openEdit}
                    editContact={(contact)=>this.props.editContact(contact)}
                    data={data}/>
                }
            </div>
            <div className="card-btns">
                <button onClick={this.props.openEdit} className="btn-edit"></button>
                <button onClick={this.props.deleteContact} className="btn-delete"></button>
            </div>
        </li>
        )
    }
}

export default Card;