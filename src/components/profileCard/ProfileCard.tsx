// import './ProfileCard.css'
// export default function ProfileCard({ avatar, firstname, lastname, profession, hobby }) {
//     return (
//         <div className="profile-card">
//                 <img src={avatar} alt={`${firstname} ${lastname}`} style={{ width: '100px', height: '100px' }} />
//             <p>Name: {firstname} {lastname}</p>
//             <p>Profession: {profession}</p>
//             <p>Hobby: {hobby}</p>
//         </div>
//     );
// }

import './ProfileCard.css'

interface IProfileCardProps {
    avatar: string;
    firstname: string;
    lastname: string;
    profession: string;
    hobby: string;
}


export default function ProfileCard({ avatar, firstname, lastname, profession, hobby }: IProfileCardProps) {
    return (
        <>
    
                <div className="profile-card">
                    <img src={avatar} alt={`${firstname} ${lastname}`} style={{ width: '100px', height: '100px' }} />
                    <p>Name: {firstname} {lastname}</p>
                    <p>Profession: {profession}</p>
                    <p>Hobby: {hobby}</p>
                </div>
            
        </>
    );
}