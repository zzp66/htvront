3
class CartNotification extends HTMLElement {
  constructor() {
    super();

    this.notification = document.getElementById('cart-notification');
    this.header = document.querySelector('sticky-header');
    this.onBodyClick = this.handleBodyClick.bind(this);
    
    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

  open() {
    this.notification.classList.add('animate', 'active');

    this.notification.addEventListener('transitionend', () => {
      this.notification.focus();
      trapFocus(this.notification);
    }, { once: true });

    document.body.addEventListener('click', this.onBodyClick);
  }

  close() {
    this.notification.classList.remove('active');

    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
      this.cartItemKey = parsedState.key;
      this.getSectionsToRender().forEach((section => {
        document.getElementById(section.id).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
      }));

      if (this.header) this.header.reveal();
      var notification_arr = [{id: '39803092500613'},{id: '39803093680261'},{id: '39803093057669'},{id: '39803093090437'},{id: '39803093483653'}, {id: '39803092533381'}, {id: '39797138129029'}, {id: '39797138227333'},{id: '39797138260101' },{id: '39797138292869'}, {id: '39797138358405'},{id: '39797138423941' },{id: '39797138489477'}, {id: '39797138555013'},{id: '39797138620549' },{id: '39797138391173'}];
        checkCartItems(({userEmail,cartToken,cartItemKeysStr,cartProductKeyArr,cartProductQuantity})=>{
          if(cartProductKeyArr.length < 3) {
          notification_arr.forEach((item, index) => {
              if(cartProductKeyArr.indexOf(item.id) != -1 && cartProductKeyArr.indexOf('39793160355973') != -1){
                 // arr.push(item)
                // $('#cart-notification-form').hide();
            }
            
         })
        } 
      this.open();
    });
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
      },
      {
        id: 'cart-notification-button'
      },
      {
        id: 'cart-icon-bubble'
      }
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);
