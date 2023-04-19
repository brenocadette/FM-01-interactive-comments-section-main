fetch("data.json")
.then(response =>  response.json() )
.then(response2 => {
    console.log(response2)
    console.log(response2.comments[0])
    const main = document.querySelector("#reference");
   
    writingHtml()
function writingHtml (){
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
        <h3 id="score_+_commentPost${i}" >+</h3>
        <p id="score_commentPost${i}" >${response2.comments[i].score}</p>
        <h3 id="score_-_commentPost${i}">-</h3>
      </div>

      <section> 
        <div class="logoNameDateReply">
          <div class="logoNameDate"> 
            <img class="imgPerfil"src="${response2.comments[i].user.image.png}" alt=""> 
            <h4 class="nameUser">
            ${response2.comments[i].user.username}
            </h4> 
            <p >${response2.comments[i].createdAt}</p> 
          </div>
          <h4 id="reply"><img src="./images/icon-reply.svg" alt=""> Reply </h4> 
        </div>
        <p>${response2.comments[i].content}</p>
        </br>
        </div>Comment Here </p>


      </section>
    `
    main.append(commentDiv) ;
        

    for(j=0;j<comment.replies.length; j++){
        console.log("entrou aqui")

        const divReplies = document.createElement("div")
        const replies = comment.replies[j]
        divReplies.classList.add("commentOfComment")
        divReplies.setAttribute("id", "commentPost"+i+"commentComment"+j)
    
        divReplies.innerHTML = `
        <div class="likes">
            <h3 id="score_+_commentPost${i}commentComment${j}">+</h3>
            <p id="score_commentPost${i}commentComment${j}">${replies.score}</p>
            <h3 id="score_-_commentPost${i}commentComment${j}">-</h3>
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
              <h4 id="reply"><img src="./images/icon-reply.svg" alt=""> Reply </h4> 
            </div>${replies.content}</p>
          </section>
        
        `
        main.append(divReplies) ;

        //commentDiv.append(divReplies)
       }

   
}
}


i=1;
j=0;

const likeup = document.getElementById("score_+_commentPost"+i+"commentComment"+j)
//const like = document.getElementById("id_commentPost0commentComment0")
const like = document.getElementById("score_commentPost"+i+"commentComment"+j)
const likedown = document.getElementById("score_-_commentPost"+i+"commentComment"+j)
console.log("Entrou AQUI --- ")
let countLikeUp = false
let countLikeDown = false


/*
//Usando desta forma ao clicar no + é adicionado uma curtida e ao clicar novamente, a curtida anterior é retirada
likeup.addEventListener("click", function(){
  const salveScore = response2.comments[1].replies[0].score
 // const comment = response2.comments[i];     
 // const replies = comment.replies[j]

 // console.log(like.innerHTML = parseInt(like.textContent,10) + 1)
  //   console.log(response[].innerHTML = parseInt(like.textContent,10) + 1)
  console.log(response2.comments[1].replies[0].score)
 

  if (countLikeUp == false ){
    like.innerHTML = response2.comments[1].replies[0].score++;
    countLikeUp = true;
  }
  else {
    like.innerHTML = response2.comments[1].replies[0].score--;
    countLikeUp = false
  }
})

likedown.addEventListener("click", function(){
  console.log(response2.comments[1].replies[0].score)
 

  if (countLikeDown == false && countLikeUp == false ){
    like.innerHTML = response2.comments[1].replies[0].score--;
    countLikeDown = true;
  }
   else if (countLikeDown == false && countLikeUp == true){
    response2.comments[1].replies[0].score = response2.comments[1].replies[0].score -2 ;

    like.innerHTML = response2.comments[1].replies[0].score;
    countLikeDown = true;
    countLikeUp = false;
    console.log("Entrou aqui")
  }
  else { 
  //(countLikeDown == true && countLikeUp == false) 
     
    like.innerHTML = response2.comments[1].replies[0].score++;
    countLikeDown = false;
  }
  //Só sobrou true true, mas nunca serão acionados simultaneamente 
  
})
*/

/*Código para add comentário de usuário 

let buttonComment = document.querySelector("#buttonCommentOfUserLogin")
let textArea = document.querySelector("#textArea")

buttonComment.addEventListener("click", function(){
  console.log("txt -> ", textArea.value)
  let copyComment = response2.comments[response2.comments.length-1]// o problemas de todos serão iguais tá aqui

  copyComment.id = (response2.comments.length+2);
  console.log(response2.comments.length)
  copyComment.content = textArea.value;
  copyComment.createdAt = "Data de agora";
  //copyComment.replies = 
  copyComment.score = "0";
  copyComment.user.username = response2.currentUser.username;
  copyComment.user.image = response2.currentUser.image;
  //let objetoComments = new Object();
  //objetoComments =   response2.comments
  //console.log("objetoComments ", objetoComments)
  console.log("response2.comments ", response2.comments)
  response2.comments.push(copyComment)

 // objetoComments.push(copyComment)
  //objetoComments =   response2.comments

  textArea.value = ""
 
  main.innerHTML =""
  writingHtml()
  console.log(response2)

})
//Add comment finally
*/

let buttonsActivated = false;

if(buttonsActivated == false){
  setScore()
}

//Add comment 2

const addButton = document.querySelector("#buttonCommentOfUserLogin");

addButton.addEventListener("click", function(){
  const textAreaValue = document.querySelector("#textArea").value;

  if(textAreaValue) {
    console.log("Entrou no IF de addcomment")
    const newComment = {
      id: response2.comments.length,
      user: {
        username: `${response2.currentUser.username}`,
        image: {
          png: `${response2.currentUser.image.png}`,
        },
      },
      content: textAreaValue,
      score: 0,
      replies: [],
      createdAt: "just now",
    };
    response2.comments.push(newComment);

    //Cria um novo elemento html para o novo comentário

    const newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("comentarioPost");
    newCommentDiv.setAttribute("id", "commentPost" + newComment.id )
    newCommentDiv.innerHTML = `
    <div class="likes">
      <h3 id="score_+_commentPost${newComment.id}">+</h3>
      <p id="score_commentPost${newComment.id}">${newComment.score}</p>
      <h3 id="score_-_commentPost${newComment.id}">-</h3>
    </div>
    <section>
      <div class="logoNameDateReply">
        <div class="logoNameDate">
          <img
            class="imgPerfil"
            src="${newComment.user.image.png}"
            alt=""
          />
          <h4 class="nameUser">${newComment.user.username}</h4>
          <p>${newComment.createdAt}</p>
        </div>
        <h4 id="reply"><img src="./images/icon-reply.svg" alt=""> Reply </h4>
      </div>
      <p>${newComment.content}</p>
    </section>
  `;
  const main = document.querySelector("#reference");
  main.insertBefore(newCommentDiv, document.querySelector(".addCommmentUser"))

  document.querySelector("#textArea").value = ""
  setScore()
  buttonsActivated = true;
  }

})




})
.catch(error => console.log(error))
.finally(() => {
  console.log("Fetch json concluído")
 
  


//Código do reply


let reply = document.querySelectorAll("#reply")
console.log("replyOK >> ", reply.length)

reply.forEach(function(elemento, index){
  console.log("Reply ->"); console.log(elemento)
  elemento.addEventListener("click", function(){
    let sharing =  commentsAll[index].innerHTML
    let contentAlert = commentsAll[index]

    alert(`
    Tem certeza que deseja compartilhar o comentário abaixo?
    ${sharing}
    
    <button>Sim</button>
    <button>Não</button>

    `)
  } )

})






}  )// parenteses do finally



//Função que modifica o score
function setScore ( ) { 
 

  //Pegando todas os id de todas as div de comentários
  let commentsAll = document.querySelectorAll("#reference > div")
  console.log("oi", commentsAll[0])


  //Código para like de deslike
  let arrayScoreUp = document.querySelectorAll(".likes > h3:first-child")
  console.log("arrayScoreUp >> ", arrayScoreUp)
  //Ideia de como selecionar o h3 da div intereira document.querySelector(".comentarioPost div.likes h3:nth-of-type(2)");

  let arrayScore = document.querySelectorAll(".likes > p")
  console.log("arrayScore >> ", arrayScore)

  let arrayScoreDown = document.querySelectorAll(".likes > h3:nth-child(3)") // Poderia usar tbm h3:last-child
  console.log("arrayScoreDown >> ", arrayScoreDown)
  
  arrayScoreUp.forEach(function(elemento, index){
    console.log("Elemento ->"); console.log(elemento)
    elemento.addEventListener("click", function(){
      let score =  arrayScore[index].innerHTML
      score++
      arrayScore[index].innerHTML = score
    } )

  })

  arrayScoreDown.forEach(function(elemento, index){
    console.log("Elemento ->"); console.log(elemento)
    elemento.addEventListener("click", function(){
      let score =  arrayScore[index].innerHTML
      score--
      arrayScore[index].innerHTML = score
    } )

  })

  buttonsActivated = true
}


 // const comment = response2.comments[i];     
 // const replies = comment.replies[j]
 let scoreUp =[]
 let score =[]
 let scoredown  =[]

 
  /*

function addevents() {

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    console.log(document.getElementById(element))
    document.getElementById(element).addEventListener("click", function(){
      console.log("document.getElementById(element) ->>> " + document.getElementById(element));
    });
  }
 
}
*/



 