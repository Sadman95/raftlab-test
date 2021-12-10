import React from 'react';
import Info from './Info/Info';
import Users from './Users/Users';
import './Main.css'

const Main = () => {
    const users = [
        {
            id: 1,
            imgUrl: 'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png',
            name: 'Sameer',
            friends: ['Ayushi', 'Kamalnath Sharma']
        },
        {
            id: 2,
            imgUrl: 'https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png',
            name: 'Ayushi',
            friends: ['Sameer', 'Bhaskar']
        },
        {
            id: 3,
            imgUrl: 'https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png',
            name: 'Bhaskar',
            friends: ['Ayushi', 'Shanti Kumar Saha']
        },
        {
            id: 4,
            imgUrl: 'https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png',
            name: 'Kamalnath Sharma',
            friends: ['Sameer', 'Shanti Kumar Saha']
        },
        {
            id: 5,
            imgUrl: 'https://www.kindpng.com/picc/m/41-415494_profile-picture-in-circle-hd-png-download.png',
            name: 'Shanti Kumar Saha',
            friends: ['Kamalnath Sharma', 'Bhaskar']
        }
    ]
    return (
        <div className="container">
            <div className='main'>
                <Users users = {users}/>
                <Info/>
            </div>
        </div>
    );
};

export default Main;