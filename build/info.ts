import dayjs from 'dayjs'
// @ts-ignore
import pkg from '../package.json'

const versionNumber = '1.1.0'

const { dependencies, devDependencies, name, version } = pkg
export const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  checkUpdateVersion: versionNumber
}
