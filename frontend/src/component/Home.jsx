import React from "react"

const Home = (props) => {
    const { data,handle_delete } = props

    return (
        <>


            <table class="table text-center my-5 ">
                <thead>
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Joining Date</th>
                        <th> Action  </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row"> {item.id} </th>
                                        <td> {item.name} </td>
                                        <td> {item.salary} </td>
                                        <td> {item.joining_date} </td>
                                        <td>
                                            <button className="bg-primary btn mx-4 text-white  ">Edit</button>
                                            <button onClick={()=>handle_delete(item.id)}
                                             className="bg-danger btn mx-4 text-white  ">Delete</button>
                                        </td>
                                    </tr>

                                </>
                            )
                        })
                    }


                </tbody>
            </table>





        </>
    )
}

export default Home;
