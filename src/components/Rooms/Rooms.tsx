export default function Rooms() {
  return (
     <section className="rooms-section">
         <h2>Rooms & beds</h2>
         <p className="sleeps-info">2 bedrooms (sleeps 4)</p>
         <div className="bedrooms">
             <div className="bedroom">
                 <i className="fa-solid fa-bed"></i>
                 <h3>Bedroom 1</h3>
                 <p>1 Queen Bed</p>
             </div>
             <div className="bedroom">
                 <i className="fa-solid fa-bed"></i>
                 <h3>Bedroom 2</h3>
                 <p>1 Twin Bed</p>
             </div>
         </div>
         <section className="bathroom-section">
             <i className="fa fa-bath" aria-hidden="true"></i>
             <h2>1 bathroom</h2>
             <p>Full Bathroom</p>
         </section>
     </section>
  );
}