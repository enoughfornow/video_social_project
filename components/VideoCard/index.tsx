import React from 'react';
import { NextPage } from 'next';
import { IVideo } from '../../types';

interface IVideoCardProps {
  post: IVideo
}

export const VideoCard:NextPage<IVideoCardProps> = ({ post }) => {
  return <div>VideoCard</div>;
};
