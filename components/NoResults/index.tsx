import React from 'react';

import { BiCommentX } from 'react-icons/bi';



interface INoResultsProps {
  text: string;
}

export const NoResults: React.FC<INoResultsProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">
        <BiCommentX />
      </p>
      <p className="text-2xl text-center">{text}</p>
    </div>
  );
};
