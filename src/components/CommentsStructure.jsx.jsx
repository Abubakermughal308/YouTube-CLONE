import Comment from "./Comment";
import CommentsList from "./CommentsList";
import { commentsData } from "../utils/constants";

const CommentsStructure = () => {
 
  return (
    <div className="w-full border border-gray-300 rounded-lg p-3">
      <h1 className="font-bold text-xl">COMMENTS :</h1>
    <CommentsList comments={commentsData}/>
  
    </div>
  );
};
export default CommentsStructure;
