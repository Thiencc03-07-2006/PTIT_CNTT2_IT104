class User {
  id;
  posts;
  followers;
  constructor(id: number, posts: Post[], followers: User[]) {
    this.id = id;
    this.posts = posts;
    this.followers = followers;
  }
  createPost(content: string) {
    let id: number;
    do {
      id = Math.floor(Math.random() * 1_000_000);
    } while (postAll.some((target) => target.id === id));
    let newPost = new Post(id, [], [], this.id, content);
    this.posts.push(newPost);
    postAll.push(newPost);
  }
  comment(postId: number, content: string) {
    let index = postAll.findIndex((target) => target.id === postId);
    if (index !== -1) {
      let id: number;
      do {
        id = Math.floor(Math.random() * 1_000_000);
      } while (postAll[index]?.comments.some((target) => target.id === id));
      postAll[index]?.comments.push(new Comment(id, this.id, content, []));
    }
  }
  follow(user: User) {
    user.followers.push(this);
  }
  likePost(postId: number) {
    let index = postAll.findIndex((target) => target.id === postId);
    if (index !== -1) {
      if (postAll[index]?.likes.some((target) => target.id === this.id)) {
        return;
      }
      postAll[index]?.likes.push(this);
    }
  }
  viewFeed() {
    console.log("UserID: " + this.id);
    userAll
      .filter((target) =>
        target.followers.some((target0) => target0.id === this.id)
      )
      .forEach((target1) => {
        console.log("ID: " + target1.id);
        target1.posts.forEach((target2) =>
          console.log("ID: " + target2.id + " Conten: " + target2.content)
        );
      });
  }
}
class Post {
  id;
  likes;
  comments;
  userId;
  content;
  constructor(
    id: number,
    likes: User[],
    comments: Comment[],
    userId: number,
    content: string
  ) {
    this.id = id;
    this.likes = likes;
    this.comments = comments;
    this.userId = userId;
    this.content = content;
  }
  addLike(userId: number) {
    if (this.likes.some((target) => target.id === userId)) {
      return;
    }
    let index = userAll.findIndex((target) => target.id === userId);
    if (index !== -1) {
      this.likes.push(userAll[index]!);
    }
  }
  addComment(comment: Comment) {
    let id: number;
    do {
      id = Math.floor(Math.random() * 1_000_000);
    } while (this.comments.some((target) => target.id === id));
    comment.id = id;
    this.comments.push(comment);
  }
}
class Comment {
  id;
  userId;
  content;
  replies;
  constructor(id: number, userId: number, content: string, replies: string[]) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.replies = replies;
  }
  addReply(reply: string) {
    this.replies.push(reply);
  }
}
let u1 = new User(1, [], []);
let u2 = new User(2, [], []);
let u3 = new User(3, [], []);
let postAll: Post[] = [];
let userAll: User[] = [u1, u2, u3];
u1.follow(u2);
u1.follow(u3);
u2.follow(u3);
u2.createPost("Hello1");
u3.createPost("Hello2");
u3.createPost("Hello3");
u1.viewFeed();
u2.viewFeed();
u3.viewFeed();
