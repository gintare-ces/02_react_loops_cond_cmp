
import './aside.css';
import PostsAsideHeader from "./PostsAsideHeader"
import SinglePostAside from './SinglePostAside';
function PostsAside() {
    return (
        <div className='postAside'>
            <PostsAsideHeader />
            <SinglePostAside img={'/img/avatar_smoke.jpg'} title={'denim'} />
            <SinglePostAside img={'/img/bandmember.jpg'} title={'band'}/>
            <SinglePostAside img={'/img/workshop.jpg'} title={'work'}/>
        </div>
    )
}
export default PostsAside