var RN_data = [
    "陈鑫宇",
    "陈彦铭",
    "程睿",
    "邓嘉睿",
    "方羿锟",
    "费彦哲",
    "皇甫俞定",
    "黄思哲",
    "蒋宇涵",
    "金于竣",
    "兰思默",
    "李赞阳",
    "李哲恺",
    "刘嘉峻",
    "刘星宇",
    "刘弈熙",
    "龙智宇",
    "唐子越",
    "汪敬翔",
    "王伯元",
    "翁子敬",
    "许容川",
    "颜伟顺",
    "杨晨宇",
    "姚嘉健",
    "殷晟桓",
    "於昭默",
    "张宇辰",
    "赵泓棣",
    "赵乙和",
    "支绍瑜",
    "周宇轩",
    "陈婧宜",
    "程毓茜",
    "何培露",
    "贺紫莹",
    "黄乐怡",
    "凌菡",
    "刘雅睿",
    "沈亦乐",
    "王成皿",
    "王嘉祎",
    "吴徐芸",
    "姚乐媛",
    "余金筱",
    "余欣冉",
    "周欣樾",
    "庄旖画"
];


function getRN() {

    var len = RN_data.length;
    var num = Math.floor((Math.random() * len));
    var RN = RN_data[num];

    return RN;
}
function setRN() {

    var RN = getRN()
    document.getElementById("RN").innerHTML = RN;
}