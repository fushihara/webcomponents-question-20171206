let 動作する = document.location.search == "?ok";
if(動作する){
  //ownerDocumentをこの場所で宣言すると問題ないが、ownerDocumentがグローバルにセットされてしまう
  var ownerDocument = document.currentScript.ownerDocument;
}
class XTest extends HTMLElement {
    constructor() {
        super();
        this.span = null;
    }

    /** DOMに要素が追加された際に発生するイベント */
    connectedCallback() {
        if(動作する == false){
          var ownerDocument = document.currentScript.ownerDocument;
        }
        const template = ownerDocument.querySelector("#x-template");
        const instance = template.content.cloneNode(true);
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(instance);

        this.span = shadowRoot.querySelector("span");
        shadowRoot.querySelector("button").addEventListener("click",()=>{
          this.span.innerText = this.span.innerText - 0 + 1;//innerTextは文字列なので一旦数値にしてから+1
        });
    }
    setMessage(msg){
      this.span.innerText = msg;
    }
}

customElements.define('x-test',XTest);
