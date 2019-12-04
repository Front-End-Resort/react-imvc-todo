import { Config } from 'react-imvc'

let PORT = 3000
const ROOT = __dirname

const config: Partial<Config> = {
	root: ROOT, // 项目根目录
	port: PORT, // server 端口号
  routes: 'routes', // 服务端路由目录
}

export default config