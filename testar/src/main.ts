// "Mogen" Frontend-utveckling 
// - TypeScript  ANDRA VIDEOS
// - sass/less  för CSS
// - unittesting!!! ANDRA VIDEOS
// - tooling som snabbar på utvecklarens vardag (vite)
// Allmänt https://vite.dev/
// Demos
// npm i -D vite
// npm create vite@latest
// 1. script src på TypeScript

// npm i -D sass-embedded
// 2. SCSS Variabler -  bättre i CSS
// :root{
//     --main-bg-color: #121212;
//     --default-margin: 10px;
//     --box-shadow: 10px 5px 5px black;
// }

// 3. Reset -  egen fil 
// * {
//     padding:0;
//     margin:0;
//     box-sizing: border-box;
// }


// 4. Mixins


// 5. nesting


// 6. build







function test(whatever:String){
  alert(whatever);
}


document.querySelector<HTMLDivElement>('#createNew')!.addEventListener("click",()=>{
  test('nu');
}) 
