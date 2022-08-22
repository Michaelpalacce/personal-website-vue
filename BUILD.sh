VERSION=$(curl -s -XGET https://api.github.com/repos/Michaelpalacce/personal-website-vue/tags | grep name -m 1 | awk '{print $2}' | cut -d'"' -f2)

docker buildx build --platform linux/amd64 \
-f Dockerfile \
-t stefangenov/website:latest \
-t stefangenov/website:"${VERSION}" \
--push \
.
