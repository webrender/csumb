// Created by iWeb 2.0.2 local-build-20080510

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,221),url:'Community_Scan_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Community_Scan_files/stroke_1.png'},{rect:new IWRect(2,-2,296,4),url:'Community_Scan_files/stroke_2.png'},{rect:new IWRect(298,-2,4,4),url:'Community_Scan_files/stroke_3.png'},{rect:new IWRect(298,2,4,221),url:'Community_Scan_files/stroke_4.png'},{rect:new IWRect(298,223,4,4),url:'Community_Scan_files/stroke_5.png'},{rect:new IWRect(2,223,296,4),url:'Community_Scan_files/stroke_6.png'},{rect:new IWRect(-2,223,4,4),url:'Community_Scan_files/stroke_7.png'}],new IWSize(300,225))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Community_Scan_files/Community_ScanMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
