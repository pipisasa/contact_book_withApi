import React from 'react'

import './Cards.css'

let PhoneRegExp = /^\+?\d{9,}$/;

class EditCard extends React.Component{
    state={
        name: this.props.data.name,
        phone: this.props.data.phone,
        isEdit: false,
    }
    componentDidMount(){
        document.querySelector('.edit-name-input').value = this.state.name;
        document.querySelector('.edit-phone-input').value = this.state.phone;
    }
    inputName=(e)=>{
        this.setState({ name: e.target.value })
    }
    inputPhone=(e)=>{
        this.setState({ phone: e.target.value })
    }
    handleEnter=(e)=>{
        let nameInpt = document.querySelector('.edit-name-input')
        let phoneInpt = document.querySelector('.edit-phone-input')
        if((e.key==='Enter' && e.target.value!=='') || e.type==='click'){
            if(e.target===nameInpt){
                phoneInpt.focus()
            }else if(PhoneRegExp.test(this.state.phone) && this.state.name){
                this.editContact()
            }
        }  
    }
    editContact = ()=>{
        this.props.editContact(this.state)
    }
    render(){
        return(
            <div className="card-edit">
                <div className="edit-inputs">
                    <p>full name:</p>
                    <input 
                        onInput={this.inputName}
                        onKeyDown={(e)=>this.handleEnter(e)} 
                        className="edit-name-input" />
                    <p>phone:</p>
                    <input 
                        onInput={this.inputPhone}
                        onKeyDown={(e)=>this.handleEnter(e)} 
                        className="edit-phone-input" />
                </div>
                <div className="edit-inpt-btns">
                    <button 
                        onClick={this.props.cancel}
                        className="edit-cancel-btn">
                            Cancel
                    </button>
                    <button 
                        onClick={(e)=>this.handleEnter(e)}
                        className="edit-add-btn">
                            Ok
                    </button>
                </div>
            </div>
        )
    }
}

export default EditCard;