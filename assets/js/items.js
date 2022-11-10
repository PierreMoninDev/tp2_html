window.posts=[];

const images =[
    
    'https://dr.savee-cdn.com/things/6/3/58f4f53702dd158eff2e26.webp',
    'https://dr.savee-cdn.com/things/6/3/5841ccab9daba52d2d5edd.webp',
    'https://dr.savee-cdn.com/things/6/3/594c03db3ea02e4d463d88.png',
    'https://dr.savee-cdn.com/things/6/3/5a5c65bcb65fd72de93391.webp',
    'https://dr.savee-cdn.com/things/6/3/5fcbee87a2bcb7eda6ed90.webp',
    'https://dr.savee-cdn.com/things/6/3/5fcb116469a7c40e69a43d.webp',
    'https://dr.savee-cdn.com/things/6/3/630b7a3ecca4cbad5d79d9.webp',
    'https://dr.savee-cdn.com/things/6/3/63c5d7ddbce066f2fc7906.webp',
    'https://dr.savee-cdn.com/things/6/3/6abbc3366e54f9069dd257.webp',
    'https://dr.savee-cdn.com/things/6/3/6900d7a1d324d470a25ad8.webp',
    'https://dr.savee-cdn.com/things/6/3/69401eec44ba2e9e4b47e5.webp'

]




let imageIndex=0;

for(let i=0; i<80;i++)
{
    let item={
        id: i,
        title:`Post ${i+1}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex>images.length -1) imageIndex=0;
}
console.log("item.js");
console.log(posts );
console.log(posts.length);

