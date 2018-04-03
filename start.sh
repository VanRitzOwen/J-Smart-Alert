#开发
if [ "$1" = "dev" ];then
	#更新npm依赖模块
	cd /var/www/8081
	npm install --registry=https://registry.npm.taobao.org

	#启动服务
	pm2 start index.js --name='jalert' --watch --ignore-watch='data' -- 8081
	pm2 logs jalert
fi
