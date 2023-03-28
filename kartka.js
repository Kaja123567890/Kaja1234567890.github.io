

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","tlo.jpg")
loadSprite("koza", "koza2.png")

loadSound("muzyka","Do_szopy_hej_pasterze.mp3")

add([
    sprite("kartka")
])

const koza = add([
    sprite("koza"),
    pos(550,450)
])

onMouseRelease(()=>play("muzyka"))

let wlewo = true 
koza.onUpdate(() => {

  if(wlewo && koza.pos.x > 50) 
   koza.pos.x -= 1

   else if (!wlewo && koza.pos.x < 550)
   koza.pos.x += 1

   else wlewo ^= true

})

