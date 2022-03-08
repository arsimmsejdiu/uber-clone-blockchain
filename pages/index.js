import Map from "../components/MAp";
import Navbar from "../components/Navbar";
import Head from "next/head";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: ``,
  rideRequestContainer: ``,
  rideRequest: ``,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Uber Drive - Go anywhere you want</title>
      </Head>
      <Navbar />
      <div className={style.main}><Map /></div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
            {/* Location selector */}
            {/* confirm ride */}
        </div>
      </div>
    </div>
  );
}
