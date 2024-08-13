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
    <div className="flex flex-row gap-5">
      {data.map((item) => (
        <div>
          <a href={item.link} target="_blank">
            <img src={item.Logo} alt="" className="w-[30px]" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sosial;
