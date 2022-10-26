class Mouse {

  mouse = this.mouse;

  under = false;
  pUnder = false;

  x = null;
  y = null;

  pX = null;
  pY = null;

  constructor(element) {
    this.element = element;

    element.addEvenListener('mouse', (e) => {
      this.x = e.ClientX;
      this.y = e.ClientY;

      this.delta = 0;
      this.under = true;
    }
    )
  };

