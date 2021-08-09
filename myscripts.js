function add(x,y){
    return x+y;
}
function msg(){  
    
    var text=document.getElementById('name').value;
    alert("Thank You " + text +" for your patience ≧°◡°≦.");
    
    var naruto = 0
    var sakura = 0
    var sasuke = 0
    var kakashi = 0
    var itachi = 0
    var hinata = 0
    var guy = 0
    var ino = 0
    var kiba = 0
    var shikamaru = 0
    var choji = 0
    var minato = 0
    var kushina = 0
    var shino = 0
    var sage = 0
    var tsunade = 0
     
   
     var introvert=document.getElementById('introvert').value;
     var ambivert=document.getElementById('ambivert').value;
     var extrovert=document.getElementById('extrovert').value;
     var preplanner=document.getElementById('preplanner').value;
     var onspotplanner=document.getElementById('onspotplanner').value;
     var likepet=document.getElementById('likepet').value;
     var notlikepet=document.getElementById('notlikepet').value;
     var black=document.getElementById('black').value;
     var blue=document.getElementById('blue').value;
     var pink=document.getElementById('pink').value;
     var family=document.getElementById('family').value;
     var friends=document.getElementById('friends').value;
     var money=document.getElementById('money').value;
     var smartactive=document.getElementById('smartactive').value;
     var lazysmart=document.getElementById('lazysmart').value;
     var normal=document.getElementById('normal').value;
     var backbencher=document.getElementById('backbencher').value;
     var protective=document.getElementById('protective').value;
     var lazy=document.getElementById('lazy').value;
     var childish=document.getElementById('childish').value;
     var quiet=document.getElementById('quiet').value;
     var smile=document.getElementById('smile').value;
     var frown=document.getElementById('frown').value;
     var hardly_smile=document.getElementById('hardly_smile').value;
     var no_expression=document.getElementById('no_expression').value;
     var stamina_determination=document.getElementById('stamina_determination').value;
     var quick_mind=document.getElementById('quick_mind').value;
     var speed=document.getElementById('speed').value;
     var power=document.getElementById('power').value;
     var complete_mission=document.getElementById('complete_mission').value;
     var save_stronger=document.getElementById('save_stronger').value;
     var save_friends=document.getElementById('save_friends').value;
     var run=document.getElementById('run').value;

     if(document.getElementById('introvert').checked == true) { 
         sasuke=add(sasuke,4)
         shino=add(shino,5)
         kakashi=add(kakashi,1)
         hinata=add(hinata,3)
         itachi=add(itachi,2)
     } 
     else if(document.getElementById('ambivert').checked == true){
         sakura=add(sakura,2)
         ino=add(ino,2)
         tsunade=add(tsunade,1)
         choji=add(choji,3)
         minato=add(minato,5)
         shikamaru=add(shikamaru,4)


     }
     else if(document.getElementById('extrovert').checked == true){
         naruto=add(naruto,5)
         sage=add(sage,4)
         guy=add(guy,3)
         kiba=add(kiba,2)
         kushina=add(kushina,1)
         
    }
    if(document.getElementById('preplanner').checked == true){
        shikamaru=add(shikamaru,5)
        kakashi=add(kakashi,3)
        itachi=add(itachi,5)
        sasuke=add(sasuke,2)
        minato=add(minato,3)
    }
    else if(document.getElementById('onspotplanner').checked == true){
        naruto=add(naruto,3)
        sage=add(sage,2)
        guy=add(guy,1)

         
    }
    if(document.getElementById('likepet').checked == true){
        kiba=add(kiba,5)
        shino=add(shino,4)
        tsunade=add(tsunade,4)
        sage=add(sage,4)
        sakura=add(sakura,2)
        itachi=add(itachi,1)
        sasuke=add(sasuke,1)
        naruto=add(naruto,2)
        hinata=add(hinata,1)
        kakashi=add(kakashi,5)


         
    }
    // else if(document.getElementById('notlikepet').checked == true){

         
    // }
    if(document.getElementById('black').checked == true){
        itachi=add(itachi,1)
         
    }
    else if(document.getElementById('blue').checked == true){
        sasuke=add(sasuke,1)
        kakashi=add(kakashi,5)
        

    }
    else if(document.getElementById('pink').checked == true){
        ino=add(ino,1)
        sakura=add(sakura,1)
         
    }
    if(document.getElementById('family').checked == true){
        naruto=add(naruto,5)
        itachi=add(itachi,4)
        hinata=add(hinata,1)
        minato=add(minato,4)
        kushina=add(kushina,4)


    }
    else if(document.getElementById('friends').checked == true){
        kakashi=add(kakashi,1)
        sakura=add(sakura,1)
        ino=add(ino,1)
         
    }
    else if(document.getElementById('money').checked == true){
        sasuke=add(sasuke,2)
         
    }
    if(document.getElementById('smartactive').checked == true){
        sasuke=add(sasuke,2)
        kakashi=add(kakashi,3)
        tsunade=add(tsunade,4)
        sakura=add(sakura,4)
        itachi=add(itachi,5)
        hinata=add(hinata,1)
        minato=add(minato,3)
    }
    else if(document.getElementById('lazysmart').checked == true){
         shikamaru=add(shikamaru,4)
    }
    else if(document.getElementById('normal').checked == true){
         guy=add(guy,1)
    }
    else if(document.getElementById('backbencher').checked == true){
         naruto=add(naruto,4)
         choji=add(choji,3)
         kiba=add(kiba,3)
         ino=add(ino,2)
         

    }
    if(document.getElementById('protective').checked == true){
        naruto=add(naruto,4)
        sage=add(sage,3)
        hinata=add(hinata,1)
        minato=add(minato,3)

    }
    else if(document.getElementById('lazy').checked == true){
        kakashi=add(kakashi,1)
        shikamaru=add(shikamaru,2)
    }
    else if(document.getElementById('childish').checked == true){
        naruto=add(naruto,1)
        sage=add(sage,1)
        guy=add(guy,1)
        kushina=add(kushina,1)

    }
    else if(document.getElementById('quiet').checked == true){
        itachi=add(itachi,3)
         
    }
    if(document.getElementById('smile').checked == true){
        naruto=add(naruto,1)
        guy=add(guy,1)
    }
    else if(document.getElementById('frown').checked == true){
         sasuke=add(sasuke,1)
    }
    else if(document.getElementById('hardly_smile').checked == true){
        kakashi=add(kakashi,1)
        shikamaru=add(shikamaru,1)
        itachi=add(itachi,1)
    }
    else if(document.getElementById('no_expression').checked == true){
         shino=add(shino,1)
    }
    if(document.getElementById('stamina_determination').checked == true){
        naruto=add(naruto,1)
        guy=add(guy,1)
    }
    else if(document.getElementById('quick_mind').checked == true){
        kakashi=add(kakashi,1)
        shikamaru=add(shikamaru,1)
    }
    else if(document.getElementById('speed').checked == true){
        minato=add(minato,1)
    }
    else if(document.getElementById('power').checked == true){
        sasuke=add(sasuke,1)
    }
    if(document.getElementById('complete_mission').checked == true){
        itachi=add(itachi,1)
    }
    else if(document.getElementById('save_stronger').checked == true){
        sasuke=add(sasuke,1)
    }
    else if(document.getElementById('save_friends').checked == true){
        naruto=add(naruto,1)
        kakashi=add(kakashi,1)
    }
    // else if(document.getElementById('run').checked == true){
         
    // }
     
     
     
     //else {  
    //     document.write("Summer radio button is not selected"+naruto);   
    // }
    // if (naruto==1) {
    //     window.location.href ="index.html" 
    // }
    const array=[naruto,sakura,sasuke,kakashi,itachi,hinata,guy,ino,kiba,shikamaru,choji,minato,kushina,shino,sage,tsunade];
    const largestNumber=(value)=>{
        let highest=0
        for (let i=0;i<value.length;i+=1){
            if(value[i]>highest){
                highest=value[i]
            }

        }
        return highest
    }
    var high=(largestNumber(array));
    //  document.write(high);
    // document.write(hinata);
   
    if(high==naruto){
        document.write("naruto")
       window.location.href ="naruto.html" 
    }
    else if(high==sasuke){
        document.write("sasuke")
        window.location.href ="sasuke.html" 
        
    }
    
    else if(high==sakura){
        document.write("sakura")
        window.location.href ="sakura.html"
         
    }
    else if(high==kakashi){
        document.write("kakashi") 
        window.location.href ="kakashi.html"
        
    }
    else if(high==itachi){
        document.write("itachi")
        window.location.href ="itachi.html" 
       
    }
    else if(high==hinata){
        document.write("hinata") 
        window.location.href ="hinata.html"
       
    }
    else if(high==shikamaru){
        document.write("shikamaru")
        window.location.href ="shikamaru.html" 
      
    }
    else if(high==minato){
        document.write("minato") 
        window.location.href ="minato.html"
        
    }
    else if(high==shino){
        document.write("shino")
        window.location.href ="shino.html" 
       
    }
    else if(high==kushina){
        document.write("kushina") 
        window.location.href ="kushina.html"
       
    }
    else if(high==sage){
        document.write("sage")
        window.location.href ="sage.html" 
        
    }
    else if(high==guy){
        document.write("guy")
        window.location.href ="guy.html" 
       
    }
    else if(high==tsunade){
        document.write("tsunade") 
        window.location.href ="tsunade.html"
      
    }
    else if(high==kiba){
        document.write("kiba")
        window.location.href ="kiba.html" 
       
    }
    else if(high==ino){
        document.write("ino") 
        window.location.href ="ino.html"
       
    }
    else if(high==choji){
        document.write("choji") 
        window.location.href ="choji.html"
        
    }
    

   }  
