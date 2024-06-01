import Sosial from "./components/Button"

function App() {

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-[#1F1F1F] min-h-[550px] w-[400px] rounded-2xl flex justify-center flex-col items-center py-5">
        <img src="/Foto.jpg" alt="Foto" className="rounded-full h-[180px] w-[180px] my-2" />
        <div className="text-center flex flex-col">
            <h1 className="text-white">Putu Rivan Anggana Dharmawangsa</h1>
            <p className="text-[#c5f82a] ">Jakarta, Indonesia</p>
            <p className="text-gray-300 my-3 text-[14px]">"Informatics Students"</p>
        </div>
        <Sosial/>
      </div>
    </div>
  )
}

export default App
