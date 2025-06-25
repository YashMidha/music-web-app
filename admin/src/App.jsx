import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import AddAlbum from './pages/addAlbum';
import AddSong from './pages/addSong';
import ListSong from './pages/listSong';
import ListAlbum from './pages/listAlbum';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';

export const url = 'http://localhost:3000';

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer />  
      <SideBar />
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
        <NavBar />
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/add-song' element={< AddSong />} />
            <Route path='/add-album' element={< AddAlbum />} />
            <Route path='/list-song' element={< ListSong />} />
            <Route path='/list-album' element={< ListAlbum />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App