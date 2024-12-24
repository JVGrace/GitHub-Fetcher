 function getGitHubUser(username) {
    
    
    const url = `https://api.github.com/users/${username}`;
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`User not found: ${response.status}`);
        }
        return response.json(); 
    })
    .then(userData => {
        
        console.log("User data:", userData);
        
        displayUser(userData);  
      })
      .catch(error => {
        console.error("Error fetching user:", error);
      });
}
function displayUser(uData){
    var dataGIT=document.createElement('div');
    var listGIT=document.createElement('ul');
    

    var lItem=document.createElement('li');
    lItem.textContent=`${uData.name} - Created At:${uData.created_at} - Public Repos: ${uData.public_repos}`;
    listGIT.appendChild(lItem);
    dataGIT.appendChild(listGIT);
    var avatar=document.createElement('img');
    avatar.src=uData.avatar_url;
    dataGIT.appendChild(avatar);
    document.body.appendChild(dataGIT);
    

}


function submit()
        {   
            let query=document.getElementById("inputName").value;
            getGitHubUser(`${query}`);
        }
// var productsData=[
//     {
//         name:"Laptop",
//         price:1000
//     },
//     {
//         name:"PC",
//         price:20000
//     }

// ]
// function fetchP(){

//     setTimeout(function(){
//         var products=productsData;
//         var pList=document.createElement('ul');
//         products.forEach(function(product) {
//             var lItem=document.createElement('li');
//             lItem.textContent=`${product.name} - $${product.price}`;
//             pList.appendChild(lItem);
//         });
//         document.body.appendChild(pList)

//     },1000);
// }