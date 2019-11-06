import React from 'react'

import './Cards.css'
import Card from './Card'

class Cards extends React.Component{
    render(){

        const data = this.props.data;
        const openEdit = this.props.openEdit;
        const deleteContact = this.props.deleteContact;
        const editContact = this.props.editContact;
        return(
            <ul className="card-list">
                {data.map( (item, i) => ( 
                    <Card 
                        openEdit = {()=>{openEdit(i)}}
                        deleteContact = {()=>deleteContact(item.id)}
                        editContact = {(contact)=>{editContact(item.id,contact)}}
                        data={item} 
                        key={i} 
                    /> ) )}
            </ul>
        )
    }
}

export default Cards;