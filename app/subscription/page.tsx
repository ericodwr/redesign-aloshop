import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

const accordionData = [
  {
    title: 'Apakah Saya Cocok Menggunakan Aloshop?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu Anda mengelola stok, order, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
  {
    title: 'Apakah Aloshop Gratis?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu Anda mengelola stok, order, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
  {
    title: 'Berapa Harga Berlangganan Aloshop?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu Anda mengelola stok, order, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
  {
    title: 'Siapa Yang Harus Saya Hubungi Jika Memiliki Pertanyaan?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu Anda mengelola stok, order, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
];

const Subscription = () => {
  return (
    <main>
      <Container>
        <section className="my-20">
          <div>
            <h1 className="text-5xl font-bold text-center">
              Sesuaikan Paket Berlangganan Anda
            </h1>
            <h1 className="text-5xl font-bold text-center mt-3">
              Dengan Bisnis Anda
            </h1>

            <p className="text-center mt-8 opacity-70">
              Aloshop membantu bisnis online semakin berkembang melalui solusi
              omnichannel dan
            </p>
            <p className="text-center opacity-70">
              manajemen e-commerce yang lengkap dan komprehensif
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <Image
              src={'/subs/pricing.svg'}
              width={1000}
              height={1000}
              alt="pricing"
            />
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold text-center">
            Pertanyaan yang sering diajukan.
          </h2>
          <div className="mt-14 mx-10 mb-28">
            {accordionData.map((data, i) => (
              <Accordion key={i}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{data.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="opacity-60">{data.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </section>
        <section>
          <h1 className="text-5xl font-bold text-center">
            Bergabung Dengan Kami
          </h1>
          <h1 className="text-5xl font-bold text-center mt-4">Sekarang Gratis</h1>
          <div className="flex justify-center mt-10 mb-24">
            <Link
              href={'/register'}
              className="button text-center px-5 py-3 text-white font-semibold rounded-xl"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Subscription;
