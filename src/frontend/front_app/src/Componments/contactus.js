import React, { Component } from 'react';
import '../aaa.css'
class contactus extends Component {
    render() {
        return (
<div class="content">
<form action="">
        <div class="form_sel">
            <h1 class="conthead">Contact Us</h1>
            <hr/>
            <p>Your Name:<input type="text" placeholder="your name"/> </p>
            <p>E-mail: <input type="email" placeholder="example@gmail.com"/> </p>
            <p>Mobile No.: <input type="number" placeholder="Your mobile number"/> </p>
          <p>Message: <textarea name="message" id="" cols="80" rows="10" placeholder="write  your message here"></textarea> </p> 
            <p>Subject: <input type="text" placeholder="job inquiery" /> </p>
            <input type="submit" value="Message "/>
        </div>
    </form>
    <br/>
<br/>
</div>

        );
    }
}

export default contactus;