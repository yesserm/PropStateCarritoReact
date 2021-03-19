import React from 'react'

// puedes obtener todo el objeto props o {titulo}
const Header = ({titulo}) => {
    return ( 
        <div>
            <h1>{titulo}</h1>
        </div>
     );
}
 
export default Header;
