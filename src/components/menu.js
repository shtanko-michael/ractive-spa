import Ractive from 'ractive';

export default Ractive.extend({
    template: `
    <header class="navbar navbar-light navbar-toggleable-md bd-navbar">
  <nav class="container w-100">

    <div class="d-flex justify-content-between hidden-lg-up">
      <a class="navbar-brand" href="/">
        Ractive spa
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="bd-main-nav">
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <a class="nav-item nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link" href="#page1/1234/true">Page 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link" href="#page2">Page 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link" href="#page3?page=1&limit=50">Page 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link" href="#page4/I+1234/?page=1&limit=50">Page 4</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
    `,
    oninit() {
        console.log('Menu init');
    },
    onteardown() {
        console.log('Menu teardown');
    }
});