import log4js from "log4js";
import DevConfig from "./dev_config";
import ProConfig from "./pro_config";
import InjectGlobal from "../utils/injectGlobal";

const isDev = process.env.NODE_ENV === "develop" ? true : false;

const logger = log4js.getLogger();
const httpLogger = log4js.getLogger("httpLogger");
const resLogger = log4js.getLogger("resLogger");
const errLogger = log4js.getLogger("errLogger");

const Configs = isDev?DevConfig:ProConfig;
log4js.configure(Configs['log4js']);
//@ts-ignore
InjectGlobal.add("logger",logger);
InjectGlobal.add("httpLogger",httpLogger);
InjectGlobal.add("resLogger",resLogger);
InjectGlobal.add("errLogger",errLogger);

export const HOST = Configs['HOST'];
export const PORT = Configs['PORT'];
export const SqlConfig = Configs['sql'];
export default Configs;