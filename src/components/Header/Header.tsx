import React from 'react';
import './Header.scss';

interface IHeaderProps {
  name?: string;
  avatar_url?:string;
  bio?: string;
  location?:string;
  email?: string
}

const Header: React.FC<IHeaderProps> = ({name, avatar_url, bio, location, email}) => {
  return <div>
           <header className="Header" id='Header'>
             <h1>{name}</h1>
             <div className='bio'>
               <img className='avatar_url' src={avatar_url} />
               <p>{bio}</p>
               <p>{location}</p>
               <p>{email}</p>
             </div>
           </header>
         </div>
}


export default Header;
