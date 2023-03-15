import { type PropsWithChildren } from 'react';


const Paragraph = ({ children }: PropsWithChildren) => {
  return (
    <p>{children}</p>
  );
};

export default Paragraph;
