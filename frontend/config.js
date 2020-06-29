// import getConfig from './next.config.js'

const {publicRuntimeConfig} =  require('./next.config')

export const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT
export const APP_NAME = publicRuntimeConfig.APP_NAME 


// export const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT