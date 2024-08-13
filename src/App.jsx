import Sosial from "./components/Sosial";

function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-[#1F1F1F] min-h-[550px] w-[400px] rounded-2xl gap-5 flex flex-col items-center py-5">
        <img
          src="/Foto.jpg"
          alt="Foto"
          className="rounded-xl h-[250px] w-[250px] my-2"
        />
        <div className="text-white flex flex-col items-center gap-2">
          <h1 className="text-xl">Putu Rivan Anggana Dharmawangsa</h1>
          <p className="text-gray-400">Fullstack Developer</p>
        </div>
        <div className="px-5 text-justify text-white">
          <p>
            a student at UPN Veteran Jakarta. I have a strong interest in
            technological advancements and am always enthusiastic about keeping
            up with the latest innovations in this field. Additionally, I am
            very passionate about sports, as I believe that maintaining a
            balance between body and mind is key to living a healthy and
            productive life.
          </p>
        </div>
        <Sosial />
      </div>
    </div>
  );
}

export default App;
