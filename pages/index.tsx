import type { NextPage } from 'next';
import axios from 'axios';
import { IVideo } from '../types';
import { VideoCard, NoResults } from '../components';

interface IProps {
  videos: IVideo[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return <div className="flex flex-col gap-10 videos h-full">
    {
      videos.length ? (
        videos.map((video: IVideo) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (
        <NoResults text={'No Videos Yet'}/>
      )
    }
  </div>;
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
