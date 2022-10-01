import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

export const links = [
  {
    id: 1, path: '/', text: 'Stats', icon: <IoBarChartSharp />
  },
  {
    id: 2, path: 'all-jobs', text: 'all Jobs', icon: <MdQueryStats />
  },
  {
    id: 3, path: 'add-job', text: 'add Job', icon: <FaWpforms />
  },
  {
    id: 4, path: 'profile', text: 'profile', icon: <ImProfile />
  },
]

