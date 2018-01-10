import Ractive from 'ractive';
import template from './../views/page3.html';

export default Ractive.extend({
    template,
    oninit()  {
        console.log('Page3 init', this.get('pathParams'));
    },
    onteardown () {
        console.log('Page3 teardown');
    }
});