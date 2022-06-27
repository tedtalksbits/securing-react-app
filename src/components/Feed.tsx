import FeedItem from "./FeedItem";

interface IFeedProps {
    feeds: {
        title: string;
        description: string;
        link: string;
        id: number;
    }[];
}
const Feed = ({ feeds }: IFeedProps) => {
    return (
        <div>
            {feeds.map((item) => (
                <FeedItem key={item.id} feed={item} />
            ))}
        </div>
    );
};

export default Feed;
