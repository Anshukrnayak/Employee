import React from "react";
import { useForm } from 'react-hook-form';



const Form = ({handle_post}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit=(data)=>{
        console.log(data)
        handle_post(data)
    }


    return (
        <>

            <div className="container-fluid h-82 w-12">
                <div className="col-3">

                </div>
                <div className="col-6 mx-5 my-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" className="form-control border-primary" {...register('name')} />
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Location</label>
                            <input type="text" className="form-control border-primary" {...register('location')} />
                        </div>
                        <div class="mb-3 ">
                            <label class="form-check-label" >Salary</label>
                            <input type="number" className="form-control border-primary" {...register('salary')} />

                        </div>
                        <button type="submit" class="btn btn-primary my-4">Submit</button>
                    </form>

                </div>

            </div>


        </>
    )
}


export default Form;
