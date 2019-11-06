import React from 'react'

import './NewContact.css'

let PhoneRegExp = /^\+?\d{9,}$/;

class NewContact extends React.Component{
    state={
        name:'',
        phone:'',
    }
    inputName=(e)=>{
        e.stopPropagation()
        this.setState({
            name: e.target.value
        }) 
    }
    inputPhone=(e)=>{
        e.stopPropagation()
        this.setState({
            phone: e.target.value
        })
    }
    enterInputs = (e)=>{
        let nameInpt = document.querySelector('.new-contact-name-input')
        let phoneInpt = document.querySelector('.new-contact-phone-input')
        let name = this.state.name;
        let phone = this.state.phone;

        if((e.key==='Enter' && e.target.value!=='') || e.type==='click'){
            if(e.target===nameInpt){
                phoneInpt.focus()
            }else if(PhoneRegExp.test(phone) && name){
                this.props.enterNewContact({name,phone});
                this.props.goBack();
            }
        }  

    }

    render(){
        return(
        <>
            <div onClick={this.props.goBack} className="modal-background">
            </div>
                <div className="new-contact-form">
                    <div className="modal-header">
                        <h2>Create_new_contact</h2>
                        <div onClick={this.props.goBack} className="modal-escape">x</div>
                    </div>
                    <div className="new-contact-inputs">
                        <p>full name:</p>
                        <input
                            onInput={this.inputName}
                            onKeyDown={(e)=>{this.enterInputs(e)}} 
                            className="new-contact-name-input" />
                        <p>phone:</p>
                        <input 
                            onInput={this.inputPhone} 
                            onKeyDown={(e)=>{this.enterInputs(e)}} 
                            className="new-contact-phone-input" />
                    </div>
                    <div className="new-contact-inpt-btns">
                        <button 
                            onClick={this.props.goBack} 
                            className="new-contact-cancel btn">
                                Cancel
                        </button>
                        <button 
                            onClick={(e)=>{this.enterInputs(e)}} 
                            className="new-contact-add btn">
                                Ok
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default NewContact;