"use client"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import Text from "./text_labels/Text";
import Subtitle from "./text_labels/Subtitle";




export function PricingCard({ name, price, features }) {

  return (
    <Card color="white" variant="gradient" className="w-full h-full max-w-[20rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none border-b border-white/10 pb-4 md:pb-8 text-center"
      >
        <Text>{name}</Text>
        <Subtitle>
          $2.0000
        </Subtitle>
        <Subtitle>
          COP
        </Subtitle>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              ✅
            </span>
            <Text>5 team members</Text>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              ✅
            </span>
            <Text>200+ components</Text>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              ✅
            </span>
            <Text>40+ built-in pages</Text>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              ✅
            </span>
            <Text>1 year free updates</Text>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              ✅
            </span>
            <Text>
              Life time technical support
            </Text>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="flex items-center mt-4 md:mt-8 p-0  ">
        <button className="py-2 px-5 text-lg md:text-lg lg:text-xl rounded-md bg-primary text-white my-3 w-full text-center">Comprar</button>
      </CardFooter>
    </Card >
  );
}