import React from "react";

const Sosial = () => {
  const data = [
    {
      id: "1",
      name: "Github",
      link: "https://github.com/PutuRivan",
      Logo: "/github-logo.png",
    },
    {
      id: "2",
      name: "Linkedin",
      link: "https://www.linkedin.com/in/putu-rivan",
      Logo: "/linkedin.png",
    },
    {
      id: "3",
      name: "X",
      link: "https://twitter.com/rivanputu_",
      Logo: "twitter.png",
    },
    {
      id: "4",
      name: "Instagram",
      link: "https://www.instagram.com/rivanputu_",
      Logo: "instagram.png",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => {
        return (
          <a href={item.link} key={item.id} target="_blank">
            <div className="w-[300px] bg-[#333] p-2 rounded-xl grid grid-cols-3 hover:scale-105 hover:text-white">
              <img src={item.Logo} alt="" />
              <p className="text-center">{item.name}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Sosial;
