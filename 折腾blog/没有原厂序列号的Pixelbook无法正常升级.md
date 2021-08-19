描述：闲鱼淘到的Pixelbook2017，属于硬件序列号被抹掉的正式版，拿到后升级只能到84，深度google后发现下面的解决办法，现在已经正常的升级到了当前最新的正式版91

原文来自Reddit：
[BIOS was messed up by somene, how to restore it?](https://www.reddit.com/r/PixelBook/comments/ikznb9/bios_was_messed_up_by_somene_how_to_restore_it/)

[YouTube视频教程](https://youtu.be/bRe9W-EL_NA)，视频里面用到是序列号是老款的Toshiba的Chromebook的，PB可用的序列号在文末

视频中涉及到的命令：

1. Ctrl + ALT + T调出crosh窗口
2. 输入shell并回车
3. 输入 cd;bash <(curl https://johnlewis.ie/flash_cb_fw.sh)
4. 输入 cd; curl -LO https://mrchromebox.tech/firmware-util.sh && sudo bash fireware-util.sh
5. 根据提示信息选择：Set Hardware ID (HWID)
6. 输入下面可用的序列号，回车确认
7. 完成后回车回到主菜单
8. 输入P，关机后重启
9. 开机后检查更新，就可以升级

可用的序列号：
* i7 Pixelbook: EVE D6B-A4E-B4C-F8N-P8A-A24
* i5 Pixelbook: EVE D6B-A6B-C4C-F8N-P8A-A36