// eslint-disable-next-line no-undef
const root = document.querySelector('.p-main');

if (root) {
  const el = {
    docs: root.querySelector('[data-docs]'),
  };

  // eslint-disable-next-line no-undef
  fetch('https://api.github.com/repos/alexpryshchepa/gulp-starter/readme', {
    headers: {
      Accept: 'application/vnd.github.v3.html',
    },
  })
    .then(response => response.text())
    .then((data) => {
      el.docs.innerHTML = data;
    }).catch(() => {
      el.docs.innerHTML = 'Can not retrieve README.md';
    });
}
