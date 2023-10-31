import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

if (author) {
  // The author was found, you can use 'author' here
  console.log('Author found:', author);
} else {
  // Handle the case where no author is found
  console.log('Author not found');
}


    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor