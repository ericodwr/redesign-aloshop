import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, TextField, Checkbox } from '@mui/material';

const Login = () => {
  return (
    <main className="login flex justify-between">
      <div className="flex-1 w-full">
        <img src="/log-reg.svg" alt="login" className="log-img" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Container className="px-32">
          <div>
            <h2 className="text-center font-bold text-xl mb-4">
              Halo, Selamat Datang di Aloshop
            </h2>
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div className="col-12">
                  <p className="border-2 border-slate-200 rounded-lg p-1 text-sm flex gap-3 items-center justify-center">
                    <Image
                      src={'/gmail.svg'}
                      width={20}
                      height={20}
                      alt="gmail"
                    />
                    Login Dengan Google
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label
                    htmlFor="email"
                    className="col-12 opacity-50 font-semibold"
                  >
                    Alamat Email
                  </label>
                  <TextField
                    id="email"
                    required
                    placeholder="Masukkan Email Anda"
                    size="small"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <label
                    htmlFor="password"
                    className="col-12 opacity-50 font-semibold"
                  >
                    Password
                  </label>
                  <TextField
                    id="password"
                    type="password"
                    required
                    placeholder="Masukkan Email Anda"
                    size="small"
                  />
                </div>

                <div>
                  <p className="font-bold text-blue-600">Lupa kata sandi?</p>
                </div>

                <div className="flex">
                  <Checkbox />
                  <p className="text-sm opacity-50 ml-3">
                    Dengan masuk, Saya setuju dengan Syarat & Ketentuan Privasi
                    Aloshop
                  </p>
                </div>
                <div className="flex w-full">
                  <Link
                    className="w-full text-center button text-white p-1 rounded-lg"
                    href={'/'}
                  >
                    Login
                  </Link>
                </div>
                <div>
                  <p className="text-center">
                    Belum punya akun?{' '}
                    <Link
                      href={'/register'}
                      className="font-bold text-blue-600"
                    >
                      Buat Akun Sekarang
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Login;
