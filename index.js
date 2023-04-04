fetch("data.json")
.then(response =>  response.json() )
.then(response2 => {
    console.log(response2)
    const main = document.querySelector("#reference");

    for(i=0; i<response2.comments.length; i++){
        console.log(i);
     


        const comment = response2.comments[i];     
        console.log("-------------------");

        console.log(comment.replies);

        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comentarioPost");
        commentDiv.setAttribute("id", "commentPost"+i);   
         
        commentDiv.innerHTML = `
        
      <div class="likes">
        <h3><a href="">+</a></h3>
        <p>${response2.comments[i].score}</p>
        <h3><a href="">-</a></h3>
      </div>

      <section> 
        <div class="logoNameDateReply">
          <div class="logoNameDate"> 
            <img class="imgPerfil"src="${response2.comments[i].user.image.png}" alt=""> 
            <h4 class="nameUser">
            ${response2.comments[i].user.username}
            </h4> 
            <p >${response2.comments[i].createdAt}</h3> 
          </div>
          <h4><a href=""><img src="./images/icon-reply.svg" alt=""> Reply</a> </h4> 
        </div>${response2.comments[i].content}</p>
      </section>
    `
    main.append(commentDiv) ;
        

    for(j=0;j<comment.replies.length; j++){
        console.log("entrou aqui")

        const divReplies = document.createElement("div")
        const replies = comment.replies[j]
        divReplies.classList.add("commentOfComment")
        divReplies.setAttribute("is", "commentComment"+j)
    
        divReplies.innerHTML = `
        <div class="likes">
            <h3><a href="">+</a></h3>
            <p>${replies.score}</p>
            <h3><a href="">-</a></h3>
          </div>
    
          <section> 
            <div class="logoNameDateReply">
              <div class="logoNameDate"> 
                <img class="imgPerfil"src="${replies.user.image.png}" alt=""> 
                <h4 class="nameUser">
                ${replies.user.username}
                </h4> 
                <p >${replies.createdAt}</h3> 
              </div>
              <h4><a href=""><img src="./images/icon-reply.svg" alt=""> Reply</a> </h4> 
            </div>${replies.content}</p>
          </section>
        
        `
        main.append(divReplies) ;

        //commentDiv.append(divReplies)
       }

   
}
})
.catch(error => console.log(error))
.finally(() => console.log("Fetch json concluído") )





