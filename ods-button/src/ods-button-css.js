import {html} from 'lit-element';
export default html`<style>*:before,*:after{box-sizing:inherit}*:focus{outline:3px solid #f26135;box-shadow:0 0 0 3px #f26135}:host{display:flex;flex-direction:column}@media screen and (min-width: 480px){:host{flex-direction:row-reverse}}span{display:inline-block}.button{transition:all 0.3s ease-out;display:var(--ods-button-display);font-family:var(--ods-button-font-family);border-width:var(--ods-button-border-width);border-radius:var(--ods-button-border-radius);font-size:var(--ods-button-font-size);font-weight:var(--ods-button-font-weight);line-height:var(--ods-button-height);padding:var(--ods-button-vertical-padding) var(--ods-button-horizontal-padding);width:var(--ods-button-width-mobile);background-color:var(--ods-button-background-color);color:var(--ods-button-text-color);white-space:var(--ods-button-white-space);cursor:var(--ods-button-cursor)}:host(:not(.is-touching)) .button:hover{background-color:var(--ods-button-hover-background-color);box-shadow:0 0 16px var(--ods-button-hover-shadow-color)}.button:active{background-color:var(--ods-button-active-background-color)}.button.is-active:disabled{cursor:var(--ods-button-disabled-cursor);color:var(--ods-button-is-active-disabled-color);background-color:var(--ods-button-is-active-disabled-background-color)}.button.is-active:disabled:hover{background-color:var(--ods-button-is-active-disabled-background-color)}@media screen and (min-width: 480px){.button--enclosed{width:var(--ods-button-width-narrow) !important}}.button--secondary{background-color:var(--ods-button-secondary-background-color);border:var(--ods-button-secondary-border-width) var(--ods-button-secondary-border-style) var(--ods-button-secondary-border-color);color:var(--ods-button-secondary-color)}.button--secondary:active{color:var(--ods-button-secondary-active-color);border-color:var(--ods-button-secondary-active-border-color);background-color:var(--ods-button-secondary-active-background-color)}.button--secondary:hover{background-color:var(--ods-button-secondary-hover-background-color);box-shadow:0 0 16px var(--ods-button-secondary-hover-shadow-color);border-color:var(--ods-button-secondary-hover-border-color);color:var(--ods-button-secondary-hover-text-color)}.button--secondary:disabled{cursor:var(--ods-button-disabled-cursor);color:var(--ods-button-disabled-color);border-color:var(--ods-button-secondary-disabled-border-color);background-color:var(--ods-button-secondary-disabled-background-color)}.button--secondary:disabled:hover{border-color:var(--ods-button-secondary-disabled-hover-border-color);background-color:var(--ods-button-secondary-disabled-hover-background-color)}.button--secondary.is-active:disabled{color:var(--ods-button-secondary-is-active-disabled-color);border-color:var(--ods-button-secondary-is-active-disabled-border-color);background-color:var(--ods-button-secondary-is-active-disabled-background-color)}.button--secondary.is-active:disabled:hover{background-color:var(--ods-button-secondary-is-active-disabled-hover-background-color)}@media screen and (min-width: 480px){.button{width:var(--ods-button-width-medium)}}:disabled{cursor:var(--ods-button-disabled-cursor);color:var(--ods-button-disabled-color);background-color:var(--ods-button-disabled-background-color)}:disabled:hover{background-color:var(--ods-button-disabled-hover-background-color);color:var(--ods-button-disabled-color);box-shadow:unset}.dancingDots{display:var(--dancingdots-display);margin-left:var(--dancingdots-offset)}.dancingDots.is-active{display:var(--dancingdots-is-active-display)}.dots{display:var(--dancingdots-dots-display)}.block{display:var(--dancingdots-dots-display);width:var(--dancingdots-block-width);height:var(--dancingdots-block-height);margin:var(--dancingdots-block-margin);opacity:var(--dancingdots-block-opacity);background-color:var(--dancingdots-block-background-color)}.button--secondary .block{background-color:var(--dancingdots-block-secondary-background-color)}.block:nth-child(1){animation:var(--dancingdots-animation-name) var(--dancingdots-animation-duration) var(--dancingdots-animation-timing-function) var(--dancingdots-animation-iteration-count)}.block:nth-child(2){animation:var(--dancingdots-animation-name) var(--dancingdots-animation-duration) var(--dancingdots-animation-delay-child-two) var(--dancingdots-animation-timing-function) var(--dancingdots-animation-iteration-count)}.block:nth-child(3){animation:var(--dancingdots-animation-name) var(--dancingdots-animation-duration) var(--dancingdots-animation-delay-child-three) var(--dancingdots-animation-timing-function) var(--dancingdots-animation-iteration-count)}@keyframes bounce{0%{transform:var(--dancingdots-keyframe-step-1-transform);opacity:var(--dancingdots-keyframe-step-1-opacity)}8%{transform:var(--dancingdots-keyframe-step-2-transform);opacity:var(--dancingdots-keyframe-step-2-opacity)}15%{transform:var(--dancingdots-keyframe-step-3-transform);opacity:var(--dancingdots-keyframe-step-3-opacity)}100%{opacity:var(--dancingdots-keyframe-step-4-opacity)}}
</style>`;
