const container= document.querySelector('.container');
console.log("app.js");
console.log(posts);
console.log(posts.length);

function generateMansonry(columns,posts){
    
    
    container.innerHTML='';

    let columnWrapper={};

    for(let i=0; i<columns; i++)
    { 
        columnWrapper[`column${i}`]=[];
    }
   
    
    for(let i=0; i<posts.length;i++)
    {   
        const column=i % columns;
        columnWrapper[`column${column}`].push(posts[i]);
        
    }
   

    for(let i=0;i<columns;i++){

        let columnPosts=columnWrapper[`column${i}`];
        let column=document.createElement(`div`);
        column.classList.add(`column`);

        columnPosts.forEach(post => {

            let postDiv =document.createElement('div');
            postDiv.classList.add('post');

            let image= document.createElement('img');
            image.src=post.image;

            let overlay= document.createElement('div');
            overlay.classList.add('overlay');

            let title= document.createElement('h3');
            title.innerText= post.title;

            overlay.appendChild(title);

            postDiv.append(image,overlay);

            column.appendChild(postDiv);


            
        });
        container.appendChild(column);
    }

}

generateMansonry(4,posts);

let previousScreenSize=window.innerWidth;

window.addEventListener('resize',()=>{
    imageIndex=0;

    if(window.innerWidth<600)
    {generateMansonry(1,posts);}
    else if(window.innerWidth>=600 && window.innerWidth<1000)
    {generateMansonry(2,posts);}
    if(window.innerWidth>=1000)
    {generateMansonry(4,posts);}
});

if(window.innerWidth<600)

    {generateMansonry(1,posts);}
    else if(window.innerWidth>=600 && window.innerWidth<1000)
    {generateMansonry(2,posts);}
    if(window.innerWidth>=1000)
    {generateMansonry(4,posts);};

