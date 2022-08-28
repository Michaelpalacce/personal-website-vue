# personal-website-vue
My personal website written in VueJS and utilizing [EventRequest](https://github.com/Michaelpalacce/EventRequest) as a backend.
This is pretty much my personal playground and business card in one. This is the place that holds the most up-to-date information about me
and all the things I am currently working on.

A demo is worth a thousand words, so visit: https://stefangenov.site for a demo

## To enable running this on a very low end server, without running out of memory, a lot of dependencies have been moved to devDependencies

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
pm2-runtime dev.ecosystem.config.js
```

### Compiles and minifies for production
```
npm run build
```

### Running in production:

```
npm i --only=prod && pm2 start ecosystem.config.js
```

### Deploy:

```
ansible-playbook -i inventory main.yaml
```
