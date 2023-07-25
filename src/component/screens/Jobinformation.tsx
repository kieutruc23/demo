import React from 'react'

const Information = (props: any) => {
    const { maNV, user, team, location, counter } = props
    return (
        <>
           <div className= "formNV">
           <form>
                <div>
                    <label htmlFor="maNV">Mã nhân viên</label>
                    <br />
                    <input type="text" name="maNV" value={maNV} />
                    <br />
                </div>
                <div>
                    <label htmlFor="user">Thông Tin Người Dùng</label>
                    <br />
                    <select name="user" value={user}>
                        <option value="">Chọn Loại người dùng</option>
                        <option value="user">Nam </option>
                        <option value="user">Nữ</option>
                        <option value="user">Khác</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="user">Nhóm</label>
                    <br />
                    <select name="user" value={team}>
                        <option value="team">Nhóm 1</option>
                        <option value="team">Nhóm 2</option>
                        <option value="team">Nhóm 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="location">Vị Trí</label>
                    <br />
                    <select name="location" value={location}>
                        <option value="location">Hà Nội</option>
                        <option value="location">Đông Anh</option>
                        <option value="location">TP HCM</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="counter">Quầy</label>
                    <br />
                    <select name=" counter" value={location}>
                        <option value=" counter">Quầy 1</option>
                        <option value=" counter">Quầy 2</option>
                        <option value="counter">Quầy 3</option>
                    </select>
                </div>
            </form>
           </div>

        </>
    )
}

export default Information