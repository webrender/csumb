// Created by iWeb 2.0.3 local-build-20080514

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,245),url:'Home_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Home_files/stroke_1.png'},{rect:new IWRect(2,-2,245,4),url:'Home_files/stroke_2.png'},{rect:new IWRect(247,-2,4,4),url:'Home_files/stroke_3.png'},{rect:new IWRect(247,2,4,245),url:'Home_files/stroke_4.png'},{rect:new IWRect(247,247,4,4),url:'Home_files/stroke_5.png'},{rect:new IWRect(2,247,245,4),url:'Home_files/stroke_6.png'},{rect:new IWRect(-2,247,4,4),url:'Home_files/stroke_7.png'}],new IWSize(249,249)),reflection_0:new IWReflection({opacity:0.33,offset:3.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
