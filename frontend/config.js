// import getConfig from './next.config.js'

const {publicRuntimeConfig} =  require('./next.config')

export const API = publicRuntimeConfig.PRODUCTION ? 'https://seoblog.com' : 'http://localhost:8000';
export const APP_NAME = publicRuntimeConfig.APP_NAME ;
