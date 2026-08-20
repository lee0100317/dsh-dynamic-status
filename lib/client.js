window.__ModuleLoader__.load({
  id: "@lee0100317/dsh-dynamic-status",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    // ── Civ 6 科技/人文引言 ──────────────────────────────────────
    // 207 条，来自《文明6》Vanilla_zh_Hans_CN.xml 中的 TECH/CIVIC QUOTE
    // 科技或市政完成时展示的幽默/哲理引言

    var STATUS_MESSAGES = {
    zh: [
      "最初，世界混沌一片，有的只是无尽的虚空。随后太阳照耀沉睡中的地球。这个旋转的大漩涡融合了火、空气和水，第一个生命的萌芽出现了。",
      "从来没有人弄湿黏土后就不管了，就像粘土可以变成砖块以此发家致富。 ——普鲁塔克",
      "我认为粘土在技艺精湛的制陶工人手中肯定会感到快乐。 ——珍妮特·菲奇",
      "如果天堂里没有狗，那么我死后，我想到狗去的地方去。 ——威尔·罗杰斯",
      "我喜欢猪。狗崇拜人类。猫鄙视人类。猪对我们一视同仁。 ——温斯顿·丘吉尔",
      "有谁能比矿工妻子更值得 信任？ ——莫尔·特拉维斯",
      "不要一错再错。 ——威尔·罗杰斯",
      "大船可以多冒险，而小船则不能离岸太远。 ——本杰明·富兰克林",
      "我并不是厌恶陆地上的生活。但生活在海上会让我更开心。 ——德瑞克爵士",
      "我不相信星座。我是射手座，天生多疑。 ——亚瑟·查理斯·克拉克",
      "不懂星座的医生没资格称自己为医生。 ——希波克拉底",
      "没有爱可以活下去，但没有水，没人能生存下来。 ——威斯坦·休·奥登",
      "一个有足够勇气的人才会去植树造林，一个城市的灌溉系统比它的征服者更具意义。 ——约翰·汤姆森爵士",
      "我朝天空射箭。不知箭落何方。 ——亨利·沃兹沃思·朗费罗",
      "但愿邪恶力量永远无法触及你。 ——乔治·卡林",
      "写作意味着分享。分享是人类社会的一部分——思想、想法、意见。 ——保罗·科埃略",
      "写作很简单。你所要做的就是把错误的词语划掉。 ——马克·吐温",
      "我们每个人都能雕刻石头、建造圆柱、或切割一块彩色玻璃来建造比我们本身大得多的东西。 ——伍冰枝",
      "残暴的战争把铜像推翻，内讧把城池荡成一片废墟。 ——威廉·莎士比亚",
      "青铜制品是一种形态反射，是滋润心灵的美酒。 ——埃斯库罗斯",
      "我也对创造一份不朽的遗产感兴趣…因为青铜制品会维持数千年。 ——理查德·麦克唐纳",
      "有时轮子旋转缓慢，但至少它在转动。 ——洛恩·迈克尔斯",
      "不要另起炉灶；只需稍作调整。 ——安东尼·安吉洛",
      "我要的只是一艘高高的船，一颗星星为我导航。 ——约翰·梅斯菲尔德",
      "按照星星，而不是按照过往船只的灯光设定航向。 ——奥马尔·布拉德利",
      "财富不在于多得，而在于少欲。 ——爱比克泰德",
      "钱如果没有给你带来幸福，至少也能让你在舒适中痛苦。 ——海伦·格蕾·布朗",
      "没有浪费任何时间在马鞍上。 ——温斯顿·丘吉尔",
      "骑马的人在精神和体格方面都比走路的人强。 ——约翰·斯坦贝克",
      "万物都有极限——铁矿石不可能被打造成黄金。 ——马克·吐温",
      "我无法想象出人类是在什么情况下造出了船…现代造船已不止于此。 ——皇家邮轮泰坦尼克号船长爱德华·约翰·史密斯",
      "在水手和来世之间除了块厚木板，什么也没有。 ——汤姆斯·吉本斯",
      "没有数学，你什么也做不了。你周围的一切都是数学。你周围的一切都是数字。 ——夏琨塔拉·戴维",
      "如果我再次进行研究，我会听从柏拉图的建议，从数学开始。 ——伽利略·伽利雷",
      "用心创作；用知识建造。 ——克里斯·杰米",
      "宇宙的四个基本成分是水、火、砂砾和乙烯基。 ——戴夫·巴里",
      "萝卜青菜各有所爱。 ——罗伯特·海因莱因",
      "正常人认为东西没坏就别修它。工程师认为东西没坏是它功能太少。 ——斯科特·亚当斯",
      "战术意味着用你所拥有的东西做你所能做的事。 ——索尔·阿林斯基",
      "在工艺方面，我们都是学徒，从未出现过大师。 ——欧内斯特·海明威",
      "训练学徒是没有捷径的。我的方法是示范和不停的指责。 ——雷蒙·斯尼奇",
      "像马镫一样的简单发明很少，也没几个会像马镫那样对历史产生强大的推动作用。 ——林·怀特",
      "在马镫和地面之间，我祈求宽恕，我获得了宽容。 ——威廉·卡姆登",
      "我会想象世界就是一个机器。机器不会有多余零件。它们永远都是需要多少就有多少。 ——雨果·卡布里特",
      "记住：不仅是机器，人类自己也会出毛病。 ——格雷戈里•本福德",
      "教育的目的是用充实的知识取代空虚的头脑。 ——迈尔康·福布斯",
      "受教育的标志是你可以不接受一种观点，但你能够容纳它。 ——亚里士多德",
      "猛攻——修建——战争 ——美国第十六工兵旅的座右铭",
      "如果科学过多干涉战争，野战军队会需要更多工程师；战争后期，任何时候都没有足够的工兵。 ——伯纳德·蒙哥马利",
      "前路有危险？我并不会避开它们。最危险的地方就是最安全的地方。 ——内莫·诺克斯",
      "如果你看见了云雾笼罩的城堡，那么请一定走向那里去实现你非凡的梦想吧。 ——穆罕默德·穆拉特·伊尔登",
      "流浪者不一定都迷失了方向。 ——约翰·罗纳德·瑞尔·托尔金",
      "人们可以选择任何颜色的T型车——只要它是黑的。 ——亨利·福特",
      "那些可以被贴上标签、包装、进行大量生产的东西既不是真理也不是艺术。 ——马蒂·鲁宾",
      "如果你欠银行100美元，你会有麻烦。如果你欠银行1亿美元，有麻烦的是银行。 ——保罗·盖蒂",
      "我看到银行说它们24小时营业，但我没那么多时间去那里玩。 ——史蒂夫·赖特",
      "火药的真正用途是让所有人都长高。 ——托马斯·卡莱尔",
      "人是一种军事动物，对火药引以为豪，并且喜欢游行。 ——菲利普·贝利",
      "笔没有剑重，但可能印刷机的威力比攻城器大。寥寥数语就能改变一切。 ——泰瑞·普莱契",
      "正如火药改变了战争的形式，印刷机也改变了思想传播的方式。 ——温德尔·菲利浦斯",
      "世界上某些地方人类无法靠近，但帆船却可以。 ——艾伦·维利耶",
      "推动船前行的并不是高耸的帆篷，而是看不见的风。 ——英国谚语",
      "天文学吸引人们仰望上苍，引导我们了解其他世界。 ——柏拉图",
      "当你不是一个天文学家时，天文学更有趣。 ——布赖恩·梅",
      "最先，火神赫菲斯托斯做了一个超级厉害的巨大盾牌…他在盾牌上锻造了两座宏伟城市。 ——荷马",
      "不要随意评判一个人，除非你经历过他所经历的。 ——雷克·莱尔顿",
      "故上兵伐谋，其次伐交， 其次伐兵，其下攻城。攻城之法为不得已。 ——孙子",
      "所有的罗曼史都在绽放在美好的事物之间。 ——迈尔斯·卡梅隆",
      "我认为工业革命初期，人类犯了一个错误，我们直接跨越到了机械化的东西。人们需要使用双手来感受创造力。 ——安德鲁·诺顿",
      "暴力经济学的关键词是城市化、工业化、集中、效率、数量、速度。 ——舒马赫",
      "声称无法验证，并认定不会受这些毫无价值的反驳证据的影响，他们可能产生的价值鼓舞了我们，或让我们感到惊奇无比。 ——卡尔·萨根",
      "如果事实和理论不符，那么就修改事实。 ——阿尔伯特·爱因斯坦",
      "有件事可用来推测发生了什么，但我们没有妄自揣测，直到弹道学证实了发生的一切… ——约翰·汉森",
      "不管战略多美妙，偶尔看看结果如何很重要。 ——温斯顿·丘吉尔",
      "没人发起战争——更确切地说，没有一个有理性的人会这样做——他没想清楚通过战争获得什么，以及具体打算如何去做。 ——卡尔·冯·克劳塞维茨",
      "发明蒸汽机的科学进步是否让人类受益，这是一个有争议的问题。 ——温斯顿·丘吉尔",
      "蒸汽机对科学的贡献远远大于科学对蒸汽机的贡献。 ——劳伦斯· 亨德尔森",
      "过去200年里，在挽救生命与改善健康状况方面，没有任何一项创新可以与此次由盖厕所而引发的卫生革命所产生的意义相提并论。 ——西尔维娅·伯韦尔",
      "除卫生设备、医疗、教育、葡萄酒、公共秩序、道路、淡水系统和公共卫生以外…罗马人还为我们做了什么？ ——约翰·克里斯",
      "经济学这门学科不太尊重个人意愿。 ——尼基塔·赫鲁晓夫",
      "普通人通过马路或铁路去往各地，但经济学家沿着基础设施继续他的旅程。 ——玛格丽特·撒切尔",
      "事实胜于雄辩。 ——克莱格·罗伯茨",
      "只有站在客观公正的立场才能作出最准确的判断。 ——第二目标公司",
      "一旦尝过飞行的滋味，便会永远仰望天空，因为你曾去过那里，并且渴望回到那里。 ——列奥纳多·达·芬奇",
      "如果着陆后你能安全走出机舱，那这个着陆还不错；如果第二天你还能继续使用这架飞机，那这个着陆简直棒呆啦。 ——查克·叶格",
      "一台机器以平稳且可预见的方式运行，它的部件必须符合标准，这样才能更换。 ——查尔斯·艾森斯坦",
      "很多人爱惜汽车胜过爱惜自己的身体…但汽车部件是可以更换的。 ——帕尔默",
      "最好的钢并不总是最亮的。 ——乔·艾伯康比",
      "有三种东西特别难以穿透：钢铁、钻石以及人的本性。 ——本杰明·富兰克林",
      "如果没电，那我们就得借着烛光看电视。 ——乔治·戈布尔",
      "虽然说本杰明·富兰克林发现了电，但他也发明了计量器并赚了很多钱。 ——厄尔·威尔逊",
      "没有无线电的世界是聋人世界。 ——欧内斯特·耶博阿",
      "收音机是心灵剧院；电视是蠢人剧院。 ——史蒂夫·艾伦",
      "化学是物理当中令人讨厌的一部分。 ——彼得·瑞斯",
      "化学家通常说话不结巴。如果结巴的话会非常尴尬，因为他们有时需要说出一大串化学术语。 ——威廉·克鲁克斯爵士",
      "当我们还是小孩儿时，汽车没那么先进。归根结底，汽车仍然只是一台汽油内燃机。 ——德纳·布鲁奈蒂",
      "我一直认为用内燃机来替代马匹是人类历史进程中一件很令人沮丧的事。 ——温斯顿·丘吉尔",
      "飞机确实又快又实惠，不过一味追求效率，我们得失去多少快乐，牺牲多少休闲时光啊。 ——金吉·罗杰斯",
      "假如老天有意让人飞行，它将让人更加安逸的抵达机场。 ——乔治·温特斯",
      "科学火箭神话被编成了神话，这和它真正的困难不相称。 ——约翰·卡马克",
      "当你发射一枚火箭，你并不是真正让火箭自己飞行。它的一切都在你的掌控中。 ——迈克尔·安德森",
      "在理性的子弹面前，无知的勇气是没用的。 ——乔治·巴顿",
      "把月亮作为你的目标。 如果没打中，也许还能打中星星。 ——克莱门特·斯通",
      "有意义的战斗胜过无意义的生活。 ——乔治·史密斯·巴顿",
      "战争中最不可估量的东西是人的意志力。 ——李德·哈特",
      "在主要可塑性物质的层级结构里，塑料制品是一种不受待见的材料，它消失在橡胶的热情洋溢和金属的平坦坚硬之中。 ——罗兰·巴特",
      "这世间没有什么是永恒的。除了塑料。 ——帕特丽夏·邓恩",
      "人都会犯错，但是想真正把事情搞砸你还需要一台计算机。 ——保罗·埃利希",
      "电脑的优点和缺点是你让它做什么，它就做什么。 ——泰德·尼尔森",
      "文化里充斥着太多的塑料，以致于含乙烯基的塑料美洲豹兽皮变成了濒临灭绝的合成物。 ——莉莉·汤姆林",
      "沃森先生…过来一下…我想见你。 ——亚历山大·格雷厄姆·贝尔",
      "沟通的最大问题是会产生错觉。 ——乔治·萧伯纳",
      "卫星没有意识。 ——爱德华·默罗",
      "现在世界各地有31颗卫星在快速移动，除了帮你找到如何去杂货店以外，也没其他用处了。 ——伯内特",
      "生大材，不遇其时，其势定衰。生平庸，不化其势，其性定弱。 ——老子",
      "我喜欢看我妈在回家路上同导航仪争论。 ——伊莎贝拉·弗尔曼",
      "我是一个超级激光信徒——我相信它们肯定是未来潮流。 ——柯特妮·考克斯",
      "所有物质事物看起来都是由硬粒子和固相颗粒组成…在很多方面，都和智能主体决策创造的第一个产物联系在一起。 ——艾萨克·牛顿",
      "我想说的是隐形是一种有趣的能力，你可以穿过世界看看它到底是什么样子，而没人能看到你。 ——凯文·贝肯",
      "在艺术和梦想中，也许你继续放纵；在生命里，也许你依旧在平衡和蛰伏。 ——帕蒂·史密斯",
      "机器人技术永远存在，它永远都是下一件大事，这项技术如此让人兴奋，如此扣人心弦，以至于很容易得意忘形。 ——科林·安格尔",
      "I'll be back.",
      "如果科技能推动变革，那么纳米科技是人类未来的推动力。 ——娜塔莎·维塔莫尔",
      "很多规则在纳米技术面前低下了头…由此产生了很多好处，当然也有很多坏处。 ——马特·斯皮尔",
      "没有什么比梦想更能创造未来。 ——维克多·雨果",
      "虽然未来似乎很遥远，但其实已经开始了。 ——马提·史提潘尼克",
      "不是智慧，而是权力制定了法律。 ——托马斯·霍布斯",
      "人在状态最好时，是最高贵的 动物；但如果违背法律和正义， 他会变成最恶劣的动物。 ——亚里士多德",
      "没有技艺，灵感不过是风中摇曳的芦苇。 ——约翰内斯·勃拉姆斯",
      "缺乏想象力的技能是一门手艺，为我们提供了许多有用的东西，比如柳条编制的野餐篮。 ——汤姆·斯托帕德",
      "每个国家都以交换为生。 ——亚当·斯密",
      "我认为这是贸易的积极方面。整个世界都被搅和在一起。 ——伊莎贝尔·霍温",
      "所谓勇者，是把恐惧埋在自己心底。 ——上校大卫·哈克沃斯",
      "我不会低估军事理论的价值，但如果让军人在战争中盲目地服从命令，那他们必败无疑。 ——尤利西斯·辛普森·格兰特",
      "强大的经济始于强壮的、受过良好教育的劳动力。 ——比尔·欧文斯",
      "同样重要的是要有一个又快乐又努力工作的劳动力，这是赚钱的底线。 ——弗恩·杜希",
      "回顾过去，随着不断变换的帝国起起伏伏，你也能预见未来。 ——马可·奥里利乌斯",
      "像空调这样的奢侈品摧毁了罗马帝国。因为有空调，所以他们紧闭窗户；他们无法听到蛮族的到来。 ——加里森·凯勒",
      "神秘主义是宇宙一体论的偶然错误和个别性象征。 ——拉尔夫·瓦尔多·爱默生",
      "我想说我实践了各种激进的神秘主义。我非常确定这里面的有些事我不太懂。 ——罗布·贝尔",
      "在满足了物质需求后，人们会注重精神需求。 ——爱德华·贝拉米",
      "没有时间娱乐的人，迟早得有时间生病。 ——约翰·沃纳梅克",
      "政治是可能性艺术，可成为下一个最好的艺术。 ——奥托·冯·俾斯麦",
      "分而治之，这是至理名言。合而御之，却更显明智。 ——约翰·沃尔夫冈·冯·歌德",
      "在关于小人的话题上，诗人们神秘地保持沉默。 ——切斯特顿",
      "世界是个大舞台，所有男男女女不过是舞台上的演员而已。 ——威廉·莎士比亚",
      "如果杀人是天性，那为何人们需要学习如何杀人呢？ ——琼·贝兹",
      "别人吵架爱插嘴，一定鼻子常流血。 ——约翰·盖伊",
      "无坚不摧在于防御；而进攻才有获胜的可能。 ——孙子",
      "防御优于财富。 ——亚当·斯密",
      "我经历过一些可怕的事，有些的确发生过。 ——马克·吐温",
      "历史是人们对往事一致认定的说法。 ——拿破仑·波拿巴",
      "人类受苦是因为他们把众神作为娱乐创造的东西看的太认真了。 ——艾伦·瓦茨",
      "对战争来讲，好的海军部队不是一种挑衅。它是和平的可靠保证。 ——西奥多·罗斯福",
      "海军是传统和未来相结合的产物——在这两方面，我们都充满自豪和信心。 ——阿利·伯克",
      "在民主国家，你的投票很重要。在封建国家，你的地位很重要。 ——莫根斯·加尔贝格",
      "封建主义进步促使铁盔甲不断得到改进，直到最后出现了像犰狳一样的斗士。 ——约翰·博伊尔·奥莱利",
      "全是一些文件和表单，整个行政部门就像是用文件、表格和繁文缛节构成的堡垒。 ——亚历山大·奥斯妥夫斯基",
      "纳税者是为政府工作的人，但不需要参加公务员考试。 ——罗纳德·里根",
      "和平时期，老百姓受到雇佣兵 掠夺；战争时期，受到敌人掠夺。 ——尼可罗·马基亚维利",
      "然而，作为一个雇佣兵…嘿，我们只是去到那些既有钱又有麻烦的地方。 ——霍华德·泰勒",
      "发光的不一定都是金子；你常常会听到大家这样说。 ——威廉·莎士比亚",
      "有一些非常诚实的人，他们认为自己不需要讨价还价，直到某一天，他们被商人给骗了。 ——阿纳托尔·法郎士",
      "每个人都应该让他的儿子多学习有用的商业或专业知识，这样将来才能改变命运…他们才能依靠自己的有形资产生存下来。 ——费尼斯·巴纳姆",
      "你不能去逮捕盗贼工会。我的意思是，我们已经忙了一整天了。 ——泰瑞·普莱契",
      "听着，在池塘里的奇怪妇女分发刺刀，这是毫无政策依据的…你不能因为某个水中的放荡女子给你把刀就谋权篡位。 ——巨蟒剧团",
      "一旦停止探索，我们将生活在一个停滞不前的世界，缺乏好奇心，没有梦想。 ——奈尔·德葛拉司·泰森",
      "我们不应停止探索，在所有探索的尽头，我们会回到起点，重新认识这个地方。 ——艾略特",
      "人文主义的四大特点是：好奇心、自由思想、相信好品味、相信人类。 ——E·M·福斯特",
      "不可对人性失去信心。 人性就像大海；虽然海洋中会有几滴水是脏的，但大海不会变脏。 ——圣雄甘地",
      "外交领域有两个问题：小问题和大问题。小问题自己会消失，大问题你无可奈何。 ——帕特里克·麦基尼斯",
      "外交官只记得女人的生日而不记得她的年龄。 ——罗伯特·弗罗斯特",
      "但是在市场经济条件下，个人可能会逃脱国家的管束。 ——彼得·伯格",
      "在见识了非市场经济后，我突然更明白了我喜欢市场经济的哪些方面。 ——艾瑟·戴森",
      "新观念总是遭到怀疑和反对，没有别的原因，只是因为人们习惯于旧的东西。 —— 约翰·洛克",
      "任何违反自然的东西都是违反理智的，任何和理智相悖的东西都是荒诞可笑的。 ——巴鲁赫·斯宾诺莎",
      "改造使弯路变得笔直；但未经改造的弯路才是成就天才之路。 ——威廉·布雷克",
      "人们设计傻瓜式设备时，最常见的一个错误是低估了大傻瓜的独创性。 ——道格拉斯·亚当斯",
      "歌剧是，当一个人背后被捅了 一刀，他不流血，他唱歌剧。 ——罗伯特·本奇利",
      "芭蕾表达出一种脆弱的力量和一种不会改变的精致。 ——艾茵·兰德",
      "如果我参与造物，我会提出一些有用的建议使宇宙秩序更加和谐。 ——纳尔逊·艾格林",
      "在所有自然历史著作中，我们不断发现关于动物对食物、习性以及它们生活场所不可思议的适应性的详细记载。 ——阿尔弗雷德·华莱士",
      "我只懂友谊或焦土策略。 ——罗杰·艾尔斯",
      "工业革命和城市规模的增长让人感到渺小。 ——温特·瑟夫",
      "我喜欢城市里所有的东西都 很巨大，一切的美丽和丑陋。 ——约瑟夫·布罗茨基",
      "“总想离财富近一点，如果你足够努力，财富可能主动来找你。” ——达蒙·朗伊恩",
      "水和空气这两样生活必须品已变成全球垃圾桶了。 ——雅克·伊夫·库斯托",
      "为了经济利益破坏雨林就像燃烧一幅文艺复兴时期的绘画来烹制美食一样。 ——爱德华•威尔逊",
      "大众媒体的作用并不是让你产生信仰，而是让你保持对政党组织的兴趣。 ——克里斯托弗·拉什",
      "如果你不看报纸，你会很无知。如果你看报纸，你会被误导。 ——马克·吐温",
      "我认为生活在核时代的孩子，他们爱的能力被削弱了。当你振作精神面对这种影响时，努力去爱吧。 ——马丁·艾米斯",
      "为什么对女性区别对待？妇女参政会成功，别在乎这些可怜的游击队性质的反对派。 ——维多利亚·伍德胡尔",
      "男人的权力不能再多；女人的权力不能再少！ ——苏珊·安东尼",
      "如果输赢不代表一切，那为什么还要在比赛中记分呢？ ——文斯·隆巴迪",
      "竞技体育不能塑造人的性格。但能体现人的性格。 ——海伍德·布朗",
      "一个对历史、起源和文化不了解的人，就好比没有根的大树。 ——马库斯·加维",
      "你不是偶然发现文化遗产的。它们就在那里，等待着你去探寻和分享。 ——罗比·罗伯森",
      "立即认真执行一项好计划远比下周执行一项完美计划好。 ——乔治·史密斯·巴顿",
      "别管是不是在演习，冲向他们。 ——霍雷肖·纳尔逊",
      "我们选择在这个十年飞向月球，并做些其他的事，不是因为它们容易，而是因为它们很难。 ——约翰·肯尼迪",
      "美国宇航局花了上百万美元来研发可以在太空使用的圆珠笔。俄罗斯人带了支铅笔。 ——威尔·沙博",
      "据说，反对全球化就像反对万有引力定律。 ——科菲·安南",
      "总有一天会没有边界、没有界限、没有国旗、没有国家，人心将成为唯一的通行证。 ——卡洛斯·桑塔纳",
      "在我所有重要的毫无意义的事里面，我应该先告诉你哪一件呢？ ——简·奥斯汀",
      "被一件接一件恼人的事儿打断。 ——艾略特",
      "绝不能根据过去而规划未来。 ——埃德蒙·伯克",
      "我从不思考未来。因为它迟早会来的。 ——阿尔伯特·爱因斯坦"
    ],
    en: [
      "“No man ever wetted clay and then left it, as if there would be bricks by chance and fortune.” —Plutarch",
      "“I thought clay must feel happy in the good potter’s hand.” —Janet Fitch",
      "\"If there are no dogs in Heaven, then when I die I want to go where they went.\" Will Rogers",
      "“I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.” Winston S. Churchill",
      "\"Who deserves more credit than the wife of a coal miner?” —Merle Travis",
      "\"When you find yourself in a hole, quit digging.\" Will Rogers",
      "\"Vessels large may venture more, but little boats should keep near shore.\" -Benjamin Franklin",
      "“It is not that life ashore is distasteful to me. But life at sea is better.” —Sir Francis Drake",
      "“I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.” —Arthur C. Clarke",
      "“A physician without a knowledge of astrology has no right to call himself a physician.” Hippocrates",
      "“Thousands have lived without love, not one without water.” -W. H. Auden",
      "“The man who has grit enough to bring about the afforestation or the irrigation of a country is not less worthy of honor than its conqueror.” —Sir John Thomson",
      "“I shot an arrow into the air. It fell to earth, I knew not where.” —Henry Wadsworth Longfellow",
      "“May the forces of evil become confused while your arrow is on its way to the target.” —George Carlin",
      "“Writing means sharing. It’s part of the human condition to want to share things – thoughts, ideas, opinions.” —Paulo Coelho",
      "\"Writing is easy. All you have to do is cross out the wrong words.\" -Mark Twain",
      "“Each of us is carving a stone, erecting a column, or cutting a piece of stained glass in the construction of something much bigger than ourselves.” —Adrienne Clarkson",
      "“When wasteful war shall statues overturn, and broils root out the work of masonry.” —William Shakespeare",
      "“Bronze is the mirror of the form, wine of the mind.” —Aeschylus",
      "“I’m also interested in creating a lasting legacy… because civ 6 will last for thousands of years.” Richard MacDonald",
      "“Sometimes the wheel turns slowly, but it turns.” —Lorne Michaels",
      "“Don’t reinvent the wheel, just realign it.” —Anthony D’Angelo",
      "“And all I ask is a tall ship and a star to steer her by.” —John Masefield",
      "“Set your course by the stars, not by the lights of every passing ship.” —Omar Bradley",
      "“Wealth consists not in having great possessions, but in having few wants.” Epictetus",
      "“Money, if it does not bring you happiness, will at least help you be miserable in comfort.” – Helen Gurley Brown",
      "“No hour of life is wasted that is spent in the saddle.” —Winston Churchill",
      "“A man on a horse is spiritually as well as physically bigger than a man on foot.” —John Steinbeck",
      "“The Lord made us all out of iron. Then he turns up the heat to forge some of us into steel.” —Marie Osmond",
      "“Everything has its limit – iron ore cannot be educated into gold.” —Mark Twain",
      "“I cannot imagine any condition which would cause a ship to founder … Modern shipbuilding has gone beyond that.” —Capt. E.J. Smith, RMS Titanic",
      "“There is nothing but a plank between a sailor and eternity.” – Thomas Gibbons",
      "“Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.” —Shakuntala Devi",
      "“If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.” —Galileo Galilei",
      "“Create with the heart; build with the mind.” —Criss Jami",
      "“The four building blocks of the universe are fire, water, gravel and vinyl.” —Dave Barry",
      "“One man’s ‘magic’ is another man’s engineering.” —Robert Heinlein",
      "“Normal people … believe that if it ain’t broke, don’t fix it. Engineers believe that if it ain’t broke, it doesn’t have enough features yet.” —Scott Adams",
      "“Tactics mean doing what you can with what you have.” —Saul Alinsky",
      "“Strategy requires thought; tactics require observation.” —Max Euwe",
      "“We are all apprentices in a craft where no one ever becomes a master.” —Ernest Hemingway",
      "“There is no easy way to train an apprentice. My two tools are example and nagging.” —Lemony Snicket",
      "“Few inventions have been so simple as the stirrup, but few have had so catalytic an influence on history.” —Lynn White Jr.",
      "“Betwixt the stirrup and the ground, Mercy I asked, mercy I found.” —William Camden",
      "“I’d imagine the whole world as one big machine. Machines never come with any spare parts, you know. They always come with the exact amount they need.” —Hugo Cabret",
      "“Remember that people break down, too, not just machinery.” —Gregory Benford",
      "The purpose of education is to replace an empty mind with an open one.” —Malcolm Forbes",
      "“It is the mark of an educated mind to be able to entertain a thought without accepting it.” Aristotle",
      "“Blast – Build – Battle” —Motto of the U.S. 16th Engineer Brigade",
      "“The more science intervenes in warfare, the more will be the need for engineers in the field armies; in the late war there were never enough sappers at any time.” —Bernard Montgomery",
      "“Rocks in my path? I keep them all. With them I shall build my castle.” —Nemo Nox",
      "“If you see a castle under fog, you must walk there to meet the extraordinary dreams.” —Mehmet Murat Ildan",
      "“If your actions inspire others to dream more, learn more, do more and become more, you are a cartographer.” —John Quincy Adams",
      "“Not all who wander are lost.” —J.R.R. Tolkien",
      "“People can have the Model T in any color – so long as it’s black.” —Henry Ford",
      "“What can be labeled, packaged, mass produced is neither truth nor art.” —Marty Rubin",
      "“If you owe the bank $100 that’s your problem. If you owe the bank $100 million, that’s the bank’s problem.” —J. Paul Getty",
      "“I saw a bank that said ’24-Hour Banking,’ but I didn’t have that much time.” —Steven Wright",
      "“The real use of gunpowder is to make all men tall.” —Thomas Carlyle",
      "“Man is a military animal, glories in gunpowder, and loves parades.” —Philip Bailey",
      "“The pen might not be mightier than the sword, but maybe the printing press is heavier than the siege weapon. Just a few words can change everything.” —Terry Pratchett",
      "“What gunpowder did for war the printing press has done for the mind.” Wendell Phillips",
      "“There is little man has made that approaches anything in nature, but a sailing ship does.” —Allan Villiers",
      "“It’s not the towering sails, but the unseen wind that moves a ship.” —English Proverb",
      "“Astronomy compels the soul to look upwards and leads us from this world to another.” Plato",
      "“Astronomy’s much more fun when you’re not an astronomer.” —Brian May",
      "“And first Hephaestus makes a great and massive shield … And he forged on the shield two noble cities.” —Homer",
      "“Don’t judge someone until you’ve stood at his forge and worked with his hammer.” —Rick Riordan",
      "“The lowest is to attack a city. Siege of a city is only done as a last resort.” —Sun Tzu",
      "“All the best romances bloom in the midst of a good siege.” —Miles Cameron",
      "“I think the human race made a big mistake at the beginning of the Industrial Revolution, we leaped for the mechanical things. People need the use of their hands to feel creative.” —Andre Norton",
      "“The key words of violent economics are urbanization, industrialization, centralization, efficiency, quantity, speed.” —E.F. Schumacher",
      "“Claims that cannot be tested, assertions immune to disproof are veridically worthless, whatever value they may have in inspiring us or exciting our sense of wonder.” —Carl Sagan",
      "“If facts don’t fit the theory, change the facts.” —Albert Einstein",
      "“It’s one thing to surmise what happened, but we don’t speculate on that until ballistics confirms what happened …” —John Hansen",
      "“Let’s get on our knees and pray. I don’t know to whom. Is there a patron saint of ballistics yet?” —Adam Savage",
      "“However beautiful the strategy, you should occasionally look at the results.” —Winston Churchill",
      "“No one starts a war – or rather, no one in his senses ought to do so – without first being clear in his mind what he intends to achieve by that war and how he intends to conduct it.” —Karl von Clausewitz",
      "“It is arguable whether the human race have been gainers by the march of science beyond the steam engine.” —Winston Churchill",
      "“Science owes more to the steam engine than the steam engine owes to science.” —Lawrence Henderson",
      "“No innovation in the past 200 years has done more to save lives and improve health than the sanitation revolution triggered by the invention of the toilet.” —Sylvia Burwell",
      "“Apart from the sanitation, the medicine, education, wine, public order, roads, the fresh water system, and public health … what have the Romans ever done for us?” —Graham Chapman",
      "“Economics is a subject that does not greatly respect one’s wishes.” —Nikita Khrushchev",
      "\"You and I come by road or rail, but economists travel on infrastructure.\" Margaret Thatcher",
      "“Bolt actions speak louder than words.” —Craig Roberts",
      "“Never criticize a rifleman until you have walked a mile in his shoes. That way, he’ll be barefoot and you’ll be out of range.” —The 2nd Target Company",
      "“For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return.” —Leonardo da Vinci",
      "“If you can walk away from a landing, it’s a good landing. If you use the airplane the next day, it’s an outstanding landing.” —Chuck Yeager",
      "“For a machine to run smoothly and predictably, its parts must be standard and hence replaceable.” —Charles Eisenstein",
      "“Many of us take better care of our automobiles than we do of our own bodies … yet the auto has replaceable parts.\" —B.J. Palmer",
      "“The best steel doesn’t always shine the brightest.” —Joe Abercrombie",
      "“There are three things extremely hard: steel, a diamond, and to know one’s self.” —Benjamin Franklin",
      "“If it weren’t for electricity, we’d all be watching television by candlelight.” —George Gobel",
      "“Benjamin Franklin may have discovered electricity, but it was the man who invented the meter who made the money.” —Earl Wilson",
      "“A world without radio is a deaf world.” —Ernest Yeboah",
      "“Radio is the theater of the mind; television is the theater of the mindless.” —Steve Allen",
      "“Chemistry is the dirty part of physics.” —Peter Reiss",
      "“Chemists do not usually stutter. It would be very awkward if they did, seeing that they have at times to get out such words as methylethylamylophenylium.” —Sir William Crookes",
      "“The cars haven’t advanced that much since we were kids. When you boil it down, it’s still a gas combustion engine.” —Dana Brunetti",
      "“I have always considered that the substitution of the internal combustion engine for the horse marked a very gloomy milestone in the progress of mankind.” —Winston Churchill",
      "“Sure, jets are fast and economical, but, oh my, what fun we’ve lost and what leisure we’ve sacrificed in the race for efficiency.” —Ginger Rogers",
      "“If God had really intended men to fly, He’d make it easier to get to the airport.” —George Winters",
      "“Rocket science has been mythologized all out of proportion to its true difficulty.” —John Carmack",
      "“When you launch a rocket, you’re not really flying that rocket. You’re just sort of hanging on.” —Michael P. Anderson",
      "“Untutored courage is useless in the face of educated bullets.” —George Patton",
      "“Aim for the moon. If you miss, you may hit a star.” —W. Clement Stone",
      "“Better to fight for something than live for nothing.” George S. Patton",
      "\"The chief incalculable in war is the human will.\" B.H. Liddell Hart.",
      "“In the hierarchy of the major poetic substances, plastic figures as a disgraced material, lost between the effusiveness of rubber and the flat hardness of metal.” —Roland Barthes",
      "“Nothing on this earth lasts forever. Except maybe plastic.” —Patricia Dunn",
      "“To err is human, but to really foul things up you need a computer.” —Paul R. Ehrlich",
      "“The good thing about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.” —Ted Nelson",
      "“If you go on with this nuclear arms race, all you are going to do is make the rubble bounce.” —Winston Churchill",
      "\"Leave the atom alone.\" E. Y. Harburg",
      "“There’s so much plastic in this culture that vinyl leopard skin is becoming an endangered synthetic.” —Lily Tomlin",
      "\"There may be no forgiveness for polyester. On this one matter, Satan and the Lord are in agreement.” —Joe Hill",
      "“Mr. Watson… Come here… I want to see you.\" Alexander Graham Bell",
      "“The single biggest problem in communication is the illusion that it has taken place.” —George Bernard Shaw",
      "“A satellite has no conscience.” —Edward R. Murrow",
      "“Right now there are thirty-one satellites zipping around the world with nothing better to do than help you find your way to the grocery store.” —Ed Burnette",
      "“If you do not change direction, you may end up where you were heading.” —Lao Tzu",
      "“I love watching my mom argue with the GPS on the way home.” —Isabelle Fuhrman",
      "“When God said, ‘Let there be light,’ he surely must have meant perfectly coherent light.” —Charles Townes",
      "“I’m a big laser believer – I really think they are the wave of the future.” —Courteney Cox",
      "“All material things seem to have been composed of the hard and solid particles … variously associated with the first Creation by the counsel of an Intelligent Agent.” —Isaac Newton",
      "“It is obvious that while science is struggling to bring Heaven to Earth some men are using its materials in the construction of Hell.” —Herbert Hoover",
      "\"I would say invisibility would be sort of a fun power to have just to see what it was like to move through the world and not be looked at.\" Kevin Bacon",
      "“In art and dream may you proceed with abandon. In life may you proceed with balance and stealth.” —Patti Smith",
      "“Robotics has been around forever, and it’s been the next big thing forever, and it is so exciting and compelling that it’s easy to get carried away.” —Colin Angle",
      "“I’ll be back.”",
      "“If technology is the engine of change, then nanotechnology is the fuel for humanity’s future.” —Natasha Vita-More",
      "“Many, many rules had begun to bend at the hand of nanotechnology … This produced a lot of good, and a lot of bad.” —Matt Spire",
      "“There is nothing like a dream to create the future.” —Victor Hugo",
      "“Even though the future seems far away, it is actually beginning right now.” —Mattie Stepanek",
      "“I am a big proponent of harnessing the power of fusion – from 93 million miles away. Fusion is done by our sun really, really well and for free. Here on Earth in reactors, not so much.” —Joe Romm",
      "“When we look up at night and view the stars, everything we see is shining because of distant nuclear fusion.” —Carl Sagan",
      "“It is not wisdom but authority that makes a law.” —Thomas Hobbes",
      "“At his best, man is the noblest of all animals; separated from law and justice he is the worst.” —Aristotle",
      "“Without craftsmanship, inspiration is a mere reed shaken in the wind.” – Johannes Brahms",
      "“Skill without imagination is craftsmanship and gives us many useful objects such as wickerwork picnic baskets.” —Tom Stoppard",
      "“Every nation lives by exchanging.” —Adam Smith",
      "“That’s the positive aspect of trade I suppose. The world gets stirred up together.” —Isabel Hoving",
      "“Bravery is being the only one who knows you’re afraid.” — Colonel David Hackworth",
      "“I don’t underrate the value of military knowledge, but if men make war in slavish obedience to rules, they will fail.” —Ulysses S. Grant",
      "“A strong economy begins with a strong, well-educated workforce.” —Bill Owens",
      "“It is equally important to have a happy and engaged workforce as it is to have a profitable bottom line.” —Vern Dosch",
      "\"Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too.\" Marcus Aurelius",
      "“It was luxuries like air conditioning that brought down the Roman Empire. With air conditioning their windows were shut; they couldn’t hear the barbarians coming.” – Garrison Keillor",
      "“Mysticism is the mistake of an accidental and individual symbol for a universal one.” —Ralph Waldo Emerson",
      "“I like to say I practice militant mysticism. I’m absolutely sure of some things that I don’t quite know.” —Rob Bell",
      "“If bread is the first necessity of life, recreation is a close second.” —Edward Bellamy",
      "“People who cannot find time for recreation are sooner or later to find time for illness.” —John Wanamaker",
      "“Politics is the art of the possible, the attainable – the art of the next best.” —Otto von Bismarck",
      "“Divide and rule, a sound motto. Unite and lead, a better one.” —Johann Wolfgang von Goethe",
      "\"The poets have been mysteriously silent on the subject of cheese.\" G. K. Chesterton",
      "“All the world’s a stage, and all the men and women merely players.” —William Shakespeare",
      "“If it’s natural to kill, how come men have to go into training to learn how?” —Joan Baez",
      "\"Those who in quarrels interpose, must often wipe a bloody nose.\" John Gay",
      "“Invincibility lies in the defense; the possibility of victory in the attack.” —Sun Tzu",
      "“Defense is superior to opulence.” —Adam Smith",
      "\"I've lived through some terrible things in my life, some of which actually happened.\" Mark Twain",
      "“History is the version of past events that people have decided to agree upon.” —Napoleon Bonaparte",
      "“We can no more have exact religious thinking without theology, than exact mensuration and astronomy without mathematics, or exact iron-making without chemistry.” —John Hall",
      "“Man suffers only because he takes seriously what the gods made for fun.” —Alan W. Watts",
      "“A good navy is not a provocation to war. It is the surest guaranty of peace.” – Theodore Roosevelt",
      "“The Navy has both a tradition and a future – and we look with pride and confidence in both directions.” —Arleigh Burke",
      "“In democracy it’s your vote that counts; in feudalism it’s your count that votes.” —Mogens Jallberg",
      "“With the advance of feudalism came the growth of iron armor, until, at last, a fighting-man resembled an armadillo.” —John Boyle O’Reilly",
      "“It’s all papers and forms, the entire civil service is like a fortress made of papers, forms and red tape.” – Alexander Ostrovsky",
      "\"The taxpayer - that's someone who works for the federal government but doesn't have to take the civil service examination.\" Ronald Reagan",
      "“In peace one is despoiled by mercenaries; in war by one’s enemies.” —Niccolo Machiavelli",
      "“Being a mercenary, though … Hey, we just go wherever there’s a mixture of money and trouble.” —Howard Tayler",
      "“All that glisters is not gold; often have you heard that told.” —William Shakespeare",
      "“There are very honest people who do not think that they have had a bargain unless they have cheated a merchant.” —Anatole France",
      "“Every man should make his son learn some useful trade or profession, so that in these days of changing fortunes … they may have something tangible to fall back upon.” —Phineas T. Barnum",
      "“You can’t go around arresting the Thieves’ Guild. I mean, we’d be at it all day!” —Terry Pratchett",
      "“I conclude then this point touching upon the power of kings with this axiom of divinity, That as to dispute what God may do is blasphemy … so it is sedition to dispute what a king may do.” —King James I",
      "“Listen, strange women lying in ponds distributing swords is no basis for a system of government … You can’t expect to wield supreme power just ‘cause some watery tart threw a sword at you!” —Monty Python",
      "“The day we stop exploring is the day we commit ourselves to live in a stagnant world, devoid of curiosity, empty of dreams.” —Neil deGrasse Tyson",
      "“We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.” —T.S. Eliot",
      "“The four characteristics of humanism are curiosity, a free mind, belief in good taste, and belief in the human race.” —E.M. Forster",
      "“You must not lose faith in humanity. Humanity is like an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty\" Mahatma Gandhi",
      "“In diplomacy there are two kinds of problems: small ones and large ones. The small ones will go away by themselves, and the large ones you will not be able to do anything about.” —Patrick McGuinness",
      "“A diplomat is a man who always remembers a woman’s birthday but never remembers her age.” —Robert Frost",
      "\"I don't like to commit myself about Heaven and Hell, you see, I have friends in both places.\" Mark Twain",
      "“The three great elements of modern civilization: gun powder, printing, and the Protestant religion.” —Thomas Carlyle",
      "“In a market economy, however, the individual has some possibility of escaping from the power of the state.” —Peter Berger",
      "“Having seen a non-market economy, I suddenly understood much better what I liked about a market economy.” —Esther Dyson",
      "“New opinions are always suspected, and usually opposed, without any other reason but because they are not already common.” —John Locke",
      "“Whatever is contrary to nature is contrary to reason, and whatsoever is contrary to reason is absurd.” —Baruch Spinoza",
      "“Remember that politics, colonialism, imperialism and war also originated in the human brain.” —Vilayanur Ramachandran",
      "“Colonialism. The enforced spread of the rule of reason. But who is going to spread it among the colonizers?” —Anthony Burgess",
      "“Improvement makes straight roads; but the crooked roads without improvement are roads of Genius.” —William Blake",
      "“A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.” —Douglas Adams",
      "“It is nationalism which engenders nations, and not the other way round.” —Ernest Gellner",
      "“Human nature, as manifested in tribalism and nationalism, provides the momentum of the machinery of human evolution.” —Arthur Keith",
      "“Opera is when a guy gets stabbed in the back and, instead of bleeding, he sings.” Robert Benchley",
      "“It [ballet] projects a fragile kind of strength and a certain inflexible precision.” —Ayn Rand",
      "\"Had I been present at the Creation, I would have given some useful hints for the better ordering of the universe.\" Nelson Algren",
      "“In all works on Natural History, we constantly find details of the marvelous adaptation of animals to their food, their habits, and the localities in which they are found.” —Alfred Wallace",
      "“War is hell.” —William Tecumseh Sherman",
      "“I only understand friendship or scorched earth.” —Roger Ailes",
      "“It’s the Industrial Revolution and the growth of urban concentrations that led to a sense of anonymity.” —Vint Cerf",
      "“What I like about cities is that everything is king size, the beauty and the ugliness.” —Joseph Brodsky",
      "“The inherent vice of capitalism is the unequal sharing of blessings; the inherent virtue of socialism is the equal sharing of miseries.” —Winston Churchill",
      "\"Always try to rub up against money, for if you rub against money long enough, some of it may rub off on you.\" Damon Runyon",
      "“Water and air, the two essentials on which life depends, have become global garbage cans.” —Jacques Yves Cousteau"
    ]
  };

        /** Pick a random message, avoiding the previous one. */
    function pickMessage(avoid, lang) {
      var pool = (STATUS_MESSAGES[lang] || STATUS_MESSAGES.zh);
      if (avoid) {
        pool = pool.filter(function (m) { return m !== avoid; });
      }
      return pool[Math.floor(Math.random() * pool.length)];
    }

    // ── TurnStatus detection ────────────────────────────────────────────
    // 采用 dsh-status-rotator 的识别策略:基于文本前缀和内部时钟结构,
    // 不依赖 getComputedStyle 等脆弱样式检测。

    /** 找到元素内第一个 aria-hidden="true" 的直接子节点(即时钟元素) */
    function clockChild(el) {
      var children = el.children;
      for (var i = 0; i < children.length; i++) {
        if (children[i].getAttribute("aria-hidden") === "true") return children[i];
      }
      return null;
    }

    /** 简单判断文本是否像钟表时长(如 "15秒" / "1分02秒" / "15s" / "1m 02s") */
    function looksLikeClock(text) {
      var t = String(text || "").trim();
      if (!t) return false;
      // 匹配常见时长格式
      return /^\d+:\d{2}(:\d{2})?$/.test(t) ||
        /^\d+分\d+秒$/.test(t) ||
        /^\d+秒$/.test(t) ||
        /^\d+m\s*\d+s$/.test(t) ||
        /^\d+s$/.test(t);
    }

    function isTurnStatusElement(el) {
      if (el.getAttribute("role") !== "status") return false;
      if (el.getAttribute("aria-live") !== "polite") return false;
      // 条件1:文本以 "Deep diving..." 开头(时钟出现前)
      if (el.textContent.trim().indexOf("Deep diving") === 0) return true;
      // 条件2:存在 aria-hidden="true" 的时钟子节点且内容像时长(时钟出现后)
      var clock = clockChild(el);
      if (clock && looksLikeClock(clock.textContent)) return true;
      return false;
    }

    // ── TurnStatus takeover ─────────────────────────────────────────────

    var takeoverTimers = [];
    var currentLang = "zh";

    // ── System dark-mode aware color ─────────────────────────────────────
    var LIGHT_COLOR = "rgb(30, 65, 170)";   // 深蓝，适合浅色背景
    var DARK_COLOR  = "rgb(255, 185, 55)";  // 琥珀金，契合文明6黄金时代主题，暗底醒目

    function isDarkMode() {
      // DSH Web GUI 通过 body[data-ds-dark-theme] 切换深色模式
      return document.body && document.body.hasAttribute("data-ds-dark-theme");
    }

    function currentColor() {
      return isDarkMode() ? DARK_COLOR : LIGHT_COLOR;
    }

    function takeoverTurnStatus(el) {
      if (el.dataset.dynamicStatusActive === "true") return;
      el.dataset.dynamicStatusActive = "true";

      // ── Override inline styles: kill shimmer, solid blue text ──
      el.style.setProperty("background", "none", "important");
      el.style.setProperty("background-image", "none", "important");
      el.style.setProperty("background-clip", "border-box", "important");
      el.style.setProperty("-webkit-background-clip", "border-box", "important");
      el.style.setProperty("background-size", "auto", "important");
      el.style.setProperty("color", currentColor(), "important");
      el.style.setProperty("-webkit-text-fill-color", currentColor(), "important");
      el.style.setProperty("animation", "none", "important");

      // ── TUI spinner frames ──────────────────────────────────────────
      var spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
      var spinnerIdx = 0;

      // Store current quote on the element so external code can update it
      el.dataset.dynamicStatusCurrent = "Deep diving...";
      var timer, spinnerTimer;

      /** 每次实时查找文本节点，应对 React 重渲染替换节点 */
      function findTextNode(el) {
        var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        return walker.nextNode();
      }

      function render() {
        if (!el.isConnected) return;
        var frame = spinnerFrames[spinnerIdx];
        spinnerIdx = (spinnerIdx + 1) % spinnerFrames.length;
        var node = findTextNode(el);
        if (node) {
          node.textContent = frame + " " + el.dataset.dynamicStatusCurrent;
        }
      }

      // ── Pick first quote immediately ───────────────────────────────
      el.dataset.dynamicStatusCurrent = pickMessage(el.dataset.dynamicStatusCurrent, currentLang);

      // ── Fast spinner loop (200ms, setInterval) ─────────────────────
      spinnerTimer = setInterval(function () {
        if (!el.isConnected) {
          clearInterval(spinnerTimer);
          return;
        }
        render();
      }, 200);

      // ── Slow quote cycle (10–15s random, recursive setTimeout) ───────
      function scheduleNext() {
        if (!el.isConnected) return;
        if (timer) {
          var idx = takeoverTimers.indexOf(timer);
          if (idx >= 0) takeoverTimers.splice(idx, 1);
        }
        el.dataset.dynamicStatusCurrent = pickMessage(el.dataset.dynamicStatusCurrent, currentLang);
        timer = setTimeout(scheduleNext, 10000 + Math.random() * 5000);
        takeoverTimers.push(timer);
      }
      timer = setTimeout(scheduleNext, 10000 + Math.random() * 5000);
      takeoverTimers.push(timer);
    }

    // ── Root observer ───────────────────────────────────────────────────

    var rootObserver = null;
    var trackedElements = new WeakSet();

    function scanElement(node) {
      if (isTurnStatusElement(node) && !trackedElements.has(node)) {
        trackedElements.add(node);
        takeoverTurnStatus(node);
      }
      if (node.querySelectorAll) {
        var candidates = node.querySelectorAll(
          '[role="status"][aria-live="polite"]'
        );
        for (var i = 0; i < candidates.length; i++) {
          if (isTurnStatusElement(candidates[i]) && !trackedElements.has(candidates[i])) {
            trackedElements.add(candidates[i]);
            takeoverTurnStatus(candidates[i]);
          }
        }
      }
    }

    function startObserving() {
      if (rootObserver) return;

      rootObserver = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var added = mutations[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            if (added[j] instanceof HTMLElement) {
              scanElement(added[j]);
            }
          }
        }
      });

      rootObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });

      var existing = document.querySelectorAll(
        '[role="status"][aria-live="polite"]'
      );
      for (var k = 0; k < existing.length; k++) {
        if (isTurnStatusElement(existing[k]) && !trackedElements.has(existing[k])) {
          trackedElements.add(existing[k]);
          takeoverTurnStatus(existing[k]);
        }
      }
    }

    function stopObserving() {
      if (rootObserver) {
        rootObserver.disconnect();
        rootObserver = null;
      }
      trackedElements = new WeakSet();
      for (var i = 0; i < takeoverTimers.length; i++) {
        clearTimeout(takeoverTimers[i]);
      }
      takeoverTimers = [];
    }

    // ── Refresh all active TurnStatus elements when language changes ──

    function refreshAllTurnStatus() {
      var els = document.querySelectorAll('[data-dynamic-status-active="true"]');
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (!el.isConnected) continue;
        // Pick a fresh quote in the new language, avoiding the current one
        var avoid = el.dataset.dynamicStatusCurrent || "";
        el.dataset.dynamicStatusCurrent = pickMessage(avoid, currentLang);
        // Immediately update the visible text node (spinner render will keep it)
        var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        var node = walker.nextNode();
        if (node) {
          var prefix = node.textContent.match(/^.\s/);
          node.textContent = (prefix ? prefix[0] : "⠋ ") + el.dataset.dynamicStatusCurrent;
        }
      }
    }

    // ── Plugin registration ─────────────────────────────────────────────

    var inject = [
      "slots",
      "locale",
      "connection",
    ];

    function apply(ctx) {
      // ── Follow DSH language setting ───────────────────────────────────
      function updateLang() {
        var lang = "zh";
        try {
          var locale = ctx.get("locale");
          console.log("[dsh-dynamic-status] ctx.get('locale') =", locale);
          if (locale) {
            var snapshot = locale.getLocale();
            console.log("[dsh-dynamic-status] locale.getLocale() =", JSON.stringify(snapshot));
            if (snapshot && snapshot.active === "en") lang = "en";
          }
        } catch (e) {
          console.log("[dsh-dynamic-status] ctx.get('locale') failed:", e.message);
        }
        // Extra fallback: check <html lang="...">
        if (lang === "zh" && typeof document !== "undefined") {
          var htmlLang = document.documentElement.getAttribute("lang");
          console.log("[dsh-dynamic-status] html lang attr =", htmlLang);
          if (htmlLang && htmlLang.toLowerCase().indexOf("en") === 0) lang = "en";
        }
        console.log("[dsh-dynamic-status] resolved lang =", lang);
        var changed = lang !== currentLang;
        currentLang = lang;
        if (changed) refreshAllTurnStatus();
      }
      updateLang();
      var unsubscribe;
      try {
        var locale = ctx.get("locale");
        console.log("[dsh-dynamic-status] subscribe: ctx.get('locale') =", locale);
        if (locale) {
          unsubscribe = locale.subscribe(function () {
            console.log("[dsh-dynamic-status] locale subscribe fired");
            updateLang();
          });
        }
      } catch (e) {
        console.log("[dsh-dynamic-status] subscribe setup failed:", e.message);
      }

      // Also watch <html lang> attribute changes (belt and suspenders)
      var langObserver;
      if (typeof document !== "undefined" && document.documentElement) {
        langObserver = new MutationObserver(function () {
          var lang = document.documentElement.getAttribute("lang") || "";
          if (lang.indexOf("en") === 0 && currentLang !== "en") {
            console.log("[dsh-dynamic-status] lang attr changed to", lang, "→ en");
            currentLang = "en";
            refreshAllTurnStatus();
          } else if (lang.indexOf("en") !== 0 && currentLang !== "zh") {
            console.log("[dsh-dynamic-status] lang attr changed to", lang, "→ zh");
            currentLang = "zh";
            refreshAllTurnStatus();
          }
        });
        langObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["lang"],
        });
      }

      // ── Watch DSH dark/light theme changes ───────────────────────────────
      var darkThemeObserver;
      if (typeof document !== "undefined" && document.body) {
        var darkThemeHandler = function () {
          var els = document.querySelectorAll('[data-dynamic-status-active="true"]');
          var newColor = currentColor();
          for (var i = 0; i < els.length; i++) {
            els[i].style.setProperty("color", newColor, "important");
            els[i].style.setProperty("-webkit-text-fill-color", newColor, "important");
          }
        };
        darkThemeObserver = new MutationObserver(darkThemeHandler);
        darkThemeObserver.observe(document.body, {
          attributes: true,
          attributeFilter: ["data-ds-dark-theme"],
        });
      }

      var dispose = ctx.effect(function () {
        var id = setTimeout(startObserving, 500);
        return function () {
          clearTimeout(id);
          if (unsubscribe) unsubscribe();
          if (langObserver) langObserver.disconnect();
          if (darkThemeObserver) darkThemeObserver.disconnect();
          stopObserving();
        };
      }, "dynamic-status: dom observer");
    }

    // ── Exports ─────────────────────────────────────────────────────────

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  },
});