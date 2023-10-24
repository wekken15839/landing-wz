"use client"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import Subtitle from "./text_labels/Subtitle";
import Text from "./text_labels/Text";
import Link from "next/link";
import Title from "./text_labels/Title";

export function ProjectCard({ image, title, text, links }) {
  return (
    <Card className="w-[1fr] lg:w-[90%] h-80 py-1">
      <CardHeader floated={false} className="mb-[5px] relative h-full">
        <div className="absolute bg-black w-full h-full left-0 top-0 opacity-70">
        </div>
        <img src={image} alt="project-card" className="w-full object-cover" />
      </CardHeader>
      <CardBody className="text-center p-0 flex flex-col  mb-2 ">
        <div className="font-bold"><Text>{title}</Text></div>
        <Text>{text.body} en {text.city}</Text>
      </CardBody>
      <CardFooter className="flex justify-center gap-2 m-0 p-1">
        {links.length > 0 && links.map((item, index) => <Tooltip key={index} content={item.text} >
          <a href={item.link} className="first-letter:capitalize text-2xl lg:text-3xl">{item.icon}</a>
        </Tooltip>)}
      </CardFooter>
    </Card>
  );
}