function renderPosts(posts){

var postsDiv=document.getElementById("posts");
//postsDiv.innerHTML="Posts will go here";
//postsDiv.innerHTML='<div style ="color:red">Hello Inner Html!</div>'

// postDiv=document.createElement("div");
//postDiv.innerHTML="Post content";
//postsDiv.appendChild(postDiv);


/*var posts=["Post 1","Post 2","Post 3"];
posts.forEach(function(post)
{
	var postDiv=document.createElement("div");
	postDiv.innerHTML=post;
	postsDiv.appendChild(postDiv);
});*/

//var posts=[
//{
//	"name":"Post 1",
//	"author":"Joe Scheme",
//	"content": "Try not to loose",
//},
//{
//	"name":"Post 2",
//	"author":"Joe Scheme 2",
//	"content": "Try untill you succeed",
//}
//];
posts.forEach(function(post)
{
	var postDiv=document.createElement("div");
	var postNameDiv=document.createElement("div");
	var postAuthorDiv=document.createElement("div");
	var postContenDiv=document.createElement("div");
	
	postNameDiv.innerHTML=post.name;
	postAuthorDiv.innerHTML=post.author;
	postContenDiv.innerHTML=post.content;
	
	postDiv.setAttribute("class","post");
	postNameDiv.setAttribute("class","post-name");
	postAuthorDiv.setAttribute("class","post-author");
	postContenDiv.setAttribute("class","post-content");
	
	postDiv.appendChild(postNameDiv);
	postDiv.appendChild(postAuthorDiv);
	postDiv.appendChild(postContenDiv);
	
	postsDiv.appendChild(postDiv);
});
}
function getPosts(callback){
	var posts=[
{
	"name":"Post 1",
	"author":"Joe Scheme",
	"content": "Try not to loose",
},
{
	"name":"Post 2",
	"author":"Joe Scheme 2",
	"content": "Try untill you succeed",
}
];
callback(posts);
}
	
getPosts(function(posts)
{
	renderPosts(posts);
});
