/* eslint-disable *///@ts-ignore
//@ts-nocheck
export interface LoginInput {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

export interface AuthLoginResponse {
  /** 用户ID */
  userId: number;
  /** 访问令牌 */
  accessToken: string;
}

/** {"normal":"正常","disabled":"禁用","deleted":"删除"} */
export enum UserStatusEnum {
  Normal = 'normal',
  Disabled = 'disabled',
  Deleted = 'deleted',
}

/** {"unknown":"未知","female":"女","male":"男"} */
export enum SexEnum {
  Unknown = 'unknown',
  Female = 'female',
  Male = 'male',
}

export interface GetManyRoleEntityResponseDto {
  data: RoleEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface RoleEntity {
  /** 子角色 */
  children?: RoleEntity[];
  /** 父级角色id */
  parentId: number;
  name: string;
  /** 路由允许权限 */
  permissionsForRouter: string[];
  /** 菜单允许权限 */
  permissionsForMenu: string[];
  parent: RoleEntity | null;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UserUpdateInput {
  /**
   * 状态
   * {"normal":"正常","disabled":"禁用","deleted":"删除"}
   */
  status?: UserStatusEnum;
  /** {"unknown":"未知","female":"女","male":"男"} */
  sex?: SexEnum;
  password?: string;
  /** 用户名 */
  username?: string;
  /** 角色 */
  role?: RoleEntity;
  /** 角色ID */
  roleId?: number;
  /** 头像 */
  avatar?: string;
  /** 昵称 */
  nickname?: string;
  /** 描述 */
  description?: string;
  /** 手机号 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 是否会员 */
  isVip?: boolean;
  /**
   * 会员到期时间
   * @format date-time
   */
  vipExpiredAt?: string;
  /** 会员等级 */
  vipLevel?: number;
  /** 会员订单 */
  vipOrderId?: number;
  /** 积分 */
  integral?: number;
  /** 余额 */
  balance?: number;
}

export interface GetManyUserEntityResponseDto {
  data: UserEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface UserEntity {
  /**
   * 状态
   * {"normal":"正常","disabled":"禁用","deleted":"删除"}
   */
  status: UserStatusEnum;
  /** {"unknown":"未知","female":"女","male":"男"} */
  sex: SexEnum;
  /** 是否超管 */
  isRoot: boolean;
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** 角色 */
  role: RoleEntity;
  /** 角色ID */
  roleId: number;
  /** 头像 */
  avatar: string;
  /** 昵称 */
  nickname: string;
  /** 描述 */
  description: string;
  /** 手机号 */
  phone: string;
  /** 邮箱 */
  email: string;
  /** 是否会员 */
  isVip: boolean;
  /**
   * 会员到期时间
   * @format date-time
   */
  vipExpiredAt: string;
  /** 会员等级 */
  vipLevel: number;
  /** 会员订单 */
  vipOrderId: number;
  /** 积分 */
  integral: number;
  /** 余额 */
  balance: number;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface GetManyMenuEntityResponseDto {
  data: MenuEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface MenuMeta {
  /** 隐藏面包屑 */
  breadcrumbHidden?: boolean;
  /** 隐藏一级路由 */
  levelHidden?: boolean;
  /** 菜单图标 */
  icon?: string;
  /** 禁止关闭 */
  noClosable?: boolean;
  /** 菜单标题 */
  title?: string;
  /** 隐藏菜单 */
  hidden?: boolean;
  /** 动态传参新开标签 */
  dynamicNewTab?: boolean;
  /** 不缓存 */
  noKeepAlive?: boolean;
  /** 隐藏分栏 */
  noColumn?: boolean;
}

export interface MenuEntity {
  /** meta */
  meta?: MenuMeta | null;
  /** 子菜单 */
  children?: MenuEntity[];
  /** 父级菜单id */
  parentId?: number;
  /** 菜单名称 */
  name: string;
  /** 菜单路径 */
  path: string;
  /** 菜单组件 */
  component?: string;
  /** 重定向 */
  redirect?: string;
  /** 排序 */
  sort?: number;
  parent?: MenuEntity | null;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UserCreateInput {
  /**
   * 状态
   * {"normal":"正常","disabled":"禁用","deleted":"删除"}
   */
  status: UserStatusEnum;
  /** {"unknown":"未知","female":"女","male":"男"} */
  sex: SexEnum;
  /** 密码 */
  password: string;
  /** 用户名 */
  username: string;
  /** 角色 */
  role: RoleEntity;
  /** 角色ID */
  roleId: number;
  /** 头像 */
  avatar: string;
  /** 昵称 */
  nickname: string;
  /** 描述 */
  description: string;
  /** 手机号 */
  phone: string;
  /** 邮箱 */
  email: string;
  /** 是否会员 */
  isVip: boolean;
  /**
   * 会员到期时间
   * @format date-time
   */
  vipExpiredAt: string;
  /** 会员等级 */
  vipLevel: number;
  /** 会员订单 */
  vipOrderId: number;
  /** 积分 */
  integral: number;
  /** 余额 */
  balance: number;
}

export interface AccessLogClearResponse {
  /**
   * 清空的日志数量
   * @example 1
   */
  total: number;
}

export interface GetManyOperateLogEntityResponseDto {
  data: OperateLogEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

/** {"login":"登录","logout":"登出","operation":"操作","deleteOne":"删除单条数据","createOne":"创建单条数据","updateOne":"更新单条数据","empty":"清空数据","unknown":"未知"} */
export enum OperateTypeEnum {
  Login = 'login',
  Logout = 'logout',
  Operation = 'operation',
  DeleteOne = 'deleteOne',
  CreateOne = 'createOne',
  UpdateOne = 'updateOne',
  Empty = 'empty',
  Unknown = 'unknown',
}

/**
 * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
 * @default "success"
 */
export enum CommonStatusEnum {
  Active = 'active',
  Inactive = 'inactive',
  Success = 'success',
  Error = 'error',
  Unknown = 'unknown',
}

export interface OperateLogEntity {
  /**
   * 操作类型
   * {"login":"登录","logout":"登出","operation":"操作","deleteOne":"删除单条数据","createOne":"创建单条数据","updateOne":"更新单条数据","empty":"清空数据","unknown":"未知"}
   */
  logType: OperateTypeEnum | null;
  /**
   * 状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status: CommonStatusEnum | null;
  /** 用户id */
  userId: number;
  /** 用户对象 */
  user: UserEntity;
  /** 操作信息 */
  logMsg?: string;
  /** 操作数据 */
  logData?: object;
  /** errorMsg */
  errorMsg?: string;
  /** actionKey */
  actionKey?: string;
  /** 内部方法 */
  method?: string;
  /** 请求方法 */
  requestMethod?: string;
  /** 请求数据 */
  reqData?: object;
  /** 回应数据 */
  resData?: object;
  /** 请求ip */
  clientIp?: string;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CreateMenuInput {
  /** meta */
  meta?: MenuMeta | null;
  /** 父级菜单id */
  parentId: number;
  /** 菜单名称 */
  name: string;
  /** 菜单路径 */
  path: string;
  /** 菜单组件 */
  component?: string;
  /** 重定向 */
  redirect?: string;
  /** 排序 */
  sort?: number;
  parent?: MenuEntity | null;
}

export interface UpdateMenuInput {
  /** meta */
  meta?: MenuMeta | null;
  /** 父级菜单id */
  parentId?: number;
  /** 菜单名称 */
  name?: string;
  /** 菜单路径 */
  path?: string;
  /** 菜单组件 */
  component?: string;
  /** 重定向 */
  redirect?: string;
  /** 排序 */
  sort?: number;
  parent?: MenuEntity | null;
}

export interface RoleCreateInput {
  /** 父级角色id */
  parentId: number;
  name: string;
  /** 路由允许权限 */
  permissionsForRouter: string[];
  /** 菜单允许权限 */
  permissionsForMenu: string[];
  parent: RoleEntity | null;
}

export interface RoleUpdateInput {
  /** 父级角色id */
  parentId?: number;
  name?: string;
  /** 路由允许权限 */
  permissionsForRouter?: string[];
  /** 菜单允许权限 */
  permissionsForMenu?: string[];
  parent?: RoleEntity | null;
}

export interface GetManyOssEntityResponseDto {
  data: OssEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

/** {"unknown":"未知","system":"系统文件","avatar":"用户头像","swiper":"轮播图","comment":"评论","product":"产品","category":"分类","worksBanner":"作品横幅","worksCover":"作品封面","episodeCover":"剧集封面","episodeFile":"剧集文件","feedback":"用户反馈","systemConfig":"系统配置","notification":"公告"} */
export enum FileBusinessTypeEnum {
  Unknown = 'unknown',
  System = 'system',
  Avatar = 'avatar',
  Swiper = 'swiper',
  Comment = 'comment',
  Product = 'product',
  Category = 'category',
  WorksBanner = 'worksBanner',
  WorksCover = 'worksCover',
  EpisodeCover = 'episodeCover',
  EpisodeFile = 'episodeFile',
  Feedback = 'feedback',
  SystemConfig = 'systemConfig',
  Notification = 'notification',
}

export interface OssEntity {
  /**
   * 业务类型
   * {"unknown":"未知","system":"系统文件","avatar":"用户头像","swiper":"轮播图","comment":"评论","product":"产品","category":"分类","worksBanner":"作品横幅","worksCover":"作品封面","episodeCover":"剧集封面","episodeFile":"剧集文件","feedback":"用户反馈","systemConfig":"系统配置","notification":"公告"}
   */
  business: FileBusinessTypeEnum;
  /** 主键ID */
  id: string;
  /** 客户端IP */
  clientIp: string;
  /** 用户id */
  userId: number;
  /** 用户对象 */
  user: UserEntity;
  /** 访问URL */
  url: string;
  /** 文件名 */
  filename: string;
  /** 文件存放位置 */
  location: string;
  /** 文件大小 */
  size: number;
  /** 文件类型 */
  mimetype: string;
  /** 文件后缀 */
  extname: string;
  /** 文件描述 */
  description: string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface GetManyAccessLogEntityResponseDto {
  data: AccessLogEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface AccessLogEntity {
  /** 请求id */
  requestId: string;
  /** 访问用户id */
  userId: number;
  /** 用户对象 */
  user: UserEntity;
  /** 返回状态码 */
  statusCode: number;
  /** 请求方法 */
  method: string;
  /** 请求路径 */
  path: string;
  /** role权限控制的key */
  actionKey: string;
  /** 请求ip */
  clientIp: string;
  /** 请求userAgent */
  userAgent: string;
  /** 请求设备 */
  device: string;
  /** 请求数据 */
  reqData: object;
  /** 处理时间 */
  processTime: number;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

/** {"system":"系统配置","email":"邮箱配置","site":"站点配置","upload":"上传配置","sms":"短信配置","integral":"积分配置"} */
export enum PropertiesGroupEnum {
  System = 'system',
  Email = 'email',
  Site = 'site',
  Upload = 'upload',
  Sms = 'sms',
  Integral = 'integral',
  Web = 'web',
}

export interface PropertiesEntity {
  /**
   * 配置项分组
   * {"system":"系统配置","email":"邮箱配置","site":"站点配置","upload":"上传配置","sms":"短信配置","integral":"积分配置"}
   */
  group: PropertiesGroupEnum;
  /** 配置项名称 */
  name: string;
  /** 配置项值 */
  value: string;
  /** 配置项描述 */
  description: string;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CronCreateInput {
  /**
   * 任务执行状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status: CommonStatusEnum;
  /** 任务名称 */
  name: string;
  /** 任务描述 */
  description: string;
  /** 任务执行表达式 */
  expression: string;
  /** 任务执行方法 */
  method: string;
  /** 任务执行参数 */
  params: string[];
}

export interface GetManyCronEntityResponseDto {
  data: CronEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface CronEntity {
  /**
   * 任务执行状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status: CommonStatusEnum;
  /** 任务名称 */
  name: string;
  /** 任务描述 */
  description: string;
  /** 任务执行表达式 */
  expression: string;
  /** 任务执行方法 */
  method: string;
  /** 任务执行参数 */
  params: string[];
  /** 任务返回结果 */
  result: string;
  /**
   * 最后执行时间
   * @format date-time
   */
  lastTime: string;
  /**
   * 下次执行时间
   * @format date-time
   */
  nextTime: string;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CronUpdateInput {
  /**
   * 任务执行状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status?: CommonStatusEnum;
  /** 任务名称 */
  name?: string;
  /** 任务描述 */
  description?: string;
  /** 任务执行表达式 */
  expression?: string;
  /** 任务执行方法 */
  method?: string;
  /** 任务执行参数 */
  params?: string[];
}

export interface SystemInfoType {
  cpu: {
    cpuNum: number;
    used: string;
    sys: string;
    free: string;
    cpuName: string;
  };
  memory: {
    total: string;
    used: string;
    free: string;
    usage: string;
  };
  hostStat: {
    computerName: string;
    osName: string;
    kernelName: string;
    platform: string;
    releaseName: string;
    computerIp: string;
    osArch: string;
    uptime: string;
    bootTime: string;
  };
}

export interface SystemStatisticsItem {
  total: number;
}

export interface SystemStatistics {
  access_log: SystemStatisticsItem;
  user: SystemStatisticsItem;
}

/**
 * {"open":"待处理","close":"已处理"}
 * @default "open"
 */
export enum FeedbackStatusEnum {
  Open = 'open',
  Close = 'close',
}

export interface GetManyWorksEntityResponseDto {
  data: WorksEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

/** {"listed":"上架","unlisted":"下架"} */
export enum WorksStatus {
  Listed = 'listed',
  Unlisted = 'unlisted',
}

export interface GetManyCountryEntityResponseDto {
  data: CountryEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface CountryEntity {
  /** 地区名称 */
  name: string;
  /** 地区描述 */
  description: string;
  /** 作品 */
  works: WorksEntity[];
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface GetManyGenreEntityResponseDto {
  data: GenreEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface GenreEntity {
  /** 类型名称 */
  name: string;
  /** 类型别名 */
  alias: string;
  /** 类型描述 */
  description: string;
  parentId?: number;
  parent: GenreEntity;
  children: GenreEntity[];
  works: WorksEntity[];
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface GetManyEpisodeEntityResponseDto {
  data: EpisodeEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface EpisodeEntity {
  /** 剧集名称 */
  name: string;
  /** 剧集地址 */
  url: string;
  /** 剧集描述 */
  description: string;
  /** 剧集时长 */
  duration: string;
  /** 封面 */
  cover: string;
  /** 剧集序号 */
  order: number;
  /** 作品ID */
  worksId: number;
  /** 关联作品 */
  works: WorksEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface WorksRateEntity {
  /** 评分 */
  rate: number;
  /** 评分人数 */
  rateUserCount: number;
  /** 作品 */
  works: WorksEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface WorksPvEntity {
  /** 总访问量 */
  pvTotal: number;
  /** 日访问量 */
  pvDay: number;
  /** 周访问量 */
  pvWeek: number;
  /** 月访问量 */
  pvMonth: number;
  /** 作品ID */
  worksId: number;
  works: WorksEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface WorksReactionEntity {
  /** 点赞 */
  like: number;
  /** 点踩 */
  dislike: number;
  /** 作品 */
  works: WorksEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface WorksEntity {
  /**
   * 状态
   * {"listed":"上架","unlisted":"下架"}
   */
  status: WorksStatus;
  /** 标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 封面 */
  cover: string;
  /** 横幅 */
  banner: string;
  /** 别名 */
  alias: string;
  /** 简介 */
  intro: string;
  /** 语言 */
  languages: string[];
  /** 首字母 */
  initial: string;
  /** 总季数 */
  seasonCount: number;
  /** 当前季 */
  seasonNow: number;
  /** 标签 */
  tags: string[];
  /** 地区ID */
  countryId: number;
  /** 地区 */
  country: CountryEntity;
  /** 类型ID */
  genreId: number;
  /** 类型对象 */
  genre: GenreEntity;
  /**
   * 上映日期
   * @format date-time
   */
  releaseDate: string;
  /** 是否完结 */
  isEnd: boolean;
  /** 总集数 */
  episodeCount: number;
  episodesNow?: number;
  /** 关联剧集 */
  episodes: EpisodeEntity[];
  /** 评分 */
  rate: WorksRateEntity;
  /** 访问量 */
  pv: WorksPvEntity;
  /** 点赞点踩 */
  reaction: WorksReactionEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UpdateFeedbackDto {
  /**
   * 状态
   * {"open":"待处理","close":"已处理"}
   */
  status?: FeedbackStatusEnum;
  /** 反馈标题 */
  title?: string;
  /** 反馈内容 */
  content?: string;
  /** 用户id */
  userId?: number;
  worksId?: number;
  episodeId?: number;
  /** 用户 */
  user?: UserEntity;
  /** 关联作品 */
  works?: WorksEntity;
  /** 关联剧集 */
  episode?: WorksEntity;
  /** 回复 */
  reply?: string;
}

export interface GetManyFeedbackEntityResponseDto {
  data: FeedbackEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface FeedbackEntity {
  /**
   * 状态
   * {"open":"待处理","close":"已处理"}
   */
  status: FeedbackStatusEnum;
  /** 反馈标题 */
  title: string;
  /** 反馈内容 */
  content: string;
  /** 用户id */
  userId: number;
  worksId?: number;
  episodeId?: number;
  /** 用户 */
  user: UserEntity;
  /** 关联作品 */
  works?: WorksEntity;
  /** 关联剧集 */
  episode?: WorksEntity;
  /** 回复 */
  reply?: string;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface WebCreateFeedbackDto {
  /** 反馈标题 */
  title: string;
  /** 反馈内容(富文本可包括图片) */
  content: string;
  /** 作品ID(可选) */
  worksId?: number;
  /** 剧集ID(可选) */
  episodeId?: number;
}

export interface PaginatedDto {
  total: number;
}

export interface CreateFeedbackDto {
  /**
   * 状态
   * {"open":"待处理","close":"已处理"}
   */
  status: FeedbackStatusEnum;
  /** 反馈标题 */
  title: string;
  /** 反馈内容 */
  content: string;
  /** 用户id */
  userId: number;
  worksId?: number;
  episodeId?: number;
  /** 用户 */
  user: UserEntity;
  /** 关联作品 */
  works?: WorksEntity;
  /** 关联剧集 */
  episode?: WorksEntity;
  /** 回复 */
  reply?: string;
}

export interface GetManyNotificationEntityResponseDto {
  data: NotificationEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface NotificationEntity {
  /** 公告别名 */
  alias: string;
  /** 公告标题 */
  title: string;
  /** 公告内容 */
  content: string;
  /** 是否置顶 */
  isTop: boolean;
  /** 是否置顶 */
  isImportant: boolean;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CreateNotificationDto {
  /** 公告别名 */
  alias: string;
  /** 公告标题 */
  title: string;
  /** 公告内容 */
  content: string;
  /** 是否置顶 */
  isTop: boolean;
  /** 是否置顶 */
  isImportant: boolean;
}

export interface UpdateNotificationDto {
  /** 公告别名 */
  alias?: string;
  /** 公告标题 */
  title?: string;
  /** 公告内容 */
  content?: string;
  /** 是否置顶 */
  isTop?: boolean;
  /** 是否置顶 */
  isImportant?: boolean;
}

export interface GetManyGenreResponse {
  data: GenreEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface UpdateGenreDto {
  /** 类型名称 */
  name?: string;
  /** 类型别名 */
  alias?: string;
  /** 类型描述 */
  description?: string;
  parentId?: number;
  parent?: GenreEntity;
}

export interface CreateGenreDto {
  parentId: number;
  /** 类型名称 */
  name: string;
  /** 类型别名 */
  alias: string;
  /** 类型描述 */
  description: string;
  parent: GenreEntity;
}

export interface PickTypeClass {
  /** 主键ID */
  id?: number;
  /** 地区名称 */
  name: string;
  /** 地区描述 */
  description: string;
}

export interface CreateCountryDto {
  /** 地区名称 */
  name: string;
  /** 地区描述 */
  description: string;
  /** 作品 */
  works: WorksEntity[];
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UpdateCountryDto {
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
  /** 地区名称 */
  name?: string;
  /** 地区描述 */
  description?: string;
  /** 作品 */
  works?: WorksEntity[];
}

export interface WorksSuggestionItemReturnDto {
  /** 作品id */
  id: number;
  /** 作品标题 */
  title: string;
  /** 根据搜索词得到的相关度 */
  score: string;
}

export interface CreateWorksDto {
  /**
   * 状态
   * {"listed":"上架","unlisted":"下架"}
   */
  status: WorksStatus;
  /** 标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 封面 */
  cover: string;
  /** 横幅 */
  banner: string;
  /** 别名 */
  alias: string;
  /** 简介 */
  intro: string;
  /** 语言 */
  languages: string[];
  /** 首字母 */
  initial: string;
  /** 总季数 */
  seasonCount: number;
  /** 当前季 */
  seasonNow: number;
  /** 标签 */
  tags: string[];
  /** 地区ID */
  countryId: number;
  /** 地区 */
  country: CountryEntity;
  /** 类型ID */
  genreId: number;
  /** 类型对象 */
  genre: GenreEntity;
  /**
   * 上映日期
   * @format date-time
   */
  releaseDate: string;
  /** 是否完结 */
  isEnd: boolean;
  /** 总集数 */
  episodeCount: number;
  episodesNow?: number;
  /** 关联剧集 */
  episodes: EpisodeEntity[];
  /** 评分 */
  rate: WorksRateEntity;
  /** 访问量 */
  pv: WorksPvEntity;
  /** 点赞点踩 */
  reaction: WorksReactionEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UpdateWorksDto {
  /**
   * 状态
   * {"listed":"上架","unlisted":"下架"}
   */
  status?: WorksStatus;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
  /** 标题 */
  title?: string;
  /** 副标题 */
  subtitle?: string;
  /** 封面 */
  cover?: string;
  /** 横幅 */
  banner?: string;
  /** 别名 */
  alias?: string;
  /** 简介 */
  intro?: string;
  /** 语言 */
  languages?: string[];
  /** 首字母 */
  initial?: string;
  /** 总季数 */
  seasonCount?: number;
  /** 当前季 */
  seasonNow?: number;
  /** 标签 */
  tags?: string[];
  /** 地区ID */
  countryId?: number;
  /** 地区 */
  country?: CountryEntity;
  /** 类型ID */
  genreId?: number;
  /** 类型对象 */
  genre?: GenreEntity;
  /**
   * 上映日期
   * @format date-time
   */
  releaseDate?: string;
  /** 是否完结 */
  isEnd?: boolean;
  /** 总集数 */
  episodeCount?: number;
  episodesNow?: number;
  /** 关联剧集 */
  episodes?: EpisodeEntity[];
  /** 评分 */
  rate?: WorksRateEntity;
  /** 访问量 */
  pv?: WorksPvEntity;
  /** 点赞点踩 */
  reaction?: WorksReactionEntity;
}

export interface CreateEpisodeDto {
  /** 作品ID */
  worksId: number;
  /** 剧集名称 */
  name: string;
  /** 剧集地址 */
  url: string;
  /** 剧集描述 */
  description: string;
  /** 剧集时长 */
  duration: string;
  /** 封面 */
  cover: string;
  /** 剧集序号 */
  order: number;
  /** 关联作品 */
  works: WorksEntity;
}

export interface UpdateEpisodeDto {
  /** 剧集名称 */
  name?: string;
  /** 剧集地址 */
  url?: string;
  /** 剧集描述 */
  description?: string;
  /** 剧集时长 */
  duration?: string;
  /** 封面 */
  cover?: string;
  /** 剧集序号 */
  order?: number;
  worksId?: number;
  /** 关联作品 */
  works?: WorksEntity;
}

export interface GetManyPreUpdatedEntityResponseDto {
  data: PreUpdatedEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

/** {"MONDAY":"周一","TUESDAY":"周二","WEDNESDAY":"周三","THURSDAY":"周四","FRIDAY":"周五","SATURDAY":"周六","SUNDAY":"周日"} */
export enum WeekEnum {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

export interface PreUpdatedEntity {
  /**
   * 更新时间
   * {"MONDAY":"周一","TUESDAY":"周二","WEDNESDAY":"周三","THURSDAY":"周四","FRIDAY":"周五","SATURDAY":"周六","SUNDAY":"周日"}
   */
  updateDay: WeekEnum;
  /** 作品ID */
  worksId: number;
  works: WorksEntity;
  /** 描述 */
  description?: string;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CreatePreUpdatedDto {
  /**
   * 更新时间
   * {"MONDAY":"周一","TUESDAY":"周二","WEDNESDAY":"周三","THURSDAY":"周四","FRIDAY":"周五","SATURDAY":"周六","SUNDAY":"周日"}
   */
  updateDay: WeekEnum;
  /** 作品ID */
  worksId: number;
  works: WorksEntity;
  /** 描述 */
  description?: string;
}

export interface UpdatePreUpdatedDto {
  /**
   * 更新时间
   * {"MONDAY":"周一","TUESDAY":"周二","WEDNESDAY":"周三","THURSDAY":"周四","FRIDAY":"周五","SATURDAY":"周六","SUNDAY":"周日"}
   */
  updateDay?: WeekEnum;
  /** 作品ID */
  worksId?: number;
  works?: WorksEntity;
  /** 描述 */
  description?: string;
}

export interface GetManyVipPackageEntityResponseDto {
  data: VipPackageEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface VipPackageEntity {
  /** 会员名称 */
  name: string;
  /** 会员价格 */
  price: number;
  /** 赠送积分 */
  giveIntegral: number;
  /** 会员时间,按天算 */
  validDays: number;
  /** 备注信息 */
  remark: string;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CreateVipMemberInput {
  /**
   * 到期时间
   * @format date-time
   */
  expireTime: string;
  /** 是否过期 */
  isExpire: boolean;
  /** 是否激活 */
  isActive: boolean;
  /**
   * 激活时间
   * @format date-time
   */
  activeTime: string;
  /** 订单号 */
  orderNo: string;
  userId: number;
  vipPackageId: number;
  user: UserEntity;
  /** 会员套餐 */
  vipPackage: VipPackageEntity;
}

export interface GetManyVipMemberEntityResponseDto {
  data: VipMemberEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface VipMemberEntity {
  /**
   * 到期时间
   * @format date-time
   */
  expireTime: string;
  /** 是否过期 */
  isExpire: boolean;
  /** 是否激活 */
  isActive: boolean;
  /**
   * 激活时间
   * @format date-time
   */
  activeTime: string;
  /** 订单号 */
  orderNo: string;
  userId: number;
  vipPackageId: number;
  user: UserEntity;
  /** 会员套餐 */
  vipPackage: VipPackageEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UpdateVipMemberInput {
  /**
   * 到期时间
   * @format date-time
   */
  expireTime?: string;
  /** 是否过期 */
  isExpire?: boolean;
  /** 是否激活 */
  isActive?: boolean;
  /**
   * 激活时间
   * @format date-time
   */
  activeTime?: string;
  /** 订单号 */
  orderNo?: string;
  userId?: number;
  vipPackageId?: number;
  user?: UserEntity;
  /** 会员套餐 */
  vipPackage?: VipPackageEntity;
}

export interface CreateRechargeOrderDto {
  /** 充值积分 */
  integral: number;
  /** 充值渠道 */
  channelId: number;
}

export interface GetManyOrderEntityResponseDto {
  data: OrderEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

/** {"Recharge":"充值","VIP":"会员"} */
export enum OrderTypeEnum {
  Recharge = 'Recharge',
  VIP = 'VIP',
}

/** {"Alipay":"支付宝","Wechat":"微信","QQ":"QQ"} */
export enum ChannelPayTypeEnum {
  Alipay = 'Alipay',
  Wechat = 'Wechat',
  QQ = 'QQ',
}

/** {"Waiting":"待支付","Success":"支付成功","PayFail":"支付失败"} */
export enum OrderStatusEnum {
  Waiting = 'Waiting',
  Success = 'Success',
  PayFail = 'PayFail',
}

export interface GetManyChannelEntityResponseDto {
  data: ChannelEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface ChannelEntity {
  /**
   * 通道支持付款类型
   * {"Alipay":"支付宝","Wechat":"微信","QQ":"QQ"}
   */
  payType: ChannelPayTypeEnum;
  /** 通道名称 */
  name: string;
  /** 通道API */
  apiURL: string;
  /** 商户id */
  merchantId: string;
  /** 商户密钥 */
  merchantKey: string;
  /** 通道调用的脚本文件 */
  script: string;
  /** 赠送积分 */
  giveIntegral: number;
  /** 是否系统自带 */
  isSystem?: boolean;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface OrderEntity {
  /**
   * 订单类型
   * {"Recharge":"充值","VIP":"会员"}
   */
  type: OrderTypeEnum;
  /**
   * 支付类型
   * {"Alipay":"支付宝","Wechat":"微信","QQ":"QQ"}
   */
  payType: ChannelPayTypeEnum;
  /**
   * 订单状态
   * {"Waiting":"待支付","Success":"支付成功","PayFail":"支付失败"}
   */
  status: OrderStatusEnum;
  /** 订单号 */
  orderNo: string;
  /** 商户订单号 */
  outTradeNo: string;
  /** 支付通道编号 */
  channelId: number;
  /** 用户id */
  userId: number;
  /** 用户 */
  user: UserEntity;
  /** 订单金额 */
  orderAmount: number;
  /** 支付通道 */
  channel: ChannelEntity;
  /** 支付金额 */
  payAmount: number;
  /**
   * 支付时间
   * @format date-time
   */
  payTime?: string;
  /** 错误消息 */
  errMsg?: string;
  /** 备注信息 */
  remark?: string;
  /** 额外数据：vip套餐id */
  extraVipPackageId?: number;
  /** 额外数据：订单积分 */
  extraIntegral?: number;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CreateVipOrderDto {
  /** 会员套餐ID */
  vipPackageId: number;
  /** 充值渠道 */
  channelId: number;
}

export interface CreateOrderDto {
  /**
   * 订单类型
   * {"Recharge":"充值","VIP":"会员"}
   */
  type: OrderTypeEnum;
  /**
   * 支付类型
   * {"Alipay":"支付宝","Wechat":"微信","QQ":"QQ"}
   */
  payType: ChannelPayTypeEnum;
  /**
   * 订单状态
   * {"Waiting":"待支付","Success":"支付成功","PayFail":"支付失败"}
   */
  status: OrderStatusEnum;
  /** 订单号 */
  orderNo: string;
  /** 商户订单号 */
  outTradeNo: string;
  /** 支付通道编号 */
  channelId: number;
  /** 用户id */
  userId: number;
  /** 用户 */
  user: UserEntity;
  /** 订单金额 */
  orderAmount: number;
  /** 支付通道 */
  channel: ChannelEntity;
  /** 支付金额 */
  payAmount: number;
  /**
   * 支付时间
   * @format date-time
   */
  payTime?: string;
  /** 错误消息 */
  errMsg?: string;
  /** 备注信息 */
  remark?: string;
  /** 额外数据：vip套餐id */
  extraVipPackageId?: number;
  /** 额外数据：订单积分 */
  extraIntegral?: number;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UpdateOrderDto {
  /**
   * 订单类型
   * {"Recharge":"充值","VIP":"会员"}
   */
  type?: OrderTypeEnum;
  /**
   * 支付类型
   * {"Alipay":"支付宝","Wechat":"微信","QQ":"QQ"}
   */
  payType?: ChannelPayTypeEnum;
  /**
   * 订单状态
   * {"Waiting":"待支付","Success":"支付成功","PayFail":"支付失败"}
   */
  status?: OrderStatusEnum;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
  /** 订单号 */
  orderNo?: string;
  /** 商户订单号 */
  outTradeNo?: string;
  /** 支付通道编号 */
  channelId?: number;
  /** 用户id */
  userId?: number;
  /** 用户 */
  user?: UserEntity;
  /** 订单金额 */
  orderAmount?: number;
  /** 支付通道 */
  channel?: ChannelEntity;
  /** 支付金额 */
  payAmount?: number;
  /**
   * 支付时间
   * @format date-time
   */
  payTime?: string;
  /** 错误消息 */
  errMsg?: string;
  /** 备注信息 */
  remark?: string;
  /** 额外数据：vip套餐id */
  extraVipPackageId?: number;
  /** 额外数据：订单积分 */
  extraIntegral?: number;
}

export interface CreateChannelDto {
  /**
   * 通道支持付款类型
   * {"Alipay":"支付宝","Wechat":"微信","QQ":"QQ"}
   */
  payType: ChannelPayTypeEnum;
  /** 通道名称 */
  name: string;
  /** 通道API */
  apiURL: string;
  /** 商户id */
  merchantId: string;
  /** 商户密钥 */
  merchantKey: string;
  /** 通道调用的脚本文件 */
  script: string;
  /** 赠送积分 */
  giveIntegral: number;
  /** 是否系统自带 */
  isSystem?: boolean;
}

export interface UpdateChannelDto {
  /**
   * 通道支持付款类型
   * {"Alipay":"支付宝","Wechat":"微信","QQ":"QQ"}
   */
  payType?: ChannelPayTypeEnum;
  /** 通道名称 */
  name?: string;
  /** 通道API */
  apiURL?: string;
  /** 商户id */
  merchantId?: string;
  /** 商户密钥 */
  merchantKey?: string;
  /** 通道调用的脚本文件 */
  script?: string;
  /** 赠送积分 */
  giveIntegral?: number;
  /** 是否系统自带 */
  isSystem?: boolean;
}

export interface RegisterUserDto {
  /** 密码 长度6-20 包含数字字母 */
  password: string;
  /** 验证码ID */
  captchaId: string;
  /** 验证码 */
  captchaCode: string;
  /** 用户名 */
  username: string;
}

export interface RegisterUserReturnDto {
  /** token */
  token: string;
}

export interface CaptchaReturnDto {
  /** 验证码ID */
  captchaId: string;
  /** 验证码 */
  captcha: string;
}

export interface LoginUserDto {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

export interface LoginUserReturnDto {
  /** token */
  token: string;
}

export interface UpdatePasswordDto {
  /** 旧密码 */
  oldPassword: string;
  /** 新密码 长度6-20 包含数字字母 */
  newPassword: string;
}

export interface GetManyWebSwiperEntityResponseDto {
  data: WebSwiperEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface WebSwiperEntity {
  /**
   * 状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status: CommonStatusEnum | null;
  /** 轮播图名称 */
  name: string;
  /** 轮播图组别 */
  group: string;
  /** 轮播图地址 */
  imageUrl: string;
  /** 跳转地址 */
  redirectUrl: string;
  /** 排序 */
  order: number;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CreateWebSwiperDto {
  /**
   * 状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status: CommonStatusEnum | null;
  /** 轮播图名称 */
  name: string;
  /** 轮播图组别 */
  group: string;
  /** 轮播图地址 */
  imageUrl: string;
  /** 跳转地址 */
  redirectUrl: string;
  /** 排序 */
  order: number;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UpdateWebSwiperDto {
  /**
   * 状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status?: CommonStatusEnum | null;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
  /** 轮播图名称 */
  name?: string;
  /** 轮播图组别 */
  group?: string;
  /** 轮播图地址 */
  imageUrl?: string;
  /** 跳转地址 */
  redirectUrl?: string;
  /** 排序 */
  order?: number;
}

export interface GetManyWebFilterEntityResponseDto {
  data: WebFilterEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface GetManyWebRecommendEntityResponseDto {
  data: WebRecommendEntity[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface WebRecommendEntity {
  /**
   * 状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status: CommonStatusEnum | null;
  /** 推荐名称 */
  name: string;
  /** 推荐别名 */
  alias: string;
  /** 过滤器组 */
  filterGroup: WebFilterEntity[];
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface WebFilterEntity {
  /** 过滤器名称 */
  name: string;
  /** 过滤器别名 */
  alias: string;
  /** 过滤代码 */
  script: string;
  /** 卡片标题 */
  cardTitle: string;
  /** 卡片副标题 */
  cardSubTitle: string;
  /** 卡片Limit */
  cardLimit: number;
  /** 卡片类型 */
  cardType: string;
  /** 是否显示“换一批” */
  showChange: boolean;
  /** 是否显示查看更多 */
  showMore: boolean;
  recommend: WebRecommendEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CreateWebFilterDto {
  /** 过滤器名称 */
  name: string;
  /** 过滤器别名 */
  alias: string;
  /** 过滤代码 */
  script: string;
  /** 卡片标题 */
  cardTitle: string;
  /** 卡片副标题 */
  cardSubTitle: string;
  /** 卡片Limit */
  cardLimit: number;
  /** 卡片类型 */
  cardType: string;
  /** 是否显示“换一批” */
  showChange: boolean;
  /** 是否显示查看更多 */
  showMore: boolean;
  recommend: WebRecommendEntity;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UpdateWebFilterDto {
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
  /** 过滤器名称 */
  name?: string;
  /** 过滤器别名 */
  alias?: string;
  /** 过滤代码 */
  script?: string;
  /** 卡片标题 */
  cardTitle?: string;
  /** 卡片副标题 */
  cardSubTitle?: string;
  /** 卡片Limit */
  cardLimit?: number;
  /** 卡片类型 */
  cardType?: string;
  /** 是否显示“换一批” */
  showChange?: boolean;
  /** 是否显示查看更多 */
  showMore?: boolean;
  recommend?: WebRecommendEntity;
}

export interface WebRecommendReturnType {
  id: number;
  name: string;
  alias: string;
  card: {
    title: string;
    subTitle: string;
    limit: number;
    type: string;
    showChange: boolean;
    showMore: boolean;
  };
  result: object;
}

export interface CreateWebRecommendDto {
  /**
   * 状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status: CommonStatusEnum | null;
  /** 推荐名称 */
  name: string;
  /** 推荐别名 */
  alias: string;
  /** 过滤器组 */
  filterGroup: WebFilterEntity[];
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UpdateWebRecommendDto {
  /**
   * 状态
   * {"active":"启用","inactive":"禁用","success":"成功","error":"失败","unknown":"未知"}
   */
  status?: CommonStatusEnum | null;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
  /** 推荐名称 */
  name?: string;
  /** 推荐别名 */
  alias?: string;
  /** 过滤器组 */
  filterGroup?: WebFilterEntity[];
}

/**
 * {"sign":"签到","reissue":"补签"}
 * @default "sign"
 */
export enum UserSignTypeEnum {
  Sign = 'sign',
  Reissue = 'reissue',
}

export interface UserSignLogEntity {
  /**
   * 签到类型
   * {"sign":"签到","reissue":"补签"}
   */
  signType: UserSignTypeEnum;
  /** 用户ID */
  userId: number;
  /** 签到奖励内容 */
  signReward: string;
  /** 签到时间 */
  signTime: object;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface UserSignWorksReturnDto {
  /** 签到奖励 */
  signReward: string;
  /** 签到天数 */
  seriesDays: number;
  /** 连续签到天数 */
  continuityDays: number;
}

/**
 * {"add":"增加","subtract":"扣除"}
 * @default "add"
 */
export enum UserWalletLogType {
  Add = 'add',
  Subtract = 'subtract',
}

export interface UserWalletLogEntity {
  /**
   * 日志类型
   * {"add":"增加","subtract":"扣除"}
   */
  type: UserWalletLogType;
  /** 积分 */
  integral: number;
  /** 备注 */
  remark: string;
  /** 主键ID */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string;
}

export interface CreateUserRateDto {
  /** 作品id */
  worksId: number;
  /** 评分 */
  rate: number;
}

export interface UserRateEntity {
  /** 作品id */
  worksId: number;
  /** 评分 */
  rate: number;
}

export interface UserRateWorksReturnDto {
  /** 评分 */
  rate: number;
  /** 评分人数 */
  rateUserCount: number;
}

export interface CreateUserCollectDto {
  /** 作品id */
  worksId: number;
}

export interface UserCollectEntity {
  /** 作品id */
  worksId: number;
}

/** {"like":"点赞","dislike":"点踩"} */
export enum UserReactionEnum {
  Like = 'like',
  Dislike = 'dislike',
}

export interface CreateUserReactionDto {
  /**
   * 点赞或点踩
   * {"like":"点赞","dislike":"点踩"}
   */
  reaction: UserReactionEnum;
  /** 作品id */
  worksId: number;
}

export interface CancelUserReactionDto {
  /**
   * 点赞或点踩
   * {"like":"点赞","dislike":"点踩"}
   */
  reaction: UserReactionEnum;
  /** 作品id */
  worksId: number;
}

export interface UserReactionSelfReturnDto {
  /** 点赞或点踩 */
  reaction: 'like' | 'dislike' | '[object Object]';
}

export interface UserReactionWorksReturnDto {
  /** 点赞数 */
  like: number;
  /** 点踩数 */
  dislike: number;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import { RequestQueryBuilder } from "@dataui/crud-request";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { 'Content-Type': type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Kle Admin Server
 * @version 1.0
 * @contact
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags (后台)用户反馈, (前台)用户反馈
     * @name FeedbackControllerCreateFeedback
     * @summary (需登录)创建用户反馈
     * @request POST:/api/web/feedback/create
     * @secure
     */
    feedbackControllerCreateFeedback: (
      data: WebCreateFeedbackDto,
      params: RequestParams = {}
    ) =>
      this.request<object, any>({
        path: `/api/web/feedback/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)用户反馈, (前台)用户反馈
     * @name FeedbackControllerGetNotificationByAlias
     * @summary (需登录)获取用户反馈详情(自己)
     * @request GET:/api/web/feedback/findById/{id}
     * @secure
     */
    feedbackControllerGetNotificationByAlias: (
      id: number,
      params: RequestParams = {}
    ) =>
      this.request<FeedbackEntity, any>({
        path: `/api/web/feedback/findById/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)用户反馈, (前台)用户反馈
     * @name FeedbackControllerGetFeedbackList
     * @summary (需登录)获取用户反馈列表
     * @request GET:/api/web/feedback/all
     * @secure
     */
    feedbackControllerGetFeedbackList: (
      query?: {
        pageNum?: number;
        pageSize?: number;
        orderByColumn?: string;
        isAsc?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        PaginatedDto & {
          rows?: FeedbackEntity[];
        },
        any
      >({
        path: `/api/web/feedback/all`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)公告通知, (前台)公告通知
     * @name NotificationControllerGetFeedbackList
     * @summary (前台)获取公告通知列表
     * @request GET:/api/web/notification/all
     * @secure
     */
    notificationControllerGetFeedbackList: (
      query?: {
        pageNum?: number;
        pageSize?: number;
        orderByColumn?: string;
        isAsc?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        PaginatedDto & {
          rows?: NotificationEntity[];
        },
        any
      >({
        path: `/api/web/notification/all`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)公告通知, (前台)公告通知
     * @name NotificationControllerGetNotificationByAlias
     * @summary (前台)获取公告通知详情
     * @request GET:/api/web/notification/{alias}
     * @secure
     */
    notificationControllerGetNotificationByAlias: (
      alias: string,
      params: RequestParams = {}
    ) =>
      this.request<NotificationEntity, any>({
        path: `/api/web/notification/${alias}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品类型, (前台)作品类型
     * @name GenreControllerGetTree
     * @summary (前台)获取类型树
     * @request GET:/api/basic/genre/tree
     * @secure
     */
    genreControllerGetTree: (params: RequestParams = {}) =>
      this.request<GenreEntity[], any>({
        path: `/api/basic/genre/tree`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品类型, (前台)作品类型
     * @name GenreControllerGetByAlias
     * @summary (前台)根据别名获取类型（树结构）
     * @request GET:/api/basic/genre/alias/{alias}
     * @secure
     */
    genreControllerGetByAlias: (alias: string, params: RequestParams = {}) =>
      this.request<GenreEntity, any>({
        path: `/api/basic/genre/alias/${alias}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品地区, (前台)前台接口
     * @name CountryControllerGetAll
     * @summary (前台)获取所有地区
     * @request GET:/api/basic/country/all
     * @secure
     */
    countryControllerGetAll: (params: RequestParams = {}) =>
      this.request<PickTypeClass[], any>({
        path: `/api/basic/country/all`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品管理, (前台)作品管理
     * @name WorksControllerSearchWorksList
     * @summary (前台)分页获取作品列表
     * @request GET:/api/opus/works/search
     * @secure
     */
    worksControllerSearchWorksList: (
      query?: {
        /**
         * 排序字段
         * @default "updatedAt"
         */
        orderByColumn?: 'pv' | 'rate' | 'like' | 'dislike' | 'updatedAt';
        /** 关键词 */
        keyword?: string;
        /** 标签 */
        tag?: string;
        /** 作品类型 */
        genreId?: number;
        /** 国家地区 */
        countryId?: number;
        /** 语言 */
        language?: string;
        pageNum?: number;
        pageSize?: number;
        isAsc?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        PaginatedDto & {
          rows?: WorksEntity[];
        },
        any
      >({
        path: `/api/opus/works/search`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品管理, (前台)作品管理
     * @name WorksControllerGetWorksById
     * @summary (前台)获取作品详情
     * @request GET:/api/opus/works/findById/{id}
     * @secure
     */
    worksControllerGetWorksById: (
      id: string,
      query: {
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorksEntity, any>({
        path: `/api/opus/works/findById/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品管理, (前台)作品管理
     * @name WorksControllerGetWorksSuggestions
     * @summary (前台)作品搜索建议词
     * @request GET:/api/opus/works/suggestion
     * @secure
     */
    worksControllerGetWorksSuggestions: (
      query: {
        keyword: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorksSuggestionItemReturnDto[], any>({
        path: `/api/opus/works/suggestion`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品管理, (前台)作品管理
     * @name WorksControllerGetHotWorks
     * @summary (前台)获取热门前十作品(可用于搜索提示)
     * @request GET:/api/opus/works/hot
     * @secure
     */
    worksControllerGetHotWorks: (params: RequestParams = {}) =>
      this.request<WorksEntity[], any>({
        path: `/api/opus/works/hot`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品管理, (前台)作品管理
     * @name WorksControllerGetAllTags
     * @summary (前台)获取所有标签
     * @request GET:/api/opus/works/getAllTags
     * @secure
     */
    worksControllerGetAllTags: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/opus/works/getAllTags`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品管理, (前台)作品管理
     * @name WorksControllerGetAllLanguages
     * @summary (前台)获取所有语言
     * @request GET:/api/opus/works/getAllLanguages
     * @secure
     */
    worksControllerGetAllLanguages: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/opus/works/getAllLanguages`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品剧集, (前台)作品剧集
     * @name EpisodeControllerGetEpisodeList
     * @summary (前台)获取作品剧集列表
     * @request GET:/api/opus/episode/all
     * @secure
     */
    episodeControllerGetEpisodeList: (
      query?: {
        pageNum?: number;
        pageSize?: number;
        orderByColumn?: string;
        isAsc?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        PaginatedDto & {
          rows?: EpisodeEntity[];
        },
        any
      >({
        path: `/api/opus/episode/all`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品剧集, (前台)作品剧集
     * @name EpisodeControllerGetEpisodeById
     * @summary (前台)根据ID获取剧集信息
     * @request GET:/api/opus/episode/findById/{id}
     * @secure
     */
    episodeControllerGetEpisodeById: (
      id: string,
      query: {
        id: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<EpisodeEntity, any>({
        path: `/api/opus/episode/findById/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)作品剧集, (前台)作品剧集
     * @name EpisodeControllerGetEpisodeByWorksId
     * @summary (前台)根据作品id获取剧集信息
     * @request GET:/api/opus/episode/findByWorksId/{worksId}
     * @secure
     */
    episodeControllerGetEpisodeByWorksId: (
      worksId: string,
      query: {
        worksId: number;
        pageNum?: number;
        pageSize?: number;
        orderByColumn?: string;
        isAsc?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        PaginatedDto & {
          rows?: EpisodeEntity[];
        },
        any
      >({
        path: `/api/opus/episode/findByWorksId/${worksId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)预更作品, (前台)预更作品
     * @name PreUpdatedControllerGetPreUpdatedList
     * @summary (前台)获取预更作品列表
     * @request GET:/api/opus/pre-updated/all
     * @secure
     */
    preUpdatedControllerGetPreUpdatedList: (
      query: {
        /**
         * 过滤周几更新
         * {"MONDAY":"周一","TUESDAY":"周二","WEDNESDAY":"周三","THURSDAY":"周四","FRIDAY":"周五","SATURDAY":"周六","SUNDAY":"周日"}
         */
        day:
          | 'MONDAY'
          | 'TUESDAY'
          | 'WEDNESDAY'
          | 'THURSDAY'
          | 'FRIDAY'
          | 'SATURDAY'
          | 'SUNDAY';
        pageNum?: number;
        pageSize?: number;
        orderByColumn?: string;
        isAsc?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        PaginatedDto & {
          rows?: PreUpdatedEntity[];
        },
        any
      >({
        path: `/api/opus/pre-updated/all`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)支付订单, (前台)支付相关
     * @name OrderControllerCheckPaid
     * @summary (前台)(需登录)检查订单是否支付成功
     * @request GET:/api/payment/order/check-order/{orderNo}
     * @secure
     */
    orderControllerCheckPaid: (orderNo: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/payment/order/check-order/${orderNo}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)支付订单, (前台)支付相关
     * @name OrderControllerCreateRechargeOrder
     * @summary (前台)(需登录)创建充值订单
     * @request POST:/api/payment/order/create-order/recharge
     * @secure
     */
    orderControllerCreateRechargeOrder: (
      data: CreateRechargeOrderDto,
      params: RequestParams = {}
    ) =>
      this.request<OrderEntity, any>({
        path: `/api/payment/order/create-order/recharge`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)支付订单, (前台)支付相关
     * @name OrderControllerCreateVipOrder
     * @summary (前台)(需登录)创建开通会员订单
     * @request POST:/api/payment/order/create-order/vip
     * @secure
     */
    orderControllerCreateVipOrder: (
      data: CreateVipOrderDto,
      params: RequestParams = {}
    ) =>
      this.request<OrderEntity, any>({
        path: `/api/payment/order/create-order/vip`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)支付通道, (前台)支付相关
     * @name ChannelControllerNotify
     * @summary (前台)支付异步回调
     * @request POST:/api/payment/channel/notify
     * @secure
     */
    channelControllerNotify: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/payment/channel/notify`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户相关
     * @name WebUserControllerReg
     * @summary (前台)用户注册
     * @request POST:/api/web/user/register
     */
    webUserControllerReg: (data: RegisterUserDto, params: RequestParams = {}) =>
      this.request<RegisterUserReturnDto, any>({
        path: `/api/web/user/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户相关
     * @name WebUserControllerCaptcha
     * @summary (前台)验证码获取
     * @request GET:/api/web/user/captcha
     */
    webUserControllerCaptcha: (params: RequestParams = {}) =>
      this.request<CaptchaReturnDto, any>({
        path: `/api/web/user/captcha`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户相关
     * @name WebUserControllerLogin
     * @summary (前台)用户登录
     * @request POST:/api/web/user/login
     */
    webUserControllerLogin: (data: LoginUserDto, params: RequestParams = {}) =>
      this.request<LoginUserReturnDto, any>({
        path: `/api/web/user/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户相关
     * @name WebUserControllerGetUserInfo
     * @summary (前台)用户基本信息
     * @request GET:/api/web/user/info
     */
    webUserControllerGetUserInfo: (params: RequestParams = {}) =>
      this.request<UserEntity, any>({
        path: `/api/web/user/info`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户相关
     * @name WebUserControllerUpdateUserInfo
     * @summary (前台)用户信息更新
     * @request POST:/api/web/user/update
     */
    webUserControllerUpdateUserInfo: (
      data: RegisterUserDto,
      params: RequestParams = {}
    ) =>
      this.request<UserEntity, any>({
        path: `/api/web/user/update`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户相关
     * @name WebUserControllerUpdatePassword
     * @summary (前台)修改密码
     * @request POST:/api/web/user/updatePassword
     */
    webUserControllerUpdatePassword: (
      data: UpdatePasswordDto,
      params: RequestParams = {}
    ) =>
      this.request<UserEntity, any>({
        path: `/api/web/user/updatePassword`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)轮播图管理, (前台)轮播图管理
     * @name WebSwiperControllerGetByGroup
     * @summary 根据组别获取轮播图
     * @request GET:/api/web/swiper/getByGroup/{group}
     * @secure
     */
    webSwiperControllerGetByGroup: (
      group: string,
      params: RequestParams = {}
    ) =>
      this.request<WebSwiperEntity[], any>({
        path: `/api/web/swiper/getByGroup/${group}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)过滤器管理, (前台)过滤器管理
     * @name WebFilterControllerGetFilterById
     * @summary (前台)获取过滤器结果
     * @request GET:/api/web/filter/{id}
     * @secure
     */
    webFilterControllerGetFilterById: (
      id: number,
      params: RequestParams = {}
    ) =>
      this.request<object, any>({
        path: `/api/web/filter/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (后台)推荐管理, (前台)推荐管理
     * @name WebRecommendControllerGetByAlias
     * @summary 根据别名得到推荐数据
     * @request GET:/api/web/recommend/getByAlias/{alias}
     * @secure
     */
    webRecommendControllerGetByAlias: (
      alias: string,
      params: RequestParams = {}
    ) =>
      this.request<WebRecommendReturnType[], any>({
        path: `/api/web/recommend/getByAlias/${alias}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户签到
     * @name WebUserSignControllerCheckSSign
     * @summary (需登录)查询用户今日是否签到
     * @request GET:/api/web/user/sign/check
     */
    webUserSignControllerCheckSSign: (params: RequestParams = {}) =>
      this.request<UserSignLogEntity, any>({
        path: `/api/web/user/sign/check`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户签到
     * @name WebUserSignControllerSign
     * @summary (需登录)签到
     * @request POST:/api/web/user/sign
     */
    webUserSignControllerSign: (params: RequestParams = {}) =>
      this.request<UserSignWorksReturnDto, any>({
        path: `/api/web/user/sign`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户积分
     * @name WebUserWalletControllerGetIntegral
     * @summary (需登录)获取用户积分
     * @request GET:/api/web/user/wallet/getIntegral
     */
    webUserWalletControllerGetIntegral: (params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/api/web/user/wallet/getIntegral`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户积分
     * @name WebUserWalletControllerGetLogs
     * @summary (需登录)获取用户积分记录
     * @request GET:/api/web/user/wallet/logs
     */
    webUserWalletControllerGetLogs: (
      query?: {
        pageNum?: number;
        pageSize?: number;
        orderByColumn?: string;
        isAsc?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        PaginatedDto & {
          rows?: UserWalletLogEntity[];
        },
        any
      >({
        path: `/api/web/user/wallet/logs`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)作品评分
     * @name WebUserRateControllerCreate
     * @summary (需登录)评分
     * @request POST:/api/web/user/rate
     */
    webUserRateControllerCreate: (
      data: CreateUserRateDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/api/web/user/rate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)作品评分
     * @name WebUserRateControllerFindOne
     * @summary (需登录)查询自己的评分
     * @request GET:/api/web/user/rate/{worksId}
     */
    webUserRateControllerFindOne: (
      worksId: number,
      params: RequestParams = {}
    ) =>
      this.request<UserRateEntity, any>({
        path: `/api/web/user/rate/${worksId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)作品评分
     * @name WebUserRateControllerGetWorksRate
     * @summary 获取作品的评分
     * @request GET:/api/web/user/rate/works/{worksId}
     */
    webUserRateControllerGetWorksRate: (
      worksId: number,
      params: RequestParams = {}
    ) =>
      this.request<UserRateWorksReturnDto, any>({
        path: `/api/web/user/rate/works/${worksId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户收藏
     * @name WebUserCollectControllerCreate
     * @summary (需登录)收藏
     * @request POST:/api/web/user/collect
     */
    webUserCollectControllerCreate: (
      data: CreateUserCollectDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/api/web/user/collect`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户收藏
     * @name WebUserCollectControllerFindByPage
     * @summary (需登录)查询收藏列表
     * @request GET:/api/web/user/collect/findByPage
     */
    webUserCollectControllerFindByPage: (
      query?: {
        pageNum?: number;
        pageSize?: number;
        orderByColumn?: string;
        isAsc?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        PaginatedDto & {
          rows?: UserCollectEntity[];
        },
        any
      >({
        path: `/api/web/user/collect/findByPage`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户收藏
     * @name WebUserCollectControllerFinOne
     * @summary (需登录)查询收藏
     * @request GET:/api/web/user/collect/find
     */
    webUserCollectControllerFinOne: (
      query: {
        /** 作品id */
        worksId: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserCollectEntity, any>({
        path: `/api/web/user/collect/find`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)用户收藏
     * @name WebUserCollectControllerRemove
     * @summary (需登录)取消收藏
     * @request DELETE:/api/web/user/collect/{worksId}
     */
    webUserCollectControllerRemove: (
      worksId: number,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/api/web/user/collect/${worksId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)作品点赞点踩
     * @name WebUserReactionControllerCreate
     * @summary (需登录)点赞或点踩
     * @request POST:/api/web/user/reaction
     */
    webUserReactionControllerCreate: (
      data: CreateUserReactionDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/api/web/user/reaction`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)作品点赞点踩
     * @name WebUserReactionControllerCancel
     * @summary (需登录)取消点赞或点踩
     * @request POST:/api/web/user/reaction/cancel
     */
    webUserReactionControllerCancel: (
      data: CancelUserReactionDto,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/api/web/user/reaction/cancel`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)作品点赞点踩
     * @name WebUserReactionControllerFindOne
     * @summary (需登录)查询自己的反应(点赞点踩)
     * @request GET:/api/web/user/reaction/{worksId}
     */
    webUserReactionControllerFindOne: (
      worksId: number,
      params: RequestParams = {}
    ) =>
      this.request<UserReactionSelfReturnDto, any>({
        path: `/api/web/user/reaction/${worksId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags (前台)作品点赞点踩
     * @name WebUserReactionControllerGetWorksReaction
     * @summary (公开)获取作品的点赞数和点踩数
     * @request GET:/api/web/user/reaction/works/{worksId}
     */
    webUserReactionControllerGetWorksReaction: (
      worksId: number,
      params: RequestParams = {}
    ) =>
      this.request<UserReactionWorksReturnDto, any>({
        path: `/api/web/user/reaction/works/${worksId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
