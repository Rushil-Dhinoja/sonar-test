
const comments =[{
    approvalId: 791,
commentType
: 
"CONTACT_DETAILS",
comments
: 
"Has duplicate contact Number",
id
: 
17
}]
const commentMap = {}


comments?.forEach(
    (comment) => (commentMap[comment.commentType] = comment.comments)
  );