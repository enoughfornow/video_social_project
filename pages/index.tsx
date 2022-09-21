import type { NextPage } from 'next';
import axios from 'axios';
import { IVideo } from '../types';
import { VideoCard, NoResults } from '../components';
import { BASE_URL } from '../utils';

interface IProps {
  videos: IVideo[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: IVideo) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={'No Videos Yet'} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/post`);
  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
