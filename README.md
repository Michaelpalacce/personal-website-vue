# personal-website-vue

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
