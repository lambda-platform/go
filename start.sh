rm -R ./lambda
echo "INIT START"
mkdir ./lambda
chmod -R 777 ./lambda
go run ./bootstrap/init/init.go
chmod -R 755 ./lambda
echo "Ready"
go run main.go
