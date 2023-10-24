import { ProjectCard } from "../ProjectCard";
import Subtitle from "../text_labels/Subtitle";
import Text from "../text_labels/Text";
import { BsFacebook } from "react-icons/bs"
import ardillaenmoto from "../../../public/ardillaenmoto.png"


const socialMedias = [
  {
    title: "SolarNel",
    text: {
      body: "Empresa de Paneles solares",
      city: "Aguachica"
    },
    image: ardillaenmoto,
    links: [
      {
        text: "Facebook",
        link: "https://www.facebook.com",
        icon: <BsFacebook />
      },
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
      {
        text: "Facebook",
        link: "https://www.facebook.com",
        icon: <BsFacebook />
      },
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
    ]
  },
  {
    title: "SolarNel",
    text: {
      body: "Empresa de Paneles solares",
      city: "Aguachica"
    },
    image: ardillaenmoto,
    links: [
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
    ]
  },
  {
    title: "SolarNel",
    text: {
      body: "Empresa de Paneles solares",
      city: "Aguachica"
    },
    image: ardillaenmoto,
    links: [
      {
        text: "Facebook",
        link: "https://www.facebook.com",
        icon: <BsFacebook />
      },
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
    ]
  },
  {
    title: "SolarNel",
    text: {
      body: "Empresa de Paneles solares",
      city: "Aguachica"
    },
    image: ardillaenmoto,
    links: [
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
    ]
  },
  {
    title: "SolarNel",
    text: {
      body: "Empresa de Paneles solares",
      city: "Aguachica"
    },
    image: ardillaenmoto,
    links: [
      {
        text: "Facebook",
        link: "https://www.facebook.com",
        icon: <BsFacebook />
      },
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
    ]
  },
  {
    title: "SolarNel",
    text: {
      body: "Empresa de Paneles solares",
      city: "Aguachica"
    },
    image: ardillaenmoto,
    links: [
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
      {
        text: "Facebook",
        link: "www.reqres.in",
        icon: <BsFacebook />
      },
    ]
  },
]

export default function Projects() {

  return (<div className="px-5 w-full bg-gray">
    <div className="w-full min-h-screen pt-10 pb-4">
      <div className="w-full lg:w-3/5 lg:mx-auto">
        {/* TITLE */}
        <div className="text-center mb-4">
          <Subtitle><span className="text-primary">Nuestros Proyectos</span></Subtitle>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste ab ipsa inventore eius, in delectus corporis aliquid. Accusantium, obcaecati.</Text>
        </div>
      </div>
      {/* PROJECTS */}
      <div className=" rounded-md gap-2 grid place-items-center sm:grid-cols-2 lg:grid-cols-3 px-2 md:px-5 lg:px-10">
        {socialMedias.map((sm, index) => <ProjectCard image={sm.image} links={sm.links} text={sm.text} title={sm.title} key={index} />)}
      </div>
    </div>
  </div>)
};  