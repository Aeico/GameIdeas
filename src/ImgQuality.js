//Requires num input to decide image quality 0 is lowest 2 highest
//Returns string requred in url after t_ before /{hash}

function ImgQuality(num){

    var Quality = ["screenshot_med","screenshot_big","screenshot_huge"];

    return Quality[num];
}

export default ImgQuality;