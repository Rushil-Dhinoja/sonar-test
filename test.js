
const comments =[]
const commentMap = {}


comments?.forEach(
    (comment) => (commentMap[comment.commentType] = comment.comments)
  );