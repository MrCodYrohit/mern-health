import { Link } from 'react-router-dom';
import { ImAidKit } from "react-icons/im";

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://www.gmccmt.org.uk/wp-content/uploads/2019/10/acute-hospital-phase.png'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <ImAidKit className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.past_treatment}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.disease_description}
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
    
            Insurance No. {listing.insurance
              ? listing.insurance_no.toLocaleString('en-US')
              : listing.insurance_no.toLocaleString('en-US')}
            {listing.type === 'notcritical'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              Heart Rate: {listing.heartrate_bpm > 1
                ? `${listing.heartrate_bpm} BPM `
                : `${listing.heartrate_bpm} BPM `}
            </div>
            <div className='font-bold text-xs'>
              Blood Pressure: {listing.bloodpressure_mm_Hg > 1
                ? `${listing.bloodpressure_mm_Hg} mm/Hg `
                : `${listing.bloodpressure_mm_Hg} mm/Hg `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}