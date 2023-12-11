import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';



const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const { name, email, contact } = data;
      const res = await axios.post('/addUser', {
        name, email, contact
      });
      Swal.fire({
        title: 'Confirmation Message',
        text: 'Record added to DB sucessfully',
        icon: 'success', 
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={addUser}>
        <input className=' border-2 border-gray-200 p-1 m-2 rounded-md' type='text' placeholder='Name' onChange={(e) => setData({ ...data, name: e.target.value })} />
        <input className=' border-2 border-gray-200 p-1 m-2 rounded-md' type='text' placeholder='Email' onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input className=' border-2 border-gray-200 p-1 m-2 rounded-md' type='text' placeholder='Contact' onChange={(e) => setData({ ...data, contact: e.target.value })} />
        <button type='submit' className='bg-green-500 text-white py-1 px-2 mx-1 my-2 rounded-md'>Add</button>
      </form>
    </div>
  );
}

export default Form;
