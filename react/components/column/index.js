'use strict';var React=require('react');function getClassName(_ref){var span=_ref.span,push=_ref.push;var classes=['vs-col-sm-'+span[0],'vs-col-sm-push-'+push[0],'vs-col-md-'+span[1],'vs-col-md-push-'+push[1],'vs-col-lg-'+span[2],'vs-col-lg-push-'+push[2],'vs-col-xl-'+span[3],'vs-col-xl-push-'+push[3]];return classes.join(' ')}module.exports=function(_ref2){var children=_ref2.children,span=_ref2.span,push=_ref2.push;return React.createElement('div',{className:getClassName({span:span,push:push})},children)};