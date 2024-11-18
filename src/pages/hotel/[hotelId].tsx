import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

const HotelPage: React.FC = () => {
  const [hotel, setHotel] = useState<any | null>(null);
  const router = useRouter();
  const { hotelId } = router.query;

  useEffect(() => {
    if (!hotelId) return;

    const fetchHotelDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/hotel/${hotelId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setHotel(data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    };

    fetchHotelDetails();
  }, [hotelId]);

  if (hotel === null) return <p>Loading...</p>;

  return (
    <div className='mt-3'>
      <Header hotel={hotel} />

      <section className="main-content">
      <Gallery 
        images={hotel.images}  // Array of image URLs from API
        title={hotel.title}    // Hotel title for image descriptions
      />
        <Tabs />

        <div className="property-details">
          <Location address={hotel.address} />
          <BookingCard hotel={hotel} />
        </div>

        <div className="container">
          <Rooms rooms={hotel.rooms} />
          <Spaces spaces={hotel.spaces} />
          <About description={hotel.description} />
          <Amenities amenities={hotel.amenities} />
          <Question questions={hotel.questions} />
          <Rules rules={hotel.rules} />
        </div>
      </section>
    </div>
  );
};

export default HotelPage;
