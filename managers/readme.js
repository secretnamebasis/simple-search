export function createReadMe() {
  const el = document.createElement('div');
  el.className = "manager-page readme-document";

  el.innerHTML = `
  <h2>Readme</h2>

  <h3>Nodes</h3>

  <p>For the best experience, we recommend running your own local node. A local node will load TELA dApps and sites quickly, delivering fast and instantaneous performance.</p>
  <p>If you choose to use a remote node, you may experience slower loading times, though functionality remains intact.</p>
  <p>You can find software to run your own local node here:<br>
  <a href="https://github.com/deroproject/derohe/releases">https://github.com/deroproject/derohe/releases</a>
  </p>
  `;
  return el;
}

