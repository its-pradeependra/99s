import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export default function GoogleAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleGooleAuth = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            

            const res = await fetch("/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    photo: resultsFromGoogle.user.photoURL,
                }),
            });

            const data = await res.json();
            console.log(data);

            if (res.ok) {
                toast.success("Sign in success");
                dispatch(signInSuccess(data));
                navigate("/");
            } else {
                toast.error('Failed to login, Try again later!')
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <button
            type="button" onClick={handleGooleAuth} className="px-3 w-fit py-2 sm:py-0 border-2 border-blue-800 rounded-xl transition duration-300 hover:bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>

        </button>
    )
}
