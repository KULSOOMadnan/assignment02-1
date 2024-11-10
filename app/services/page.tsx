
// import styles from '../../styles/services.module.css';

// export default function Services() {
//   return (
//     <>
      
//       <div className={styles.container}>
//         {/* Background Image */}
//         <div className={styles.backgroundImage}></div>

//         {/* Main Content */}
//         <div className={styles.content}>
//           <h1 className={styles.heading}>Our Services</h1>
//           <div className={styles.grid}>
//             {/* Services */}
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Venue Decoration</h2>
//               <p className={styles.cardDescription}>We offer beautiful floral and lighting decorations to make your venue shine.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Catering</h2>
//               <p className={styles.cardDescription}>Our catering service provides a range of menu options for all tastes.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Entertainment</h2>
//               <p className={styles.cardDescription}>We arrange live music, DJs, and other entertainment options to create the perfect atmosphere.</p>
//             </div>

//             {/* New Services */}
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Photography & Videography</h2>
//               <p className={styles.cardDescription}>Capture every precious moment with our professional photography and videography services.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Event Planning & Coordination</h2>
//               <p className={styles.cardDescription}>Our expert planners help organize and manage every detail for a stress-free event.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Invitation Design & Printing</h2>
//               <p className={styles.cardDescription}>Create beautiful, customized invitations and printed materials for your guests.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Transportation & Logistics</h2>
//               <p className={styles.cardDescription}>We provide reliable transport options and logistic support to ensure smooth guest arrival and departure.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Themed Decor & Props</h2>
//               <p className={styles.cardDescription}>Enhance your event with unique themed decor, custom props, and visual effects.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Custom Cake & Desserts</h2>
//               <p className={styles.cardDescription}>Delight your guests with personalized cakes and dessert tables that match your theme.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>On-site Event Support</h2>
//               <p className={styles.cardDescription}>Our team provides on-site support to address any needs and keep the event running smoothly.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Audio & Visual Equipment Rental</h2>
//               <p className={styles.cardDescription}>We offer high-quality AV equipment rental to ensure clear sound and stunning visuals.</p>
//             </div>
//             <div className={styles.card}>
//               <h2 className={styles.cardTitle}>Luxury Guest Accommodation</h2>
//               <p className={styles.cardDescription}>Ensure your guests enjoy a luxurious stay with our premium accommodation and booking assistance.</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// }



import Image from 'next/image';
import '../../styles/services.css'; // Make sure to import the CSS file

export default function Services() {
  return (
    <>
     
      <div className="services-container">
        {/* Background Image */}
        <Image
          src="https://img.freepik.com/free-vector/hand-painted-watercolor-floral-wallpaper_52683-67104.jpg?t=st=1727013454~exp=1727017054~hmac=a63522268a5b83674f1117117146b52c156ae774083949d07d331c0156c40d79&w=900"
          alt="Services Floral Background"
          layout="fill"
          className="background-image"
        />

        {/* Main Content */}
        <div className="services-content">
          <h1 className="services-title">Our Services</h1>
          <div className="services-grid">
            <div className="service-card">
              <h2 className="service-card-title">Venue Decoration</h2>
              <p>We offer beautiful floral and lighting decorations to make your venue shine.</p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">Catering</h2>
              <p>Our catering service provides a range of menu options for all tastes.</p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">Entertainment</h2>
              <p>We arrange live music, DJs, and other entertainment options to create the perfect atmosphere.</p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">Photography & Videography</h2>
              <p>Capture every precious moment with our professional photography and videography services.</p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">Event Planning & Coordination</h2>
              <p>Our expert planners help organize and manage every detail for a stress-free event.</p>
            </div>
            <div className="service-card">
              <h2 className="service-card-title">Invitation Design & Printing</h2>
              <p>Create beautiful, customized invitations and printed materials for your guests.</p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
