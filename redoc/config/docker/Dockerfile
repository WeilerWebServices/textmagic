# To run:
# docker build -t redoc .
# docker run -it --rm -p 80:80 -e SPEC_URL='http://localhost:8000/swagger.yaml' redoc
# Ensure http://localhost:8000/swagger.yaml is served with cors. A good solution is:
# npm i -g http-server
# http-server -p 8000 --cors

FROM node:alpine

RUN apk update && apk add --no-cache git 

# Install dependencies
WORKDIR /build

COPY package.json yarn.lock /build/
RUN yarn install --frozen-lockfile --ignore-optional --ignore-scripts

# copy only required for the build files
COPY src /build/src
COPY webpack.config.ts tsconfig.json custom.d.ts /build/
COPY typings/styled-patch.d.ts /build/typings/styled-patch.d.ts
COPY swagger.json /build/swagger.json

RUN npm run bundle:standalone

FROM nginx:alpine

ENV PORT=80
ENV REDOC_OPTIONS=

# copy files to the nginx folder
COPY --from=0 build/bundles /usr/share/nginx/html
COPY config/docker/index.tpl.html /usr/share/nginx/html/index.html
COPY config/docker/favicon.ico swagger.json config/docker/manifest.json /usr/share/nginx/html/
COPY config/docker/images /usr/share/nginx/html/images
COPY config/docker/nginx.conf /etc/nginx/
COPY config/docker/docker-run.sh /usr/local/bin

EXPOSE 80

CMD ["sh", "/usr/local/bin/docker-run.sh"]
