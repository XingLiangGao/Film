/**
 * 接口域名的管理
 */
interface Base {
  sq: string;
  bd: string;
}
const base: Base = {
  sq: window.location.origin,
  bd: 'http://xxxxx22222.com/api',
};

export default base;
