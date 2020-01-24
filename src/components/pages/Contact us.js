import React, { Component } from 'react'
import {Link} from 'react-router-dom'

 class Contact extends Component {
    render() {
        return (
            <section className="my-5 py-5">
       <div className="container">
           <div className="well well-sm">
 <h3><strong>Our Location</strong></h3>
           </div>
     
           
            <div className="row">
            <div className="col-md-7">
          
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6040.197614574788!2d44.49591427342522!3d40.80382247621634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041bc1cc2a9ec57%3A0x34e4f0c6190c7ff4!2z1Y7VodW21aHVsdW41oA!5e0!3m2!1shy!2s!4v1579698948922!5m2!1shy!2s" width="640" height="480"></iframe>" 
                  
            </div>
            <div className="col-md-5">
            <h4><strong>Contact us</strong></h4>
            <form> 
                <div className="form-group">
            <input type="text" className="form-control" placeholder='Name'/>
                </div>
                <div className="form-group">
            <input type="email" className="form-control" placeholder='Email'/>
                </div>
                <div className="form-group">
            <input type="tel" className="form-control" placeholder='Phone'/>
                </div>
                <textarea className='form-control' cols='30' rows='3' placeholder='Message'/>
                <Link className='btn btn-outline-primary text-uppercase mt-1'>
                <i className='fa-paper-plane-o' aria-hidden="true"/>
                <i className='fab fa-telegram-plane-o' />&nbsp;Send
                </Link>
            </form>
            </div>
            </div>
            </div>
            </section>
        )
    }
}
export default Contact