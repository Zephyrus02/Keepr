import React from 'react';

function Footer() {

    var date = new Date().getFullYear();
  return (
        <footer>
            <p>Copyright © {date}</p>
        </footer>
  );
}

export default Footer;
