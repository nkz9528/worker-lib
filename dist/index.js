var r = Object.defineProperty;
var t = (e, o, n) => o in e ? r(e, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[o] = n;
var s = (e, o, n) => t(e, typeof o != "symbol" ? o + "" : o, n);
class a extends HTMLElement {
  constructor() {
    super();
    // Shadow DOMを使用
    s(this, "shadow");
    this.shadow = this.attachShadow({ mode: "open" }), this.render();
  }
  // コンポーネントがDOMに追加されたときに呼ばれるライフサイクルメソッド
  connectedCallback() {
    console.log("SimpleComponent要素がDOMに追加されました");
  }
  // レンダリングメソッド
  render() {
    this.shadow.innerHTML = `
      <style>
        .container {
          font-family: 'Arial', sans-serif;
          color: #333;
          background-color: #f8f8f8;
          padding: 16px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
          margin: 0;
          font-size: 1.5em;
          color: #0066cc;
        }
      </style>
      
      <div class="container">
        <h1>Hello, World!</h1>
      </div>
    `;
  }
}
customElements.define("simple-component", a);
export {
  a as SimpleComponent
};
