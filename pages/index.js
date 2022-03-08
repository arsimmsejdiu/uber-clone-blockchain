import Navbar from "../components/Navbar";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: ``,
  rideRequestContainer: ``,
  rideRequest: ``,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      {/* Navbar */}
      <Navbar />
      <div className={style.main}>{/* map */}</div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
            {/* Location selector */}
            {/* confirm ride */}
        </div>
      </div>
    </div>
  );
}
