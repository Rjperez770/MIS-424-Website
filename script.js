<script>
  var x = document.getElementById("signin")
  var y = document.getElementById("signup")
  var z = document.getElementById("btn")

  function signup(){
    x.style.left = "-400px"
			y.style.left = "50px"
		}

  function signin(){
    x.style.left = "50px"
			y.style.left = "400px"
		}
</script>

<script>
				const plus = document.querySelector(".plus"),
					minus = document.querySelector(".minus"),
					num = document.querySelector(".num");
					
					let a = 1;
					
					plus.addEventListener("click", ()=>{
					a++ 
					a = (a < 10) ? + a : a;
					num.innerText = a;
					console.log(a)
					});
					
					minus.addEventListener("click", ()=>{
					if (a>1) {
					a--;
					a = (a < 10) ? "0" + a : a;
					num.innerText = a;
					}
					});
</script>
