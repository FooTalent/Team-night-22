const AboutUs = () => {
  return (
    <div className="">
      <div className="relative p-0 m-0 w-full">
        <div className="relative">
          <img
            src="/ImagesAboutUs/bannerConocenos.png"
            alt="Banner Conocenos"
            className="w-screen h-auto object-cover"
          />
          <div className="absolute top-0 left-0 p-4">
            <h2 className="mt-20 ml-16 text-7xl font-bold text-[#444444]">
              Hola!
            </h2>
            <p className="mt-2 ml-16 text-3xl text-[#444444]">
              <br />
              Somos un equipo interdisciplinario de <br />
              Talento Junior que busca ganar <br />
              experiencia y seguridad para dar <br />
              nuestros primeros pasos como profesionales.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <h3 className="text-3xl font-bold text-[#444444] mb-4 text-center">
          Como equipo trabajamos para ...
        </h3>
      </div>

      <div className="flex mt-8">
        <div className="w-1/2 flex justify-center">
          <img
            src="/ImagesAboutUs/pcAboutUs.png"
            alt="PC About Us"
            className="w-3/4 h-auto"
          />
        </div>

        <div className="w-1/2 mt-12">
          <div className="space-y-4">
            {[
              {
                title: "Objetivo:",
                text: "Crear un proyecto web que ayude al usuario a solucionar un problema con un producto útil y funcional.",
              },
              {
                title: "Desafío:",
                text: "Buscamos un cliente real que tuviese una necesidad. Pensamos una idea innovadora para convertirse en un producto útil. Validamos de Idea. Nos aseguramos de que tuviera potencial y fuese exitosa.",
              },
              { title: "Duración:", text: "6 semanas, más de 150hs." },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <img
                  src="/ImagesLanding/vistoMorado.svg"
                  alt="Icon"
                  className="w-6 h-6"
                />
                <div>
                  <div className="flex items-baseline">
                    <strong className="text-[#444444] mr-1">
                      {item.title}
                    </strong>
                    <p className="text-[#444444]">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F0ECFF] py-8 mt-8 text-center">
        <h3 className="text-2xl font-bold text-[#444444] mb-4">
          Nuestros Roles
        </h3>

        <div className="flex justify-center space-x-4 mt-8">
          <button className="bg-[#6945FF] text-white py-3 px-4 rounded-lg w-[505px] h-[48px] flex items-center justify-start font-bold text-xl">
            Equipo Project Management
          </button>

          <button className="bg-[#6945FF] text-white py-3 px-4 rounded-lg w-[505px] h-[48px] flex items-center justify-start font-bold text-xl">
            Equipo QA
          </button>
        </div>

        <div className="px-4 md:px-10 mt-10">
          <div className="flex gap-6 pl-32">
            <div className="w-[500px] h-[160px] p-4 rounded-lg border border-[#444444] bg-white shadow-md flex items-start gap-6">
              <img
                src="/ImagesAboutUs/Mercedes.png"
                alt="María Mercedes Ramella"
                className="w-32 h-32 rounded-full"
              />
              <div className="text-[#444444] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold">María Mercedes Ramella</h4>
                  <p className="text-md mt-1">PM - UX UI Designer</p>
                </div>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://www.linkedin.com/in/mercedes-ramella/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/ImagesAboutUs/LinkedIn.svg"
                      alt="LinkedIn"
                      className="w-8 h-8"
                    />
                  </a>
                  <a
                    href="https://www.behance.net/maramramella/moodboards"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/ImagesAboutUs/Be.svg"
                      alt="Behance"
                      className="w-8 h-8"
                    />
                  </a>
                  <a
                    href="https://github.com/MechiRamella"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/ImagesAboutUs/Github.svg"
                      alt="GitHub"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[500px] h-[160px] p-4 rounded-lg border border-[#444444] bg-white shadow-md flex items-start gap-6">
              <img
                src="/ImagesAboutUs/Clara.png"
                alt="Clara Carbonetti"
                className="w-32 h-32 rounded-full"
              />
              <div className="text-[#444444] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold">Clara Carbonetti</h4>
                  <p className="text-md mt-1">Q&A Tester Manual</p>
                </div>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://www.linkedin.com/in/clara-carbonetti-76719a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/ImagesAboutUs/LinkedIn.svg"
                      alt="LinkedIn"
                      className="w-8 h-8"
                    />
                  </a>
                  <a
                    href="https://github.com/claruchis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/ImagesAboutUs/Github.svg"
                      alt="GitHub"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-[#6945FF] text-white py-3 px-4 rounded-lg w-[1010px] h-[48px] flex items-center justify-start font-bold text-xl mx-auto mt-6">
          Equipo UX UI Designer
        </button>

        <div className="px-4 md:px-10 mt-10">
          <div className="flex gap-6 pl-32">
            <div className="flex flex-col gap-4 items-center">
              {[
                {
                  imgSrc: "/ImagesAboutUs/Aylen.png",
                  name: "Aylén Sol Martel",
                  role: "UX UI Designer",
                  links: [
                    {
                      src: "/ImagesAboutUs/LinkedIn.svg",
                      url: "https://www.linkedin.com/in/aylen-sol-martel/",
                    },
                    {
                      src: "/ImagesAboutUs/Be.svg",
                      url: "https://www.behance.net/aylen-sol-martel",
                    },
                    {
                      src: "/ImagesAboutUs/Github.svg",
                      url: "https://github.com/MAAY7001",
                    },
                  ],
                },
                {
                  imgSrc: "/ImagesAboutUs/Camila.png",
                  name: "Laura Camila Gonzalez",
                  role: "UX UI Designer",
                  links: [
                    {
                      src: "/ImagesAboutUs/LinkedIn.svg",
                      url: "https://www.linkedin.com/in/laura-c-gonzalez/",
                    },
                    {
                      src: "/ImagesAboutUs/Be.svg",
                      url: "https://www.behance.net/lauracgonzale5",
                    },
                    {
                      src: "/ImagesAboutUs/Github.svg",
                      url: "https://github.com/Camila-Gon",
                    },
                  ],
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="w-[500px] h-[160px] p-4 rounded-lg border border-[#444444] bg-white shadow-md flex items-center gap-4"
                >
                  <img
                    src={card.imgSrc}
                    alt={card.name}
                    className="w-32 h-32 rounded-full"
                  />
                  <div className="text-[#444444]">
                    <h4 className="text-lg font-bold">{card.name}</h4>
                    <p className="text-md">{card.role}</p>
                    <div className="flex space-x-4 mt-2">
                      {card.links.map((link, i) => (
                        <a
                          href={link.url}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={link.src}
                            alt={`Icon ${i}`}
                            className="w-10 h-10"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center">
              {[
                {
                  imgSrc: "/ImagesAboutUs/Paula.png",
                  name: "Paula Areal",
                  role: "UX UI Designer",
                  links: [
                    {
                      src: "/ImagesAboutUs/LinkedIn.svg",
                      url: "https://www.linkedin.com/in/arealpaula/",
                    },
                    {
                      src: "/ImagesAboutUs/Be.svg",
                      url: "https://www.behance.net/arealpaula/projects",
                    },
                    {
                      src: "/ImagesAboutUs/Mundo.svg",
                      url: "https://arealpaula.myportfolio.com/",
                    },
                  ],
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="w-[500px] h-[160px] p-4 rounded-lg border border-[#444444] bg-white shadow-md flex items-center gap-4"
                >
                  <img
                    src={card.imgSrc}
                    alt={card.name}
                    className="w-32 h-32 rounded-full"
                  />
                  <div className="text-[#444444]">
                    <h4 className="text-lg font-bold">{card.name}</h4>
                    <p className="text-md">{card.role}</p>
                    <div className="flex space-x-4 mt-2">
                      {card.links.map((link, i) => (
                        <a
                          href={link.url}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={link.src}
                            alt={`Icon ${i}`}
                            className="w-10 h-10"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="bg-[#6945FF] text-white py-3 px-4 rounded-lg w-[1000px] h-[48px] flex items-center justify-start font-bold text-xl mx-auto mt-6">
          Equipo Devs
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 mt-10">
          <div className="flex gap-6 pl-40">
            <div className="flex flex-col gap-4 items-center">
              {[
                {
                  imgSrc: "/ImagesAboutUs/Pedro.png",
                  name: "Pedro Gonzalez",
                  role: "Front Developer",
                  links: [
                    {
                      src: "/ImagesAboutUs/LinkedIn.svg",
                      url: "https://www.linkedin.com/in/pedro-gonzalez-268321279/",
                    },
                    {
                      src: "/ImagesAboutUs/Github.svg",
                      url: "https://github.com/Simply92",
                    },
                  ],
                },
                {
                  imgSrc: "/ImagesAboutUs/Mariano.png",
                  name: "Mariano Torres Distefano",
                  role: "Front Developer",
                  links: [
                    {
                      src: "/ImagesAboutUs/LinkedIn.svg",
                      url: "https://www.linkedin.com/in/mariano-torres-distefano/",
                    },
                    {
                      src: "/ImagesAboutUs/Github.svg",
                      url: "https://github.com/Marianotd",
                    },
                  ],
                },

                {
                  imgSrc: "/ImagesAboutUs/Vanessa.png",
                  name: "Vanessa Sánchez Pulido",
                  role: "Front Developer",
                  links: [
                    {
                      src: "/ImagesAboutUs/LinkedIn.svg",
                      url: "https://www.linkedin.com/in/dev-vanessan/",
                    },
                    {
                      src: "/ImagesAboutUs/Github.svg",
                      url: "https://github.com/vanessann-dev",
                    },
                  ],
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="w-[500px] h-[150px] mr-30 p-4 rounded-lg border border-[#444444] bg-white shadow-md flex items-center gap-4"
                >
                  <img
                    src={card.imgSrc}
                    alt={card.name}
                    className="w-32 h-32 rounded-full"
                  />
                  <div className="text-[#444444]">
                    <h4 className="text-lg font-bold">{card.name}</h4>
                    <p className="text-md">{card.role}</p>
                    <div className="flex space-x-4 mt-2">
                      {card.links.map((link, i) => (
                        <a
                          href={link.url}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={link.src}
                            alt={`Icon ${i}`}
                            className="w-10 h-10"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 items-center">
              {[
                {
                  imgSrc: "/ImagesAboutUs/Gustavo.png",
                  name: "Gustavo Sírtori",
                  role: "Back Developer",
                  links: [
                    {
                      src: "/ImagesAboutUs/LinkedIn.svg",
                      url: "https://www.linkedin.com/in/gustavoandressirtori/",
                    },
                    {
                      src: "/ImagesAboutUs/Github.svg",
                      url: "https://github.com/gustsirt",
                    },
                    {
                      src: "/ImagesAboutUs/Mundo.svg",
                      url: "https://gustsirt.github.io/pagina-resumen/",
                    },
                  ],
                },
                {
                  imgSrc: "/ImagesAboutUs/Henryck.png",
                  name: "Henryck Guaramato",
                  role: "Back Developer",
                  links: [
                    {
                      src: "/ImagesAboutUs/LinkedIn.svg",
                      url: "https://www.linkedin.com/in/henryckg/",
                    },
                    {
                      src: "/ImagesAboutUs/Github.svg",
                      url: "https://github.com/henryckg",
                    },
                  ],
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="w-[500px] h-[150px] mr-30 p-4 rounded-lg border border-[#444444] bg-white shadow-md flex items-center gap-4"
                >
                  <img
                    src={card.imgSrc}
                    alt={card.name}
                    className="w-32 h-32 rounded-full"
                  />
                  <div className="text-[#444444]">
                    <h4 className="text-lg font-bold">{card.name}</h4>
                    <p className="text-md">{card.role}</p>
                    <div className="flex space-x-4 mt-2">
                      {card.links.map((link, i) => (
                        <a
                          href={link.url}
                          key={i}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={link.src}
                            alt={`Icon ${i}`}
                            className="w-10 h-10"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-16">
        <h2 className="text-3xl font-bold text-[#444444] mb-8">
          Tecnologías Utilizadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {[
            {
              title: "Diseño",
              images: [
                "/ImagesAboutUs/figma.svg",
                "/ImagesAboutUs/ilustrator.svg",
                "/ImagesAboutUs/miro.svg",
                "/ImagesAboutUs/ow.svg",
                "/ImagesAboutUs/mora.svg",
              ],
            },
            {
              title: "Desarrollo",
              images: [
                "/ImagesAboutUs/mongo.svg",
                "/ImagesAboutUs/postman.svg",
                "/ImagesAboutUs/express.svg",
                "/ImagesAboutUs/jsb.svg",
                "/ImagesAboutUs/materialui.svg",
                "/ImagesAboutUs/jsf.svg",
                "/ImagesAboutUs/react.svg",
                "/ImagesAboutUs/vs.svg",
                "/ImagesAboutUs/tailwind.svg",
              ],
            },
            {
              title: "QA",
              images: ["/ImagesAboutUs/sql.svg"],
            },
            {
              title: "Comunicación",
              images: [
                "/ImagesAboutUs/slack.svg",
                "/ImagesAboutUs/githubi.svg",
                "/ImagesAboutUs/meet.svg",
                "/ImagesAboutUs/notion.svg",
                "/ImagesAboutUs/discord.svg",
                "/ImagesAboutUs/jira.svg",
                "/ImagesAboutUs/excel.svg",
                "/ImagesAboutUs/whatsapp.svg",
              ],
            },
          ].map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center p-4 rounded-lg shadow-md border ${
                tech.title === "QA" ? "w-16 h-32" : "w-56 h-56"
              }`}
            >
              <p className="text-xl font-semibold text-[#444444]">
                {tech.title}
              </p>
              <div
                className={`flex flex-wrap justify-center items-center gap-4 mt-2 ${
                  tech.title === "Desarrollo"
                    ? "grid grid-cols-2"
                    : tech.title === "Comunicación"
                    ? "grid grid-cols-2"
                    : "flex"
                }`}
              >
                {tech.images.map((src, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={src}
                    alt={`Icon ${tech.title} ${imgIndex}`}
                    className="w-8 h-8"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative p-0 m-0 w-full">
        <div className="relative">
          <img
            src="/ImagesAboutUs/graciasbanner.png"
            alt="Banner Conocenos"
            className="w-screen h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
