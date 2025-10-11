import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className="T1">
      <h3>Contact information</h3>
      <br />
      <div className="TT">
      <div className="T2">
        <h4>Send Us a Message</h4>
        <br />
        <label>
          Full Name:
        </label>
        <br />
        <input type="text" placeholder='Enter your Name'/>
        <br />
        <label>
          School Name:
        </label>
        <br />
        <input type="text" placeholder='Enter your School Name'/>
        <br />
         <label>
          Email Adress:
        </label>
        <br />
        <input type="text" placeholder='Enter your Email'/>

      </div>
      <div className="T5">
       <h4>Get In Touch
       </h4>
       <p>Allied School</p>
       <p>0315-479-6659</p>
       <p>support@edulearn.com</p>
       <p>Support Me</p>
       {/* <div className="T6"> */}
         <a href="https://www.facebook.com/"> <img
            src="data:image/png;base64,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"
            width="50px" height="50px"/></a>

        <a href="https://twitter.com/"><img
                src="data:image/png;base64,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"
                height="50px" width="50px"/></a>

               <a href="https://www.instagram.com/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEUKZsL///8AYsDo7fdjiM0AV725yecAX8AAXL+dtt9sldIAZMHr8PgAVb3O2e4fbcUAUrz0+PyTrtzH1u0ucsYATLpDfck5eciOqNrf6PVdis6AoNdlkdGmvOJljc/Czemww+VTg8zX4PHtcv3dAAACjUlEQVR4nO2b0ZKiMBBFQ6MmGhAQHUVwFP7/IwecUSHB2Y3bZajae54sI3Iq3YROo0IAAAAAAAAAAAAAADBEE5HWvi36aCnF9mMvSJJvlTtSH/Kgo9js575lflDHMLiRHdQkYqjKoE+e+hZqUVUw5KR8KwmdRIZU8Ok92+XSdAoK3wHUFFpSwdbzVNHWdgo2nrNKmmnesfC8WMlyROrsW2o1QSnaj0gtPeeUFpktdZR+pYS8WE7ZzrOTkMfJrQgtsbmkn30HT3QFXj4MnvZ+62vR6abntKBJ1FNt9VLfJqsop1MQU6yqzWlZJukE8umBlkqp6cwSeAO6w7dEH5KSuk01tS/4xdrdscHjHGSM0P2YdF+e8iKKwiZfltuY20tXK4PkdgaqjZHj9/uSqqZfXERNpVnXEk3WFmt2m5D4bIw0bakj9HxVWDfxYjVnnKyR7cxdar4wRtatlExM1W9ywbfKOUq1t6SRPdmVqGYreRylVP1EqSWruRLLTUp+jFTPj7ni2sU6SllXxYCCqY/kJHW2C/ohTJW0k9Sf4Qkgs9QlnqBUtuXIKmap4MCRVdxSOUdSvSr1bL3KBEP8XpFal3KX7tSqGRusGabKXSqr5DVvtJKbkWGOpHKWKnqlUzpidWZYFJylkn54yI5gw9BbdpWqBtEZaZmGDG1AR6m10WpIbSmGet1RqjTSOM7NT4QMHRJHKfOMykr190sVZueRrO7y+6Ws650+/UudzEuLZv6lrA47pCAFKUhBClKQghSkIAUpSEEKUpD676SeP0N+SSpikWqicMhD6hINyaxHZzQzDo4ajt86df8jGHL/0v63J1ecDv8nK5NfhkZO+BcfAQAAAAAAAAAAAABgSnwBGlMvthfUovwAAAAASUVORK5CYII="
            height="50px" width="50px"/></a>

       {/* </div> */}
       </div>
      </div>
    </div>
  )
}

export default Contact
