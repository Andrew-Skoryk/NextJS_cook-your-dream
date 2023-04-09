import { type PropsWithChildren } from 'react';

const Heading = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-center text-4xl font-bold mb-8">
      {children}
    </h1>
  );
};

export default Heading;
