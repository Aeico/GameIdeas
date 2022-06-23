//Requires num input to decide image quality 0 is lowest 2 highest
//Returns string requred in url after t_ before /{hash}

function ImgQuality(num,type){

    if (type == null || type === 'screenshot') {
        const Quality = ["logo_med","screenshot_med","screenshot_big","screenshot_huge"];

        return Quality[num];
    } else if (type === 'cover') {
        const Quality = ["cover_small","cover_big"];

        return Quality[num];
    } else {
        console.error('N');
        return;
    }
}

export default ImgQuality;