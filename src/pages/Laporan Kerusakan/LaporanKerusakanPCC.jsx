import React from 'react'
import SideNav from '../../components/SideNav.jsx/SideNav'
import { NavLink } from 'react-router-dom'

export default function LaporanKerusakanPCC() {
  return (
    <div>
          <div className="flex bg-white h-screen text-black">
            <SideNav/>

            <div className="flex flex-col w-screen ">
                <div className=" mx-10 mt-10 text-black mb-10">
                    <p className='text-black font-semibold text-lg'>Laporan Kerusakan Fasilitas Purwakarta Creative Center</p>
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
                <div className="">
                <div className="overflow-x-auto bg-white mx-10 p-5 rounded-lg text-black border ">
                    <p className='text-lg font-semibold mb-10'>Laporan Kerusakan Fasilitas</p>
                <table className="table w-[100%]">
                    {/* head */}
                    <thead className='bg-slate-200 rounded-lg'>
                    <tr className='text-black text-center'>
                        <th>No Laporan</th>
                        <th>Pemohon</th>
                        <th>Nama Ruangan</th>
                        <th>Tanggal</th>
                        <th>Denda</th>
                        <th>Status</th>
                        <th>Bukti Bayar</th>
                        <th>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='text-center'>
                            <td>0001</td>
                            <td>Fauziah Nur Syifa</td>
                            <td>Cafe Outdoor</td>
                            <td>12/12/2024</td>
                            <td>300.000</td>
                            <td>
                                <p className='py-2 font-semibold text-sm bg-red-300 rounded-lg'>Belum Bayar</p>
                            </td>
                            <td></td>
                        </tr>

                        {/* row 1 */}
                        <tr className='text-center'>
                            <td>0001</td>
                            <td>Fauziah Nur Syifa</td>
                            <td>Cafe Outdoor</td>
                            <td>12/12/2024</td>
                            <td>300.000</td>
                            <td>
                                <p className='py-2 font-semibold text-sm bg-green-300 rounded-lg'>Sudah Bayar</p>
                            </td>
                            <td className="uderline cursor-pointer">Lihat Bukti</td>
                            <td>
                                <div className="flex">
                                <img src="src\assets\checklist.png" alt="" className="mr-2"/>
                                <img src="src\assets\remove.png" alt="" />
                                </div>
                            </td>
                        </tr>

                        {/* row 1 */}
                        <tr className='text-center'>
                            <td>0001</td>
                            <td>Fauziah Nur Syifa</td>
                            <td>Cafe Outdoor</td>
                            <td>12/12/2024</td>
                            <td>300.000</td>
                            <td>
                                <p className='py-2 font-semibold text-sm bg-green-500 rounded-lg'>Terkonfirmasi</p>
                            </td>
                            <td className="uderline cursor-pointer">Lihat Bukti</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
