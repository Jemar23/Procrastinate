"use client"
export default function TodoAppButton() {
    const handleOnClick = () => {
        window.open("https://timeless-peach.vercel.app/", "_blank");
    }

    return(
        <button onClick={handleOnClick} className="border border-inherit rounded-lg p-4 bg-gradient-to-r from-rose-500 via-blue-500 to-fuchsia-500 shadow-xl shadow-blue-500/50">Timeless</button>
    );
}