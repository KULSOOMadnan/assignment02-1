import Image from "next/image";
import Link from "next/link";
import '../styles/home.css'


export default function Home() {
  return (
    <>
      
      <main className="main">
        <div className="background-image">
          {/* Background Image */}
          <Image
            src="https://image.slidesdocs.com/responsive-images/background/pink-flowers-watercolor-nature-simple-floral-powerpoint-background_58c487484c__960_540.jpg"
            alt="Background"
            layout="fill"
          />

          <div className="overlay">
            <h1>Welcome to Our Wedding Services</h1>
            <p>Making your special day unforgettable</p>
            <div className="button-container">
              <Link href="/contact" className="button">
                Contact Us
              </Link>
              <Link href="/services" className="button">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>
     
    </>
  );
}
