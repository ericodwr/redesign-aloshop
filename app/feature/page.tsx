import React from 'react';
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Features from '../components/Feature';

const data = [
  {
    img: '/feature/market.svg',
    title: 'Kelola Stok Marketplace',
    desc: 'Kelola stok anda ke banyak marketplace langsung',
    list: [
      'Kelola stok untuk semua marketplace sekaligus',
      'Buat stok cadangan, terkunci, dan promo',
      'Notifikasi untuk stok menipis',
      'Stok dikelola oleh Gudang Shipper',
    ],
    flex: 'flex-row',
  },
  {
    img: '/feature/order.svg',
    title: 'Kelola Order Pembeli',
    desc: 'Kelola orderan pembeli anda dengan Aloshop tanpa perlu ribet buka satu persatu toko marketplace anda',
    list: [
      'Kelola semua order dari berbagai marketplace',
      'Download data order',
      'Kelola order berdasarkan Gudang Shipper',
      'Buat order manual dari social commerce',
    ],
    flex: 'flex-row-reverse',
  },
  {
    img: '/feature/product.svg',
    title: 'Kelola Produk',
    desc: 'Kelola stok anda ke banyak marketplace langsung',
    list: [
      'Unggah, hapus, dan edit (judul, deskripsi, gambar, dll) produk Anda.',
      'Salin produk dari satu toko ke toko lainnya - Anda tidak perlu lagi men-gunggah untuk setiap toko!',
      'Produk Utama bertindak sebagai sumber kebenaran produk Anda di semua saluran, memungkinkan Anda mengedit detail produk dari semua produk yang diikat di semua saluran penjualan sekaligus',
    ],
    flex: 'flex-row',
  },
  {
    img: '/feature/chat.svg',
    title: 'Aloshop Chat',
    desc: 'Kamu bisa balas pesan dari pembeli di semua marketplace dengan fitur Aloshop Chat.',
    list: [
      'Aloshop Chat merupakan software chat terintegrasi yang memberikan kesempatan kepada Anda untuk melihat dan membalas chat konsumen di satu tempat.',
      'Dengan chat filter, anda bisa filter chat yang sudah terbaca dan yang belum terbaca dengan jelas.',
    ],
    flex: 'flex-row-reverse',
  },
  {
    img: '/feature/business.svg',
    title: 'Analisis Bisnis Anda',
    desc: 'Laporan dan statistik penjualan lengkap dalam satu dasbor',
    list: [
      'Ringkasan performa toko, rating toko di marketplace, dan item terlaris.',
      'Statistik jumlah penjualan dan performa seluruh marketplace Anda.',
      'Statistik Produk memungkinkan Anda untuk menilai produk terbaik dan paling tidak laris di seluruh marketplace Anda.',
    ],
    flex: 'flex-row',
  },
];

const Feature = () => {
  return (
    <main>
      <section className="my-20">
        <Container>
          <div className="flex">
            <div className="flex flex-col gap-5">
              <h1 className="text-5xl font-bold">
                Bantu Kebutuhan Bisnis Anda
              </h1>
              <p className="opacity-60 mt-6">
                Aloshop membantu bisnis online semakin berkembang melalui solusi
                omnichannel dan manajemen e-commerce yang lengkap dan
                komprehensif.
              </p>
              <div className="mt-4">
                <Link
                  href={'/register'}
                  className="button text-white px-6 py-4 rounded-xl"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
            <div>
              <Image
                src={'/feature/mac.svg'}
                width={1200}
                height={1200}
                alt="mac"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div>
            {data.map((d, i) => {
              return (
                <Features
                  key={i}
                  desc={d.desc}
                  flex={d.flex}
                  img={d.img}
                  list={d.list}
                  title={d.title}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <section>
        <h1 className="text-5xl font-bold text-center">
          Bergabung Dengan Kami
        </h1>
        <h1 className="text-5xl font-bold text-center">Sekarang Gratis</h1>
        <div className="flex justify-center mt-10 mb-24">
          <Link
            href={'/register'}
            className="button text-center px-5 py-3 text-white font-semibold rounded-xl"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Feature;
