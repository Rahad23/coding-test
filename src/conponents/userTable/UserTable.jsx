import React from 'react';

const UserTable = ({data}) => {
    console.log(data)
    return (
        <div className='mt-10 container mx-auto'>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>User-Img</th>
        <th>User-Name</th>
        <th>Phone-Number</th>
        <th>State/Province</th>
        <th>ZIP/Postal</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        data && 
        data.map((userData, i)=>
            <tr>
        <th>{i+1}</th>
        <td><img className='w-20 rounded-lg' src={userData?.url} alt="" /> </td>
        <td>{userData?.firstname +" "+ userData?.lastname}</td>
        <td>{userData?.phonenumber}</td>
        <td>{userData?.stateProvince}</td>
        <td>{userData?.zipPostal}</td>
        <td>
        <div className="dropdown dropdown-bottom">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
    <li><button className="btn btn-active hover:bg-[#0652DD] text-white bg-[#0652DD] p-2 border-none">Edit</button></li>
    <li><button className="btn btn-active hover:bg-[#EA2027] text-white bg-[#EA2027] mt-2 p-2 border-none">Delete</button></li>
  </ul>
</div>
        </td>
      </tr>
      )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserTable;