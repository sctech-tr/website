class SeasonalButton extends HTMLElement {
  constructor() {
    super();

    // Attach shadow DOM for encapsulation
    const shadow = this.attachShadow({ mode: 'open' });

    // Create the button
    const button = document.createElement('button');
    const buttonText = this.getAttribute('text');
    button.textContent = buttonText || 'Click me!';

    // Determine the current season
    const season = this.getSeason();
    const seasonColors = {
      winter: 'white',
      spring: 'lightgreen',
      summer: 'yellow',
      autumn: 'orange',
    };

    // Add styles for the button
    const style = document.createElement('style');
    style.textContent = `
      button {
        background-color: ${seasonColors[season]};
        border: 1px solid black;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
      }
    `;

    // Add click handling
    button.addEventListener('click', () => {
      const onclickAttr = this.getAttribute('onclick');
      if (onclickAttr) {
        new Function(onclickAttr)();
      }
    });

    // Append style and button to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(button);
  }

  // Helper method to determine the season
  getSeason() {
    const month = new Date().getMonth(); // 0 = January, 11 = December
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
  }
}

// Register the custom element
customElements.define('seasonal-button', SeasonalButton);
