import React from 'react';

import axios from 'axios';

import Image from 'next/image';

import { BASE_URL } from '../../utils';
import { IUser, IVideo } from '../../types';

import { GoVerified } from 'react-icons/go';

interface IProfileProps {
  data: {
    user: IUser;
    userVideos: IVideo[];
    userLikedVideos: IVideo[];
  };
}

const Profile: React.FC<IProfileProps> = ({ data }) => {
  const { user, userVideos, userLikedVideos } = data;
  return (
    <div className="w-full">
      <div className="flex gap-6 md:gap-10 mb-4 bg-white w-full">
        <div className="w-16 h-16 md:w-32 md:h-32">
          <Image
            width={120}
            height={120}
            className="rounded-full"
            src={user.image}
            alt="user-profile"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="flex gap-1 items-center justify-center text-md font-bold text-primary lowercase mt-1 md:text-2xl tracking-wider">
            {user.userName.replaceAll(' ', '')}
            <GoVerified className="text-blue-400" />
          </p>
          <p className="text-gray-400 text-xs md:text-xl">{user.userName}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full"></div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params: { id } }: { params: { id: string } }) => {
  const response = await axios.get(`${BASE_URL}/api/profile/${id}`);

  return {
    props: { data: response.data },
  };
};

export default Profile;
