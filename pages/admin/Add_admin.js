import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/admin/component/layout"

export default function AddAdmin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [success, setSuccess] = useState('')
    
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('admin_name', data.admin_name);
        formData.append('user_name', data.user_name);
        formData.append('password', data.password);
        formData.append('phoneNo', data.phoneNo);
        formData.append('email', data.email);
        formData.append('address', data.address);
        formData.append('joining_year', data.joining_year);
        formData.append('birth_date', data.birth_date);
        formData.append('myfile', data.myfile[0]);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/admin/addAdmin",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
          

            setSuccess('Admin add successfully');
            reset();

        }
        catch (error) {
            console.log(error);
            
            setSuccess('Admin add unsuccessfull ' + error);

        }


    };

    return (
        <>
            <MyLayout title="Add Admin" />
            <h1>Add Admin</h1>
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                <div>
                    <label htmlFor="admin_name">admin_name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('admin_name', { required: true })}
                    />
                    {errors.name && <p>Name is required</p>}
                </div>

                <div>
                    <label htmlFor="user_name">user_name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('user_name', { required: true })}
                    />
                    {errors.name && <p>Name is required</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: true,  minLength: 5 })}
                    />
                    {errors.password && (
                        <p>
                            {errors.password.type === 'required'
                                ? 'password is required'
                                : 'Invalid password address'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="phoneNo">phoneNo</label>
                    <input
                        type="text"
                        id="joining_year" {...register('phoneNo', { required: true })} />
                    {errors.phoneNo && <p>phoneNo is required</p>}
                </div>



                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                ? 'Email is required'
                                : 'Invalid email address'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="address">address</label>
                    <textarea id="address" {...register('address', { required: true })} />
                    {errors.address && <p>address is required</p>}
                </div>
                <div>
                    <label htmlFor="joining_year">joining_year</label>
                    <input
                        type="text"
                        id="joining_year"
                        {...register('joining_year', { required: true })}
                    />
                    {errors.joining_year && <p>joining_year is required</p>}
                </div>
                
                <div>
                    <label htmlFor="birth_year">birth_year</label>
                    <input
                        type="text"
                        id="joining_year"
                        {...register('joining_year', { required: true })}
                    />
                    {errors.birth_year && <p>birth_year is required</p>}
                </div>




                

              


                <div>
                    <label htmlFor="file">File</label>
                    <input
                        type="file"
                        id="myfile"
                        {...register('myfile', { required: true })}
                    />
                    {errors.myfile && <p>File is required</p>}
                </div>


                <button type="submit">Submit</button>
            </form>
        </>
    );
}

  