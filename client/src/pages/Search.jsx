import React from 'react';

export default function Search() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7  border-b-2 md:border-r-2 md:min-h-screen'>
        <form className='flex flex-col gap-8'>
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>Search Term:</label>
            <input
              type='text'
              id='searchTerm'
              placeholder='Search Here...'
              className='border rounded-lg p-3 w-full'
            />
          </div>
          <div className='flex gap-2 flex-wrap items-center'>
            <label className='font-semibold'>Type:</label>
            <div className='flex gap-2'>
              <input type='checkbox' id='all' className='w-5' />
              <span>Critical and Not Critical</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='notcritical' className='w-5' />
              <span>Not Critical</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='critical' className='w-5' />
              <span>Critical</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='insurance' className='w-5' />
              <span>Insurance</span>
            </div>
          </div>
          <div className='flex gap-2 flex-wrap items-center'>
            <label className='font-semibold'>Medical Reports:</label>
            <div className='flex gap-2'>
              <input type='checkbox' id='diagnosed' className='w-5' />
              <span>Diagnosed</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='labreport' className='w-5' />
              <span>Lab Report</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <select id='sort_order' className='border rounded-lg p-3'>
              <option>Age high to low</option>
              <option>Age low to hight</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Search
          </button>
        </form>
      </div>
      <div className=''>
        <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Resulted Patients:</h1>
      </div>
    </div>
  );
}