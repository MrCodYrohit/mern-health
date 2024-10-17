import React from 'react';

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Add New Patient
      </h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='name'
            maxLength='62'
            minLength='10'
            required
          />
          <textarea
            type='text'
            placeholder='Disease Description'
            className='border p-3 rounded-lg'
            id='description'
            required
          />
          <input
            type='text'
            placeholder='Past Treatment'
            className='border p-3 rounded-lg'
            id='address'
            required
          />
          <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input type='checkbox' id='critical' className='w-5' />
              <span>Critical</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='covid' className='w-5' />
              <span>Covid-19 or Not</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='diagnosed' className='w-5' />
              <span>Earlier Diagnosed or Not</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='labreport' className='w-5' />
              <span>Lab report</span>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' id='insurance' className='w-5' />
              <span>Insurance</span>
            </div>
          </div>
          <div className='flex flex-wrap gap-6'>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='heartrate_bpm'
                min='1'
                max='1000'
                required
                className='p-3 border border-gray-300 rounded-lg'
              />
              <p>Heart Rate in BPM</p>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='bloodpressure_mm_Hg'
                min='1'
                max='1000'
                required
                className='p-3 border border-gray-300 rounded-lg'
              />
              <p>Blood Pressure in mmHg</p>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='age'
                min='1'
                max='100'
                required
                className='p-3 border border-gray-300 rounded-lg'
              />
              <div className='flex flex-col items-center'>
                <p>Age</p>
                <span className='text-xs'>(Years)</span>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='insurance_no'
                min='1'
                max='10000'
                required
                className='p-3 border border-gray-300 rounded-lg'
              />
              <div className='flex flex-col items-center'>
                <p>Insurance no.</p>
                <span className='text-xs'></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className='font-semibold'>Images:
          <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
          </p>
          <div className="flex gap-4">
            <input className='p-3 border border-gray-300 rounded w-full' type="file" id='images' accept='image/*' multiple />
            <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
          </div>
        <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Admit The Patient</button>
        </div>
      </form>
    </main>
  );
}