// src/pages/hotel-details/[slug]/[hotelId].tsx
import { GetServerSideProps } from 'next';
import { slugify } from '@/utils/slugify';
import Header from '@/components/Header/Header';
import Gallery from '@/components/Gallery/Gallery';
import Tabs from '@/components/Tabs/Tabs';
import Location from '@/components/Location/Location';
import BookingCard from '@/components/BookingCard/BookingCard';
import Rooms from '@/components/Rooms/Rooms';
import Spaces from '@/components/Spaces/Spaces';
import About from '@/components/About/About';
import Amenities from '@/components/Amenities/Amenities';
import Question from '@/components/Question/Question';
import Rules from '@/components/Rules/Rules';

interface HotelPageProps {
  hotel: any; // Replace 'any' with your hotel type
}

const HotelPage: React.FC<HotelPageProps> = ({ hotel }) => {
  // Remove the local error check since we'll handle it in getServerSideProps
  return (
    <div className="mt-3">
      <Header hotel={hotel} />
      <section className="main-content">
        <Gallery images={hotel.images} title={hotel.title} />
        <Tabs />
        <div className="property-details">
          <Location
            title={hotel.title}
            guestCount={hotel.guestCount}
            bedroomCount={hotel.bedroomCount}
            bathroomCount={hotel.bathroomCount}
            amenities={hotel.amenities}
            address={hotel.address}
            location={hotel.location}
          />
          <BookingCard hotel={hotel} />
        </div>

        <div className="container">
          <Rooms
            guestCount={hotel.guestCount}
            bedroomCount={hotel.bedroomCount}
            bathroomCount={hotel.bathroomCount}
          />
          <Spaces spaces={hotel.spaces} />
          <About title={hotel.title} description={hotel.description} />
          <Amenities amenities={hotel.amenities} />
          <Question questions={hotel.questions} />
          <Rules rules={hotel.rules} />
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.hotelId || !params?.slug) {
    return {
      notFound: true, // This will show the 404 page
    };
  }

  const { hotelId, slug } = params;

  try {
    const response = await fetch(`http://localhost:5000/api/hotel/${hotelId}`);
    
    // Check if the response is ok
    if (!response.ok) {
      return {
        notFound: true, // This will show the 404 page
      };
    }

    const hotel = await response.json();

    // If no hotel data is returned
    if (!hotel || Object.keys(hotel).length === 0) {
      return {
        notFound: true, // This will show the 404 page
      };
    }

    // Generate the correct slug from the hotel title
    const correctSlug = slugify(hotel.title);

    // If the slug in the URL doesn't match the correct slug, redirect
    if (slug !== correctSlug) {
      return {
        redirect: {
          destination: `/hotel-details/${correctSlug}/${hotelId}`,
          permanent: true,
        },
      };
    }

    return {
      props: {
        hotel,
      },
    };
  } catch (error) {
    console.error('Error fetching hotel details:', error);
    return {
      notFound: true, // This will show the 404 page
    };
  }
};

export default HotelPage;