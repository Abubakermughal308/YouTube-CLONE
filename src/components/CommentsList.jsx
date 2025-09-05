
import Comment from "./Comment"

const CommentsList =({comments})=>{
    if(!comments) return null;
    return comments.map((data ,index)=>{
      //Don't use indexes as key
 return (
                <div className="p-2 " key={index}>
                <Comment commentData={data} />
                <div className="px-5 mx-5 border-l-2 border-gray-300">
                <CommentsList comments={data?.result}/>

                </div>
                </div>
             )            
        })
             
    
}
export default CommentsList;