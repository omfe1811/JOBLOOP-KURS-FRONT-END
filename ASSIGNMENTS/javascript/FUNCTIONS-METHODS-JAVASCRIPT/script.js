/* 
The function should return:
"Invalid time" if the hour is less than 0
"Good night (name)" if hour is between 0–5
"Good morning (name)" if hour is between 6–11
"Good day (name)" if hour is between 12–17
"Good evening (name)" if hour is between 18–23
"Invalid time" if hour is greater than 23
If no hour is received, return an error message */
function welcome(name, hour){
    if (hour<0&&hour>=23){
        message="Invalid time"
    }else if(hour=null){
        message="Error! Type in hour"
    }else if (hour<=5){
        message="Good night "
    }
}