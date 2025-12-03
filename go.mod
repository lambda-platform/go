module lambda

go 1.24.4

require (
	github.com/99designs/gqlgen v0.17.66
	github.com/gofiber/fiber/v2 v2.52.6
	github.com/golang-jwt/jwt/v5 v5.0.0 // indirect
	github.com/google/uuid v1.6.0 // indirect
	github.com/khankhulgun/common v0.0.2
	github.com/khankhulgun/khanmap v0.0.45
	github.com/khankhulgun/workflow v0.0.10
	github.com/lambda-platform/lambda v0.9.0
	github.com/thedevsaddam/govalidator v1.9.10
	github.com/valyala/fasthttp v1.51.0
	gorm.io/gorm v1.25.5
)

require (
	github.com/go-redis/redis v6.15.9+incompatible
	github.com/vektah/gqlparser/v2 v2.5.22
)

require (
	cloud.google.com/go/compute/metadata v0.3.0 // indirect
	github.com/MicahParks/keyfunc/v2 v2.1.0 // indirect
	github.com/PaesslerAG/gval v1.2.2 // indirect
	github.com/agnivade/levenshtein v1.2.0 // indirect
	github.com/andybalholm/brotli v1.1.0 // indirect
	github.com/cespare/xxhash/v2 v2.2.0 // indirect
	github.com/dgraph-io/ristretto v0.1.1 // indirect
	github.com/dustin/go-humanize v1.0.0 // indirect
	github.com/frankban/quicktest v1.14.6 // indirect
	github.com/go-sql-driver/mysql v1.7.0 // indirect
	github.com/go-viper/mapstructure/v2 v2.2.1 // indirect
	github.com/gofiber/contrib/jwt v1.0.7 // indirect
	github.com/gofiber/template v1.8.2 // indirect
	github.com/gofiber/template/html/v2 v2.0.5 // indirect
	github.com/gofiber/utils v1.1.0 // indirect
	github.com/golang-sql/civil v0.0.0-20220223132316-b832511892a9 // indirect
	github.com/golang-sql/sqlexp v0.1.0 // indirect
	github.com/golang/glog v1.2.0 // indirect
	github.com/google/btree v1.0.0 // indirect
	github.com/google/go-cmp v0.6.0 // indirect
	github.com/gorilla/websocket v1.5.0 // indirect
	github.com/hashicorp/golang-lru/v2 v2.0.7 // indirect
	github.com/iancoleman/strcase v0.3.0 // indirect
	github.com/jackc/pgpassfile v1.0.0 // indirect
	github.com/jackc/pgservicefile v0.0.0-20221227161230-091c0ba34f0a // indirect
	github.com/jackc/pgx/v5 v5.4.3 // indirect
	github.com/jinzhu/inflection v1.0.0 // indirect
	github.com/jinzhu/now v1.1.5 // indirect
	github.com/joho/godotenv v1.5.1 // indirect
	github.com/kelseyhightower/envconfig v1.4.0 // indirect
	github.com/klauspost/compress v1.17.9 // indirect
	github.com/kr/pretty v0.3.1 // indirect
	github.com/kr/text v0.2.0 // indirect
	github.com/mattn/go-colorable v0.1.14 // indirect
	github.com/mattn/go-isatty v0.0.20 // indirect
	github.com/mattn/go-runewidth v0.0.16 // indirect
	github.com/microsoft/go-mssqldb v1.6.0 // indirect
	github.com/nfnt/resize v0.0.0-20180221191011-83c6a9932646 // indirect
	github.com/onsi/ginkgo v1.16.5 // indirect
	github.com/onsi/gomega v1.36.2 // indirect
	github.com/otiai10/copy v1.14.0 // indirect
	github.com/peterbourgon/diskv/v3 v3.0.1 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/rivo/uniseg v0.2.0 // indirect
	github.com/rogpeppe/fastuuid v1.2.0 // indirect
	github.com/rogpeppe/go-internal v1.11.0 // indirect
	github.com/shabbyrobe/xmlwriter v0.0.0-20200208144257-9fca06d00ffa // indirect
	github.com/shopspring/decimal v1.3.1 // indirect
	github.com/sosodev/duration v1.3.1 // indirect
	github.com/srwiley/oksvg v0.0.0-20221011165216-be6e8873101c // indirect
	github.com/srwiley/rasterx v0.0.0-20220730225603-2ab79fcdd4ef // indirect
	github.com/tealeg/xlsx/v3 v3.3.12 // indirect
	github.com/valyala/bytebufferpool v1.0.0 // indirect
	github.com/valyala/tcplisten v1.0.0 // indirect
	golang.org/x/crypto v0.38.0 // indirect
	golang.org/x/image v0.25.0 // indirect
	golang.org/x/mod v0.23.0 // indirect
	golang.org/x/net v0.40.0 // indirect
	golang.org/x/oauth2 v0.21.0 // indirect
	golang.org/x/sync v0.14.0 // indirect
	golang.org/x/sys v0.33.0 // indirect
	golang.org/x/text v0.25.0 // indirect
	golang.org/x/tools v0.30.0 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20240604185151-ef581f913117 // indirect
	google.golang.org/grpc v1.64.0 // indirect
	google.golang.org/protobuf v1.36.5 // indirect
	gopkg.in/alexcesaro/quotedprintable.v3 v3.0.0-20150716171945-2caba252f4dc // indirect
	gopkg.in/gomail.v2 v2.0.0-20160411212932-81ebce5c23df // indirect
	gopkg.in/yaml.v3 v3.0.1 // indirect
	gorm.io/driver/mysql v1.5.2 // indirect
	gorm.io/driver/postgres v1.5.3 // indirect
	gorm.io/driver/sqlserver v1.5.2 // indirect
)

//replace github.com/lambda-platform/lambda v0.8.54 => ../../../lambda-fiber

//replace github.com/khankhulgun/khanmap v0.0.1 => ../../khan-map
//replace github.com/khankhulgun/workflow v0.0.2 => ../../../../ActiveProjects/workflow

//replace github.com/lambda-platform/lambda v0.8.56 => ../../../LAMBDA/lambda
