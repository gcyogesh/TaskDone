import React, { useEffect, useState } from 'react';
import { tabledata } from '../../types/Type';

const TableBody = () => {

  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);



  // for fetching data i mean display 
const api = "https://taskdone-jxtp.onrender.com/api/contact";
  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const result = await response.json();
      setData(result)
      setLoading(false  )
    } catch (error) {
      console.log(error, "Error getting data from your api")
    }

  }

  useEffect(() => {
    fetchData();
  }, []);

  // for detele purpose 

  const handleDelete = async(_id:number)=>{

    try{
      const response = await fetch(`${api}/${_id}`, {
        method:"DELETE",
      }) 
      const result = await response.json();
      console.log(result)
      fetchData();


    }catch(error){
      console.log(error, "Error Deleting data from your api")
    }
  }


  
  
  return (
    <React.Fragment>


       
       
       
       
       
       <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">I have fetched data from database here.</h2>
            <p className="text-lg leading-relaxed  mt-3 text-gray-600">
              Thinking Of CRUD(I Think i DID Whole CRUD Lol)
            </p>
          </div>
        </div>
      </div>



     {loading? (<p>Loading...</p>):(

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Get In Touch
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {data.map((item: tabledata) => {
              const { _id, name, email, phone, getInTouch, message } = item;
              
              return (
                
                
                <tr key={_id} className="odd:bg-white odd:dark:bg-gray-400 border-b dark:border-gray-700">
                  <td className="px-6 py-4 text-black">{_id}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
                    >
                    {name}
                  </td>
                  <td className="px-6 py-4 text-black">{email}</td>
                  <td className="px-6 py-4 text-black">{phone}</td>
                  <td className="px-6 py-4 text-black">{getInTouch}</td>
                  <td className="px-6 py-4 text-black">{message}</td>
                  <td className="px-6 py-4 text-black">
                    <button className="py-2 px-3 mr-2 bg-red-600 hover:bg-yellow-300  text-white hover:text-yellow-800 rounded transition duration-300" onClick={()=> handleDelete(_id)}>Delete</button>
                    <button className="py-2 px-3 bg-blue-600 hover:bg-yellow-300 text-white hover:text-yellow-800 rounded transition duration-300 " >Edit</button>

                  </td>

                </tr>
              )
            })}

          </tbody>
        </table>

      </div>
    )}
    </React.Fragment>
  );
};

export default TableBody;
