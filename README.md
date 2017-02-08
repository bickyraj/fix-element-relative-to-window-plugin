# Fix Element Relative To Window Plugin
====================
<!-- ## A single library of all jQuery mobile events -->

This is a plugin that helps to fix the position of an element tag relative to window.
-------------------------------------------------------------------------------------

## How to use

include the script file in your page.

###<script type="text/javascript" src="fix-element-relative-to-window.min.js"></script>

## Basic usage

A basic example, if you want to fix, let's say a header div relative to window on the top position.

$("header_div").fixElementRelativeToWindow({
    vertical:true,
});


## To fix element to bottom

$("bottom_div").fixElementRelativeToWindow({

    vertical:true,		   //fix element to vertical scroll

    fromOffsetTop: false,  //fix element to top

    stickToBottom:true,    //fix element to bottom
    
	elemOffsetBottom: 0,   //value for offset bottom
});