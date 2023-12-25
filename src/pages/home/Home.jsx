import React, { useEffect, useState } from 'react';
import SidebarContent from '../../components/sidebar content/SidebarContent';
import CreateNote from '../../components/create note/CreateNote';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingEffect = () => {
      setInterval(() => {
        setIsLoading(false);
      }, 4000);
    };

    loadingEffect();
  }, []);

  return (
    isLoading ? (
      <div className='text-slate-900 font-bold flex justify-center items-center min-h-screen'>
        <span>Loading...</span>
      </div>
    ) : (
      <div className='flex'>
        <div className="flex-[1] border-r-[1px] border-zinc-200 h-screen sticky top-0 left-0 bg-zinc-50 py-4">
          <SidebarContent />
        </div>
        <div className="flex-[4.1]">
          <CreateNote />
        </div>
      </div>
    )
  );
}
