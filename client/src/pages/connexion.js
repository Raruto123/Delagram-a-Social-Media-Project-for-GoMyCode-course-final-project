import { useContext } from "react";
import { UidContext } from "../components/AppContext";
import SignInForm from "../components/Log/SignInForm";
import "../styes/pages/connexion.css"


function Login() {

    const uid = useContext(UidContext)

    return(
        <div>
            {uid ? (window.location = "/accueil") : (<SignInForm></SignInForm>)}
        </div>
    )
}

export default Login