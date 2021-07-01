ESXi：安装在物理服务器上，其实是个linux内核的操作系统，只有安装了ESXi以后你才能在上面创建虚拟机。可以理解成在你的台式机上装的vmware workstation，只不过ESXi不用运行在操作系统上（因为本身就是操作系统）而为虚拟机直接调用硬件资源。

GK55预装的是WIN10系统，所以先刷机ESXI；这个小主机支持7x24小时开机运行，功耗也并不大，所以做个人服务器很合适。

##### 刷机
刷机过程安装过程参考了这一篇合集[Vmware ESXi U盘安装全流程](https://www.jianshu.com/p/474aa772e672)

##### 封装网卡驱动
安装过程中，碰到网卡驱动不兼容问题，需要对EXSI的iso进行封装，参考[VLOG | ESXI6.7-7.0最新版本如何封装网卡驱动补丁](https://www.vediotalk.com/archives/12070)，资源也是直接用的文章里面提供的。

##### 安装centos
这个就很简单了，直接google，教程很多

##### centos系统备份ova模板
参考[ESXI中阶教程 如何备份虚拟机ova模版，一次配置一劳永逸](https://www.vediotalk.com/archives/4297)