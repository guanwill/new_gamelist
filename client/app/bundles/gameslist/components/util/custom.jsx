export function toggleSearchResults() {
  $( ".divider-second-top" ).click(function() {
    $( ".search-container2" ).toggle( "fast" );
  });
}

export function toggleTableHeadimg() {
  //hide and show functionality to game list
  $( ".ps-playing-th" ).click(function() {
    $( ".ps-playing-body" ).toggle( "fast" );
    $( ".ps-playing-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".x-playing-th" ).click(function() {
    $( ".x-playing-body" ).toggle( "fast" );
    $( ".x-playing-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".nin-playing-th" ).click(function() {
    $( ".nin-playing-body" ).toggle( "fast" );
    $( ".nin-playing-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".pc-playing-th" ).click(function() {
    $( ".pc-playing-body" ).toggle( "fast" );
    $( ".pc-playing-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });

  $( ".ps-start-th" ).click(function() {
    $( ".ps-start-body" ).toggle( "fast" );
    $( ".ps-start-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".x-start-th" ).click(function() {
    $( ".x-start-body" ).toggle( "fast" );
    $( ".x-start-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".nin-start-th" ).click(function() {
    $( ".nin-start-body" ).toggle( "fast" );
    $( ".nin-start-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".pc-start-th" ).click(function() {
    $( ".pc-start-body" ).toggle( "fast" );
    $( ".pc-start-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });

  $( ".ps-complete-th" ).click(function() {
    $( ".ps-complete-body" ).toggle( "fast" );
    $( ".ps-complete-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".x-complete-th" ).click(function() {
    $( ".x-complete-body" ).toggle( "fast" );
    $( ".x-complete-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".nin-complete-th" ).click(function() {
    $( ".nin-complete-body" ).toggle( "fast" );
    $( ".nin-complete-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".pc-complete-th" ).click(function() {
    $( ".pc-complete-body" ).toggle( "fast" );
    $( ".pc-complete-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });

  $( ".ps-wish-th" ).click(function() {
    $( ".ps-wish-body" ).toggle( "fast" );
    $( ".ps-wish-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".x-wish-th" ).click(function() {
    $( ".x-wish-body" ).toggle( "fast" );
    $( ".x-wish-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".nin-wish-th" ).click(function() {
    $( ".nin-wish-body" ).toggle( "fast" );
    $( ".nin-wish-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
  $( ".pc-wish-th" ).click(function() {
    $( ".pc-wish-body" ).toggle( "fast" );
    $( ".pc-wish-th" ).toggleClass( "red-platform" )
    console.log('toggle')
  });
}

export function changeGametabColor() {
  $('.playing_tab').css('color', '#d28622')
  $('.planning_tab').css('color', '#2a376d')
  $('.completed_tab').css('color', '#2a376d')
  $('.wishlist_tab').css('color', '#2a376d')

  $('.playing_tab').click(function() {
    $('.playing_tab').css('color', '#d28622')
    $('.planning_tab').css('color', '#2a376d')
    $('.completed_tab').css('color', '#2a376d')
    $('.wishlist_tab').css('color', '#2a376d')
  });

  $('.planning_tab').click(function() {
    $('.planning_tab').css('color', '#d28622')
    $('.playing_tab').css('color', '#2a376d')
    $('.completed_tab').css('color', '#2a376d')
    $('.wishlist_tab').css('color', '#2a376d')
  });

  $('.completed_tab').click(function() {
    $('.completed_tab').css('color', '#d28622')
    $('.planning_tab').css('color', '#2a376d')
    $('.playing_tab').css('color', '#2a376d')
    $('.wishlist_tab').css('color', '#2a376d')
  });

  $('.wishlist_tab').click(function() {
    $('.wishlist_tab').css('color', '#d28622')
    $('.planning_tab').css('color', '#2a376d')
    $('.completed_tab').css('color', '#2a376d')
    $('.playing_tab').css('color', '#2a376d')
  });
}
