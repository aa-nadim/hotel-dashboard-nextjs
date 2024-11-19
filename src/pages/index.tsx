// src/pages/index.tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

type Hotel = {
  hotelId: string;
  title: string;
  imageUrl?: string;
};

interface HomeProps {
  hotels: Hotel[];
}

export default function Home({ hotels }: HomeProps) {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {hotels.map((hotel) => (
        <div
          key={hotel.hotelId}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
          onClick={() => router.push(`/hotel/${hotel.hotelId}`)}
        >
          <a>
            <img
              className="p-8 rounded-t-lg object-cover"
              src={hotel.imageUrl || '/images/placeholder-image.png'}
              alt={hotel.title}
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {hotel.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {/* Star icons */}
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                {/* Add more star icons as needed */}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/hotels');
    const hotels: Hotel[] = await res.json();
    return {
      props: {
        hotels,
      },
    };
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return {
      props: {
        hotels: [],
      },
    };
  }
};
