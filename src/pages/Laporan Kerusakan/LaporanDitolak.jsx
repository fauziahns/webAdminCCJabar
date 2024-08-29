import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { supabase } from '../../lib/supabase';

export default function LaporanDitolak() {
    const { state } = useLocation();

    const [selectTolak, setSelectTolak] = React.useState(
      "Persyaratan Tidak Lengkap"
    );
  
    const navigate = useNavigate();
  
    const handleTolak = async (id) => {
        try {
          const { error } = await supabase
            .from("kerusakan")
            .update({
              admin_utama_status: "Pembayaran Ditolak",
              user_status: "Pembayaran Ditolak",
              alasan_tolak: "Bukti Pembayaran Tidak Sesuai",
            })
            .eq("id", id)
            .select();
    
          if (error) {
            throw error;
          }
    
          setRefetch(Math.random());
    
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Data berhasil ditolak",
          });
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Gagal tolak data",
          });
        }
      };
  return (
    <div className="bg-white h-screen">
      <div className="artboard artboard-horizontal phone-1 mx-auto items-center flex">
        <div className="rounded-lg border p-10">
          <p>Alasan Penolakan</p>
          <label className="flex form-control w-full max-w-xs mt-4">
            <select
            value={selectTolak}
            onChange={(e) => setSelectTolak(e.target.value)}
              className="select select-bordered w-56 bg-white placeholder:text-sm text-black"
              name="lokasiGedung"
            >
              <option disabled>Pilih</option>
              <option value="Jumlah Bayar Tidak Sesuai">
                Jumlah Bayar Tidak Sesuai
              </option>
              <option value="Pembayaran Tidak Masuk">
                Pembayaran Tidak Masuk 
              </option>
            </select>
          </label>
          <button
            className="btn mt-4 bg-green-500 hover:bg-white text-black"
            onClick={handleTolak}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
