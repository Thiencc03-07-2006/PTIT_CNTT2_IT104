import { Component } from "react";
import DetailPost from "./DetailPost";
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}
export default class ListPost extends Component<object, Post[]> {
  constructor(props: object) {
    super(props);
    this.state = [
      {
        id: 1,
        title: "Update 23",
        content: "What's new, what's changed, and what's fixed",
        author: "PeemLR+++",
      },
      {
        id: 2,
        title: "Top weekly",
        content: "1st An, 2st Binh",
        author: "Artist",
      },
    ];
  }
  render() {
    return (
      <div>
        <h3>Bai 6</h3>
        <h4>Danh sach bai viet</h4>
        <DetailPost listPost={this.state} />
      </div>
    );
  }
}
