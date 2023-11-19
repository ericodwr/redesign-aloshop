import React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="flex h-72 pt-10">
          <div className="w-96">
            <Image
              src={'/logo.svg'}
              width={120}
              height={120}
              alt="logo-footer"
            />
          </div>
          <div className="flex justify-around w-full">
            <div>
              <p className="font-bold">Company</p>
              <ul className="flex mt-5 flex-col gap-3">
                <li className="text-sm opacity-70">About Us</li>
                <li className="text-sm opacity-70">Contact Us</li>
                <li className="text-sm opacity-70">Faq</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">About Shipper</p>
              <ul className="flex mt-5 flex-col gap-3">
                <li className="text-sm opacity-70">Fitur Kami</li>
                <li className="text-sm opacity-70">Harga Berlangganan</li>
                <li className="text-sm opacity-70">Tentang Aloshop</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Contact Us</p>
              <ul className="flex mt-5 flex-col gap-3">
                <li className="text-sm opacity-70">
                  <p className="flex gap-3 items-center">
                    <Image
                      src={'/phone.svg'}
                      width={15}
                      height={15}
                      alt="phone"
                    />
                    <span>+62 8xxx xxxx xxx</span>
                  </p>
                </li>
                <li className="text-sm opacity-70">
                  <p className="flex gap-3 items-center">
                    <Image
                      src={'/email.svg'}
                      width={15}
                      height={15}
                      alt="email"
                    />
                    <span>support@Aloshop.co</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-7">
          <div>
            <p className="text-sm opacity-70">
              Copyright &copy; 2023 Aloshop All Rights Reserved.
            </p>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <a
                  href="https://www.linkedin.com/company/aloshop/"
                  target="_blank"
                >
                  <Image
                    src={'/linkedin.svg'}
                    width={30}
                    height={30}
                    alt="linkedin"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aloshop.services"
                  target="_blank"
                >
                  <Image src={'/fb.svg'} width={30} height={30} alt="fb" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AloshopID" target="_blank">
                  <Image src={'/twt.svg'} width={30} height={30} alt="twt" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@aloshopofficial"
                  target="_blank"
                >
                  <Image src={'/yt.svg'} width={30} height={30} alt="yt" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aloshop_official/"
                  target="_blank"
                >
                  <Image src={'/ig.svg'} width={30} height={30} alt="ig" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
