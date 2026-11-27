window.__ModuleLoader__.load({
  id: 'dsh-gensokyo-status',
  factory: require => {
    const module = { exports: {} };
    const exports = module.exports;
    const React = require('react');
    const h = React.createElement;

    // BEGIN GENERATED PORTRAITS
    const CHARACTERS = [
      {"id":"reimu","name":"博丽灵梦","group":"主角","motif":"巫女的大蝴蝶结","path":"M9 9Q6 5 2 5L3 15Q7 15 10 12M14 9Q18 5 22 5L21 15Q17 15 14 12M10 9H14V13H10ZM10 13L6 20L10 18M14 13L18 20L14 18","color":"#E65964","motion":"swing"},
      {"id":"marisa","name":"雾雨魔理沙","group":"主角","motif":"尖顶魔女帽","path":"M2 17Q5 15 8 14L12 4L18 7L15 8L17 14Q20 15 22 17Q13 21 2 17ZM8 13Q13 15 16 12","color":"#A78CD6","motion":"swing"},
      {"id":"rumia","name":"露米娅","group":"东方红魔乡","motif":"黑暗球与发带","path":"M15 5A8 8 0 1 0 20 12M14 6L13 2L18 4L21 2L20 8L16 7L14 10","color":"#E59C63","motion":"float"},
      {"id":"daiyousei","name":"大妖精","group":"东方红魔乡","motif":"双叶般的妖精翅膀","path":"M11 16Q2 14 3 4Q11 5 12 13Q14 6 22 5Q21 14 14 16M11 16Q5 14 5 20Q10 21 12 17Q15 22 19 18Q18 15 15 15","color":"#70BD86","motion":"float"},
      {"id":"cirno","name":"琪露诺","group":"东方红魔乡","motif":"六角冰晶","path":"M12 2V22M3.5 7L20.5 17M3.5 17L20.5 7M9 4L12 7L15 4M9 20L12 17L15 20M4 10L7 9L6 6M18 18L17 15L20 14M4 14L7 15L6 18M18 6L17 9L20 10","color":"#5CB6DF","motion":"spin"},
      {"id":"meiling","name":"红美铃","group":"东方红魔乡","motif":"星徽八角帽","path":"M3 12Q1 7 8 6Q11 2 16 5Q23 6 21 12L19 15H6ZM6 15L2 18Q11 20 18 16M12 6L13 8L15.5 8.5L13.7 10L14 12.5L12 11.3L10 12.5L10.3 10L8.5 8.5L11 8Z","color":"#48B299","motion":"swing"},
      {"id":"koakuma","name":"小恶魔","group":"东方红魔乡","motif":"成对的小蝠翼发饰","path":"M11 15Q10 6 2 5Q5 8 3 12Q7 11 8 15Q10 13 11 15ZM13 15Q14 6 22 5Q19 8 21 12Q17 11 16 15Q14 13 13 15ZM9 19Q12 16 15 19","color":"#D2768A","motion":"float"},
      {"id":"patchouli","name":"帕秋莉·诺蕾姬","group":"东方红魔乡","motif":"月牙与魔导书","path":"M3 9Q7 7 12 10Q17 7 21 9V20Q16 18 12 21Q8 18 3 20ZM12 10V20M13 2A3.5 3.5 0 1 0 17 6Q13 7 13 2Z","color":"#B48AD6","motion":"float"},
      {"id":"sakuya","name":"十六夜咲夜","group":"东方红魔乡","motif":"怀表与飞刀","path":"M12 6A7 7 0 1 0 18 14M8 4H13M10.5 4V6M10 10V14L13 15M13 12L21 3Q22 10 16 14M13 11L17 15M15 13L12 17","color":"#89A6C8","motion":"swing"},
      {"id":"remilia","name":"蕾米莉亚·斯卡蕾特","group":"东方红魔乡","motif":"恶魔之翼","path":"M3 19Q4 6 18 3Q16 7 22 10Q16 9 16 15Q11 12 9 18Q6 15 3 19ZM4 18Q8 10 16 6","color":"#D07B9C","motion":"float"},
      {"id":"flandre","name":"芙兰朵露·斯卡蕾特","group":"东方红魔乡","motif":"垂下晶石的翼骨","path":"M2 16Q7 7 14 8L21 5M6 12V14L4 17L6 20L8 17L6 14M13 8V11L11 14L13 17L15 14L13 11M20 6V8L18 11L20 14L22 11L20 8","color":"#E07F66","motion":"swing"},
      {"id":"satsuki-rin","name":"冴月麟","group":"东方红魔乡","motif":"未使用符名「花符」","path":"M12 10Q6 1 4 7Q3 10 8 12Q1 14 5 18Q8 20 11 15Q11 23 16 20Q19 18 15 14Q23 16 21 10Q19 7 15 10Q18 3 13 3Q10 4 12 10ZM10 12A2 2 0 1 0 14 12A2 2 0 1 0 10 12","color":"#CF80A5","motion":"pulse"},
      {"id":"letty","name":"蕾蒂·霍瓦特洛克","group":"东方妖妖梦","motif":"冬云落雪","path":"M5 14Q1 14 3 10Q4 8 7 9Q8 3 14 5Q17 5 18 9Q23 8 22 12Q22 14 19 14M6 17L5 20M12 16V21M18 17L17 20","color":"#8AABCE","motion":"float"},
      {"id":"chen","name":"橙","group":"东方妖妖梦","motif":"猫又的双尾","path":"M3 5L7 8Q11 6 14 9L17 5L18 13Q16 18 10 17Q4 17 4 12ZM10 17Q7 20 12 21Q16 22 18 18M14 18Q20 18 21 13M8 11H8.3M13 11H13.3","color":"#D68956","motion":"swing"},
      {"id":"alice","name":"爱丽丝·玛格特洛依德","group":"东方妖妖梦","motif":"人偶操纵线","path":"M3 5L14 8M7 3L11 9M5 6L6 15M13 8L17 13M9 13A2.5 2.5 0 1 0 14 13A2.5 2.5 0 1 0 9 13M10 16L7 21H17L14 16M6 15L9 17M15 16L18 13","color":"#83A7D1","motion":"swing"},
      {"id":"lily-white","name":"莉莉霍瓦特","group":"东方妖妖梦","motif":"春之铃兰与花枝","path":"M4 21Q11 17 12 6Q14 3 18 6M12 11Q6 8 4 10Q6 14 11 14M15 7Q20 4 21 9L22 12Q19 15 15 12Q17 10 15 7ZM10 17Q15 15 16 17Q14 20 8 19","color":"#C18CAB","motion":"float"},
      {"id":"lunasa","name":"露娜萨·普莉兹姆利巴","group":"东方妖妖梦","motif":"小提琴和弓","path":"M14 6L18 2L20 4L16 8M14 6L9 11Q5 8 4 12Q3 14 6 15Q2 17 4 20Q7 23 10 20Q12 18 10 16Q14 17 15 14Q16 12 13 11L16 8ZM9 15L15 8M14 20L22 9","color":"#A18DC0","motion":"swing"},
      {"id":"merlin","name":"梅露兰·普莉兹姆利巴","group":"东方妖妖梦","motif":"小号","path":"M2 8H5V12H15L21 7V18L15 14H11M6 12V16Q6 20 10 20H12Q16 20 16 16V14M9 8V12M12 8V12","color":"#D780A7","motion":"swing"},
      {"id":"lyrica","name":"莉莉卡·普莉兹姆利巴","group":"东方妖妖梦","motif":"键盘琴","path":"M2 8L22 5V16L2 20ZM7 9V18M12 8V17M17 7V16M5 9V13M10 8V12M15 7V11","color":"#CA8663","motion":"swing"},
      {"id":"youmu","name":"魂魄妖梦","group":"东方妖妖梦","motif":"楼观剑与半灵","path":"M3 21L7 17M5 14L10 19M7 16L17 5Q17 12 9 17M17 14Q21 12 22 16Q22 21 15 20Q17 19 17 17Q15 16 17 14Z","color":"#59B497","motion":"swing"},
      {"id":"yuyuko","name":"西行寺幽幽子","group":"东方妖妖梦","motif":"白玉楼折扇","path":"M2 10Q12 1 22 10L12 21ZM5 8L12 19L19 8M9 6L12 18L15 6M9 20Q12 22 15 20","color":"#D887B4","motion":"swing"},
      {"id":"ran","name":"八云蓝","group":"东方妖妖梦","motif":"九尾狐扇尾","path":"M12 19Q4 21 2 14L8 15Q3 11 4 7L10 12Q7 7 9 3L12 10L15 3Q17 7 14 12L20 7Q21 11 16 15L22 14Q20 21 12 19ZM8 20Q12 17 16 20","color":"#D4A854","motion":"swing"},
      {"id":"yukari","name":"八云紫","group":"东方妖妖梦","motif":"带有眼睛的境界裂隙","path":"M3 12Q9 5 16 9Q19 10 21 9Q16 18 9 15Q5 13 3 14ZM10 12A2 2 0 1 0 14 12A2 2 0 1 0 10 12M2 8L4 11L2 16M20 7L21 10L22 14","color":"#AA80C8","motion":"pulse"},
      {"id":"youki","name":"魂魄妖忌","group":"东方妖妖梦","motif":"庭师交叠的双刀","path":"M3 20L7 16M5 14L9 18M7 15L18 3Q18 10 9 16M15 12L21 17M13 14L19 20M17 14L14 17M4 4Q8 6 10 9L8 11Q5 8 4 4Z","color":"#89AD9E","motion":"swing"},
      {"id":"layla","name":"蕾拉·普莉兹姆利巴","group":"东方妖妖梦","motif":"三姐妹的合奏与谱线","path":"M3 9Q9 6 16 8M3 13Q8 10 12 11M3 17Q7 14 11 15M16 16V4Q20 5 21 9M16 16Q9 14 10 19Q12 22 16 17","color":"#B18AC4","motion":"float"},
      {"id":"suika","name":"伊吹萃香","group":"东方萃梦想","motif":"酒葫芦","path":"M11 2H15L14 5Q19 9 15 12Q22 16 18 20Q13 24 7 20Q2 16 9 12Q5 8 11 5ZM8 12Q12 14 16 12M15 4L19 6L21 4","color":"#CA975A","motion":"swing"},
      {"id":"wriggle","name":"莉格露·奈特巴格","group":"东方永夜抄","motif":"发光的萤火虫","path":"M9 8Q12 5 15 8L17 14Q18 21 12 21Q6 21 7 14ZM9 8L6 4M15 8L18 4M8 15Q12 18 16 15M12 8V14M3 11H3.5M20 12H21","color":"#83BC65","motion":"pulse"},
      {"id":"mystia","name":"米斯蒂娅·萝蕾拉","group":"东方永夜抄","motif":"夜雀与歌声","path":"M2 16Q6 16 8 11Q10 7 14 10L17 11L14 13Q13 19 6 19L3 21L4 17M7 15Q10 16 12 13M18 7V3L22 2V6M17 7H18M21 6H22","color":"#C685AB","motion":"float"},
      {"id":"keine","name":"上白泽慧音","group":"东方永夜抄","motif":"记载历史的卷轴","path":"M6 3H18Q22 3 20 7H9Q10 3 6 3Q3 3 4 7L6 17M8 7L10 17M6 17H19Q22 17 20 21H8Q5 21 6 17ZM10 11H16M11 14H15","color":"#8BA3CF","motion":"float"},
      {"id":"tewi","name":"因幡天为","group":"东方永夜抄","motif":"垂耳兔与胡萝卜","path":"M9 9Q3 5 4 3Q7 1 12 8M13 8Q12 2 16 2Q18 4 16 9M9 10Q14 7 18 12Q20 17 8 21Q6 15 9 10ZM9 13L12 15M14 11L16 13","color":"#DD8BA2","motion":"swing"},
      {"id":"reisen","name":"铃仙·优昙华院·因幡","group":"东方永夜抄","motif":"兔耳与波长","path":"M7 12Q2 4 5 2Q8 1 11 10M13 10Q14 1 18 2Q21 4 16 12M2 17H6L9 13L12 21L15 14L17 17H22","color":"#AD86C9","motion":"pulse"},
      {"id":"eirin","name":"八意永琳","group":"东方永夜抄","motif":"弓与月之箭","path":"M4 4Q17 3 20 17L4 4ZM4 4L7 11L20 17M9 15L21 3M17 3H21V7M6 16L7 18L10 19","color":"#7A9FCF","motion":"swing"},
      {"id":"kaguya","name":"蓬莱山辉夜","group":"东方永夜抄","motif":"蓬莱玉枝","path":"M6 21Q12 16 15 6M9 17L5 12M12 13L17 11M14 8L10 6M3 10A2 2 0 1 0 7 10A2 2 0 1 0 3 10M15 10A2 2 0 1 0 19 10A2 2 0 1 0 15 10M13 4A2 2 0 1 0 17 4A2 2 0 1 0 13 4M8 5A1.5 1.5 0 1 0 11 5A1.5 1.5 0 1 0 8 5","color":"#D67DA1","motion":"swing"},
      {"id":"mokou","name":"藤原妹红","group":"东方永夜抄","motif":"不死鸟火羽","path":"M3 20Q7 19 9 14Q7 15 5 14Q9 11 10 7Q10 10 12 11Q16 8 17 2Q23 11 16 17Q12 21 8 19M6 21L17 10","color":"#E17860","motion":"float"},
      {"id":"medicine","name":"梅蒂欣·梅兰可莉","group":"东方花映塚","motif":"有毒的铃兰花","path":"M5 21Q5 9 12 4Q16 2 19 5M8 11Q12 8 15 11M9 7Q10 3 7 2M15 11Q18 10 18 14L19 16Q16 18 13 16L14 13ZM18 5Q21 4 21 8L22 10Q19 12 17 10ZM5 19Q4 14 2 13","color":"#B98AC5","motion":"swing"},
      {"id":"yuuka","name":"风见幽香","group":"东方花映塚","motif":"太阳花","path":"M8 11A4 4 0 1 0 16 11A4 4 0 1 0 8 11M9 6L9 3L12 5L15 2L16 6L20 5L19 9L22 11L18 13L19 17L15 16L12 19L10 16L6 17L6 13L2 11L6 9L5 5ZM12 18V22","color":"#C8A24D","motion":"swing"},
      {"id":"komachi","name":"小野塚小町","group":"东方花映塚","motif":"摆渡人的镰刀","path":"M5 21L16 6M8 5Q15 2 21 8Q13 5 8 12Q9 8 8 5ZM4 21L7 21","color":"#CA7878","motion":"swing"},
      {"id":"eiki","name":"四季映姬·夜摩仙那度","group":"东方花映塚","motif":"悔悟棒","path":"M5 18L8 15L7 12L16 3L21 8L12 17L10 16L7 20ZM14 7L17 10M11 10L14 13M6 20L4 22","color":"#61AC9B","motion":"swing"},
      {"id":"shizuha","name":"秋静叶","group":"东方风神录","motif":"枫叶","path":"M12 21V15M12 18L7 18L8 15L2 11L6 10L5 6L10 10L12 2L14 10L19 6L18 10L22 11L16 15L17 18Z","color":"#D58362","motion":"swing"},
      {"id":"minoriko","name":"秋穰子","group":"东方风神录","motif":"帽上的葡萄","path":"M11 7Q12 2 17 3Q17 7 12 8M11 7Q7 3 4 5Q5 8 8 8M6 10A3 3 0 1 0 12 10A3 3 0 1 0 6 10M12 11A3 3 0 1 0 18 11A3 3 0 1 0 12 11M8 15Q6 20 11 20Q16 20 15 15","color":"#C58F59","motion":"swing"},
      {"id":"hina","name":"键山雏","group":"东方风神录","motif":"厄运的漩涡","path":"M19 6Q11 1 6 7Q1 14 8 19Q15 24 20 16Q23 10 17 8Q12 5 9 10Q6 15 11 16Q16 18 17 13Q17 10 13 11Q11 12 12 13","color":"#69B293","motion":"spin"},
      {"id":"nitori","name":"河城荷取","group":"东方风神录","motif":"河童的机械背包","path":"M6 8Q8 3 15 4Q19 4 20 9L21 18Q21 21 18 21H7Q4 21 4 18V10Q4 8 6 8ZM7 8H16Q18 8 18 11L17 13H7ZM9 16H15M3 11L2 16","color":"#57ACB4","motion":"swing"},
      {"id":"momiji","name":"犬走椛","group":"东方风神录","motif":"狼天狗的圆盾与刀","path":"M4 9Q9 6 14 9V14Q13 18 9 20Q4 17 4 13ZM7 12L9 15L12 11M15 12L21 3Q21 9 17 14M14 13L18 17M16 15L13 19","color":"#B78D87","motion":"swing"},
      {"id":"sanae","name":"东风谷早苗","group":"东方风神录","motif":"发间的蛇与蛙","path":"M3 10Q1 5 6 5Q10 5 9 8Q9 11 6 10Q3 10 4 14Q5 18 10 17M12 13Q12 9 15 9Q17 6 19 9Q22 10 21 14Q18 17 14 15M15 12H15.4M18 12H18.4M12 18L15 20L20 17","color":"#70B989","motion":"swing"},
      {"id":"kanako","name":"八坂神奈子","group":"东方风神录","motif":"背后的注连绳","path":"M5 16Q1 11 5 6Q8 2 14 3Q21 4 21 11Q21 15 18 17M7 3L9 6M13 3L15 6M18 5L20 8M3 10L6 12M4 15L7 15M6 15V18L9 17L8 21M18 14V17L16 16L15 20","color":"#B986A0","motion":"swing"},
      {"id":"suwako","name":"洩矢诹访子","group":"东方风神录","motif":"蛙眼帽","path":"M4 15L7 9Q12 6 17 9L20 15M2 16Q12 20 22 16M6 7A2.5 2.5 0 1 0 11 7A2.5 2.5 0 1 0 6 7M14 7A2.5 2.5 0 1 0 19 7A2.5 2.5 0 1 0 14 7","color":"#C7A451","motion":"swing"},
      {"id":"iku","name":"永江衣玖","group":"东方绯想天","motif":"飘带与雷光","path":"M2 9Q7 3 13 8Q19 13 22 6Q20 17 12 12Q7 9 2 13ZM13 14L9 18H13L11 22L18 16H14","color":"#A582C2","motion":"swing"},
      {"id":"tenshi","name":"比那名居天子","group":"东方绯想天","motif":"帽上的桃子","path":"M4 13Q1 8 5 6Q9 4 12 8Q16 4 20 7Q24 13 13 20Q8 20 4 13ZM12 9Q13 5 17 2Q11 2 10 5M13 10Q16 9 17 12","color":"#86A4D2","motion":"swing"},
      {"id":"namazu","name":"大鲶鱼","group":"东方绯想天","motif":"地震鲶的触须","path":"M4 12Q8 5 15 9L21 6L19 13L22 16L16 15Q9 21 4 15Q2 14 4 12ZM6 12H6.4M5 14Q2 13 2 10M6 15Q3 17 2 16","color":"#A19782","motion":"float"},
      {"id":"kisume","name":"琪斯美","group":"东方地灵殿","motif":"吊桶","path":"M4 10Q12 7 20 10L18 20Q12 22 6 20ZM5 10Q6 2 12 2Q18 2 19 10M5 12Q12 15 19 12M9 15L10 19M14 15V19","color":"#7FAAAA","motion":"swing"},
      {"id":"yamame","name":"黑谷山女","group":"东方地灵殿","motif":"土蜘蛛的网","path":"M12 2V21M2 6L21 18M2 18L21 6M5 8L12 5L19 8V16L12 19L5 16ZM8 10L12 8L16 10V14L12 16L8 14Z","color":"#C99D5E","motion":"swing"},
      {"id":"parsee","name":"水桥帕露西","group":"东方地灵殿","motif":"地底的桥","path":"M2 12Q12 8 22 12M3 15H21M5 15V21M19 15V21M7 20Q12 11 17 20M6 8V13M12 6V11M18 8V13","color":"#8BAE7B","motion":"float"},
      {"id":"yuugi","name":"星熊勇仪","group":"东方地灵殿","motif":"星熊杯与鬼角","path":"M3 13H21Q19 19 13 19V21H10V19Q5 18 3 13ZM6 10Q11 8 15 3L14 10M16 4L17 6L20 6L18 8","color":"#CE9670","motion":"swing"},
      {"id":"satori","name":"古明地觉","group":"东方地灵殿","motif":"睁开的第三只眼","path":"M3 12Q11 1 21 12Q12 23 3 12ZM9 12A3 3 0 1 0 15 12A3 3 0 1 0 9 12M5 9Q2 4 5 3M19 15Q22 18 20 21","color":"#CC88A3","motion":"pulse"},
      {"id":"orin","name":"火焰猫燐","group":"东方地灵殿","motif":"运尸独轮车","path":"M3 5L5 7H20L17 14H8L5 7M8 14L6 17M9 15L15 17M13 19A3 3 0 1 0 19 19A3 3 0 1 0 13 19M10 7Q8 3 12 2Q11 5 14 6","color":"#BC806D","motion":"swing"},
      {"id":"utsuho","name":"灵乌路空","group":"东方地灵殿","motif":"胸前的八咫乌之眼与核焰","path":"M3 13Q12 4 21 13Q12 22 3 13ZM10 13A2 2 0 1 0 14 13A2 2 0 1 0 10 13M5 8L2 5L8 6M10 6L12 2L14 6M16 6L22 5L19 8M9 19L12 22L15 19","color":"#C58D59","motion":"pulse"},
      {"id":"koishi","name":"古明地恋","group":"东方地灵殿","motif":"闭合的第三只眼","path":"M3 12Q7 5 12 7Q18 5 21 12Q13 20 3 12ZM6 11Q12 16 18 11M6 15Q1 18 6 21Q10 23 12 19M17 8Q21 3 18 2","color":"#78BA9C","motion":"pulse"},
      {"id":"nazrin","name":"娜兹玲","group":"东方星莲船","motif":"探宝棒","path":"M3 5L9 11L6 19M21 5L15 11L18 19M12 9V12L9 16L12 20L15 16L12 12","color":"#A6A0BB","motion":"swing"},
      {"id":"kogasa","name":"多多良小伞","group":"东方星莲船","motif":"唐伞的眼与舌头","path":"M2 12L11 4L13 2L14 5L22 12Q18 10 16 13Q12 10 9 13Q6 10 2 12ZM10 8Q12 6 14 8Q12 11 10 8ZM12 13V19Q12 23 8 20M16 13Q19 13 18 18Q16 20 15 17","color":"#9E8AC9","motion":"swing"},
      {"id":"ichirin","name":"云居一轮","group":"东方星莲船","motif":"操纵云山的金轮","path":"M3 11A8 8 0 1 0 19 11A8 8 0 1 0 3 11ZM7 11A4 4 0 1 0 15 11A4 4 0 1 0 7 11M17 16Q21 14 22 17Q22 20 18 21","color":"#839CC6","motion":"spin"},
      {"id":"unzan","name":"云山","group":"东方星莲船","motif":"云团化成的拳头","path":"M3 15Q1 10 6 10Q4 5 9 6Q11 2 14 5Q17 2 19 6Q23 5 22 10L20 15Q20 19 14 20H9Q4 20 3 15ZM10 7V10M14 6V10M18 7V10M8 11Q12 9 14 13L11 15","color":"#BE90B0","motion":"float"},
      {"id":"murasa","name":"村纱水蜜","group":"东方星莲船","motif":"沉船的锚","path":"M10 5A2 2 0 1 0 14 5A2 2 0 1 0 10 5M12 7V21M8 10H16M3 14Q4 20 12 21Q20 19 21 14M2 16L3 12L7 15M17 15L21 12L22 16","color":"#6DA8B1","motion":"swing"},
      {"id":"shou","name":"寅丸星","group":"东方星莲船","motif":"毗沙门天的宝塔","path":"M8 21H16M5 18H19L16 15V12L13 9L12 5L11 9L8 12V15ZM7 12H17M7 15H17M10 18V20M14 18V20M12 2V4","color":"#CBA054","motion":"pulse"},
      {"id":"byakuren","name":"圣白莲","group":"东方星莲船","motif":"展开的魔人经卷","path":"M6 6Q2 4 2 8Q2 10 5 10L9 17Q10 21 14 20L21 17Q23 14 20 14L17 6Q17 4 14 5ZM6 7L10 17L19 14M9 9L14 7M10 12L15 10","color":"#AB87C9","motion":"float"},
      {"id":"nue","name":"封兽鵺","group":"东方星莲船","motif":"不明飞行物","path":"M7 11Q7 6 12 6Q17 6 17 11M2 13Q12 6 22 13Q12 19 2 13ZM6 18L5 20M12 18V21M18 18L19 20","color":"#CB8589","motion":"float"},
      {"id":"hatate","name":"姬海棠果","group":"东方文花帖DS","motif":"念写的折叠手机","path":"M5 3L15 2L17 11L7 13ZM7 13L17 11L21 18L10 21ZM9 6L12 5M12 16L16 15M13 18L17 17","color":"#B68BC1","motion":"swing"},
      {"id":"kyouko","name":"幽谷响子","group":"东方神灵庙","motif":"山谷的回声","path":"M2 18L7 9L12 18M9 18L15 7L22 18M12 4Q15 1 19 4M8 5Q5 4 3 7M3 10L5 8","color":"#7FB89A","motion":"pulse"},
      {"id":"yoshika","name":"宫古芳香","group":"东方神灵庙","motif":"额头的僵尸符","path":"M7 2L18 4L15 21L4 19ZM9 7L15 8M11 6L10 12L14 11L11 16L8 14","color":"#809EBB","motion":"swing"},
      {"id":"seiga","name":"霍青娥","group":"东方神灵庙","motif":"穿墙的发簪","path":"M3 21L15 8M13 8L16 11M14 7Q12 2 16 3L17 6Q18 1 21 4Q23 7 18 8Q22 10 19 12Q16 13 15 9","color":"#72B6C1","motion":"swing"},
      {"id":"tojiko","name":"苏我屠自古","group":"东方神灵庙","motif":"雷霆与幽灵尾","path":"M13 2L6 12H11L8 17L19 7H13ZM5 16Q1 20 6 21Q13 22 15 16M16 18Q19 20 21 17","color":"#88AD8A","motion":"pulse"},
      {"id":"futo","name":"物部布都","group":"东方神灵庙","motif":"火焰中的皿","path":"M2 13Q12 9 22 13Q21 17 12 18Q3 17 2 13ZM3 13Q12 16 21 13M9 9Q7 5 11 2Q10 6 13 6L15 3Q18 8 14 10M8 20H16","color":"#93ABC6","motion":"swing"},
      {"id":"miko","name":"丰聪耳神子","group":"东方神灵庙","motif":"圣德道士的耳罩","path":"M4 14V12Q4 4 12 4Q20 4 20 12V14M4 12H7V20H4Q2 20 2 17V15Q2 13 4 12ZM17 12H20Q22 13 22 15V18Q22 20 20 20H17ZM9 6L8 2M15 6L17 2","color":"#AB8FC3","motion":"pulse"},
      {"id":"mamizou","name":"二岩猯藏","group":"东方神灵庙","motif":"狸叶与眼镜","path":"M3 15A4 4 0 1 0 11 15A4 4 0 1 0 3 15M13 15A4 4 0 1 0 21 15A4 4 0 1 0 13 15M11 14H13M10 8Q12 1 19 3Q18 9 10 8Z","color":"#B18B64","motion":"swing"},
      {"id":"kokoro","name":"秦心","group":"东方心绮楼","motif":"能乐面具","path":"M5 4Q12 7 19 4V11Q18 18 12 21Q6 18 5 11ZM8 10L10 11M14 11L16 10M9 16Q12 13 15 16","color":"#CC8EB2","motion":"swing"},
      {"id":"wakasagihime","name":"若鹭姬","group":"东方辉针城","motif":"人鱼尾鳍","path":"M5 3Q17 4 14 13L12 17Q17 15 21 18Q16 23 11 20Q7 22 3 18Q7 14 10 17Q15 8 5 3ZM8 6Q7 8 6 10","color":"#66B3B3","motion":"swing"},
      {"id":"sekibanki","name":"赤蛮奇","group":"东方辉针城","motif":"飞首与高衣领","path":"M7 8Q6 3 12 3Q18 3 17 9Q16 13 12 13Q8 13 7 8ZM4 14L9 17L12 15L15 17L20 14L18 21H6ZM3 8L5 7M19 10L21 9","color":"#C66C70","motion":"float"},
      {"id":"kagerou","name":"今泉影狼","group":"东方辉针城","motif":"满月下的狼","path":"M4 11A8 8 0 0 1 19 6M8 20L7 15L3 13L8 10L10 5L13 9L17 6L17 12L21 15L16 15L13 20ZM9 12H9.4","color":"#BB8B86","motion":"float"},
      {"id":"benben","name":"九十九弁弁","group":"东方辉针城","motif":"琵琶","path":"M14 8L18 2L21 4L16 10Q14 12 14 15Q13 21 8 21Q2 21 3 15Q4 12 8 11Q12 11 14 8ZM7 17L17 6M17 3L20 6","color":"#B387B2","motion":"swing"},
      {"id":"yatsuhashi","name":"九十九八桥","group":"东方辉针城","motif":"琴弦与琴柱","path":"M2 15L18 4L22 10L6 21ZM5 15L18 7M7 17L19 9M11 13L12 16M14 10L15 13","color":"#BE8E69","motion":"swing"},
      {"id":"seija","name":"鬼人正邪","group":"东方辉针城","motif":"上下颠倒的双箭","path":"M3 9L8 3L13 9H10V15H6V9ZM11 15H14V9H18V15H21L16 21ZM4 18L6 21M18 3L20 6","color":"#BA7E87","motion":"spin"},
      {"id":"shinmyoumaru","name":"少名针妙丸","group":"东方辉针城","motif":"一寸法师的碗与缝针","path":"M2 13H21Q19 20 12 20Q5 20 2 13ZM8 21H15M10 13L20 3Q22 2 21 5L14 13M19 5L20 4","color":"#CC8DA0","motion":"swing"},
      {"id":"raiko","name":"堀川雷鼓","group":"东方辉针城","motif":"太鼓与鼓槌","path":"M3 12Q3 9 12 9Q21 9 21 12V17Q21 21 12 21Q3 21 3 17ZM3 12Q12 17 21 12M6 14L7 18L11 15L14 19L17 15M4 3L10 8M19 2L14 7","color":"#C97C87","motion":"pulse"},
      {"id":"sumireko","name":"宇佐见堇子","group":"东方深秘录","motif":"超能力掰弯的汤匙","path":"M17 2Q22 3 20 7Q18 11 14 9Q11 8 13 5Q15 2 17 2ZM14 9L11 13Q10 15 12 16Q15 18 11 20L5 22M4 6L6 7M7 3L8 5M2 10H5","color":"#AB8DBE","motion":"swing"},
      {"id":"seiran","name":"清兰","group":"东方绀珠传","motif":"舂年糕的木槌","path":"M4 6L13 3L16 9L7 13ZM10 12L16 21L19 19L13 10M5 9L13 6","color":"#81A7C9","motion":"swing"},
      {"id":"ringo","name":"铃瑚","group":"东方绀珠传","motif":"团子串","path":"M3 21L7 17M16 6L20 2M5 15A3 3 0 1 0 11 15A3 3 0 1 0 5 15M9 11A3 3 0 1 0 15 11A3 3 0 1 0 9 11M13 7A3 3 0 1 0 19 7A3 3 0 1 0 13 7","color":"#C9A368","motion":"swing"},
      {"id":"doremy","name":"哆来咪·苏伊特","group":"东方绀珠传","motif":"睡帽与梦魂","path":"M3 16Q5 6 11 4Q17 2 19 8L21 12Q16 10 14 8L15 15ZM3 16Q8 19 15 16L16 19Q9 22 2 19ZM18 13A2 2 0 1 0 22 13A2 2 0 1 0 18 13","color":"#A58AC8","motion":"float"},
      {"id":"sagume","name":"稀神探女","group":"东方绀珠传","motif":"单翼与紧闭的口","path":"M4 16Q6 8 19 3Q20 8 15 10L20 8Q19 13 13 14L17 13Q15 18 8 18M4 20Q8 13 15 8M2 21H7","color":"#A89AB9","motion":"float"},
      {"id":"clownpiece","name":"克劳恩皮丝","group":"东方绀珠传","motif":"点燃疯狂的火炬","path":"M8 14Q4 10 9 5Q9 8 11 8Q14 5 13 2Q22 10 16 14ZM7 14H17L15 17H9ZM9 17L11 22H13L15 17","color":"#D68F68","motion":"pulse"},
      {"id":"junko","name":"纯狐","group":"东方绀珠传","motif":"纯化的火焰光轮","path":"M12 3Q13 7 17 6L20 5L19 10L22 13L18 16L17 21L12 19L7 21L6 17L2 14L5 10L4 6L9 7ZM8 13A4 4 0 1 0 16 13A4 4 0 1 0 8 13","color":"#D48956","motion":"pulse"},
      {"id":"hecatia","name":"赫卡提亚·拉碧斯拉祖利","group":"东方绀珠传","motif":"相连的三界星体","path":"M9 6A3 3 0 1 0 15 6A3 3 0 1 0 9 6M2 17A3.5 3.5 0 1 0 9 17A3.5 3.5 0 1 0 2 17M15 17A3.5 3.5 0 1 0 22 17A3.5 3.5 0 1 0 15 17M7 13L10 9M14 9L17 13M9 18Q12 20 15 18","color":"#A985C5","motion":"swing"},
      {"id":"joon","name":"依神女苑","group":"东方凭依华","motif":"珠宝与钻戒","path":"M6 14A6 6 0 1 0 18 14M6 6L9 3H15L18 6L12 13ZM6 6H18M10 6L12 12L14 6M19 4L21 2","color":"#D7A360","motion":"pulse"},
      {"id":"shion","name":"依神紫苑","group":"东方凭依华","motif":"打了补丁的布袋","path":"M7 3L12 5L17 3L15 8H9ZM9 8Q1 16 5 20Q9 23 17 21Q23 19 15 8M7 16L10 13L13 16L10 19ZM15 9L20 11","color":"#86A1C9","motion":"swing"},
      {"id":"eternity","name":"爱塔妮缇拉尔瓦","group":"东方天空璋","motif":"凤蝶翅膀","path":"M11 15Q2 14 2 5Q9 5 12 12Q15 5 22 5Q22 14 13 15M11 15Q3 14 4 19Q6 23 11 17M13 15Q21 14 20 19Q18 23 13 17M12 11V18M12 11L9 6M12 11L15 6","color":"#80C4B5","motion":"float"},
      {"id":"nemuno","name":"坂田合欢","group":"东方天空璋","motif":"山姥的大柴刀","path":"M3 20L8 15L10 17L5 22ZM8 14L15 4L21 3Q20 10 12 17ZM15 7L18 5","color":"#C08D74","motion":"swing"},
      {"id":"aunn","name":"高丽野阿吽","group":"东方天空璋","motif":"狛犬的额角与卷鬃","path":"M7 8Q3 4 2 8Q2 11 5 11Q2 15 5 17M17 8Q21 4 22 8Q22 11 19 11Q22 16 18 18M6 10L8 7L10 8L12 3L14 8L16 7L18 11Q19 19 12 21Q5 19 6 10ZM9 13H9.4M15 13H15.4","color":"#80BA9E","motion":"swing"},
      {"id":"narumi","name":"矢田寺成美","group":"东方天空璋","motif":"地藏的笠与锡杖","path":"M2 12L10 4L17 12Q10 15 2 12ZM6 15Q6 21 10 21Q14 21 14 15M19 8V21M16.5 6A2.5 3 0 1 0 21.5 6A2.5 3 0 1 0 16.5 6","color":"#9A9D87","motion":"swing"},
      {"id":"satono","name":"尔子田里乃","group":"东方天空璋","motif":"舞者的茗荷","path":"M5 21L10 15Q8 9 14 3Q13 8 15 10Q18 8 19 5Q22 15 13 17L7 22M11 15Q15 14 17 10","color":"#B892BD","motion":"swing"},
      {"id":"mai-teireida","name":"丁礼田舞","group":"东方天空璋","motif":"舞者的竹叶","path":"M5 22L16 3M8 17Q2 15 3 10Q8 12 9 15M11 12Q11 5 8 3Q7 8 10 13M12 12Q17 7 21 9Q18 14 11 15","color":"#88B182","motion":"swing"},
      {"id":"okina","name":"摩多罗隐岐奈","group":"东方天空璋","motif":"背后的门","path":"M3 21H21M5 21V4H17V7M8 7L19 3V19L8 22ZM11 13H12","color":"#CBA35D","motion":"swing"},
      {"id":"eika","name":"戎璎花","group":"东方鬼形兽","motif":"河岸的堆石","path":"M4 17Q8 14 16 16Q22 17 20 20Q13 22 4 20Q2 19 4 17ZM7 12Q11 10 15 12Q18 14 15 16H8Q5 15 7 12ZM9 7Q12 4 15 7Q17 10 13 11H10Q7 10 9 7Z","color":"#9DACAD","motion":"swing"},
      {"id":"urumi","name":"牛崎润美","group":"东方鬼形兽","motif":"牛鬼抱着的石婴","path":"M7 9L3 5Q2 11 6 12M16 9L21 5Q21 11 18 12M8 12Q8 8 12 8Q16 8 16 12Q16 15 12 15Q8 15 8 12ZM7 16Q11 20 16 15L20 15Q20 21 12 21Q5 21 4 16Z","color":"#9993B0","motion":"swing"},
      {"id":"kutaka","name":"庭渡久侘歌","group":"东方鬼形兽","motif":"头顶的小鸡","path":"M5 15Q2 11 3 8L7 10Q8 4 14 5Q16 2 17 4L18 7L22 9L18 11Q18 17 12 18Q8 19 5 15ZM15 8H15.4M8 18L7 21M13 18L14 21","color":"#D3AA64","motion":"float"},
      {"id":"yachie","name":"吉吊八千慧","group":"东方鬼形兽","motif":"吉吊的龟甲与龙尾","path":"M4 12L8 6L15 5L20 10L17 17L9 19ZM8 11L12 8L16 11L14 15L10 15ZM17 17Q23 18 21 12M4 13L2 12","color":"#85B39B","motion":"swing"},
      {"id":"mayumi","name":"杖刀偶磨弓","group":"东方鬼形兽","motif":"武人埴轮","path":"M6 10L8 5L16 4L19 10ZM7 10V16Q11 21 16 16V10M9 13H10M13 13H14M8 18L6 21H18L16 18M18 16L21 12","color":"#BC936B","motion":"swing"},
      {"id":"keiki","name":"埴安神袿姬","group":"东方鬼形兽","motif":"雕塑的凿与槌","path":"M3 20L8 15L10 17L5 22ZM8 14L15 7L18 10L11 17ZM12 4L16 2L22 8L19 11ZM13 8L8 4","color":"#77AFB8","motion":"swing"},
      {"id":"saki","name":"骊驹早鬼","group":"东方鬼形兽","motif":"天马的翼与马蹄铁","path":"M5 10Q2 15 5 19Q10 24 15 18L16 13L13 12Q12 20 8 18Q5 16 8 11ZM12 10Q15 4 22 3Q21 8 17 9L20 9Q18 12 15 12","color":"#AC8D7A","motion":"swing"},
      {"id":"yuuma","name":"饕餮尤魔","group":"东方刚欲异闻","motif":"贪欲的巨叉","path":"M3 21L13 11M10 10L14 14M11 11Q8 9 11 6L14 3M13 12L19 5M15 13Q17 15 19 12L22 8","color":"#89B7BC","motion":"swing"},
      {"id":"mike","name":"豪德寺三花","group":"东方虹龙洞","motif":"招财猫举起的前爪","path":"M3 20V13Q3 10 6 10Q9 10 8 13L7 16M8 12L9 5L12 8Q14 7 16 8L20 5L20 13Q19 18 14 18Q12 18 10 17M11 20Q15 22 20 20M12 12H12.3M17 12H17.3","color":"#C49D7E","motion":"swing"},
      {"id":"takane","name":"山城高岭","group":"东方虹龙洞","motif":"山童的迷彩帽","path":"M3 15L6 8Q8 4 14 5Q19 5 20 12L22 14L18 16Q12 14 6 17L2 17ZM8 7L10 10L7 12M15 6L13 9L16 11M19 13Q12 10 6 14","color":"#7DA782","motion":"swing"},
      {"id":"sannyo","name":"驹草山如","group":"东方虹龙洞","motif":"山姥太夫的烟管","path":"M3 17L12 14L17 10L20 10L19 15L13 17L4 20ZM16 8Q15 6 18 5Q21 4 19 2M13 9Q10 7 12 5","color":"#AF88AE","motion":"float"},
      {"id":"misumaru","name":"玉造魅须丸","group":"东方虹龙洞","motif":"勾玉","path":"M17 3Q22 5 21 10Q21 17 13 21Q8 22 4 19Q11 19 12 14Q5 13 7 7Q9 2 17 3ZM11 8A2.5 2.5 0 1 0 16 8A2.5 2.5 0 1 0 11 8","color":"#79B7A7","motion":"spin"},
      {"id":"tsukasa","name":"菅牧典","group":"东方虹龙洞","motif":"竹管中的管狐","path":"M3 17L8 11L13 16L7 22ZM8 11L9 7L8 3L13 6L17 2L17 7Q21 8 21 10Q19 13 15 13L12 15M17 8H17.3M4 18L7 21","color":"#C8AD77","motion":"swing"},
      {"id":"megumu","name":"饭纲丸龙","group":"东方虹龙洞","motif":"天文望远镜","path":"M3 11L15 4L19 10L7 16ZM15 4L18 2L22 8L19 10M10 15L14 14L17 21M13 15L9 21","color":"#879ACB","motion":"swing"},
      {"id":"chimata","name":"天弓千亦","group":"东方虹龙洞","motif":"虹市的拱虹与价签","path":"M2 16Q3 5 13 5Q17 5 20 9M6 16Q6 9 13 9Q15 9 17 10M11 16Q11 13 14 13M13 17L18 12H22V16L17 21ZM19 14H19.4","color":"#A896C9","motion":"float"},
      {"id":"momoyo","name":"姬虫百百世","group":"东方虹龙洞","motif":"矿洞的镐","path":"M4 21L14 8M10 5Q16 2 22 7Q16 5 13 10Q9 14 4 14Q8 10 10 5ZM3 18L5 16","color":"#A89783","motion":"swing"},
      {"id":"biten","name":"孙美天","group":"东方兽王园","motif":"如意棒与筋斗云","path":"M4 20L18 3L21 5L7 22ZM5 18L9 20M16 5L19 8M2 11Q3 8 6 9Q7 5 11 7M14 17Q16 14 18 16Q22 14 22 18","color":"#C5A365","motion":"swing"},
      {"id":"enoko","name":"三头慧之子","group":"东方兽王园","motif":"两腕的兽夹","path":"M2 9L5 12L7 8L9 12L12 8L15 12L18 8L20 12L22 9Q22 18 15 19L12 16L9 19Q2 17 2 9ZM9 20L12 22L15 20","color":"#A4A181","motion":"swing"},
      {"id":"chiyari","name":"天火人血枪","group":"东方兽王园","motif":"装着血液的试管","path":"M6 4L13 7M7 5L2.5 15Q1 19 5 20Q8 21 9 18L13 7M5 12L10 14M15 3L22 6M16 4L13 12Q12 15 15 16Q18 17 19 14L22 6M15 10L20 12","color":"#B8798E","motion":"swing"},
      {"id":"hisami","name":"豫母都日狭美","group":"东方兽王园","motif":"遮面的葡萄藤","path":"M4 6Q12 1 19 7L21 19Q15 16 12 21Q8 16 3 19ZM6 7Q12 9 17 6M10 10Q15 8 17 5M10 11A2 2 0 1 0 14 11A2 2 0 1 0 10 11M12 14Q13 17 15 14","color":"#A083B8","motion":"swing"},
      {"id":"zanmu","name":"日白残无","group":"东方兽王园","motif":"鬼僧的角与念珠","path":"M4 9Q8 7 8 2L11 9M15 9L18 3Q18 7 20 9M4 13Q5 20 12 21Q20 21 21 13M4 13A2 2 0 1 0 8 13A2 2 0 1 0 4 13M9 18A2 2 0 1 0 13 18A2 2 0 1 0 9 18M16 15A2 2 0 1 0 20 15A2 2 0 1 0 16 15","color":"#AC889C","motion":"swing"},
      {"id":"ubame","name":"尘塚姥芽","group":"东方锦上京","motif":"守护的圣域山林","path":"M2 18L6 12L4 12L9 5L13 12H11L15 18ZM8 18V21M13 6L16 2L20 9H18L22 15H17M17 15V19","color":"#A8A16C","motion":"swing"},
      {"id":"chimi","name":"封兽魑魅","group":"东方锦上京","motif":"山河之气与长耳","path":"M3 14Q4 8 8 10Q4 4 6 3Q9 3 12 8Q15 3 18 3Q20 4 16 10Q20 9 21 13M2 17Q7 12 12 16Q17 19 22 15M5 21Q8 18 12 20","color":"#B997A1","motion":"float"},
      {"id":"nareko","name":"道神驯子","group":"东方锦上京","motif":"金字塔前的道祖神","path":"M2 18L12 3L22 18ZM12 3L15 18M7 13L12 5M8 21V10H11V21M6 12H13","color":"#BD9B7C","motion":"swing"},
      {"id":"yuiman","name":"维缦·浅间","group":"东方锦上京","motif":"吞食污秽的蛇","path":"M3 19Q7 19 9 16Q11 13 16 13Q22 12 20 7Q19 4 16 5L14 7L17 9L19 8M4 15Q6 12 10 11Q14 10 14 7M8 20Q12 16 16 17M17 6.5H17.3","color":"#92B1CB","motion":"swing"},
      {"id":"ariya","name":"磐永阿梨夜","group":"东方锦上京","motif":"守护神社的磐石","path":"M3 18L5 10L10 5L17 5L21 11L20 18ZM5 10L10 11L12 6M10 11L8 17M12 20H18M15 10L18 13L16 17","color":"#A59DAF","motion":"pulse"},
      {"id":"nina","name":"渡里贝子","group":"东方锦上京","motif":"吐出海市蜃楼的蜃贝","path":"M3 15Q6 7 11 9Q16 5 21 13L12 18ZM3 15Q11 23 21 13M11 17L7 12M13 16L16 11M7 6Q7 4 10 5Q12 6 13 3M15 5Q18 6 20 3","color":"#68B7BC","motion":"float"},
      {"id":"shanghai","name":"上海人偶","group":"爱丽丝的人偶","motif":"发射光束的小人偶","path":"M5 8Q3 4 6 4L9 6L13 3L14 7M5 9Q5 6 10 7Q13 7 12 11Q10 14 7 12ZM7 14L4 20H14L11 14M14 12L21 9M16 15L22 13","color":"#BC9C6D","motion":"swing"},
      {"id":"hourai","name":"蓬莱人偶","group":"爱丽丝的人偶","motif":"符卡中的悬丝人偶","path":"M11 2V6M7 10A4 4 0 1 0 15 10A4 4 0 1 0 7 10M9 14L5 19L16 21L13 14M6 14L3 12M14 15L18 13M18 3L19 6L22 7L19 8L18 11L17 8L15 7L17 6Z","color":"#AD8FB8","motion":"swing"},
      {"id":"titania","name":"提泰妮娅","group":"爱丽丝的人偶","motif":"试验中的大型人偶","path":"M7 6Q7 3 11 3Q15 3 15 7Q15 10 11 10Q7 10 7 6ZM9 12L5 20Q10 22 17 20L13 12M13 12L17 13L19 9M8 12L4 15M17 6L19 4M19 7L22 6","color":"#BD8CAD","motion":"pulse"},
      {"id":"goliath","name":"歌利亚人偶","group":"爱丽丝的人偶","motif":"双刃巨人偶","path":"M4 3L9 10L8 14L4 10ZM20 3L15 10L16 14L20 10ZM5 13L9 11M15 11L19 13M9 6Q11 3 14 6Q15 9 12 10Q9 10 9 6ZM10 12L6 19L12 21L18 19L14 12M8 13L6 16M16 13L18 16","color":"#B28F8F","motion":"swing"},
      {"id":"pc98-reimu","name":"博丽灵梦（旧作）","group":"东方灵异传","motif":"阴阳玉","path":"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 3c6 0 6 9 0 9s-6 9 0 9 M12 7.4h.1 M12 16.6h.1","color":"#DF5968","motion":"spin"},
      {"id":"singyoku","name":"神玉","group":"东方灵异传","motif":"守门双勾玉","path":"M4 11c0-5 4-8 9-8-3 2-2 5-1 7 1 3-2 6-5 5-2 0-3-2-3-4z M20 13c0 5-4 8-9 8 3-2 2-5 1-7 M7.7 10.6h.1 M16.3 13.4h.1","color":"#CF5364","motion":"spin"},
      {"id":"mima","name":"魅魔","group":"东方灵异传","motif":"新月法杖","path":"M4 21L15 10 M15 4a4 4 0 0 0 5 5 5 5 0 1 1-5-5z M5 14l1-2 1 2 2 1-2 1","color":"#4A9E82","motion":"swing"},
      {"id":"kikuri","name":"菊理","group":"东方灵异传","motif":"地狱之月与锁链","path":"M5 14a7 7 0 1 1 10 5 M4 19l2-2m2-2 2-2 M3 21c-2-2 0-4 2-5m2 2c-1 2-3 4-4 3 M8 14c-1-2 1-4 3-4","color":"#BD9659","motion":"float"},
      {"id":"konngara","name":"矜羯罗","group":"东方灵异传","motif":"星幽之剑","path":"M5 20l5-6 M7 12l5 5 M10 13l7-10 3-1-1 5-7 8 M3 7l1-2 1 2 2 1-2 1","color":"#AA687E","motion":"swing"},
      {"id":"yuugenmagan","name":"幽幻魔眼","group":"东方灵异传","motif":"五枚魔眼","path":"M3 12q4-6 9 0-5 6-9 0z M6 5l1-.8 1 .8-1 1z M15 5l1-.8 1 .8-1 1z M16 12q3-4 5 0-2 4-5 0z M10 19q3-4 6 0-3 4-6 0z","color":"#B98B49","motion":"pulse"},
      {"id":"elis","name":"依莉斯","group":"东方灵异传","motif":"蝙蝠与星","path":"M3 8q4 0 7 4l2-2 2 2q3-4 7-4l-2 8q-2-3-4-1l-3 4-3-4q-3-2-4 1z M16 4h3m-1.5-1.5v3","color":"#BA6FBA","motion":"float"},
      {"id":"sariel","name":"萨丽爱尔","group":"东方灵异传","motif":"死天使的六翼","path":"M11 10Q5 9 3 3q0 8 7 10 M10 14l-7-2q2 5 7 5 M10 18l-4 1 5 2 M13 10q6-1 8-7 0 8-7 10 M14 14l7-2q-2 5-7 5 M14 18l4 1-5 2","color":"#8C83CC","motion":"float"},
      {"id":"genjii","name":"玄爷","group":"东方封魔录","motif":"飞龟","path":"M4 15a7 7 0 0 1 14-2l2-1 2 2-2 2H4l-2-2 M7 17l-2 2m10-2 2 2 M8 10l3 3 3-3","color":"#689478","motion":"float"},
      {"id":"rika","name":"里香","group":"东方封魔录","motif":"战车","path":"M3 14h16a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3z M7 14l2-6h7l2 6 M16 9l5-4 M7 17h1m4 0h1m3 0h1","color":"#BD685A","motion":"swing"},
      {"id":"meira","name":"明罗","group":"东方封魔录","motif":"武士刀","path":"M4 21l5-6 M6 12l7 5 M9 13C13 10 17 6 20 3c-1 6-5 11-9 12 M4 17l3 2","color":"#A677AB","motion":"swing"},
      {"id":"pc98-marisa","name":"雾雨魔理沙（旧作）","group":"东方封魔录","motif":"飞行魔法球","path":"M7 7a6 6 0 1 1-1 9 M8 12c0-2 1-3 3-3 M15 5l3-2m0 6 4-2M3 18l3-2","color":"#AB68BA","motion":"float"},
      {"id":"ellen","name":"爱莲","group":"东方梦时空","motif":"蓬松辫与魔法星","path":"M8 14c-4-1-5-6-1-8 1-4 6-4 8 0 4 0 5 5 2 7 M8 14c-4 2-3 5-1 6l3-5 M15 14l2 6 3-2-3-4 M12 7l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5z","color":"#CD9863","motion":"float"},
      {"id":"kotohime","name":"小兔姬","group":"东方梦时空","motif":"手铐","path":"M3 14a4 4 0 1 0 8 0 4 4 0 1 0-8 0z M13 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0z M9 10l4-3m-2 6 4-3","color":"#D76A70","motion":"swing"},
      {"id":"kana","name":"卡娜·安娜贝拉尔","group":"东方梦时空","motif":"停车路牌","path":"M8 3h7l4 4v6l-4 4H8l-4-4V7z M11.5 17v4 M8 10h7","color":"#7998D2","motion":"swing"},
      {"id":"rikako","name":"朝仓理香子","group":"东方梦时空","motif":"实验烧瓶","path":"M9 3h6m-5 0v6L4 18q-1 3 3 3h10q4 0 3-3l-6-9V3 M7 15q3-2 6 0t4 0 M11 18h.1","color":"#9275B0","motion":"swing"},
      {"id":"chiyuri","name":"北白河千百合","group":"东方梦时空","motif":"水手帽","path":"M4 12q1-6 7-8l2 2 3-2q4 2 5 7l-2 4H6z M6 15l2 3q5 2 11-2 M5 11q7 3 15-1","color":"#4D98AD","motion":"float"},
      {"id":"yumemi","name":"冈崎梦美","group":"东方梦时空","motif":"草莓十字","path":"M6 9q6-4 12 0 3 5-5 12-8-2-8-8z M12 7l-3-4 4 2 3-2-1 4 M12 10v6m-3-3h6","color":"#CC5868","motion":"pulse"},
      {"id":"mimi-chan","name":"咪咪号","group":"东方梦时空","motif":"小火箭","path":"M7 15c1-6 6-11 13-12 0 7-4 13-11 15z M8 11l-4 2-1 4 4-2 M13 17l-2 4-3 1 1-4 M5 19l-2 2 M15 8h.1","color":"#DC8B8A","motion":"float"},
      {"id":"ruukoto","name":"留琴","group":"东方梦时空","motif":"核能女仆围裙","path":"M7 4l3 4h4l3-4 M9 7L5 20q7 3 14 0L15 7 M11 12l-2 3h3l-1 3 4-5h-3l1-2","color":"#5EAD88","motion":"pulse"},
      {"id":"multi","name":"玛○奇","group":"东方梦时空","motif":"机器人的耳罩","path":"M4 14V11a8 8 0 0 1 16 0v3 M3 11h4v7H3z M17 11h4v7h-4z M8 18q4 4 8 0","color":"#76B48A","motion":"pulse"},
      {"id":"sokrates","name":"苏格拉底","group":"东方梦时空","motif":"猫耳与胡须","path":"M5 10L4 4l6 3h4l6-3-1 6q4 10-7 10T5 10z M7 13l-4-1m4 4-4 1m14-4 4-1m-4 4 4 1","color":"#AF9279","motion":"swing"},
      {"id":"orange","name":"奥莲姬","group":"东方幻想乡","motif":"武术长杖","path":"M4 21L19 3 M6 16l3 3 M14 7l3 3 M17 5q-6-3-9 2l6-1","color":"#D48A50","motion":"swing"},
      {"id":"kurumi","name":"胡桃","group":"东方幻想乡","motif":"湖上的蝠翼","path":"M3 8q6 0 10 7 0-6 7-10l-1 9q-3-1-6 4-4-8-8-6z M3 20q3-2 6 0m6 0q3-2 6-1","color":"#BE5875","motion":"float"},
      {"id":"elly","name":"艾丽","group":"东方幻想乡","motif":"长柄镰刀","path":"M6 21l7-16 M8 5c5-3 12-1 13 6-4-3-7-4-12-3 M4.5 19.5l3 1","color":"#BE845C","motion":"swing"},
      {"id":"pc98-yuuka","name":"幽香（旧作）","group":"东方幻想乡","motif":"梦幻馆洋伞","path":"M3 11q5-9 13-6 5 2 6 8l-6-2-4 2-3-3z M13 12l-3 8q-1 3-4 0 M14 4l1-2","color":"#65A872","motion":"swing"},
      {"id":"mugetsu","name":"梦月","group":"东方幻想乡","motif":"月牙女仆帽","path":"M4 13Q2 10 5 9q-1-4 4-4 3-4 6 0 5-1 5 4 3 1 1 5 M4 13q8-4 16 1l-2 3q-6-3-12-1z M12 17q-1 4 3 4-5 2-6-2","color":"#8D89C7","motion":"float"},
      {"id":"gengetsu","name":"幻月","group":"东方幻想乡","motif":"弯月天使翼","path":"M13 4a5 5 0 1 0 5 7c-4 1-7-3-5-7z M8 10Q5 6 2 6q1 6 5 9l-2 1q2 3 8 3 M16 14l5-4q0 6-5 8","color":"#D99099","motion":"float"},
      {"id":"sara","name":"萨拉","group":"东方怪绮谈","motif":"魔界之门","path":"M4 21V10l4-6h8l4 6v11 M8 21V11l4-4 4 4v10 M3 21h6m6 0h6 M11 14l2 2-2 2","color":"#AB638C","motion":"pulse"},
      {"id":"louise","name":"露易兹","group":"东方怪绮谈","motif":"旅人宽檐帽","path":"M2 14q4-2 5-7 4-4 9 0l2 5 4 2q-8 5-20 0z M6 12q5 3 12-1 M15 7l4-3","color":"#BD946C","motion":"swing"},
      {"id":"pc98-alice","name":"爱丽丝（旧作）","group":"东方怪绮谈","motif":"封印魔导书","path":"M6 3l12 2v15l-12-2q-2 0-2-2V6q0-3 2-3z M4 16l12 2 M9 8l5 5m0-5-5 5 M17 9l3 1v4l-3-1","color":"#AC789B","motion":"float"},
      {"id":"yuki","name":"雪","group":"东方怪绮谈","motif":"黑魔法的火焰","path":"M11 21C2 20 3 13 7 9c0 4 2 4 3 4 3-4 0-6 3-10 0 6 7 8 7 13 0 3-3 5-5 5 1-3-1-4-2-5 0 2-3 3-2 5z","color":"#BE8265","motion":"pulse"},
      {"id":"mai","name":"舞","group":"东方怪绮谈","motif":"白翼冰晶","path":"M13 4l4 7-4 7-4-7z M13 7v8 M9 11L2 6q0 7 6 10l-2 1q2 3 6 3 M17 12l5-4q0 6-5 9","color":"#72A4CA","motion":"float"},
      {"id":"yumeko","name":"梦子","group":"东方怪绮谈","motif":"成对的飞剑","path":"M3 20l3-4 M4 14l5 4 M6 15l7-11-1 7-4 6 M13 20l2-3 M13 15l5 3 M15 16l6-9-1 6-3 5","color":"#C97079","motion":"swing"},
      {"id":"shinki","name":"神绮","group":"东方怪绮谈","motif":"魔界六翼","path":"M10 11C7 9 4 5 3 3c0 5 1 8 5 10l-5-2q1 5 6 6l-4 1 5 3 M14 11c3-2 6-6 7-8 0 5-1 8-5 10l5-2q-1 5-6 6l4 1-5 3 M12 9l2 4-2 4-2-4z","color":"#A881B5","motion":"pulse"},
      {"id":"rinnosuke","name":"森近霖之助","group":"东方香霖堂","motif":"香霖堂店主的眼镜","path":"M2.5 10.5 4 7m.2 4h5.6l.4 1.2C10 16.5 4 17.3 3.4 13l-.3-2ZM10 12.2q2-1.8 4 0m.4-1.2h6.4l-.3 2c-.6 4.3-6.6 3.5-6.8-.8Zm6.8-.6-1-3.4","color":"#5790aa","motion":"swing"},
      {"id":"book-reading-youkai","name":"无名的读书妖怪","group":"东方香霖堂","motif":"翻起的书页","path":"M3 7.5q5-1.8 9 1.8 4-3.6 9-1.8v11q-5-1.5-9 1.5-4-3-9-1.5Zm9 2v10M6 4q4-.3 6 3.2Q14 4 18 3.8","color":"#608eaf","motion":"float"},
      {"id":"sunny-milk","name":"桑尼米尔克","group":"东方三月精","motif":"日光的八束光芒","path":"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 2.5V5m0 14v2.5m9.5-9.5H19M5 12H2.5M5.2 5.2 7 7m10 10 1.8 1.8m0-13.6L17 7M7 17l-1.8 1.8","color":"#ed9140","motion":"pulse"},
      {"id":"luna-child","name":"露娜切露德","group":"东方三月精","motif":"安静的弦月","path":"M16.5 3.2A9.4 9.4 0 1 0 21 15a7.4 7.4 0 0 1-4.5-11.8ZM5 15.2q1.2 2 3.5 2.8","color":"#c79a45","motion":"swing"},
      {"id":"star-sapphire","name":"斯塔萨菲雅","group":"东方三月精","motif":"蓝星与星迹","path":"m11.4 2.7 2.3 4.8 5.1.7-3.7 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2L4 8.2l5.1-.7Zm7.4 14.1 1.8 1.4m-5.4.7 1.5 1.9","color":"#527ebc","motion":"float"},
      {"id":"aya","name":"射命丸文","group":"东方文花帖（书籍）","motif":"天狗的枫叶团扇","path":"M4 6.5 9 8.8l.4-5.4 3.1 5.3 4.3-4.2-.9 5.8 5.2-.5-4.1 4.1 2.1 1.4-7.6 1.8-5-2.6-3-4.2 3 .5Zm7.7 10.2-3 4.3","color":"#ba5263","motion":"swing"},
      {"id":"akyuu","name":"稗田阿求","group":"东方求闻史纪","motif":"幻想乡缘起的书卷","path":"M5 4h11.8A2.2 2.2 0 0 1 19 6.2V8h-4.2V6.2a2.2 2.2 0 0 1 2-2.2M5.5 4c-1.1 0-2 .9-2 2v11.3m0 0A2.3 2.3 0 0 0 5.8 20H17a2.4 2.4 0 0 0 2.4-2.4V16H7.7v1.7c0 2.8-4.2 3-4.2-.4ZM7.5 8.5h4.2m-4.2 3.3h3.6","color":"#9766ad","motion":"float"},
      {"id":"toyohime","name":"绵月丰姬","group":"东方儚月抄","motif":"月都的折扇","path":"M2.5 8.8Q12-.2 21.5 8.8L12 20Zm3.2-2.2L12 20 9.9 4.9M14 4.9 12 20l6.3-13.4","color":"#ba83ae","motion":"swing"},
      {"id":"yorihime","name":"绵月依姬","group":"东方儚月抄","motif":"凭神的太刀","path":"M6.9 15.8C11.1 13.2 15.5 8.8 20 2.8c-.7 6.3-4.9 12-10.7 15.8M5.7 14.6l5.2 5.2M7 17l-3.8 3.8 1.7.9 3.6-3.5","color":"#916ac3","motion":"swing"},
      {"id":"reisen-moon-rabbit","name":"Reisen","group":"东方儚月抄","motif":"月兔垂耳","path":"M7.3 10C7.6 4.5 3 3 2.8 8.6c0 3 .8 6.1 2.3 8.6l2.3-6.5c2.5-2.3 6.4-2.2 9.1.1l2.2 6.1c2.4-3.7 3.4-7.6 2.1-10.6-1.1-2.7-4.6-1.4-4.6 3M7.5 13.5c-1 3.8 1.6 6.9 4.5 6.9s5.6-3.1 4.5-6.9","color":"#7098bc","motion":"float"},
      {"id":"change","name":"嫦娥","group":"东方儚月抄","motif":"月宫的蟾影","path":"M17.2 2.9a9.5 9.5 0 1 0 4 14C18 18.1 15 17.4 13 15.6m-6.6-2.4c1.1-1.4 2.3-1.9 3.4-2.1.1-3 3.5-4.2 4.9-1.5 2.1-.7 4.1.9 3.8 3.1l1.6 1.2m-9.4.1 1.6 2.2-2.5.5","color":"#6fa68b","motion":"pulse"},
      {"id":"kasen","name":"茨木华扇","group":"东方茨歌仙","motif":"缠着绷带的手臂","path":"M5 18.5 14.3 6.1l-.2-2.1c-.2-1.1 1-1.5 1.5-.6l1 1.6 1.8-1.3c.8-.6 1.7.2 1.1 1l-.6 1.2c2.6.2 2.2 2.5.7 3.5l-2.5 1.4-7.9 10.1ZM7 15.8l5.1 1.5m-2.8-4.5 5.2 1.5m-2.9-4.5 5.3 1.5","color":"#c56a89","motion":"swing"},
      {"id":"kosuzu","name":"本居小铃","group":"东方铃奈庵","motif":"铃奈庵的双铃","path":"M8.5 9 11.8 4l3.7 5.4M6.8 9.2c-2.1.1-3 1.8-3.1 3.7l-.8 2.3 7.1 1 .4-2.4c.3-2.2-.6-4.1-3.6-4.6Zm-1.1 7.2c.3 1.7 1.9 2 2.5.6M17.1 9.7c-2.4.2-3.5 2-3.6 4l-.4 2.6 7.2-1-.9-2.8c-.1-1.6-.9-2.8-2.3-2.8Zm-1.5 7.1c.5 1.1 2 .9 2.4-.3","color":"#d77e45","motion":"swing"},
      {"id":"mizuchi","name":"宫出口瑞灵","group":"东方智灵奇传","motif":"逃狱怨灵的断铐","path":"M4.5 16 3.2 14.7a3 3 0 0 1 0-4.2l4.1-4.1a3 3 0 0 1 4.2 0L13 8m-3.5 7.2-1.9 1.9a2.9 2.9 0 0 1-4-.1m8.4-.2 1.4 1.4a3 3 0 0 0 4.2 0l3.2-3.2a3.1 3.1 0 0 0 0-4.3L19.5 9M13.9 7l1.9-3.1m.7 5.8 3.6-1.6","color":"#866185","motion":"pulse"},
      {"id":"miyoi","name":"奥野田美宵","group":"东方醉蝶华","motif":"鲵吞亭的鲸鱼酒盏","path":"M3 10.4c1.8-2.1 4.6-1.9 6.6-.6 2.9 1.9 5.9 2 8.3-.5l-.2-2.8 2 1.7 2.1-1.3-.6 3.3-2.5 1.6c-.8 3.6-3.7 6.1-7.6 6.4-3.5.2-6.6-1.9-8.1-5.8Zm4.2 1-.1.2m1.3 7.9h5.9","color":"#6597ad","motion":"float"},
      {"id":"renko","name":"宇佐见莲子","group":"莲台野夜行","motif":"观星者的礼帽","path":"M2.8 15.4c3.6.3 5.3-1 6-7.3.2-1.9 2.1-3.1 3.5-2.1 1.4.9 2 .9 3.6.9 1.7.1 2.6 2.6 3.2 5.3l.6 2.1m-13.3-2c3.1 1 7.9 1.9 12.5 1.1M2.8 15.4c5.2 3.1 12.2 3.2 18.4.3M4 3.4v3.8M2.1 5.3h3.8","color":"#9b775f","motion":"swing"},
      {"id":"maribel","name":"玛艾露贝莉·赫恩","group":"莲台野夜行","motif":"梦中所见的结界缝隙","path":"M2.5 14.4C7.3 8.1 13 17 21.2 6.9c-2.3 7.2-8 10.8-13.8 9.1l-2.9-.4m5-3.3c-.9 3.5 3.8 4.3 4.9.7M5.5 6V3.5M4.2 4.8h2.6","color":"#9e80c5","motion":"pulse"},
      {"id":"dipp-label","name":"C62蓬莱人形碟面角色","group":"蓬莱人形","motif":"初版碟面的红帽","path":"M4.1 13.7c0-1.5 1.1-2.5 2.3-3.6C7 7 9 5 12 4.9c3.6-.2 6.4 2.7 6.9 6 1.2.8 1.7 1.8 1.5 3.1-4.6-1.2-10-1.3-16.3-.3ZM6.2 10.7c3.5-.8 8.7-1 12.7.2M6 14.1l-1.6 3.5L7 20m-.4-3.7 2.3 1.2","color":"#c25959","motion":"swing"},
      {"id":"dipp-jacket","name":"蓬莱人形封面角色","group":"蓬莱人形","motif":"封套上的十字饰物","path":"M10.7 4h2.7v4.1h4v2.7h-4v7.1h-2.7v-7.1h-4V8.1h4ZM3.8 4.8V3.5h2.5m11.5 16.9h2.4v-2.3","color":"#997a79","motion":"float"}
    ];
    // END GENERATED PORTRAITS

    const STORAGE_KEY = 'dsh-gensokyo-status:mode';
    const TIME_STORAGE_KEY = 'dsh-gensokyo-status:show-time';
    const CHARACTER_STORAGE_KEY = 'dsh-gensokyo-status:character';
    const characterById = new Map(CHARACTERS.map(character => [character.id, character]));
    const normalizeCharacter = value => characterById.has(value) ? value : 'random';
    const NATIVE = '[data-chat-running]';
    const BOT = '.bt-typing';
    const FLOW = '[data-chat-flow]:not([data-step-process-content])';
    const STATUS_SELECTOR = [NATIVE, BOT].join(', ');
    const MODES = Object.freeze({
      random: 'random',
      praying: 'praying',
      lifespan: 'lifespan',
    });
    const LABELS = Object.freeze({
      praying: '少女祈祷中',
      lifespan: '少女折寿中',
    });
    const MODE_OPTIONS = Object.freeze([
      { value: MODES.random, label: '随机' },
      { value: MODES.praying, label: LABELS.praying },
      { value: MODES.lifespan, label: LABELS.lifespan },
    ]);

    function normalizeMode(value) {
      return Object.values(MODES).includes(value) ? value : MODES.random;
    }

    function readPreference(key) {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    }

    let mode = normalizeMode(readPreference(STORAGE_KEY));
    let showTime = readPreference(TIME_STORAGE_KEY) !== 'false';
    let selectedCharacter = normalizeCharacter(readPreference(CHARACTER_STORAGE_KEY));
    const settingsListeners = new Set();
    const getMode = () => mode;
    const getShowTime = () => showTime;
    const getCharacter = () => selectedCharacter;
    const subscribeSettings = listener => {
      settingsListeners.add(listener);
      return () => settingsListeners.delete(listener);
    };

    function chooseLabel(selectedMode, random = Math.random) {
      if (selectedMode === MODES.praying) return LABELS.praying;
      if (selectedMode === MODES.lifespan) return LABELS.lifespan;
      return random() < 0.5 ? LABELS.praying : LABELS.lifespan;
    }

    function createLabelSelector(random = Math.random) {
      let labels = new WeakMap();
      return {
        forContainer(container, selectedMode) {
          if (selectedMode !== MODES.random) return chooseLabel(selectedMode, random);
          if (!labels.has(container)) labels.set(container, chooseLabel(selectedMode, random));
          return labels.get(container);
        },
        reset() {
          labels = new WeakMap();
        },
      };
    }

    const labelSelector = createLabelSelector();

    function createCharacterSelector(random = Math.random) {
      let choices = new WeakMap();
      return {
        forContainer(container, selected, peer) {
          if (selected !== 'random') return selected;
          // Either renderer can mount first. Both represent the same active run.
          const id = choices.get(container) ?? choices.get(peer)
            ?? CHARACTERS[Math.floor(random() * CHARACTERS.length)].id;
          choices.set(container, id);
          if (peer) choices.set(peer, id);
          return id;
        },
        forget(container) {
          choices.delete(container);
        },
        reset() {
          choices = new WeakMap();
        },
      };
    }

    const characterSelector = createCharacterSelector();

    function textNodesWithin(root) {
      const result = [];
      const pending = Array.from(root?.childNodes || []);
      while (pending.length > 0) {
        const node = pending.shift();
        if (node?.nodeType === 3) {
          result.push(node);
        } else if (node?.childNodes) {
          pending.unshift(...Array.from(node.childNodes));
        }
      }
      return result;
    }

    function statusRoots(container) {
      const selector = container.matches(BOT) ? '.bt-typing-label > .bt-shimmer'
        : ':scope > [role="status"], :scope > span > [data-shimmer]';
      return container.querySelectorAll(selector);
    }

    function formatCaption(label, original, displayTime) {
      // Use the host's localized duration so pause, reconnect and resumed runs
      // keep their original clock. The live region has no duration to announce.
      const duration = displayTime
        ? original.match(/(?:\d+(?:[.,]\d+)?\s*(?:小时|分钟|秒|分|时|[hmsчмс])\s*)+/u)?.[0].trim()
        : undefined;
      return duration ? `${label}，用时 ${duration}…` : `${label}…`;
    }

    const originalValues = new WeakMap();
    const edited = new Map();
    const icons = new WeakMap();
    const SVG_NS = 'http://www.w3.org/2000/svg';

    function removeIcon(container) {
      if (!icons.has(container)) return;
      icons.get(container).remove();
      icons.delete(container);
      container.removeAttribute('data-gensokyo-character');
    }

    function renderIcon(container, id) {
      const host = container.querySelector(container.matches(BOT)
        ? ':scope > :is(.bt-mark, .bt-cluster)'
        : ':scope > span > span[aria-hidden="true"]:has(+ [data-shimmer])');
      const previous = icons.get(container);
      if (host && previous?.parentNode === host && previous.dataset.gensokyoIcon === id) return;
      removeIcon(container);
      if (!host) return;
      const character = characterById.get(id);
      const svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      svg.dataset.gensokyoIcon = id;
      svg.dataset.gensokyoMotion = character.motion;
      svg.style.setProperty('--gensokyo-accent', character.color);
      const title = document.createElementNS(SVG_NS, 'title');
      title.textContent = `${character.name} · ${character.motif}`;
      const path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', character.path);
      svg.append(title, path);
      host.append(svg);
      icons.set(container, svg);
      container.setAttribute('data-gensokyo-character', id);
    }

    function rewriteRunning(container, label, roots = statusRoots(container)) {
      const nodes = new Set();
      for (const root of roots) {
        const fields = [
          ...textNodesWithin(root).filter(node => node.nodeValue.trim()).map(node => [node, 'nodeValue']),
          ...Array.from(root.querySelectorAll('[data-shimmer-text]'), node => [node, 'data-shimmer-text']),
        ];
        for (const [node, key] of fields) {
          nodes.add(node);
          const isText = key === 'nodeValue';
          const current = isText ? node.nodeValue : node.getAttribute(key);
          const previous = originalValues.get(node);
          const original = previous?.replacement === current ? previous.original : current;
          const replacement = formatCaption(label, original, showTime && !container.matches(BOT));
          originalValues.set(node, { original, replacement, isText });
          if (current === replacement) continue;
          if (isText) node.nodeValue = replacement;
          else node.setAttribute(key, replacement);
        }
      }
      if (container.matches(BOT)) container.toggleAttribute('data-gensokyo-hide-time', !showTime);
      edited.set(container, nodes);
    }

    function restoreContainer(container) {
      removeIcon(container);
      for (const node of edited.get(container) ?? []) {
        const { original, replacement, isText } = originalValues.get(node);
        if (isText && node.nodeValue === replacement) node.nodeValue = original;
        if (!isText && node.getAttribute('data-shimmer-text') === replacement) node.setAttribute('data-shimmer-text', original);
        originalValues.delete(node);
      }
      if (container.matches(BOT)) container.removeAttribute('data-gensokyo-hide-time');
      edited.delete(container);
    }

    function closestRunning(node) {
      const element = node?.nodeType === 1 ? node : node?.parentElement;
      return element && typeof element.closest === 'function' ? element.closest(STATUS_SELECTOR) : null;
    }

    function runningContainersWithin(root) {
      const found = [];
      if (root?.nodeType === 1 && root.matches(STATUS_SELECTOR)) found.push(root);
      if (root && typeof root.querySelectorAll === 'function') found.push(...root.querySelectorAll(STATUS_SELECTOR));
      return found;
    }

    function rewriteContainer(container) {
      const roots = statusRoots(container);
      if (roots.length === 0) {
        restoreContainer(container);
        return;
      }
      const flow = container.closest(FLOW);
      const native = flow?.querySelector(`${NATIVE}:not([data-holding])`);
      const bot = flow?.querySelector(`${BOT}:not([data-exiting])`);
      const active = !container.matches('[data-holding], [data-exiting]');
      const anchor = active ? native ?? bot ?? container : container;
      rewriteRunning(container, labelSelector.forContainer(anchor, mode), roots);
      renderIcon(container, characterSelector.forContainer(anchor, selectedCharacter, active ? bot : undefined));
    }

    function rewriteDocument() {
      if (typeof document === 'undefined') return;
      runningContainersWithin(document).forEach(rewriteContainer);
    }

    function savePreference(key, value) {
      try {
        window.localStorage.setItem(key, String(value));
      } catch {
        // The setting remains active for this page when storage is unavailable.
      }
      rewriteDocument();
      settingsListeners.forEach(listener => listener());
    }

    function writeMode(value) {
      const next = normalizeMode(value);
      if (next === mode) return;
      mode = next;
      labelSelector.reset();
      savePreference(STORAGE_KEY, mode);
    }

    function writeShowTime(value) {
      if (typeof value !== 'boolean' || value === showTime) return;
      showTime = value;
      savePreference(TIME_STORAGE_KEY, showTime);
    }

    function writeCharacter(value) {
      const next = normalizeCharacter(value);
      if (next === selectedCharacter) return;
      selectedCharacter = next;
      characterSelector.reset();
      savePreference(CHARACTER_STORAGE_KEY, selectedCharacter);
    }

    const CSS = [
      '.dsh-gensokyo-settings{display:grid;gap:16px}',
      '.dsh-gensokyo-status{display:flex;align-items:center;gap:12px;',
      'min-height:32px;font-size:14px;color:var(--dsw-alias-label-primary,#222)}',
      '.dsh-gensokyo-status input{accent-color:var(--dsw-alias-state-focus,#5b8cff)}',
      '.bt-typing[data-gensokyo-hide-time] .bt-typing-time{display:none!important}',
      '.dsh-gensokyo-status__select{min-height:32px;border:1px solid ',
      'var(--dsw-alias-border-l2,GrayText);border-radius:6px;padding:0 24px 0 8px;',
      'background:var(--dsw-alias-bg-layer-1,Canvas);color:var(--dsw-alias-label-primary,CanvasText);',
      'font:inherit;cursor:pointer}',
      '.dsh-gensokyo-status__select :is(option,optgroup){background:var(--dsw-alias-bg-base,Canvas);',
      'color:var(--dsw-alias-label-primary,CanvasText)}',
      '.dsh-gensokyo-status__select:focus-visible{outline:2px solid ',
      'var(--dsw-alias-state-focus,#5b8cff);outline-offset:1px}',
      '.dsh-gensokyo-character{display:grid;gap:8px}',
      '.dsh-gensokyo-character .dsh-gensokyo-status{flex-wrap:wrap}',
      '.dsh-gensokyo-character input,.dsh-gensokyo-character select{max-width:100%;box-sizing:border-box}',
      '.dsh-gensokyo-character input{cursor:text}',
      '.dsh-gensokyo-preview{display:inline-flex;align-items:center;gap:8px;color:var(--dsw-alias-label-secondary);font-size:13px}',
      '.dsh-gensokyo-preview svg{width:24px;height:24px;flex:none}',
      ':is([data-chat-running],.bt-typing)[data-gensokyo-character] :has(>svg[data-gensokyo-icon])',
      '>:not([data-gensokyo-icon]){display:none!important}',
      ':is([data-chat-running],.bt-typing) svg[data-gensokyo-icon]{position:absolute;inset:0;width:100%;height:100%;display:block}',
      'svg[data-gensokyo-icon]{fill:none;stroke:currentColor;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round;',
      'color:var(--gensokyo-accent);color:color-mix(in srgb,var(--gensokyo-accent) 66%,var(--dsw-alias-label-primary,currentColor))}',
      '@media(forced-colors:active){svg[data-gensokyo-icon]{color:CanvasText}}',
      '@media(prefers-reduced-motion:no-preference){',
      'svg[data-gensokyo-icon] path{transform-origin:center;transform-box:view-box;animation:var(--gensokyo-motion) 2s ease-in-out infinite}',
      'svg[data-gensokyo-motion="float"]{--gensokyo-motion:gensokyo-float}',
      'svg[data-gensokyo-motion="swing"]{--gensokyo-motion:gensokyo-swing}',
      'svg[data-gensokyo-motion="pulse"]{--gensokyo-motion:gensokyo-pulse}',
      'svg[data-gensokyo-motion="spin"] path{animation:gensokyo-spin 5s linear infinite}',
      '@keyframes gensokyo-float{0%,100%{transform:translateY(1px)}50%{transform:translateY(-1.5px)}}',
      '@keyframes gensokyo-swing{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(9deg)}}',
      '@keyframes gensokyo-pulse{0%,100%{transform:scale(.86)}50%{transform:scale(1)}}',
      '@keyframes gensokyo-spin{to{transform:rotate(360deg)}}}',
    ].join('');
    const STYLE_KEY = 'dsh-gensokyo-status/control.css';

    function installStyle() {
      if (typeof document === 'undefined' || document.querySelector(`style[data-plugin-css="${STYLE_KEY}"]`)) return;
      const style = document.createElement('style');
      style.dataset.plugin = 'dsh-gensokyo-status';
      style.dataset.pluginCss = STYLE_KEY;
      style.textContent = CSS;
      document.head.appendChild(style);
      return () => style.remove();
    }

    function CharacterControl() {
      const selected = React.useSyncExternalStore(subscribeSettings, getCharacter, getCharacter);
      const [filter, setFilter] = React.useState('');
      const [sample] = React.useState(() => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]);
      const current = characterById.get(selected);
      const preview = current ?? sample;
      const query = filter.trim().toLowerCase();
      const groups = new Map();
      const matches = item => [item.name, item.id, item.group, item.motif].some(value => value.toLowerCase().includes(query));
      for (const item of CHARACTERS) {
        if (!matches(item)) continue;
        if (!groups.has(item.group)) groups.set(item.group, []);
        groups.get(item.group).push(h('option', { key: item.id, value: item.id }, item.name));
      }
      return h('div', { className: 'dsh-gensokyo-character' },
        h('label', { className: 'dsh-gensokyo-status' }, '搜索角色',
          h('input', {
            className: 'dsh-gensokyo-status__select', type: 'search', value: filter,
            'aria-label': '搜索角色', placeholder: '角色名、作品或图案',
            onChange: event => setFilter(event.target.value),
          }),
        ),
        h('label', { className: 'dsh-gensokyo-status' }, '运行角色',
          h('select', {
            className: 'dsh-gensokyo-status__select', value: selected, 'aria-label': '运行角色',
            onChange: event => { writeCharacter(event.target.value); setFilter(''); },
          },
          h('option', { value: 'random' }, '每轮随机'),
          current && !matches(current) && h('option', { value: current.id }, current.name),
          ...Array.from(groups, ([group, options]) => h('optgroup', { key: group, label: group }, ...options))),
        ),
        groups.size === 0 && h('span', { role: 'status' }, '没有匹配的角色'),
        preview && h('div', { className: 'dsh-gensokyo-preview' },
          h('svg', {
            viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false',
            'data-gensokyo-icon': preview.id, 'data-gensokyo-motion': preview.motion,
            style: { '--gensokyo-accent': preview.color },
          }, h('path', { d: preview.path })),
          current ? preview.motif : `随机示例 · ${preview.name} · ${preview.motif}`,
        ),
      );
    }

    function ModeControl() {
      const selected = React.useSyncExternalStore(subscribeSettings, getMode, getMode);
      const displayTime = React.useSyncExternalStore(subscribeSettings, getShowTime, getShowTime);
      return h('div', { className: 'dsh-gensokyo-settings' },
        h('label', { className: 'dsh-gensokyo-status' }, '运行文案',
          h('select', {
            className: 'dsh-gensokyo-status__select',
            value: selected,
            'aria-label': '幻想乡运行状态',
            onChange: event => writeMode(event.target.value),
          }, ...MODE_OPTIONS.map(option => h('option', { key: option.value, value: option.value }, option.label))),
        ),
        h('label', { className: 'dsh-gensokyo-status' },
          h('input', {
            type: 'checkbox',
            checked: displayTime,
            onChange: event => writeShowTime(event.target.checked),
          }),
          '显示运行时间',
        ),
        h(CharacterControl),
      );
    }

    function startObserver() {
      if (typeof document === 'undefined' || typeof MutationObserver === 'undefined') return () => {};
      rewriteDocument();
      const observer = new MutationObserver(records => {
        const containers = new Set();
        for (const record of records) {
          if ((record.attributeName === 'data-holding' || record.attributeName === 'data-exiting')
              && !record.target.hasAttribute(record.attributeName)) {
            characterSelector.forget(record.target);
          }
          const parent = closestRunning(record.target);
          if (parent) containers.add(parent);
          for (const node of record.addedNodes || []) {
            runningContainersWithin(node).forEach(item => containers.add(item));
          }
        }
        for (const container of edited.keys()) {
          if (!container.isConnected) restoreContainer(container);
        }
        for (const container of containers) {
          if (!container.isConnected) continue;
          rewriteContainer(container);
          if (container.matches(NATIVE)) {
            const flow = container.closest(FLOW);
            flow?.querySelectorAll(BOT).forEach(rewriteContainer);
          }
        }
      });
      observer.observe(document.documentElement, {
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['data-shimmer', 'data-shimmer-text', 'data-holding', 'data-exiting'],
        subtree: true,
      });
      return () => {
        observer.disconnect();
        edited.forEach((_nodes, container) => restoreContainer(container));
        labelSelector.reset();
        characterSelector.reset();
      };
    }

    function apply(ctx) {
      ctx.effect(installStyle, 'gensokyo-status: mode selector style');
      ctx.effect(startObserver, 'gensokyo-status: running text observer');
      ctx.slots.inject('settings.section', () => ctx.slots.register({
        name: 'settings.section',
        id: 'gensokyo-status',
        label: '幻想乡运行状态',
        order: 100,
      }, ModeControl));
    }

    const inject = ['slots'];

    exports.apply = apply;
    exports.inject = inject;
    exports.ModeControl = ModeControl;
    exports.CharacterControl = CharacterControl;
    exports.__internals = {
      LABELS,
      MODES,
      MODE_OPTIONS,
      CHARACTERS,
      normalizeCharacter,
      createCharacterSelector,
      normalizeMode,
      chooseLabel,
      createLabelSelector,
      textNodesWithin,
      formatCaption,
      rewriteRunning,
      restoreContainer,
    };
    return module.exports;
  },
});
