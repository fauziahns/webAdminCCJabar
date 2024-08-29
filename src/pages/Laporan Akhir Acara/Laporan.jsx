import React from "react";
import SideNav from "../../components/SideNav.jsx/SideNav";
import { supabase } from "../../lib/supabase";
import Swal from "sweetalert2";
import convertStringify from "../../lib/convertStringify";
import CetakLaporanAkhir from "../../components/Cetak/CetakLaporanAkhir";
import { getValues } from "../../lib/getValues";

export default function Laporan() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        let { data, error } = await supabase.from("peminjaman").select("*");

        if (error) {
          throw error;
        }

        const bcc = data.filter(
          (item) =>
            convertStringify(item.acara).lokasiGedung ===
              "Bogor Creative Center" && item.user_status === "Selesai"
        );

        const reverse = bcc.reverse();

        setData(reverse);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Gagal mengambil data",
        });
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className="flex h-screen bg-white">
        <SideNav />
        <div className="overflow-x-auto">
          <div className=" mx-10 mt-10 text-black">
          <p className="text-sm">Laporan Akhir Acara</p>
            <p className="text-black font-semibold text-3xl">
              Bogor Creative Center
            </p>
            <CetakLaporanAkhir data={data} />
          </div>

          <div className=" bg-white mx-10 text-black my-10 p-5  ">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-black text-center bg-slate-200">
                  <th>No Permohonan</th>
                  <th>Nama Pemohon</th>
                  <th>Nama Acara</th>
                  <th>Lokasi Gedung</th>
                  <th>Tanggal Acara</th>
                  <th>Jumlah Peserta</th>
                  <th>Rangkuman Acara</th>
                  <th>Foto Laporan</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map((item) => {
                  const { pemohon, acara } = item;

                  const dataPemohon = convertStringify(pemohon);
                  const dataAcara = convertStringify(acara);

                  const peserta = getValues(
                    convertStringify(dataAcara.jumlahPesertas)
                  ).join(", ");

                  return (
                    <tr className="text-center border-b-2" key={item.id}>
                      <td>{item.id}</td>
                      <td>{dataPemohon.namaPemohon}</td>
                      <td>{dataAcara.namaAcara}</td>
                      <td>{dataAcara.lokasiGedung}</td>
                      <td>{dataAcara.tanggalMulaiAcara}</td>
                      <td>{peserta}</td>
                      <td className="text-justify">{item.rangkuman_acara}</td>
                      <td className="uderline cursor-pointer">
                          <a
                            href={item.foto_laporan}
                            target="_blank"
                            className="underline"
                          >
                            Lihat Foto
                          </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
