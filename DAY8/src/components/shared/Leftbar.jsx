import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Users, Power, ListChecks, Target } from 'lucide-react'; // Import icons
import { Button } from '../ui/button';
import '../../assets/css/styles.css';

const Leftbar = () => {
  const navigate = useNavigate(); // Initialize navigate

  const AdminLinks = [
    {
      title: 'Projects',
      link: '/admin',
      icon: Target,
    },
    {
      title: 'Members',
      link: '/members',
      icon: Users,
    },
    {
      title: 'Tasks',
      link: '/tasks',
      icon: ListChecks,
    },
  ];

  // Handle logout function
  const handleLogout = () => {
    // Optionally, add logout logic here (e.g., clearing user data, tokens, etc.)
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className='leftbar h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10m border-gray-500 border-x-2'>
      
      <div className='links h-[90%] w-full flex flex-col justify-start items-center gap-4'>
        {AdminLinks.map((data, index) => (
          <NavLink
            key={index}
            to={data.link}
            className='link p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'
          >
            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
              {React.createElement(data.icon, { size: 20 })}
              {data.title}
            </span>
          </NavLink>
        ))}
      </div>
      <div className='logout h-[5%] w-full flex flex-col justify-center items-center'>
        <Button className='p-10 bg-red-500/5 hover:bg-red-500/10 font-bold w-full' onClick={handleLogout}> {/* Add onClick */}
          <span className='flex flex-row items-center justify-start h-full w-full gap-4 text-red-500'>
            <Power size={20} /> Logout
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Leftbar;
