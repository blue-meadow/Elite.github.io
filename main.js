function getViewportDimensions() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  
    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      let vw = window.innerWidth * 0.01;
      // console.log(vh);
      // console.log(vw);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    });
  }
  getViewportDimensions();

  function openSideBar()
  {
    var clear = document.querySelector('.clear');
      var sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('active_sidebar');
      var ham = document.querySelector('.ham');
      ham.style.display = "none";
      clear.style.display = "inline";
      var side = document.querySelector('.sidebar');
    side.classList.remove("hideSide");
     

  }
  function closeSideBar(){
      var clear = document.querySelector('.clear');
      clear.style.display = "none";
      var sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('active_sidebar');
      var ham = document.querySelector('.ham');
      ham.style.display = "inline";
      var side = document.querySelector('.sidebar');
    side.classList.remove("hideSide");
  }

  function products(){
    var button = document.getElementById("products_btn");
    var main = document.querySelector('.main');
    main.style.display = "none";
    var product = document.querySelector('.products');
    product.style.display = "block";
    var kits = document.querySelector(".kits");
    kits.style.display   = "none";
   closeSideBar();
  }
  function home(){
    var main = document.querySelector('.main');
    main.style.display = "block";
    var product = document.querySelector('.products');
    product.style.display = "none";
    var kits = document.querySelector(".kits");
    kits.style.display   = "none";
    closeSideBar();
  }

  function kits(){
    var main = document.querySelector('.main');
    main.style.display = "none";
    var product = document.querySelector('.products');
    product.style.display = "none";
    var kits = document.querySelector(".kits");
    kits.style.display   = "block";
    closeSideBar();
  }


  function hideSide()
  {
    var side = document.querySelector('.sidebar');
    side.classList.toggle("hideSide");
    

  }

  function about()
  {
    var about = document.querySelector('.about');
    about.style.display   = "inline";
    about.classList.add('aboutActive');
  }

 function stop(){
  var about = document.querySelector('.about');
  about.classList.remove('aboutActive');
  about.style.display = "none";
 }

 function msg(){
   alert("Coming Soon!");
 }

  
  