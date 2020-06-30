import React from 'react';
import './Header.scss';

interface IHeaderProps {
  name?: string;
}

const Header: React.FC<IHeaderProps> = ({name}) => {
  return  <div className="Header">
              Hello {name} from Header
          </div>
}


export default Header;
