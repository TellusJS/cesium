/**
 * ArcType 枚举类定义了连接顶点采用的路径计算方式
 * <p>ArcType defines the path that should be taken connecting vertices.</p>
 *
 * @enum {Number}
 */
var ArcType = {
  /**
   * 空间两点连成的直线
   * <p>Straight line that does not conform to the surface of the ellipsoid.</p>
   *
   * @type {Number}
   * @constant
   */
  NONE: 0,

  /**
   * 测地线，曲面上两点之间最短的连线叫"测地线"也叫"短程线"
   * <p>Follow geodesic path.</p>
   *
   * @type {Number}
   * @constant
   */
  GEODESIC: 1,

  /**
   * 恒向线，地球上两点之间与经线处处保持角度相等的曲线。即在墨卡托海图上从起始点到目的点的一条直线。
   * <p>Follow rhumb or loxodrome path.</p>
   *
   * @type {Number}
   * @constant
   */
  RHUMB: 2,
};
export default Object.freeze(ArcType);
