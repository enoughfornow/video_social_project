import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NoResults } from '../../components';
import useAuthStore from '../../store/authStore';
import { ImInsertTemplate } from 'react-icons/im';
import { IUser } from '../../types';
import { GoVerified } from 'react-icons/go';

interface ICommentsProps {
  isPostingComment: Boolean;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  addComment: (e: React.FormEvent) => void;
  comments: IComment[];
}

interface IComment {
  comment: string;
  lenght?: number;
  _key: string;
  postedBy: { _ref: string; _id: string };
}

export const Comments: React.FC<ICommentsProps> = ({
  comment,
  setComment,
  addComment,
  comments,
  isPostingComment,
}) => {
  const { userProfile, allUsers } = useAuthStore();

  return (
    <div className="border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-[100px]">
      <div className="overflow-scroll lg:h-[475px]">
        {comments?.length ? (
          comments.map((comment, index) => (
            <>
              {allUsers.map(
                (user: IUser) =>
                  user._id === (comment.postedBy._id || comment.postedBy._ref) && (
                    <div className="p-2 items-center" key={index}>
                      <Link href={`/profile/${user._id}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8">
                            <Image
                              width={34}
                              height={34}
                              className="rounded-full"
                              src={user.image}
                              alt="user-profile"
                              layout="responsive"
                            />
                          </div>
                          <div>
                            <p className="flex gap-1 items-center text-md font-bold text-primary lowercase mt-1">
                              {user.userName.replaceAll(' ', '')}
                              <GoVerified className="text-blue-400" />
                            </p>
                            <p className="text-gray-400 text-xs">{user.userName}</p>
                          </div>
                        </div>
                      </Link>
                      <div className='mt-5 ml-6'>
                        <p className='text-lg'>{comment.comment}</p>
                      </div>
                    </div>
                  ),
              )}
            </>
          ))
        ) : (
          <NoResults text="No comments yet" />
        )}
      </div>
      {userProfile && (
        <div className="absolute bottom-0 left-0 pb-6 px-2 md:px-10">
          <form onSubmit={addComment} className="flex gap-4">
            <input
              type="text"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="add comment..."
              className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
            />
            <button className="text-md text-gray-400" onClick={addComment}>
              {isPostingComment ? 'Commenting...' : 'Comment'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
