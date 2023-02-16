var randomOne = Math.floor((Math.random()*6)+1)
var randomTwo = Math.floor((Math.random()*6)+1)
// var renderImage = document.getElementsByClassName("img1")[0];
// var renderImageTwo = document.getElementsByClassName("img2")[0];
if(randomOne>randomTwo)
{
    document.getElementsByTagName('h1')[0].textContent="  🏴‍☠️  Player 1 Wins !" 
}
else if( randomOne==randomTwo){ 
    document.getElementsByTagName('h1')[0].textContent="Match Draw !⛳ " 

}
else{
    document.getElementsByTagName('h1')[0].textContent="Player 2 Wins !  🏴‍☠️ "
}

if(randomOne==1)
{
 document.querySelector('img').setAttribute("src","dice1.png")
}
else if(randomOne==2)
{
    document.querySelector('img').setAttribute("src","dice2.png")

   }
   else if(randomOne==3)
{
    document.querySelector('img').setAttribute("src","dice3.png")

   }else if(randomOne==4)
   {
       document.querySelector('img').setAttribute("src","dice4.png")
   
      }else if(randomOne==5)
      {
          document.querySelector('img').setAttribute("src","dice5.png")
      
         }else if(randomOne==6)
         {
             document.querySelector('img').setAttribute("src","dice6.png")
         
            }

            if(randomTwo==1)
{
 document.getElementsByClassName('img2')[0].setAttribute("src","dice1.png")
}
else if(randomTwo==2)
{
    document.getElementsByClassName('img2')[0].setAttribute("src","dice2.png")

   }
   else if(randomTwo==3)
{
    document.getElementsByClassName('img2')[0].setAttribute("src","dice3.png")

   }else if(randomTwo==4)
   {
       document.getElementsByClassName('img2')[0].setAttribute("src","dice4.png")
   
      }else if(randomTwo==5)
      {
          document.getElementsByClassName('img2')[0].setAttribute("src","dice5.png")
      
         }else if(randomTwo==6)
         {
             document.getElementsByClassName('img2')[0].setAttribute("src","dice6.png")
         
            }