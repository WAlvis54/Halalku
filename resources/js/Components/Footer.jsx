import { Link } from "@inertiajs/react";
import g from "/resources/images/HALALKU(V2).png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-primary text-white">
      <div className="w-full flex items-center justify-center bg-primary">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between items-center">
              <div>
                <img
                  src={g}
                  alt="Halalku Logo"
                  style={{ filter: 'brightness(10)' }} // Adjust brightness to make it bright
                />
              </div>
              <div className="hidden md:block flex flex-row space-x-8">
                <Link className="cursor-pointer text-white hover:text-white uppercase" href={route("aboutus")} as="button">About Us</Link>
                <Link className="cursor-pointer text-white hover:text-white uppercase" href={route("meetus")} as="button">Meet Us</Link>
              </div>
              <div className="hidden md:flex flex flex-row space-x-8 items-center">
                <a href="#">
                  <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.898 12V6.535H5.675l.265-2.139H3.898V3.033c0-.617.166-1.039 1.020-1.039H6V.085c-.527-.058-.835-.086-1.365-.086-1.570 0-2.648.995-2.648 2.821V4.391H0V6.531h1.769V12H3.898z" fill="#fff" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                  <svg width="13" height="9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z" fill="#fff" />
                  </svg>
                </a>
              </div>
            </div>
            <hr className="border-white border" />
            <p className="w-full text-center my-12 text-white">Copyright © 2023 Halalku Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
