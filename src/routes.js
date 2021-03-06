import Homepage from './components/Homepage.vue';
import Pixels from './components/pixel/Pixels.vue';
import Pixel from './components/pixel/Pixel.vue';
import Repos from './components/repo/Repos.vue';
import Repo from './components/repo/Repo.vue';

export const routes = [

    { path: '', name: 'root', component: Repos },

    { path: ':id', name: 'repo', component: Repo, children: [
        { path: ':pixel', name: 'pixel', component: Pixel }
    ]},
];