// @flow
import React from "react";

export type Item = {
    feed: {
        title: string;
        description: string;
        link: string;
        id: number;
    };
};

const FeedItem = (item: Item) => {
    return (
        <div className="row marketing">
            <div className="col-lg-12">
                <a href={item.feed.link}>
                    <h4>{item.feed.title}</h4>
                </a>
                <p>{item.feed.description}</p>
            </div>
        </div>
    );
};

export default FeedItem;
