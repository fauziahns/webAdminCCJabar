import React from 'react'
import SideNav from '../../components/SideNav.jsx/SideNav'
import { NavLink } from 'react-router-dom'

export default function LaporanAD() {
  return (
    <div>
      <div className="flex bg-white">
        <SideNav/>
        <div className="">
            <div className=" mx-10 mt-10 text-black">
                <p className='text-black font-semibold text-lg'>Laporan Akhir Acara Ruang Kreatif Ahmad Djuhara</p>
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

            <div className=" bg-white mx-10 overflow-x-auto text-black w-max-[90%] my-10 rounded-lg border p-5 border-slate-100 shadow-md ">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className='text-black text-center bg-blue-200'>
                        <th>No Permohonan</th>
                        <th>Nama Pemohon</th>
                        <th>Nama Acara</th>
                        <th>Lokasi Gedung</th>
                        <th>Tanggal Acara</th>
                        <th>Jumlah Peserta</th>
                        <th>Rangkuman Acara</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='text-center border-b-2'>
                            <td>0001</td>
                            <td>Fauziah Nur Syifa</td>
                            <td>Seminar</td>
                            <td>Bogor Creative Center</td>
                            <td>12/12/2024</td>
                            <td>50</td>
                            <td className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aliquam modi distinctio velit impedit! Odio modi natus deleniti facere sunt ducimus, dicta odit blanditiis harum commodi sit eos rerum animi!</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}
