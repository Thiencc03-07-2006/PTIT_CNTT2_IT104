import { Component } from "react";
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}
interface ListPostChildren {
  listPost: readonly Post[];
}
export default class DetailPost extends Component<ListPostChildren> {
  constructor(props: ListPostChildren) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.listPost.map((target) => (
          <ul style={{ marginBottom: "5px" }} key={target.id}>
            {Object.entries(target).map(([key, value]) => (
              <li style={{ marginBottom: "5px" }} key={key}>
                {key}: {value}
              </li>
            ))}
            <hr />
          </ul>
        ))}
      </div>
    );
  }
}
