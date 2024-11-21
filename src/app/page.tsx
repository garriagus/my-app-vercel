"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Home() {

  // Define el estado con el tipo explícito
  const [letterStyles, setLetterStyles] = useState<{ char: string; style: string; color: string }[]>([]);

  // Generador de clases de colores y estilos aleatorios
  useEffect(() => {
    const generateRandomStyles = () => {
      const letters = ['A', 'g', 'u', 's', 't', 'í', 'n', 'G', 'a', 'r', 'r', 'i', 'd', 'o'];
      const colors = [
        'text-red-700',
        'text-blue-700',
        'text-green-700',
        'text-yellow-700',
        'text-purple-700',
        'text-pink-700',
        'text-orange-700',
        'text-teal-700',
      ];

      return letters.map((char) => {
        // Generar clases y valores aleatorios
        const color = colors[Math.floor(Math.random() * colors.length)];
        const wght = Math.floor(Math.random() * 200 + 100); // Entre 100 y 300
        const wdth = Math.floor(Math.random() * 400 + 200); // Entre 200 y 600
        return {
          char,
          style: `"wght" ${wght}, "wdth" ${wdth}`,
          color,
        };
      });
    };

    setLetterStyles(generateRandomStyles());
  }, []);


  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url(/background-image.jpg)' }}>
      <div
        className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-lg"
        style={{
          backgroundImage: 'url(/dalle/1-removebg-preview.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url(/background-image.jpg)' }}>
          <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-lg">
            <p className="text-4xl md:mt-0 md:mb-0 text-black">
              <div style={{ display: 'flex', gap: '2px' }}>
                {letterStyles.map(({ char, style, color }, index) => (
                  <span key={index} className={color} style={{ fontVariationSettings: style }}>
                    {char}
                  </span>
                ))} 
                <Image
                  src="/3-rembg.png"
                  alt="100"
                  className="relative bg-cover bg-no-repeat rounded-full h-40 w-40 mr-0 md:mr-14"
                  width={100}
                  height={100}
                />
              </div>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
