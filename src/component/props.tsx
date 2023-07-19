
import Avatar from 'react-avatar'
const Profile = (props:any) => {
    const {person, size, isSepia}= props
  return (
   <div className="card">
      <Avatar
        name={person}
        size={size}
        color={isSepia}

      />
    </div>
  )
}

export default Profile