import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const DisplayRecords = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await axios.get('getDetails');
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, []);

  const deleteRecord = async (id) => {
    try {
      const res = await axios.post('/deleteRecord', {
        id: id
      });
      Swal.fire({
        title: 'Confirmation Message',
        text: 'Record deleted from DB sucessfully',
        icon: 'warning', 
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const showNextArrow = data.length > endIdx;
  const showPrevArrow = currentPage > 1;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <table className='min-w-full bg-white border border-gray-300 transition-all duration-500 ease-in-out'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='py-2 px-4 border-b border-r'>SI.NO</th>
            <th className='py-2 px-4 border-b border-r'>ID</th>
            <th className='py-2 px-4 border-b border-r'>Name</th>
            <th className='py-2 px-4 border-b border-r'>Email</th>
            <th className='py-2 px-4 border-b border-r'>Contact</th>
            <th className='py-2 px-4 border-b'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIdx, endIdx).map((record, index) => (
            <tr key={record.id} className={(index % 2 === 0) ? 'bg-blue-50' : 'bg-white'}>
              <td className='py-2 px-4 border-b border-r text-center'>{index + 1 + startIdx}</td>
              <td className='py-2 px-4 border-b border-r text-center'>{record.ID}</td>
              <td className='py-2 px-4 border-b border-r text-center'>{record.NAME}</td>
              <td className='py-2 px-4 border-b border-r text-center'>{record.EMAIL}</td>
              <td className='py-2 px-4 border-b border-r text-center'>{record.CONTACT}</td>
              <td className='py-2 px-4 border-b text-center'>
                <button className='bg-red-500 text-white py-1 px-2 mx-1 my-2 rounded-md' onClick={() => deleteRecord(record.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='mt-4'>
        {showPrevArrow && (
          <button className='bg-blue-500 text-white py-2 px-4 rounded m-2 ' onClick={handlePrevPage}>Previous Page</button>
        )}

        {showNextArrow && (
          <button className='bg-blue-500 text-white py-2 px-4 rounded m-2' onClick={handleNextPage}>Next Page</button>
        )}
      </div>
    </div>
  );

}
export default DisplayRecords