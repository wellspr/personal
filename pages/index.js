import Image from "next/image";
import profilePic from "../public/profile_pic.jpg";
import styles from "../sass/pages/Homepage.module.scss";

const Homepage = () => {
  return <>
    <section id={styles.homeContainer}>
      <h2>Hi!</h2>

      <Image 
        src={profilePic} 
        width={"150px"}
        height={"150px"}
        alt="Picture of the webpage owner"
      />

      <h3>I&apos;m Paulo,</h3>
      <p>a fullstack webdeveloper.</p>
    </section>
  </>;
};

export default Homepage;