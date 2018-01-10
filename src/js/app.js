import Ractive from 'ractive';
import Router from 'ractivejs-router';

import Menu from './../components/menu';
import Footer from './../components/footer';

import routesConfig from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

//Root App
new Ractive({
    el: '#root',
    data: {
        routesConfig
    },
    components: {
        Menu,
        Router,
        Footer
    },
    template: `
        <div>
            <Menu />
            <div class="container">
                <Router routesConfig={{routesConfig}} />
            </div>
            <Footer />
        </div>
    `,
    oninit(){
        console.log('App init');
    },
    onrender(){
        console.log('App Render');
    },
    oncomplete(){
        console.log('App Complete');
    }
});