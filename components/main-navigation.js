/**
 * Title: main-navigation.js
 * Main Navigation custom element.
 *
 * Insert into html as element <main-navigation-component>
 */

 /**
  * Class for declaring custom Navigation component
  *
  * Attributes:
  * rootpath String that points to the root directory of the website, from the current file (ex. '..'')
  */
 class MainNavigation extends HTMLElement {
   constructor() {
     super();
     //this._shadowRoot = this.attachShadow({mode, 'open'});
     //this._shadowRoot.appendChild(template.content.cloneNode(true));
     //console.log(this.root_url);
   }

   /**
    * This callback is called each time this custom element is inserted into the DOM
    */
   connectedCallback() {
     let rootpath = this.getAttribute('rootpath');
     let homePath = rootpath + "/index.html";
     let aboutMePath = rootpath + "/pages/about-me.html";
     let explorePath = rootpath + "/pages/explore.html";

     this.innerHTML = `
	<nav class="grid_12 main_nav">
	  <ul>
	    <li><a href=${homePath}>Home</a></li>
	    <li><a href=${explorePath}>Explore</a></li>
	    <li><a href=${aboutMePath}>About Me</a></li>
	  </ul>
	</nav>
      `;
   }
 }

 // register custom element
 // 'navigation-component' is the DOMString to use when adding this component
 // to a page (ex. <main-navigation-component></main-navigation-component>)
 customElements.define('main-navigation-component', MainNavigation);
