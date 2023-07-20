import React from 'react'
import FormInput from './input'
import Information from './information'
const Form = (props: any) => {
    return (
        <>
      <div className = "formnv" style={{display:'flex', padding:'10px'}}>
      <div className= "DottedBox" style={{padding:'30px'}}>
      <h3 style={{color: "rgb(232, 104, 164)"}} >Đăng Ký Tài Khoản</h3>
            < FormInput />
      </div>
       <div className="DottedBox_content" style={{padding:'30px'}}>
       <h3 style={{color:  "rgb(22, 147, 81)"}}>Thông Tin Công Việc</h3>
            <Information></Information>
            <button style={{background:  "rgb(22, 147, 81)",color:"rgb(254, 255, 255)"}}>Đăng Ký</button>
       </div>
          
         </div>
        </>
    )
}

export default Form
