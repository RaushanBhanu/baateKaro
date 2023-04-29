import { useState } from "react";
import Button from "../components/BlueButton";
import TextBox from "../components/common/TextBox";
const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [username, setUser] = useState("")
    return (
        <>
            <div className="h-[35rem]" style={{ background: "var(--lblueGrad)" }}>
                <div className="pt-5 pl-12" id="logo">
                    Baate Karo
                </div>
                <div className="flex justify-center items-center h-[90vh]">
                    <div className="text-center">
                        <div className="mb-16" id="logo" style={{ fontSize: "70px" }}>
                            Baate Karo
                        </div>
                        <div className="mb-8 text-xl font-bold">
                            LOGIN
                        </div>
                        {
                            true && <TextBox maxLength={20} outerClass={"mb-6"} width={"100%"} input={username} onChange={(e) => { setUser(e.target.value) }} placeholder="UserName" inputClass={"pl-4"} />

                        }
                        <TextBox maxLength={50} outerClass={"mb-6"} width={"100%"} input={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" inputClass={"pl-4"} />
                        <TextBox maxLength={16} outerClass={"mb-10"} input={pass} width={"100%"} onChange={(e) => { setPass(e.target.value) }} placeholder="Password" inputClass={"pl-4"} type="password" />
                        <Button text={"Login"} />
                        <div className="mt-10 text-[13px]"><span className="opacity-50 mr-2">Don't have an account?</span><span onClick={} className="opacity-100 cursor-pointer">Create</span></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;