import {UserInfoContainer,UserProfile,UserHead,UserPara} from './styled'

const UserInfo= ()=>{

    return(
        <UserInfoContainer>
            <UserProfile src="https://assets.ccbp.in/frontend/react-js/profile-img.png" alt="profile"/>
            <UserHead>Wade Warren</UserHead>
            <UserPara>Software Developer at UK</UserPara>
        </UserInfoContainer>
    )

}

export default UserInfo