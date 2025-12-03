## Lambda Starter App

`Lambda Go Starter App` төсөл үүсгэхийн өмнө `^Go 1.22` хэл  болон [өгөгдлийн сан](https://lambda-platform.github.io/docs/installation#өгөгдлийн-сан) суулгасан байх хэрэгтэй. Хэрвээ суулгаагүй бол [Go хэлийг татаж авна уу](https://go.dev/dl/). `Go 1.22` ба түүнээс дээш байх шаардлагатай.

`Lambda Go Starter App`-г GitHub Repository-с clone хийж татаж авна.
  ```bash 
  git clone https://github.com/lambda-platform/go my-app
  ```
Татаж авсан хавтас руу орно
  ```bash 
  cd my-app
  ```
`env_example`-с [үндсэн тохиргоо](https://lambda-platform.github.io/docs/configration)-ны `.env` файл  үүсгэнэ
  ```bash 
  cp env_example .env
  ```
.env дотор JWT_SECRET secret-г солих шаардлагатай
  ```bash 
  JWT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  ```
`.env` дотор [өгөгдлийн сангийн](https://lambda-platform.github.io/docs/installation#өгөгдлийн-сан) тохиргоог оруулж өгнө. `DB_CONNECTION` авах боломжит утгууд (mssql,postgres,mysql,oracle)
  ```bash 
DB_CONNECTION=postgres 
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=postgres
  ```
Өгөгдлийн сан тохируулсны дараа Cупер админ хэрэглэгчийн мэдээллийг `.env` дотор оруулна
  ```bash 
  SYSADMIN_LOGIN=superadmin
  SYSADMIN_PASSWORD=secret
  SYSADMIN_EMAIL=null
  ```
Go package-уудыг суулгана
  ```bash 
go mod tidy
  ```
`go run` CLI командыг ашиглан хөгжүүлэлтийн серверийг асаана уу.
  ```bash 
  go run main.go
  ```
Та хөгжүүлэлтийн серверийг ажиллуулсны дараа Lambda Platform-руу [localhost:3000](http://localhost:3000) хаягаар веб хөтчөөр хандах боломжтой. Анх удаа асах үед тохиргооны [Lambda тохиргооны хүснэгтүүд](https://lambda-platform.github.io/docs/lambda-tables)-үүдийг систем өөрөө `auto migrate`хийж үүсгэнэ 


More information: https://lambda-platform.github.io/

## import url

http://localhost:3000/crud/import/crud-export.json

## Docker build command
docker build --target prod --platform linux/amd64 -t lambda:prod .
docker build --target dev --platform linux/amd64 -t lambda:dev .

docker tag lambda:prod munkhaltai/lambda:prod
docker push munkhaltai/lambda:prod

docker tag lambda:dev munkhaltai/lambda:dev
docker push munkhaltai/lambda:dev

sudo docker pull munkhaltai/lambda:prod

## Docker just start for dev
docker-compose -f compose-dev.yml up 
