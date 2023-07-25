import React from 'react'

const FormInput = (props: any) => {
    const { name, numberphone, email, gender, address, cccd, date, issued } = props
    return (
        <>
          <div>
            <form>
            <div>
                <label htmlFor="name">Họ và Tên</label>
                <br />
                <input type="text" name="name" value={name} />
                <br />
            </div>
            <div>
                <label htmlFor="numberphone">Số Điện Thoại</label>
                <br />
                <input type="number" name="numberphone" value={numberphone} />
                <br />
            </div>
            <div>
                <label htmlFor="gender">Giới Tính</label>
                <br />
                <select name="gender" value={gender}>
                    <option value="">Chọn giới tính</option>
                    <option value="gender">Nam </option>
                    <option value="gender">Nữ</option>
                    <option value="gender">Khác</option>
                </select>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" name="email" value={email} />
                <br />
            </div>
            <div>
                <label htmlFor="address">Địa Chỉ</label>
                <br />
                <input type="text" name="address" value={address} />
                <br />
            </div>
            <div>
                <label htmlFor="cccd">Nhập số cccd/CMT</label>
                <br />
                <input type="number" name="cccd" value={cccd} />
                <br />
            </div>
            <div>
                <label htmlFor="cccd">Date</label>
                <br />
                <input type="number" name="date" value={date} />
                <br />
            </div>
            <div>
                <label htmlFor="cccd">Nơi Cấp</label>
                <br />
                <input type="text" name="issued" value={issued} />
                <br />
            </div>
      
            </form>
            </div>  
          
        </>
      
    )
}

export default FormInput
