import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary: #ff9000;
  --gray: #999591;
  --white: #f4ede8;
  --helper: #666360;
  --dark: #28262e;
  --background: #312E38;
  --card-background: #3e3b47;
  --input-backgorund: #232129;
  --error: #c53030;

  --toast-info-background: #ebf8ff;
  --toast-info-color: #3172b7;
  --toast-success-background: #e6fffa;
  --toast-success-color: #2e656a;
  --toast-error-background: #fddede;
  --toast-error-color: #c53030;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
 background: var(--background);
 color: var(--white);
 -webkit-font-smoothing: antialiased !important;
}

body, input, button {
 font-size: 16px;
 font-family: 'Roboto Slab', serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
 cursor: pointer;
}
`;
