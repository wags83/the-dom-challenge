document.addEventListener("DOMContentLoaded", function() {
  let timer = document.getElementById("counter");

  function autoIncrementTimer() {
    setInterval(function() {
      timer.innerText = parseInt(timer.innerText) + 1;
    }, 1000);
  }

  function incrementTimer() {
    let plus = document.getElementById("+");
    plus.addEventListener("click", function(event) {
      timer.innerText = parseInt(timer.innerText) + 1;
    });
  }

  function decrementTimer() {
    let minus = document.getElementById("-");
    minus.addEventListener("click", function(event) {
      timer.innerText = parseInt(timer.innerText) - 1;
    });
  }

  //   function addLike() {
  //     let like = document.getElementById("<3");
  //     let likesObject = {counterValue: numLikes}
  //     like.addEventListener("click", function(event) {
  //       if (!document.getElementById("likeCounter")) {
  //         const likeList = document.getElementsByClassName("likes")[0];
  //         const likes = document.createElement("li");
  //         likes.setAttribute("id", "likeCounter");
  //         likes.innerText = 1;
  //         likeList.appendChild(likes);
  //       } else {
  //         document.getElementById("likeCounter").innerText = parseInt(document.getElementById("likeCounter").innerText) + 1;
  //       }
  //     });
  //   }

  let likesObject = { counterValue: timer.innerText, numLikes: 0 };

  function addLike() {
    let like = document.getElementById("<3");
    let likesObject = { counterValue: timer.innerText, numLikes: 0 };
    like.addEventListener("click", function(event) {
      likesObject = { counterValue: timer.innerText };
      if (!document.getElementById(`counter${likesObject.counterValue}`)) {
        const likeList = document.getElementsByClassName("likes")[0];
        const likes = document.createElement("li");
        likes.setAttribute("id", `counter${likesObject.counterValue}`);
        likeList.appendChild(likes);
      } else {
        likesObject = {
          counterValue: timer.innerText,
          numLikes: parseInt(likesObject.numLikes) + 1
        };
      }
      document.getElementById(
        `counter${likesObject.counterValue})`
      ).innerText = `${likesObject.counterValue} : ${likesObject.numLikes}`;
    });
  }

  function pause() {
    let pause = document.getElementById("pause");
    pause.addEventListener("click");
  }

  incrementTimer();
  decrementTimer();
  addLike();
});
