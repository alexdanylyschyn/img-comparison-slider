import{r as t,h as e,g as i}from"./p-f5cc54d5.js";const s=(t,e,i)=>t<e?e:t>i?i:t,o={ArrowLeft:-1,ArrowRight:1};class n{constructor(e){t(this,e),this.exposure=50,this.isMouseDown=!1}componentWillLoad(){this.el.querySelectorAll("img").forEach(t=>{t.addEventListener("dragstart",t=>{t.preventDefault()})})}componentDidRender(){this.slide(0),this.updateAfterWidth(),this.el.setAttribute("tabindex","0")}slide(t=0){this.exposure=s(this.exposure+t,0,100),this.after.style.width=`${this.exposure}%`,this.hint.style.left=`${this.exposure}%`}onKeyDown(t){if(this.keyboardSlideAnimationTimeoutId)return;const e=t.key;Object.keys(o).includes(e)&&this.startSlideAnimation(o[e])}onKeyUp(t){this.keyboardSlideAnimationTimeoutId&&Object.keys(o).includes(t.key)&&this.stopSlideAnimation()}onMouseDown(t){this.isMouseDown=!0,this.slideToEvent(t),this.el.focus()}onMouseUp(t){this.isMouseDown=!1}onMouseMove(t){this.isMouseDown&&this.slideToEvent(t)}onBlur(){this.stopSlideAnimation()}updateAfterWidth(){this.imageWidth=this.el.offsetWidth,this.afterImageContainer.style.width=`${this.el.offsetWidth}px`}slideToEvent(t){this.exposure=(t.pageX-this.el.offsetLeft)/this.imageWidth*100,this.slide()}startSlideAnimation(t){const e=1*t,i=()=>{this.keyboardSlideAnimationTimeoutId=window.setTimeout(()=>{this.animationRequestId=window.requestAnimationFrame(i)},1e3/120),this.slide(e)};i()}stopSlideAnimation(){this.keyboardSlideAnimationTimeoutId&&(window.clearTimeout(this.keyboardSlideAnimationTimeoutId),window.cancelAnimationFrame(this.animationRequestId),this.keyboardSlideAnimationTimeoutId=null,this.animationRequestId=null)}render(){return e("div",null,e("div",{ref:t=>this.before=t},e("slot",{name:"before"})),e("div",{class:"after",ref:t=>this.after=t},e("div",{ref:t=>this.afterImageContainer=t},e("slot",{name:"after"}))),e("div",{class:"hint",ref:t=>this.hint=t}))}get el(){return i(this)}static get style(){return":host{--divider:1px solid #d7d7d7;--hint-size:40px;--hint-color:#d7d7d7;--hint-opacity:0.5;--hint-opacity-active:0;position:relative;display:inline-block;font-size:0;overflow:hidden}:host(:focus) .hint{opacity:0}::slotted(img){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.component:hover .hint{opacity:var(--hint-opacity-active)}.hint{position:absolute;width:var(--hint-size);height:var(--hint-size);background-color:var(--hint-color);top:50%;margin-top:calc(var(--hint-size) / (-2));margin-left:calc(var(--hint-size) / (-2));-webkit-transition:opacity 1s,-webkit-transform 1s;transition:opacity 1s,-webkit-transform 1s;transition:opacity 1s,transform 1s;transition:opacity 1s,transform 1s,-webkit-transform 1s;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.75);box-shadow:0 0 15px 0 rgba(0,0,0,.75);pointer-events:none;opacity:var(--hint-opacity);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.focused .hint{-webkit-transform:rotate(45deg) scale(1.5);transform:rotate(45deg) scale(1.5)}.after{position:absolute;left:0;top:0;bottom:0;overflow:hidden;border-right:var(--divider)}"}}export{n as img_comparison_slider};