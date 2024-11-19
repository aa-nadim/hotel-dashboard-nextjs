// src/pages/hotel/[hotelId].tsx
import { GetServerSideProps } from 'next';
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
  hotel: any;
}

const HotelPage: React.FC<HotelPageProps> = ({ hotel }) => {
  if (!hotel) return <p>Hotel not found</p>;

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
  const { hotelId } = params!;

  try {
    const res = await fetch(`http://localhost:5000/api/hotel/${hotelId}`);
    const hotel = await res.json();
    if (!hotel) {
      return {
        notFound: true, // Optional: If the hotel is not found, you can show a 404 page.
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
      props: {
        hotel: null,
      },
    };
  }
};

export default HotelPage;
