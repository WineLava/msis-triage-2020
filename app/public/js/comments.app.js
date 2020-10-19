var app = new Vue({
  el: '#comments',
  data: {
    commentLst:[
    ],
    newComment:{
      id:'',
      commentText:''
    }
  },
  created(){
    this.fetchComments();
  },
  methods:{
    fetchComments: function(){
      fetch('api/comments/')
      .then(function(response) {return response.json()})
      .then(json => {
        console.log(json);
        this.commentLst=json;
      })
    },
    createComment(){
      fetch('api/comments/create.php',{
        method:'POST',
        body: JSON.stringify(this.newComment),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(function(response) {return response.json()})
      .then(json => {
        console.log("Retruned from post:", json);
        this.commentLst = json;
        this.newComment = this.newCommentData();
      });
      console.log('Creating (POSTing)...!');
      console.log(this.newComment);
    },
    newCommentData(){
      return{
        id:'',
        commentText:''
      }
    }
  }
});
