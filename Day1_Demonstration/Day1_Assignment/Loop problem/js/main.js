for(let curno=1;curno<=20;curno++)
{
    if(curno%2==0)
    {
        continue;
    }
    else{
        if(curno%3==0)
        {
        console.log(`${curno} is divisible by 3`);
        if(curno%5==0)
        {
            console.log(`${curno} is divisible by 5`);  
            break;
        }
        }
        else if(curno%5==0)
        {
            console.log(`${curno} is divisible by 5`);  
        }
    }

}

//loop from 1 to 20
//if cur num = even continue
//if no is divisible by 3 display number is divisble 
//if number divisible by 5 display no divisible by 5 in console
//if number divisible by both 3&5, exit