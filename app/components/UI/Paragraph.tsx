import { type PropsWithChildren } from 'react';


const Paragraph = ({ children }: PropsWithChildren) => {
  return (
    <p className='text-justify'>{children}</p>
  );
};

export default Paragraph;
