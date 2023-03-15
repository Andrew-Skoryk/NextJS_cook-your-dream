import { type PropsWithChildren } from 'react';

const Heading = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-center text-3xl font-semibold">
    {children}
    </h1>
  );
};

export default Heading;
