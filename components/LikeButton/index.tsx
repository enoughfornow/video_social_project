import React from 'react';

import useAuthStore from '../../store/authStore';

import { MdFavorite } from 'react-icons/md';

interface ILikeButtonProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
}

export const LikeButton: React.FC<ILikeButtonProps> = ({ handleLike, handleDislike, likes }) => {
  const [alreadyLiked, setAlreadyLiked] = React.useState(false);
  const { userProfile }: any = useAuthStore();

  const filterLikes = likes?.filter((like) => like._ref === userProfile?._id);

  React.useEffect(() => {
    filterLikes?.length > 0 ? setAlreadyLiked(true) : setAlreadyLiked(false);
  }, [filterLikes, likes]);

  return (
    <div className="flex md:flex-row flex-row-reverse gap-6 mb-2">
      <div className="flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#f7028c]"
            onClick={handleDislike}>
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div className="bg-primary rounded-full p-2 md:p-4" onClick={handleLike}>
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold">{likes?.length | 0}</p>
      </div>
    </div>
  );
};
