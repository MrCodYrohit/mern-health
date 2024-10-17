import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [insuranceListings, setinsuranceListings] = useState([]);
  const [criticalListings, setcriticalListings] = useState([]);
  const [notcriticalListings, setnotcriticalListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(insuranceListings);
  useEffect(() => {
    const fetchinsuranceListings = async () => {
      try {
        const res = await fetch('/api/listing/get?insurance=true&limit=4');
        const data = await res.json();
        setinsuranceListings(data);
        fetchnotcriticalListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchnotcriticalListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=notcritical&limit=4');
        const data = await res.json();
        setnotcriticalListings(data);
        fetchcriticalListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchcriticalListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=critical&limit=4');
        const data = await res.json();
        setcriticalListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchinsuranceListings();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
        Empowering  <span className='text-slate-500'>Wellness</span>
          <br />
          Your Complete Health Hub
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
        Your personalized health companion, providing real-time insights and seamless care management.
        <br />
        Empowering you to take control of your wellness journey every day.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's Heal Together!
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {insuranceListings &&
          insuranceListings.length > 0 &&
          insuranceListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {insuranceListings && insuranceListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Our Patients</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?insurance=true'}>Meet Our Patients</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {insuranceListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {notcriticalListings && notcriticalListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Non Critical Patients</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=notcritical'}>See More Patients</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {notcriticalListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {criticalListings && criticalListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Critical patients</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=critical'}>See More Patients</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {criticalListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}