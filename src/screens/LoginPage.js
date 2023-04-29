import { useState } from "react";
import Button from "../components/BlueButton";
import TextBox from "../components/common/TextBox";
const LoginPage = () => {
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
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
                        <div className="mb-10 text-2xl font-bold">
                            LOGIN
                        </div>
                        <TextBox outerClass={"mb-6"} width={"100%"} input={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" inputClass={"pl-4"}/>
                        <TextBox outerClass={"mb-9"} input={pass} width={"100%"} onChange={(e)=>{setPass(e.target.value)}} placeholder="Password" inputClass={"pl-4"} type="password"/>
                        <Button text={"Login"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;