import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Cards from '../Cards/Cards'
import NewContact from '../NewContact/NewContact'

import {
    openEdit,
    fetchData
} from '../../actions/index'

class ContactBook extends React.Component{
    constructor(state){
        super()
        this.state = state
    }
    fetchData = async () => {
        this.props.dispatch( await fetchData() );
    }
    componentDidMount(){
        this.fetchData()
    }
    enterNewContact = async (contact)=>{
        const data = [...this.props.data];
        contact.id = data[data.length-1].id+1;
        const response = await axios.post('http://192.168.88.222:3000/contacts',contact)
        if(response.statusText==='Created') this.fetchData();
    }
    openEdit = (i)=>{
        this.props.dispatch( openEdit(i, this.props.data) )
    }
    deleteContact = async (id)=>{
        let response = await axios.delete(`http://192.168.88.222:3000/contacts/${id}`);
        if(response.statusText==='OK') this.fetchData()
    }
    editContact = async (id, contact)=>{
        const response = await axios.put(`http://192.168.88.222:3000/contacts/${id}`,contact);
        if(response.statusText==='OK') this.fetchData()
    }
    openNewContact = ()=>{
        this.setState({
            isOpenNewContact: !this.state.isOpenNewContact
        })
    }
    render(){
        // console.log(this.props)
        return(
            <>  
                <h1 className="header">ContactBook</h1>
                {this.state.isOpenNewContact?
                    <NewContact 
                        goBack={this.openNewContact}
                        data={this.props.data} 
                        enterNewContact={this.enterNewContact} /> : 
                    <button onClick={this.openNewContact} className="new-contact-open">Add</button>
                }
                <div className='container'>
                    <Cards 
                        editContact = {this.editContact}
                        deleteContact = {this.deleteContact}
                        openEdit = {this.openEdit}
                        data={this.props.data}/>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(ContactBook);
    