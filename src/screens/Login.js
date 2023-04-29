import Button from "../components/BlueButton";

const Login = () => {
    return (
        <>
            <div className="flex justify-between pt-5 pb-5 pl-12 pr-12">
                <div className="cursor-pointer" id="logo">
                    Baate karo
                </div>
                <div className="flex">
                    <div className="mr-10 pt-1 cursor-pointer">About Us</div>
                    <div className=" mr-5 cursor-pointer" id="logo" style={{ fontSize: "17px" }}>Login</div>
                </div>
            </div>
            <div className="ml-8 mr-8 flex justify-center items-center h-[55rem] rounded-2xl" style={{ background: "var(--blueGrad)" }}>
                <div className="text-center">
                    <div className="mb-16" id="logo" style={{ fontSize: "90px" }}>
                        Baate Karo
                    </div>
                    <div className="mb-20">
                        A Real Time Messaging Web App
                    </div>
                    <Button text={"Chaliye Shuru Karte Hai!"} />
                </div>
            </div>
        </>

    );
}

export default Login;