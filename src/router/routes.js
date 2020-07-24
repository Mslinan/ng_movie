import Movie from '../views/Movie.vue'
import Video from '../views/Video.vue'
import Cinemas from '../views/Cinemas.vue'
import sVideo from '../views/sVideo.vue'
import My from '../views/My.vue'

export default [
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    component: Cinemas
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/svideo',
    name: 'sVideo',
    component: sVideo
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/',
    redirect: '/movie'
  }
]