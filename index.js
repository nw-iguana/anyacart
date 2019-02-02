$(function() {

   $('#js-shopping-list-form').submit(event => {
       event.preventDefault();
   });
   $('#js-shopping-list-form' ).submit(function() {
      let newItem =$('.js-shopping-list-entry').val();
 
 //append new item
  $(".shopping-list").append(`<li>
         <span class="shopping-item"> ${newItem} </span>
         <div class="shopping-item-controls">
           <button class="shopping-item-toggle">
             <span class="button-label">check</span>
           </button>
           <button class="shopping-item-delete">
             <span class="button-label">delete</span>
           </button>
         </div>
       </li>`)
      });

 //remove item when delete button pressed
 $(".shopping-list").on("click", ".shopping-item-toggle", function(){
  $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked")
    });

   //toggle strikethrough when check button pressed
  $(".shopping-list").on("click", ".shopping-item-delete", function(){
  $(this).closest("li").hide(".shopping-list > li")
    });

 });
                               