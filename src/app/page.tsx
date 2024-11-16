import Header from "../components/Header/Header";
import Gallery from "../components/Gallery/Gallery";
import Tabs from "@/components/Tabs/Tabs";
import Location from "@/components/Location/Location";
import BookingCard from "@/components/BookingCard/BookingCard";
import Rooms from "@/components/Rooms/Rooms";
import Spaces from "@/components/Spaces/Spaces";
import About from "@/components/About/About";
import Amenities from "@/components/Amenities/Amenities";
import Question from "@/components/Question/Question";
import Rules from "@/components/Rules/Rules";

export default function Home() {
  return (
    <>
      <Header />
      <section className="main-content">
        <Gallery />
        <Tabs />
        <div className="property-details">
          <Location />
          <BookingCard />
        </div>
      </section>
      <section className="container">
        <Rooms />
        <Spaces />
        <About />
        <Amenities />
        <Question />
        <Rules />
      </section>
    </>
  );
}
