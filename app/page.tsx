'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Slider,
  Card,
  CardContent,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
  useTheme,
  MobileStepper,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const mark = [
  {
    value: 0,
    label: 'start',
  },
  {
    value: 50,
    label: 'middle',
  },
  {
    value: 200,
    label: 'end',
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const accordionData = [
  {
    title: 'Apa itu Aloshop?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu anda mengelola stok, orded, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
  {
    title: 'Apakah Saya Cocok Menggunakan Aloshop?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu anda mengelola stok, orded, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
  {
    title: 'Bagaimana Cara Daftar Akun Aloshop?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu anda mengelola stok, orded, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
  {
    title: 'Apakah Aloshop Gratis?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu anda mengelola stok, orded, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
  {
    title: 'Berapa Harga Berlangganan Aloshop?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu anda mengelola stok, orded, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
  {
    title: 'Siapa Yang Harus Saya Hubungi Jika Memiliki Pertanyaan?',
    desc: 'Atoor by Shipper adalah platform lengkap untuk membantu anda mengelola stok, orded, dan produk di berbagai marketplace. Tidak hanya itu, Atoor hadir dengan harga terhemat dan paling fleksibel di Indonesia!',
  },
];

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: '/slider/img-1.svg',
  },
  {
    label: 'Bird',
    imgPath: '/slider/img-2.svg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath: '/slider/img-3.svg',
  },
  {
    label: 'Goč, Serbia',
    imgPath: '/slider/img-4.svg',
  },
];

const dataImages = [
  {
    title: 'Kelola Stok Marketplace',
    desc: 'Ubah dan sinkronisasi stok Anda dari berbagai toko dengan mudah secara satuan atau jumlah banyak sekaligus.',
  },
  {
    title: 'Kelola Order Pembeli',
    desc: 'Terima atau tolak order, cetak label, hingga lacak pengiriman; lakukan semuanya dengan mudah.',
  },
  {
    title: 'Kelola Produk',
    desc: 'Upload, ubah, hingga salin produk dengan mudah di toko Anda, dari berbagai marketplace.',
  },
  {
    title: 'Balas Pesan Kesemua Marketplace',
    desc: 'Kamu bisa balas pesan dari pembeli di semua marketplace dengan fitur Aloshop Chat.',
  },
];

export default function Home() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <main>
      <Container>
        <section className="mt-8">
          <h1 className="font-bold text-5xl text-center px-28 py-4 leading-tight">
            Bantu Kelola Kebutuhan Bisnis Marketplace Anda
          </h1>
          <p className="px-48 text-center opacity-70 mt-3">
            Aloshop membantu bisnis online semakin berkembang melalui solusi
            omnichannel dan manajemen e-commerce yang lengkap dan komprehensif
          </p>
          <div className="flex justify-center mt-4">
            <Link
              href={'/register'}
              className="button text-white py-3 px-6 rounded-xl text-sm font-semibold"
            >
              Daftar Sekarang
            </Link>
          </div>

          <h1 className="font-bold text-4xl text-center mt-12">
            Terintegrasi Dengan 6 Marketplace
          </h1>

          <div className="flex justify-center items-center mt-5">
            <Image
              src={'/marketplace.svg'}
              width={1140}
              height={1140}
              alt="marketplace"
            />
          </div>
        </section>
        <section className="mb-20">
          <h1 className="font-bold text-4xl text-center mt-20 mb-10">
            Kelola Bisnis Anda Dengan Aloshop
          </h1>
          <div className="flex">
            <Box width={2400}>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Image
                        src={step.imgPath}
                        width={1000}
                        height={1000}
                        alt={`${index}`}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>
            <div className="ml-5">
              {dataImages.map((data, i) => {
                if (i === activeStep) {
                  return (
                    <div
                      style={{ backgroundColor: '#F4FDFB' }}
                      className="px-6 py-3 m-2"
                      key={i}
                    >
                      <h1 className="font-semibold mb-4 text-base">
                        {data.title}
                      </h1>
                      <p className="text-sm">{data.desc}</p>
                    </div>
                  );
                } else {
                  return (
                    <div className="px-6 py-3 m-2" key={i}>
                      <h1 className="font-semibold mb-4 text-base">
                        {data.title}
                      </h1>
                      <p className="text-sm opacity-60">{data.desc}</p>
                    </div>
                  );
                }
              })}
              <div className="flex justify-center items-center mt-5">
                <Link
                  href={'/register'}
                  className="button w-full mx-3 text-center p-2 rounded-xl text-white font-bold"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-between">
            <div className="flex-1 flex flex-col justify-around">
              <h2 className="font-bold text-4xl">Tentang Aloshop</h2>
              <p className="pr-20 opacity-80">
                Dengan Aloshop dapat mengelola semua aspek operasi e-niaga Anda
                dengan lancar dari satu platform. Mulai dari menyiapkan toko
                online hingga mengelola pesanan, inventaris, pembayaran,
                pengiriman, dan dukungan pelanggan, solusi kami siap membantu
                Anda.
              </p>
              <div className="flex">
                <a
                  href="https://www.youtube.com/@aloshopofficial"
                  target="_blank"
                >
                  <p className="font-bold flex items-center gap-3 cursor-pointer">
                    Explore Video Lainnya{' '}
                    <span>
                      <Image
                        src={'/right.svg'}
                        width={15}
                        height={15}
                        alt="right"
                      />
                    </span>
                  </p>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/l-vUooo7oeU"
              ></iframe>
            </div>
          </div>

          <div className="my-20">
            <h1 className="font-bold text-4xl text-center mt-16">
              Kelola Bisnis Anda Dengan Aloshop
            </h1>
            <div className="flex gap-8 mt-5">
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
      </Container>
      <section>
        <div className="review py-14">
          <Container>
            <h1 className="text-4xl font-semibold">
              “Menggunakan Aloshop telah berhasil membantu kami mengelola toko
              kami di berbagai marketplace dengan adanya fitur kelola stok,
              order, produk, dan fitur chat membuat pekerjaan bisnis kami
              menjadi lebih efisien.”
            </h1>

            <p className="mt-5 opacity-80">
              Farhan Ramadhan, pemilik Studio Gotchi
            </p>
          </Container>
        </div>

        <div className="mt-20">
          <Container>
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
          </Container>
        </div>
      </section>
    </main>
  );
}
