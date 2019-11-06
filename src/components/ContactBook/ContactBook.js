import React from 'react'
import axios from 'axios'

import Cards from '../Cards/Cards'
import NewContact from '../NewContact/NewContact'

class ContactBook extends React.Component{
    state = {
        data:[],
        inputVal:'',
        isOpenNewContact: false,
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData= async ()=>{
        const response = await axios.get('http://localhost:3000/contacts');
        this.setState({data: response.data})
    }
    enterNewContact = async (contact)=>{
        const data = [...this.state.data];
        contact.id = data[data.length-1].id+1;
        const response = await axios.post('http://localhost:3000/contacts',contact)
        if(response.statusText==='Created'){this.fetchData()};
    }
    openEdit = (index)=>{
        const data = [...this.state.data];
        data.forEach((item,i)=>{
            i===index ? data[i].isEdit=!data[i].isEdit : item.isEdit=false;
        })
        this.setState({
            data
        })
    }
    deleteContact = async (id)=>{
        let response = await axios.delete(`http://localhost:3000/contacts/${id}`);
        if(response.statusText==='OK') this.fetchData()
    }
    editContact = async (id, contact)=>{
        const response = await axios.put(`http://localhost:3000/contacts/${id}`,contact);
        if(response.statusText==='OK') this.fetchData()
    }
    openNewContact = ()=>{
        this.setState({
            isOpenNewContact: !this.state.isOpenNewContact
        })
    }
    render(){
        return(
            <>  
                <h1 className="header">ContactBook</h1>
                {this.state.isOpenNewContact?
                    <NewContact 
                        goBack={this.openNewContact}
                        data={this.state.data} 
                        enterNewContact={this.enterNewContact} /> : 
                    <button onClick={this.openNewContact} className="new-contact-open">Add</button>
                }
                <div className='container'>
                    <Cards 
                        editContact = {this.editContact}
                        deleteContact = {this.deleteContact}
                        openEdit = {this.openEdit}
                        data={this.state.data}/>
                </div>
            </>
        )
    }
}

export default ContactBook;