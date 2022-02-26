/**
 * Title: main-navigation.js
 * Date: 2022-26-02
 * Main Navigation custom element.
 *
 * Insert into html as element <main-navigation-component>
 */

 const template = document.createElement('template');

template.innerHTML = `
			<nav class="grid_12 main_nav">
				<ul>
					<li><a href="../pages/about-me.html">About Me</a></li>
					<li><a href="../pages/climbing.html">Climbing</a></li>
				</ul>
			</nav>
`;

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
					<li><a href=this.root_url.href + "/pages/about-me.html">About Me</a></li>
					<li><a href=this.root_url.href + "/pages/climbing.html">Climbing</a></li>

     this.innerHTML = `
			<nav class="grid_12 main_nav">
				<ul>
					<li><a href="../pages/about-me.html">About Me</a></li>
					<li><a href="../pages/climbing.html">Climbing</a></li>
				</ul>
			</nav>
      `;
    */
   connectedCallback() {
     let rootpath = this.getAttribute('rootpath');
     let homePath = rootpath + "/index.html";
     let aboutMePath = rootpath + "/pages/about-me.html";
     let climbingPath = rootpath + "/pages/climbing.html";

     this.innerHTML = `
			<nav class="grid_12 main_nav">
				<ul>
          <li><a href=${homePath}>Home</a></li>
					<li><a href=${aboutMePath}>About Me</a></li>
					<li><a href=${climbingPath}>Climbing</a></li>
				</ul>
			</nav>
      `;
   }
 }

 // register custom element
 // 'navigation-component' is the DOMString to use when adding this component
 // to a page (ex. <main-navigation-component></main-navigation-component>)
 customElements.define('main-navigation-component', MainNavigation);
