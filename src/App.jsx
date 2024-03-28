import Text from "./components/Desc"
import Button from "./components/Sosial"

function App() {

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-[#1F1F1F] min-h-[550px] w-[400px] rounded-2xl flex justify-center flex-col items-center py-5">
        <img src="/Foto.jpg" alt="Foto" className="rounded-full h-[180px] w-[180px] my-2" />
        <Text/>
        <Button/>
      </div>
    </div>
  )
}

export default App
