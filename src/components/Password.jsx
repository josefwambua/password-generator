import { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Password() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const generatePassword = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if (numberAllowed) str += '0123456789';
        if (charAllowed) str += '!@#$%^&*()_+';

        for (let i = 1; i <= length; i++) {
            const char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, charAllowed, numberAllowed]);

    useEffect(() => {
        generatePassword();
    }, [length, numberAllowed, charAllowed, generatePassword]);

    const copyPasswordToClipboard = () => {
        window.navigator.clipboard.writeText(password);
        toast.success('Password copied Succesfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="mt-6 mb-5 w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl rounded-lg px-4 py-3 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 backdrop-blur-md backdrop-filter bg-opacity-60 border border-purple-800 shadow-lg">
            <h1 className="text-white text-center my-3">Password Generator</h1>
            <div className="flex flex-col md:flex-row items-center md:items-stretch mb-4">
                <input
                    value={password}
                    type="text"
                    className="outline-dashed bg-teal-50 flex-1 py-1 px-3 my-2 md:my-0 md:mr-2 bg-transparent text-black placeholder-white border-none"
                    placeholder="Password"
                    readOnly
                />
                <button
                    className="outline-none bg-blue-700 text-white px-3 py-1 my-2 md:my-0 md:ml-2 hover:bg-blue-600 transition duration-300"
                    onClick={copyPasswordToClipboard}
                >
                    Copy
                </button>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className="cursor-pointer"
                        onChange={(event) => setLength(event.target.value)}
                    />
                    <label htmlFor="length" className="text-white">
                        Length: {length}
                    </label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllowed}
                        onChange={() => {
                            setNumberAllowed((previous) => !previous);
                        }}
                    />
                    <label htmlFor="number" className="text-white">
                        Numbers
                    </label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        onChange={() => {
                            setCharAllowed((previous) => !previous);
                        }}
                    />
                    <label htmlFor="charInput" className="text-white">
                        Character
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Password;
