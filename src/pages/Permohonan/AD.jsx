import React from 'react'
import SideNav from '../../components/SideNav.jsx/SideNav'
import { NavLink } from 'react-router-dom'

export default function AD() {
  return (
    <div>
      <div className="flex bg-white">
        <SideNav/>
        <div className="overflow-x-auto">
            <div className="flex mx-10 mt-10">
                <p className='text-black font-semibold text-lg'>Ruang Kreatif Ahmad Djuhara</p>
            </div>
            <div className=" mx-10 mt-10 text-black">
                    <p className='my-4 text-sm font-semibold'>Cetak Laporan</p>
                    <div className="flex text-sm items-center mt-4">
                        <div className="flex items-center w-56" >
                            <p>Dari</p>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black bg-slate-300" />
                        </div>
                        <div className="flex items-center w-56 mx-4" >
                            <p>Hingga</p>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black bg-slate-300" />
                        </div>
                        <div className="btn">Cetak</div>
                    </div>
            </div>

            <div className="  bg-white mx-10 p-5 text-black  mt-10 w-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='text-black text-center bg-blue-200'>
                        <th>No Permohonan</th>
                        <th>Status</th>
                        <th>Pemohon</th>
                        <th>Nama Acara</th>
                        <th>Tanggal</th>
                        <th>Jam Mulai</th>
                        <th>Jam Berakhir</th>
                        <th>Ruangan</th>
                        <th>Jenis Acara</th>
                        <th>Subsektor Acara</th>
                        <th>Jumlah Peserta</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='text-center border-b-2'>
                            <td>0001</td>
                            <NavLink to='/detailPermohonan'>
                                <td >
                                    <p className='font-bold p-1 text-sm text-center rounded-sm bg-slate-100  w-24'>Baru</p>
                                </td>
                            </NavLink>
                            <td>Fauziah Nur Syifa</td>
                            <td>Seminar Sistem Informasi</td>
                            <td>12/12/2024</td>
                            <td>09.00</td>
                            <td>13.00</td>
                            <td className='text-center'>Cafe Indoor, Kantin, Auditorium</td>
                            <td>Pameran</td>
                            <td>Arsitektur</td>
                            <td>50</td>
                        </tr>
                        <tr className='text-center border-b-2'>
                            <td>0002</td>
                            <NavLink>
                                <td >
                                    <p className='font-bold p-1 text-sm text-center bg-green-300 rounded-sm w-24 '>Diterima</p>
                                </td>
                            </NavLink>
                            <td>Trisana Nurul Anzali Nabil</td>
                            <td>Seminar Sistem Informasi</td>
                            <td>12/12/2024</td>
                            <td>09.00</td>
                            <td>13.00</td>
                            <td className='text-center'>Cafe Indoor, Kantin, Auditorium</td>
                            <td>Pameran</td>
                            <td>Arsitektur</td>
                            <td>50</td>
                        </tr>
                        <tr className='text-center border-b-2'>
                            <td>0003</td>
                            <NavLink>
                                <td >
                                    <p className='font-bold text-sm p-1 text-center rounded-sm bg-red-400 w-24 '>Ditolak</p>
                                </td>
                            </NavLink>
                            <td>Syaffa Alanda Nurul Alfi</td>
                            <td>Seminar Sistem Informasi</td>
                            <td>12/12/2024</td>
                            <td>09.00</td>
                            <td>13.00</td>
                            <td className='text-center'>Cafe Indoor, Kantin, Auditorium</td>
                            <td>Pameran</td>
                            <td>Arsitektur</td>
                            <td>50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}
