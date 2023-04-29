import Button from "../components/BlueButton";
const LoginPage = () => {
    return (
        <>
            <div className="h-96" style={{ background: "var(--lblueGrad)" }}>
                <div className="pt-5 pl-12" id="logo">
                    Baate Karo
                </div>
                <div className="ml-8 mr-8 flex justify-center items-center h-[55rem] rounded-2xl">
                    <div className="text-center">
                        <div className="mb-16" id="logo" style={{ fontSize: "70px" }}>
                            Baate Karo
                        </div>
                        <div className="mb-20 text-2xl font-bold">
                            LOGIN
                        </div>
                        <Button text={"Login"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;