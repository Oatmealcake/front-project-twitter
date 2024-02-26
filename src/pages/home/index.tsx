import PostBox from 'components/posts/PostBox';
import PostForm from 'components/posts/PostForm';

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  likes?: string[];
  likeCount?: number;
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: "1",
    email: "test@test.com",
    content: "comeback",
    createdAt: "2024-02-26",
    uid: "123123",
  },
  {
    id: "2",
    email: "test@test.com",
    content: "comeback",
    createdAt: "2024-02-26",
    uid: "123123",
  },
  {
    id: "3",
    email: "test@test.com",
    content: "comeback",
    createdAt: "2024-02-26",
    uid: "123123",
  },
  {
    id: "4",
    email: "test@test.com",
    content: "comeback",
    createdAt: "2024-02-26",
    uid: "123123",
  },
  {
    id: "5",
    email: "test@test.com",
    content: "comeback",
    createdAt: "2024-02-26",
    uid: "123123",
  },
  {
    id: "6",
    email: "test@test.com",
    content: "comeback",
    createdAt: "2024-02-26",
    uid: "123123",
  },
  {
    id: "7",
    email: "test@test.com",
    content: "comeback",
    createdAt: "2024-02-26",
    uid: "123123",
  },
];

export default function HomePage() {

  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab">Following</div>
      </div>
      <PostForm />
      <div className="post">
        {posts?.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}