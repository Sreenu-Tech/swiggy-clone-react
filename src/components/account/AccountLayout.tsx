import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

type ViewType = 'Login' | 'Signup';

export default function AccountLayout() {

    const [view, setView] = useState<ViewType>('Signup');

    return (
        <div>
            <div className="flex flex-row">
                <button className="border border-green-600 p-2" onClick={() => setView('Login')}>Login</button>
                <button className="border border-green-600 p-2" onClick={() => setView('Signup')}>Signup</button>
            </div>

            {view == 'Login' && <Login />}
            {view == 'Signup' && <Signup />}

        </div>
    )
}