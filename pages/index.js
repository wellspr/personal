import Image from "next/image";
import profilePic from "../public/profile_pic.jpg";

const Homepage = () => {
  return <div className="home">
    <h2>Hi!</h2>

    <Image 
      src={profilePic} 
      className="home__profile-pic"
      width={150}
      height={150}
      alt="Picture of Paulo"
    />

    <h3>I&apos;m Paulo,</h3>
    <p>a fullstack webdeveloper.</p>
  </div>;
};

export default Homepage;