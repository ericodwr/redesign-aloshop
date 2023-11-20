import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

const accordionData = [
  {
    title: 'Apakah Saya Cocok Menggunakan Aloshop',
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

const About = () => {
  return (
    <main>
      <Container>
        <section className="my-20">
          <div>
            <h1 className="font-bold text-5xl text-center my-8">
              Mengenal Apa Itu Aloshop
            </h1>
            <div className="flex justify-center">
              <p className="text-center opacity-70" style={{ width: '750px' }}>
                Sebagai bagian dari Shipper Group, Aloshop menyediakan solusi
                e-commerce terlengkap yang terintegrasi dengan omnichannel dan
                layanan manajemen e-commerce. Aloshop mendorong pertumbuhan
                bisnis e-commerce di dukung oleh teknologi dan para ahli untuk
                mengatur operasional bisnis lebih cepat dan efisien.
              </p>
            </div>
          </div>
          <div className="flex justify-center my-10">
            <iframe
              className="w-3/5  rounded-xl"
              style={{ height: '450px' }}
              src="https://www.youtube.com/embed/l-vUooo7oeU"
            ></iframe>
          </div>
        </section>
        <section>
          <div className="my-20">
            <h1 className="font-bold text-4xl text-center mt-16">
              Bagaimana Kami Mengelola Bisnis Anda?
            </h1>
            <div className="flex gap-8 mt-10">
              <Card style={{ height: '382px', width: '258px' }}>
                <CardContent>
                  <div className="flex justify-between flex-col gap-4">
                    <Image
                      src={'/harga.svg'}
                      width={50}
                      height={50}
                      alt="harga"
                    />
                    <h3 className="font-bold text-xl">
                      Harga Terhemat se-Indonesia
                    </h3>
                    <p className="opacity-80">
                      Saat ini Aloshop dapat digunakan secara GRATIS tanpa
                      biaya. Namun setelah masa promo gratis ini berakhir pun,
                      Aloshop berkomitmen untuk jadi solusi manajemen toko
                      terhemat di Indonesia.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card style={{ height: '382px', width: '258px' }}>
                <CardContent>
                  <div className="flex justify-between flex-col gap-4">
                    <Image
                      src={'/komitmen.svg'}
                      width={50}
                      height={50}
                      alt="harga"
                    />
                    <h3 className="font-bold text-xl">Komitmen Terfleksibel</h3>
                    <p className="opacity-80">
                      Layanan lengkap untuk bantu kembangkan bisnis anda dan
                      terintergrasi dengan matketplace langsung.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card style={{ height: '382px', width: '258px' }}>
                <CardContent>
                  <div className="flex justify-between flex-col gap-4">
                    <Image src={'/cs.svg'} width={50} height={50} alt="harga" />
                    <h3 className="font-bold text-xl">
                      Customer Service Handal
                    </h3>
                    <p className="opacity-80">
                      Punya pertanyaan atau keluhan? Dapatkan respon cepat tanpa
                      rumit dengan menghubungi Customer Service kami melalui
                      WhatsApp.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card style={{ height: '382px', width: '258px' }}>
                <CardContent>
                  <div className="flex justify-between flex-col gap-4">
                    <Image
                      src={'/siper.svg'}
                      width={50}
                      height={50}
                      alt="harga"
                    />
                    <h3 className="font-bold text-xl">Komitmen Terfleksibel</h3>
                    <p className="opacity-80">
                      Tim yang berpengalaman membuat Kamu tidak perlu ragu pada
                      kualitas Aloshop. Dapatkan juga penawaran eksklusif dari
                      layanan Shipper lain (pergudangan, logistik, pinjaman
                      dana, dll)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
          <h1 className="text-5xl font-bold text-center mt-4">
            Sekarang Gratis
          </h1>
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

export default About;
