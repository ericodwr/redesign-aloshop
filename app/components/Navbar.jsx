import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@mui/material';

const Navbar = () => {
  const pathname = usePathname();

  const [feature, setFeature] = useState('');
  const [subscription, setSubscription] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    if (pathname === '/feature') {
      setFeature('#2FAF91');
    } else {
      setFeature('');
    }

    if (pathname === '/subscription') {
      setSubscription('#2FAF91');
    } else {
      setSubscription('');
    }

    if (pathname === '/about') {
      setAbout('#2FAF91');
    } else {
      setAbout('');
    }
  }, [pathname]);

  return (
    <Container>
      <nav className="flex justify-between items-center mt-5">
        <div>
          <Link href={'/'}>
            <Image src={'/logo.svg'} width={120} height={120} alt="Logos" />
          </Link>
        </div>
        <ul className="flex justify-around gap-8">
          <li>
            <Link href={'/feature'} style={{ color: feature }}>
              Fitur
            </Link>
          </li>
          <li>
            <Link href={'/subscription'} style={{ color: subscription }}>
              Harga Berlangganan
            </Link>
          </li>
          <li>
            <Link href={'/about'} style={{ color: about }}>
              Tentang Aloshop
            </Link>
          </li>
        </ul>
        <div className="flex gap-10">
          <Link href={'/login'} className="font-bold py-3">
            Login
          </Link>
          <Link
            href={'/register'}
            className="button text-white py-3 px-12 rounded-xl"
          >
            Daftar Sekarang
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
