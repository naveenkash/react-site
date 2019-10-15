import React from 'react'

function headerService(props) {
    return (
        <div className="header_service_img clearfix">
        <img src={props.service.img} alt="" />          
              <h3>{props.service.name}</h3>
      </div>
    )
}

export default headerService
