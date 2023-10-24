export default function Text({ children }) {

  return (<p className="text-base md:text-lg
  lg:text-xl
  ">
    {children}
  </p>);
};