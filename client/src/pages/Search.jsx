import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
    type: 'all',
    diagnosed: false,
    labreport: false,
    insurance: false,
    sort: 'created_at',
    order: 'desc',
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  console.log(listings);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const diagnosedFromUrl = urlParams.get('diagnosed');
    const labreportFromUrl = urlParams.get('labreport');
    const insuranceFromUrl = urlParams.get('insurance');
    const sortFromUrl = urlParams.get('sort');
    const orderFromUrl = urlParams.get('order');

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      diagnosedFromUrl ||
      labreportFromUrl ||
      insuranceFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || '',
        type: typeFromUrl || 'all',
        diagnosed: diagnosedFromUrl === 'true' ? true : false,
        labreport: labreportFromUrl === 'true' ? true : false,
        insurance: insuranceFromUrl === 'true' ? true : false,
        sort: sortFromUrl || 'created_at',
        order: orderFromUrl || 'desc',
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === 'all' ||
      e.target.id === 'notcritical' ||
      e.target.id === 'critical'
    ) {
      setSidebardata({ ...sidebardata, type: e.target.id });
    }

    if (e.target.id === 'searchTerm') {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }

    if (
      e.target.id === 'diagnosed' ||
      e.target.id === 'labreport' ||
      e.target.id === 'insurance'
    ) {
      setSidebardata({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === 'true' ? true : false,
      });
    }

    if (e.target.id === 'sort_order') {
      const sort = e.target.value.split('_')[0] || 'created_at';

      const order = e.target.value.split('_')[1] || 'desc';

      setSidebardata({ ...sidebardata, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', sidebardata.searchTerm);
    urlParams.set('type', sidebardata.type);
    urlParams.set('diagnosed', sidebardata.diagnosed);
    urlParams.set('labreport', sidebardata.labreport);
    urlParams.set('insurance', sidebardata.insurance);
    urlParams.set('sort', sidebardata.sort);
    urlParams.set('order', sidebardata.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7  border-b-2 md:border-r-2 md:min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Search Term:
            </label>
            <input
              type='text'
              id='searchTerm'
              placeholder='Search Here...'
              className='border rounded-lg p-3 w-full'
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className='flex gap-2 flex-wrap items-center'>
            <label className='font-semibold'>Type:</label>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='all'
                className='w-5'
                onChange={handleChange}
                checked={sidebardata.type === 'all'}
              />
              <span>Critical and Not Critical</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='notcritical'
                className='w-5'
                onChange={handleChange}
                checked={sidebardata.type === 'notcritical'}
              />
              <span>Not Critical</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='critical'
                className='w-5'
                onChange={handleChange}
                checked={sidebardata.type === 'critical'}
              />
              <span>Critical</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='insurance'
                className='w-5'
                onChange={handleChange}
                checked={sidebardata.insurance}
              />
              <span>Insurance</span>
            </div>
          </div>
          <div className='flex gap-2 flex-wrap items-center'>
            <label className='font-semibold'>Medical Terms:</label>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='diagnosed'
                className='w-5'
                onChange={handleChange}
                checked={sidebardata.diagnosed}
              />
              <span>Diagnosed</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='labreport'
                className='w-5'
                onChange={handleChange}
                checked={sidebardata.labreport}
              />
              <span>Lab Report</span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <select
              onChange={handleChange}
              defaultValue={'created_at_desc'}
              id='sort_order'
              className='border rounded-lg p-3'
            >
              <option value='age_desc'>Age high to low</option>
              <option value='age_asc'>Age low to hight</option>
              <option value='createdAt_desc'>Latest</option>
              <option value='createdAt_asc'>Oldest</option>
            </select>
          </div>
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Search
          </button>
        </form>
      </div>
      <div className=''>
        <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>
          Resulted Patients:
        </h1>
      </div>
    </div>
  );
}