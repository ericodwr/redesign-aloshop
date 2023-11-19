import React from 'react';
import Image from 'next/image';

const Features = ({ img, title, desc, list, flex }) => {
  return (
    <div className={`flex ${flex} gap-5 my-14`}>
      <Image
        src={img}
        width={1000}
        height={1000}
        alt="img-1"
        className="flex-1"
      />
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="opacity-70 pr-16">{desc}</p>

        <ul className="feature-list">
          {list.map((data, i) => {
            return (
              <li className="flex items-start gap-3" key={i}>
                <Image
                  src={'/feature/check.svg'}
                  width={20}
                  height={20}
                  alt="check"
                />
                <p className="opacity-70">{data}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Features;
