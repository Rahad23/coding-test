import React, { useEffect, useState } from 'react';
import UserTable from '../userTable/UserTable';

const UserCard = () => {
    const [userData, setUserData] = useState();
    console.log(userData);
    useEffect(()=>{
        fetch('http://localhost:5000/userData')
        .then(res=>res.json())
        .then(data=>setUserData(data))
    },[])
    return (
        <section className="mt-10">
        <h1 className="text-4xl font-bold text-center text-black">Total user <span>{userData?.length}</span></h1>
        <UserTable data={userData}></UserTable>
      </section>
    );
};

export default UserCard;