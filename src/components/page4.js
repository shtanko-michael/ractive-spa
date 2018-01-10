import Ractive from 'ractive';
import template from './../views/page4.html';
export default Ractive.extend({
    template,
    oninit()  {
        console.log('Page4 init', this.get('pathParams'));
    },
    onteardown () {
        console.log('Page4 teardown');
    }
});