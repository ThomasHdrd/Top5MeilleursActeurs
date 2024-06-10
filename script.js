$(function(){
    var $mainMenuItems = $("#main-menu ul").children("li"),  //prendre les enfants du menu ul. ici c'est li  
    totalMainMenuItems = $mainMenuItems.length, //retourner le nombre d element dans le main menu items
    openedIndex = 0, //savoir index de l'element ouvert . et ouvrir sur l'index 0

    //declarer la fonction init
    init = function(){
        bindEvents();

        if(validIndex(openedIndex))
            animateItem($mainMenuItems.eq(openedIndex), true, 700); //ouvrir le numero dans "openedIndex" lors du chargement de la page en 700ms

    },

    bindEvents = function(){

        $mainMenuItems.children(".images").click(function(){ //filtrer les enfants direct de mainMenu possedant la classe "image"

            var newIndex = $(this).parent().index(); //Element sur lequel je viens de cliquer. Index = Me retourner l'index de cet élément parmi ses parents.
             //this = l'élément sur lequel je suis quand j'y exécute la fonction sur lequel sur laquelle j'ai mis un clic           
             checkAndAnimateItem(newIndex);
         });

         $(".button").hover(function(){ //quand je rentre sur le bouton l'ajoute la classe .hover
            $(this).addClass("hover");
         },

         function(){ //quand je sors du bouton j'enleve la classe .hover
            $(this).removeClass("hover");
         });  

        $(".button").click(function(){ //quand je clique sur le bouton
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);        
        });

    },

    validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems); //est ce que l'index est valide
    },
    
    animateItem = function($item, toOpen, speed){ //item que je veux animer + ouverture ou fermeture + vitesse
        var $colorImage = $item.find(".color"), //trouve parli les descendants, l'item qui a la classe "color"
        itemParam = toOpen ? {width: "420px"}: {width: "140px"},  //si ouverture est vraie alors attribué la valeur 1 (420) SINON false et valeur = 140px
        colorImageParam = toOpen ? {left: "0px"}: {width: "140px"};
        $colorImage.animate(colorImageParam,speed); //animation sur color image et la passe en fonction des parametres de "colorImageParam"
        $item.animate(itemParam,speed); //animation pour faire apparaitre la description
    },
   
    
    checkAndAnimateItem = function(indexToCheckAndAnimate){
        if(openedIndex === indexToCheckAndAnimate){ //Si l'Index sur lequel je viens de cliquer est égale à l'index qui était déjà ouvert
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 150); //fermer l'item (false) d'une vitesse de 250ms
            openedIndex = -1;
   }
    else {
        if(validIndex(indexToCheckAndAnimate)) //verifier si l'index sur lequel je clique est valide
            {
                animateItem($mainMenuItems.eq(openedIndex), false, 150); //fermer l'index précédent
                openedIndex = indexToCheckAndAnimate; //ouvrir le nouvel index
                animateItem($mainMenuItems.eq(openedIndex), true, 150); //ouvrir l'item (true) d'une vitesse de 250ms
            }
        }
    };

    init(); //executer la fonction init

});