const contentList = document.getElementById('content-list');

const contentObject = [
  [{ title: "Favourite Food", content: ["Rice", "Beans", "Fufu"] }],
  [{ title: "Favourite Fruit", content: ["Mango", "Pawpaw", "Chicken"] }],
];

[foodContent, fruitContent] =contentObject;

for(let i = 0; i < contentObject.length; i++){
    // const currentContent = contentObject[i][0];

    for (j = 0; j < foodContent.length; j++){
       

        const titleContainer = document.createElement('h1');
        titleContainer.innerHTML = foodContent[i].title;

        const contentContainer = document.createElement("h1");
        contentContainer.innerHTML = foodContent[i].content;

        contentList.appendChild(titleContainer);
        contentList.appendChild(contentContainer)
    }

    for (k = 0; k < fruitContent.length; k++){
       

        const titleContainer = document.createElement('h1');
        titleContainer.innerHTML = fruitContent[i].title;

        const contentContainer = document.createElement("h1");
        contentContainer.innerHTML = fruitContent[i].content;

        contentList.appendChild(titleContainer);
        contentList.appendChild(contentContainer)
    }
}