import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideNav2() {
  return (
    <div>
        <ul className="menu rounded-box border h-screen bg-white w-56 text-black">
            <li>
                <h2 className="menu-title text-black">Data Permohonan</h2>
                <ul>
                    <NavLink to='/detailPermohonan'>
                        <li><a>Data Pemohon</a></li>
                    </NavLink>
                    <NavLink to='/dataIntansi'>
                        <li><a>Data Intansi</a></li>
                    </NavLink>
                    <NavLink to='/dataAcara'>
                        <li><a>Data Acara</a></li>
                    </NavLink>
                </ul>
            </li>
        </ul>
    </div>
  )
}
