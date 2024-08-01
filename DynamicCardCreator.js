// const prompt = require("prompt-sync")();

function cardCreater(titleText, cNameText, viewsCount, durationText, dateText, imgUrl) {

    let card = document.createElement('div');
    card.setAttribute("class" , "card");
    let container = document.querySelector(".container");
    container.appendChild(card);
    

    let imgCont = document.createElement('div');
    imgCont.setAttribute("class" , "imgcontainer");
    card.appendChild(imgCont);

    
    //thumbnail
    thumbnail = document.createElement('div');
    thumbnail.setAttribute("class" , "thumbnail");
    let img = document.createElement('img');
    img.setAttribute("src" , imgUrl);
    img.setAttribute("class" , "thumbImg")
    thumbnail.appendChild(img);
    imgCont.appendChild(thumbnail);


    //duration
    duration = document.createElement('div');
    duration.innerHTML = durationText;
    duration.setAttribute("class" , "duration");
    imgCont.appendChild(duration);
     

    // Content container
    let content = document.createElement('div');
    content.setAttribute("class", "content");
    card.appendChild(content);


    //title
    title = document.createElement('div');
    title.innerHTML = titleText;
    title.setAttribute("class" , "title");
    content.appendChild(title);


    //second content container 
    let content2 = document.createElement('div');
    content2.setAttribute("class" , "content2");
    content.appendChild(content2);

    
    //channelName
    cName = document.createElement('div');
    cName.innerHTML = cNameText + " • ";
    cName.setAttribute("class" , "cName");
    content2.appendChild(cName);
    
    
    //viewscount
    views = document.createElement('div');
    if (parseInt(viewsCount) >= 1000 && parseInt(viewsCount) <= 999999 ) {
        viewsCount = (parseInt(viewsCount) / 1000) + 'K' + ' Views' + ' • ';
        
    }

    else if (parseInt(viewsCount) >= 999999) {
        viewsCount = (parseFloat(viewsCount) / 1000000) + 'M' + ' Views' + ' • ';
        
    } else {
        
    }
    views.innerHTML = viewsCount;
    views.setAttribute("class", "views");
    content2.appendChild(views);

    
    //date
    date = document.createElement('div');
    date.innerHTML = dateText;
    date.setAttribute("class" , "date");
    content2.appendChild(date);


}

let card1 = cardCreater("TF2 but it turns into a Skibidi Toilet Meme", "MediExcalibur2012" , "8600000" , "0:23" , "1 year ago" , "https://i.ytimg.com/vi/xQ8ob5uiWBI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSBlf5AuxanEHC2ZlKgb1iHr0w-g" ,);

let card2 = cardCreater("12 VS Code Extensions to INCREASE Productivity 2024","Devression" , "608000" , "27:12" , "5 months ago" , "https://i.ytimg.com/vi/1UyQaR8pvjk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkiIQQPvobgfHwNoMMrIrz4my2ew" ,);

let card3 = cardCreater("You're 18? YOU NEED These Skills", "Iman Gadzhi" , "2500000" , "15:31" , "2 years ago" , "https://i.ytimg.com/vi/BOhnFkgt5Xs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWrtMxiuuKqvYAzqTZ82tTsdx5Mg" ,);

let card4 = cardCreater("I Filmed Plants For 15 years | Time-lapse Compilation", "Boxlapse" , "12000000" , "30:39" , "2 years ago" , "https://i.ytimg.com/vi/NtsJ5m6C7dU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC69q6bPD6y0KNqYQ4PD9MMOfDnHg" ,);

let card5 = cardCreater("What happens when you FAST for 7 days?", "Human Buddy" , "1000000" , "8:17" , "5 months ago " , "https://i.ytimg.com/vi/iJWwR6haDgI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO4kdej-QmaasUGsbr-7Ws6cIGhw" ,);

let card6 = cardCreater("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",               "CodeWithHarry" , "69000" , "6:31" , "7 months ago" , "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ" ,);

let card7 = cardCreater("It's time to MAKE MONEY as a STUDENT on your terms ( Without Getting Scammed )","Youth Philosophy" , "525000" , "20:59" , "1 months ago" , "https://i.ytimg.com/vi/C4gJy3AxMvg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0wjFaf7OfEaHWQuWNA9I4hNY1Vg" ,);

let card8 = cardCreater("How to Make Youtube New to You Button in Html & CSS","W3 Developer" , "201" , "3:31" , "1 day ago" , "https://i.ytimg.com/vi/w03qmsZz5F8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuCRRoRHIkej3jPzbt6QAF5CxRqA" ,);

let card9 = cardCreater("TF2 but it turns into a Skibidi Toilet Meme", "MediExcalibur2012" , "8600000" , "0:23" , "1 year ago" , "https://i.ytimg.com/vi/xQ8ob5uiWBI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSBlf5AuxanEHC2ZlKgb1iHr0w-g" ,);

let card10= cardCreater("How to Make Youtube New to You Button in Html & CSS","W3 Developer" , "201" , "3:31" , "1 day ago" , "https://i.ytimg.com/vi/w03qmsZz5F8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuCRRoRHIkej3jPzbt6QAF5CxRqA" ,);
