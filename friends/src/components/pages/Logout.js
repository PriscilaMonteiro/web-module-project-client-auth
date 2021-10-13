// import React from 'react';
// import '../../App.css';

// export default function logout() {
//   return <h1 className='contact-us'>Logout</h1>;
// }



import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import '../../App.css';


const Logout = (props)=> {
    useEffect(()=> {
        axiosWithAuth()
            .post('/api/logout')
            .then(res => {
              localStorage.removeItem("token");
              props.history.push('/login');
            }).catch((err) => console.log(err.message));
    }, []);

    return(<div></div>);
}

export default Logout;


