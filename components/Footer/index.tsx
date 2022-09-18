import React from 'react';

import { footerList } from '../../utils/constants';

export const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <div className="flex flex-wrap gap-2 mt-5">
        {footerList.map((item) => (
          <p key={item} className="text-gray-400 text-sm hover:underline cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
