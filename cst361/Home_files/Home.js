// Created by iWeb 2.0.2 local-build-20080510

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,168),url:'Home_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Home_files/stroke_1.png'},{rect:new IWRect(2,-2,168,4),url:'Home_files/stroke_2.png'},{rect:new IWRect(170,-2,4,4),url:'Home_files/stroke_3.png'},{rect:new IWRect(170,2,4,168),url:'Home_files/stroke_4.png'},{rect:new IWRect(170,170,4,4),url:'Home_files/stroke_5.png'},{rect:new IWRect(2,170,168,4),url:'Home_files/stroke_6.png'},{rect:new IWRect(-2,170,4,4),url:'Home_files/stroke_7.png'}],new IWSize(172,172))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
