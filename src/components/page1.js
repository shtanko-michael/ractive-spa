import Ractive from 'ractive';
import template from './../views/page1.html';

export default Ractive.extend({
    template,
    oninit()  {
        console.log('Page1 init', this.get('routeParams'));
    },
    onteardown() {
        console.log('Page1 teardown');
    }
});