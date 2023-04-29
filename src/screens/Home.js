import { useNavigate, Link } from "react-router-dom";
import Button from "../components/BlueButton";

const Home = () => {
  const navigation = useNavigate();

  return (
    <div>
      <div className="flex justify-between pt-5 pb-5 pl-10 pr-10">
        <Link to={"/"} className="cursor-pointer" id="logo">
          Baate karo
        </Link>
        <div className="flex">
          <div className="pt-1 cursor-pointer">About Us</div>
          <Link
            to={"login"}
            className="ml-10 cursor-pointer"
            id="logo"
            style={{ fontSize: "17px", color: "var(--primary)" }}
          >
            Login
          </Link>
        </div>
      </div>
      <div
        className="ml-8 mr-8 flex justify-center items-center max-h-screen rounded-2xl"
        style={{ background: "var(--blueGrad)", height: "90vh" }}
      >
        <div className="text-center mt-45">
          <div className="mb-16" id="logo" style={{ fontSize: "90px" }}>
            Baate Karo
          </div>
          <div className="mb-20">A Real Time Messaging Web App</div>
          <Button
            text={"Chaliye Shuru Karte Hai!"}
            onclick={() => {
              navigation("login");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
