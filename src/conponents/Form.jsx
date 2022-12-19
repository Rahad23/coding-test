import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import UserCard from './userCard/UserCard';
const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
const SubmitedData = data => {
    const {city, email, firstname, lastname, phonenumber, stateProvince, zipPostal, img} = data;
const imgHostKey = process.env.REACT_APP_IMGBB_KEY;
    const image = img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
    .then(res => res.json())
    .then(imgData => {
      const { url } = imgData?.data;
      console.log(url);
      const userData = {
        city: city, 
        email: email, 
        firstname: firstname, 
        lastname : lastname, 
        phonenumber : phonenumber, 
        stateProvince : stateProvince, 
        zipPostal : zipPostal, 
        url : url
      }
      if (url) {
        fetch('http://localhost:5000/userSetData', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.acknowledged){
                swal("Success", "User created successfully", "success");
                reset();
            }
        })
    }
}
    )
};
    return (
        <div>
            <section className="p-6 dark:bg-[#ffff] dark:text-gray-50">
        <form novalidate="" onSubmit={handleSubmit(SubmitedData)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-600 mt-10 shadow-lg">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Create User</p>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label for="firstname" className="text-sm">First name</label>
                        <input id="firstname" type="text" {...register("firstname", { required: true })} placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label for="lastname" className="text-sm">Last name</label>
                        <input id="lastname" type="text" {...register("lastname", { required: true })} placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                    </div>
            <div className="col-span-full sm:col-span-3">
                        <label for="lastname" className="text-sm">Email</label>
                        <input id="lastname" type="text" {...register("email", { required: true })} placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label for="address" className="text-sm">Phone Number*</label>
                        <input id="address" type="number" {...register("phonenumber", { required: true })} placeholder="Phone number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="city" className="text-sm">City</label>
                        <input id="city" type="text" {...register("city", { required: true })} placeholder="City" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="state" className="text-sm">State / Province</label>
                        <input id="state" type="text" {...register("stateProvince", { required: true })} placeholder="State/Province" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="zip" className="text-sm">ZIP / Postal</label>
                        <input id="zip" type="number" {...register("zipPostal", { required: true })} placeholder="ZIP/Postal" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label for="file" className="text-sm">User Image</label>
                        <input id="file" type="file" {...register("img", { required: true })}  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2 border-2 border-sky-500" style={{color:"white"}} />
                    </div>
                    <div className="form-control mt-6 w-full">
              <button className="btn btn-primary w-full" type="submit">submit</button>
            </div>
                </div>
            </fieldset>
        </form>
    </section>
    <UserCard></UserCard>
        </div>
    );
};

export default Form;