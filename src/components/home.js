import Ractive from 'ractive';
import template from './../views/home.html';

import './../styles/home.css';

export default Ractive.extend({
    template,
    data(){
        return {
            message: 'Home page!'
        }
    },
    oninit() {
        console.log('Home init');
    },
    onteardown() {
        console.log('Home teardown');
    }
});